import React, { Key } from "react";
import _ from 'lodash';


import { Form, Table, Tag, Space, Button } from 'antd';
import ProTable, { EditableProTable, ProColumns } from '@ant-design/pro-table';
import {InputField, OutputField, getFieldValueType} from '../'
import Field from './field/Field'


export class DataTable extends React.Component<any> {
  static defaultProps = {
      size: 'small',
      editable: false,
      data: [],
  }

  state = {
    loading: true, 
    selectedRowKeys: [],
    tableColumns: [],
  }

  constructor(props:any) {
    super(props);
  }

  componentDidMount() {
    this.setState({ loading: true });

    const tableColumns = this.getTableColumns(this.props.columns)
    this.setState({
      tableColumns: tableColumns
    });

    this.setState({ loading: false });
  }

  onSelectChange = (selectedRowKeys:any) => {
    this.setState({ selectedRowKeys });
  };

  
  editableConfig:any = {
    type: 'multiple',
    editableKeys: this.state["editableKeys"],
    actionRender: (row:any, config:any, defaultDoms:any) => {
      return [defaultDoms.delete];
    },
    onSave: async () => {
    },
    onValuesChange: (record:any, recordList:any) => {
      // this.setState({dataSource: recordList});
    },
    onChange: (editableKeys: any, editableRows: any) => {
    }
  }

  toolBarRender = () => {
    return ([
      <Button
        type="primary"
        key="save"
        onClick={() => {
          // dataSource 就是当前数据，可以调用 api 将其保存
          console.log(this.state);
        }}
      >
        保存数据
      </Button>,
    ])
  }

  getTableColumns = (columns:any)=> {

    const tableColumns:any = [];
    _.each(columns, (col:any) => {
        const proColumn: ProColumns = {
          title: col.label,
          key: col.fieldName,
          dataIndex: col.fieldName,
          valueType: col.valueType,
          // ellipsis: true, 
          editable: (text:any, record:any, index:any, ...rest:any) => {
            return !!col.editable
          },
          renderFormItem: (item:any, { type, isEditable, defaultRender, ...rest }:any, form) => {
            const {valueType} = item
            const fieldProps = {
              valueType,
              fieldProps: {
                allowClear: false,
              },
              mode: isEditable?'edit':'read'
            }
            return (<Field {...fieldProps}/>)
          },
          render: (dom:any, record:any, _:any, action:any) => {
            return <Field inlineIconOpacity={0} text={dom} mode='read' onEdit={ () => {
                action.startEditable?.(record.id);
            }}/>
          },
          // renderText: (dom:any, record:any, _:any, action:any) => {
          //   console.log(dom)
          //   return (<span>{dom}</span>)
          // }
        }
        tableColumns.push(proColumn)
    });
    return tableColumns;

  }

  render() {
    const {columns, data, size, ...rest} = this.props
    const {tableColumns} = this.state

    const tableConfig = {
      rowKey: "id",
      headerTitle: "可编辑表格",
      rowSelection: {},
      columns: tableColumns,
      // defaultData={data}
      toolBarRender: this.toolBarRender,
      ...rest
    }

    if (this.props.editable)
      tableConfig['editable'] = this.editableConfig;
    else
      tableConfig['editable'] = false;
    
    if (this.props.editable) {
      return <EditableProTable {...tableConfig}/>
    } else {
      return <EditableProTable {...tableConfig}/>
    }
  }
}