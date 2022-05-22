import axios from 'axios';
import { MapContainer, Marker, Polyline, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import useRequest from '../hooks/useRequest';

const Map = ({ points }) => {
  const toArray = (value) => value.split(',').map(item => Number(item));
  const startCoordinates = toArray(points.startCoordinates);
  const endCoordinates = toArray(points.endCoordinates);

  const [data, loading, error] = useRequest(fetchData);

  function fetchData() {
    return axios.get(`http://router.project-osrm.org/route/v1/driving/${points.startCoordinates};${points.endCoordinates}?overview=false`)
  }

  let waypoints = [];

  if (data) {
    waypoints = data.waypoints.map(item => item.location);
  }

  const polyline = [
    startCoordinates,
    ...waypoints,
    endCoordinates,
  ];

  const options = { color: 'red' };

  return (
    <>
      <MapContainer
        center={startCoordinates}
        zoom={11}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='topright' />
        <Marker position={startCoordinates}>
          <Popup>{points.startPoint}</Popup>
        </Marker>
        <Marker position={endCoordinates}>
          <Popup>{points.endPoint}</Popup>
        </Marker>
        <Polyline pathOptions={options} positions={polyline} />
      </MapContainer>
    </>
  )
}

export default Map;