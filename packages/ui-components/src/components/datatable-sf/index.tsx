
import React, {FC, forwardRef, PropsWithChildren, ReactElement, Ref} from "react";
import _ from 'lodash'
import { useTable, useSortBy, Column, Cell, Row, HeaderProps, CellProps, ColumnInstance, useResizeColumns, useFlexLayout, useBlockLayout, useRowSelect, Hooks } from 'react-table'

import Button from '@salesforce/design-system-react/components/button'; 
import Checkbox from '@salesforce/design-system-react/components/checkbox'; 

import { InputField } from '../..'
import { CustomCellEnhanced } from './CustomCell'

type TableProps = any;
type SteedosColumnOptions = {
  fieldName?: string,
  label?: string,
  editable?: boolean,
}
export type SteedosColumn = Column & SteedosColumnOptions

export type SteedosColumnInstance<D extends object = {}> = ColumnInstance & SteedosColumnOptions


const CustomRowProps = (row:any) => {
  return {
    className: "slds-hint-parent",
  }
}

const CustomHeaderProps = (column:any) => {
  return {
    className: "slds-is-resizable",
    style: {
      // justifyContent: 'flex-start',
      // alignItems: 'flex-start',
      // display: 'flex',
    },
  }
}

const CustomCellProps = (cell:any) => {
  return {
    className: ((!!cell.column["editable"])?"slds-cell-edit":"slds-cell-readonly"),
    // style: {
    //   justifyContent: 'flex-start',
    //   alignItems: 'flex-start',
    //   display: 'flex',
    // },
  }
}

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }: any, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef: any = ref || defaultRef;

  React.useEffect(() => {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
      <Checkbox ref={resolvedRef} {...rest}/>
  )
})


const selectionHook = (hooks: Hooks<any>) => {
  hooks.allColumns.push(columnsX => [
    // Let's make a column for selection
    {
      id: '_selector',
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 35,
      width: 35,
      maxWidth: 35,
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({ getToggleAllRowsSelectedProps }: any) => (
        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
      // getResizerProps: () => {}
    },
    ...columnsX,
  ])
}


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export function DataTableSF<T extends Record<string, unknown>>(props: PropsWithChildren<any>): ReactElement {
  const {columns, ...rest} = props
  const [data, setData] = React.useState(() => props.data);
  const [originalData] = React.useState(props.data)
  const resetData = () => {
    setData(originalData)
  }

  _.each(columns, (col: SteedosColumn) => {
      col.accessor = col.fieldName
      col.Header = col.label
  });
  
  
  const memoColumns:Array<SteedosColumn> = React.useMemo(() => columns, [])
  const memoData:Array<any> = React.useMemo(() => data, [])

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 50, // minWidth is only used as a limit for resizing
      width: 250, // width is used for both the flex-basis and flex-grow
      maxWidth: 1000, // maxWidth is only used as a limit for resizing
      Cell: CustomCellEnhanced,
    }),
    []
  )

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      // resetResizing,
    } = useTable(
      {
        columns: memoColumns,
        data: memoData,
        defaultColumn: defaultColumn,
      },
      useSortBy,
      useResizeColumns,
      useFlexLayout,
      useRowSelect,
      selectionHook,
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  // const firstPageRows = rows.slice(0, 20)
  
  // Render the UI for your table
  return (
    <div className="overflow-scroll w-full">

    <Button label="Reset Data" variant="brand" onClick={resetData}/>
    
    <table {...getTableProps()} className="slds-table slds-table_bordered slds-table_fixed-layout">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="slds-line-height_reset">
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps(CustomHeaderProps(column))}>
                <div {...column.getSortByToggleProps()} className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </div>
                {column.canResize && (
                  <div className="slds-resizable" zindex="100"
                        {...column.getResizerProps()}>
                    <input aria-label="Close Date column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-451" max="1000" min="20" type="range"/>
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider"></span>
                    </span>
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row:any, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps(CustomRowProps(row))}>
              {row.cells.map((cell:any) => {
                const column:SteedosColumnInstance = cell.column;
                return (
                  <td {...cell.getCellProps(CustomCellProps(cell))}
                    >{cell.render('Cell')}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}