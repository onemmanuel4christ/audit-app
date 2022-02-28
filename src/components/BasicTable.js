import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'


export default function BasicTable() {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])
    
    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({ 
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex } = state
    const firstPageRows = page.slice(0, 10) 
  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map(headerGroup =>(
                    <tr {...headerGroup.getHeaderGroupProps}>
                        {
                            headerGroup.headers.map(column =>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')} {''}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '[Z-A]': '[A-Z]'): ''}
                                    </span>
                                
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...getTableBodyProps}>
            {
                firstPageRows.map(row =>{
                    prepareRow(row)
                    return(
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map(cell =>{
                                return <td {...cell.getCellProps}>
                                    {cell.render('Cell')}
                                </td>
                            }) 
                        }
                       
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
    <div>
        <span>
            Page: {" "}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong> {" "}
        </span>
        <span>
            | Go to page: {" "}
            <input type='number' defaultValue={pageIndex +  1}
            onChange={e => {
        <button onClick={() =>gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }}
            style={{width: '50px'}}
            />
        </span>
        <button onClick={() =>gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() =>gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
    </div>
    </>
  )
}
