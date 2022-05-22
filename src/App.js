import { useState } from 'react';
import './App.css';
import Map from './components/Map/index';
import Table from './components/Table/index';

function App() {
  const [data, setData] = useState();
  const handleClick = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <Table onClick={handleClick}/>
      {data && <Map points={data}/>}
    </div>
  );
}

export default App;

