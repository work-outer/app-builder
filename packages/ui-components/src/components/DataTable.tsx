
import React, {FC, forwardRef, Ref} from "react";

import { useTable, useSortBy, Column, ColumnInstance } from 'react-table'
import _ from 'lodash'

type TableProps = any;
type SteedosColumnOptions = {
  fieldName?: string,
  label?: string,
  editable?: boolean,
}
export type SteedosColumn = Column & SteedosColumnOptions

export type SteedosColumnInstance<D extends object = {}> = ColumnInstance & SteedosColumnOptions


// Create an editable cell renderer
const EditableCell = (props:any) => {
  const {
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
  } = props;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e:any) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export const DataTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>)  => {
  const {columns, data, ...rest} = props

  _.each(columns, (col: SteedosColumn) => {
      col.accessor = col.fieldName
      col.Header = col.label
      if (col.editable){
        col.Cell = EditableCell;
      }
  });
  
  const memoColumns:Array<SteedosColumn> = React.useMemo(() => columns, [])
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
                const column:SteedosColumnInstance = cell.column;
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
})