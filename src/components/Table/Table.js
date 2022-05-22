import { Table } from 'antd';
import 'antd/dist/antd.css';
import { POINTS } from '../../content/data';
import style from './Table.module.css';


const { Column, ColumnGroup } = Table;

const data = POINTS;

const TableWrapper = ({ onClick }) => {
  const onClickRow = (record) => {
    return {
      onClick: () => {
        onClick(record)
      }
    };
  };

  return (
    <div className={style.table}>
      <Table
        dataSource={data}
        onRow={onClickRow}
        key={data.id}
      >
        <ColumnGroup title="Названия">
          <Column title="Откуда" dataIndex="startPoint" key="startPoint" />
          <Column title="Куда" dataIndex="endPoint" key="endPoint" />
        </ColumnGroup>
        <ColumnGroup title="Координаты">
          <Column title="Откуда" dataIndex="startCoordinates" key="startCoordinates" />
          <Column title="Куда" dataIndex="endCoordinates" key="endCoordinates" />
        </ColumnGroup>
      </Table>
    </div>
  )
};

export default TableWrapper;