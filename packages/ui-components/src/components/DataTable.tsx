
import React, {FC, forwardRef, Ref} from "react";

import { useTable, useSortBy, Column } from 'react-table'
import _ from 'lodash'

type TableProps = any;

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export const DataTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>)  => {
  const {columns, data, ...rest} = props


  _.each(columns, (col: any) => {
      col.accessor = col.fieldName
      col.Header = col.label
  });
  
  const memoColumns:Array<Column> = React.useMemo(() => columns, [])
  const memoData:Array<any> = React.useMemo(() => data, [])
  console.log(data)

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns: memoColumns,
        data: memoData,
      },
      useSortBy
    )



  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)
  
  // Render the UI for your table
  return (
    <table {...getTableProps()} className="slds-table slds-table_cell-buffer slds-table_bordered">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="slds-line-height_reset">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
})