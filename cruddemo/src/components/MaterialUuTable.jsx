import React,{useState} from 'react';
import MaterialTable from 'material-table';

const MaterialUuTable=()=>
{
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);

      const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ] );
      const [columns, setColumns] = useState([
        { title: 'Avatar',
        field: 'avatar',
        render: rowData => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src='../logo512.png'
          />
        ),
      },
        { title: 'Name', field: 'name', editable: 'onUpdate',type:'stirng', grouping:false , validate: rowData => rowData.name === '' ?{ isValid: false, helperText: 'Name cannot be empty' } : true},
        { title: 'Surname', field: 'surname', editable: 'never' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]);         





      
    return(
<>
<h1 style={{textAlign:"center",color:"white"}}>UI Table</h1>
<MaterialTable title="Table" data={data}  columns={columns}
 

//options={{filtering:true,
//exportButton:true}}
//options={{
  //  actionsColumnIndex: 0
  //}}
   // other props
 
  options={{
    headerStyle: {
      backgroundColor: "gray",
      color: '#FFF',
      fontSize:"18px"
    }
    ,
    rowStyle: {
      backgroundColor: '#EEE',
    },
    rowStyle: rowData => ({
      backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
    })
  }}
 onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
  onSelectionChange={(rows) => console.log('You selected ' + rows.length + ' rows')}
  cellEditable={{
    cellStyle: {},
    onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
        return new Promise((resolve, reject) => {
            console.log("wor data",rowData,"coloumn def",columnDef);
            setTimeout(resolve, 4000);
        }); 
    }
}}
      editable={{
       
        onBulkUpdate: changes =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        }),

    onRowAdd: newData =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          setData([...data, newData]);
          
          resolve();
        }, 1000)
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataUpdate = [...data];
          
          const index = oldData.tableData.id;
          
          console.log(index);
          dataUpdate[index] = newData;
          setData([...dataUpdate]);

          resolve();
        }, 1000)
      }),
    onRowDelete: oldData =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDelete = [...data];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          setData([...dataDelete]);
          
          resolve()
        }, 1000)
      }),
  }}
  />


</>
    )
}
export default MaterialUuTable;