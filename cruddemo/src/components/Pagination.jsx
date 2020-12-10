import React, { useMemo } from 'react';
import {useTable,useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table';

import { GlobalFilter,ColumnFilter } from '../components/GlobalFilter';
import { Checkbox} from '../components/Checkbox'

const Pagination=()=>{

    const COLUMNS=[
        {
        Header:"userId",
        accessor:"userId",
        Footer:"userId",
        Filter:ColumnFilter,
        //disableFilters:true
      },
      {
        Header:"id",
        accessor:"id",
        Footer:"id",
        Filter:ColumnFilter
      },
      {
        Header:"title",
        accessor:"title",
        Footer:"title",
        Filter:ColumnFilter
      },
     
    ];

    
    const MOCK_DATA=[
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 2,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "userId": 2,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          "userId": 2,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          "userId": 2,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
          "userId": 2,
          "id": 10,
          "title": "optio molestias id quia eum",
          "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
        {
            "userId": 2,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
          },
          {
            "userId": 2,
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
          },
          {
            "userId": 2,
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
          },
          {
            "userId": 2,
            "id": 9,
            "title": "nesciunt iure omnis dolorem tempora et accusantium",
            "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
          },
          {
            "userId": 2,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
          }];
    




 const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    allColumns,
    getToggleHideAllColumnsProps,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,useFilters,usePagination
  )




const { globalFilter } = state
const {pageIndex,pageSize}=state
console.log("state",state);

    return(
<>
<h1 style={{textAlign:"center",color:"red"}}>Pagination page</h1>
<div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {allColumns.map(column => (
          <div key={column.id}>
            <label>
              <input type='checkbox' {...column.getToggleHiddenProps()} />{' '}
              {column.Header}
            </label>
          </div>
        ))}
        <br />
      </div>

<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    
<table style={{border:"1px solid black"}} {...getTableProps()}>
    
        <thead style={{color:"blue"}}>
          {headerGroups.map(headerGroup => (
            <tr style={{border:"1px solid black"}} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th  style={{border:"1px solid black"}}{...column.getHeaderProps()}>
                    {column.render('Header')}
                        <span>
                            {column.isSorted ? (column.isSortedDesc? 'a':'d'):''}
                        </span>
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                    </th>
                    
              ))} 
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}  >
          {page.map(row => {
            prepareRow(row) 
            return (
              <tr style={{border:"1px solid black"}} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td style={{border:"1px solid black"}} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
             <tfoot>
             <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'firstpage'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'last page'}
        </button>{' '}
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>previos</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage} >next</button>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
          </div>
          <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[5,10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
 
          
        </tfoot>
        </table>


</>
    )
}
export default Pagination;