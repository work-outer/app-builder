import React, { Key } from "react";
import _ from 'lodash';


import { Form, Table, Tag, Space, Button } from 'antd';
import { EditableProTable } from '@ant-design/pro-table';

import '@ant-design/pro-table/dist/table.css'

import { InputField, OutputField } from "..";

export class DataTable extends React.Component<any> {
  static defaultProps = {
      size: 'small',
      data: [],
  }

  state = {
    loading: true, 
    selectedRowKeys: [],
    datasource: [],
    tableColumns: [],
  }

  constructor(props:any) {
    super(props);

  }
  componentDidMount() {
    this.setState({ loading: true });

    const tableColumns = this.getTableColumns(this.props.columns)
    this.setState({
      datasource: this.props.data,
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
      this.setState({datasource: recordList});
    },
    onChange: (editableKeys: any, editableRows: any) => {
    }
  }

  toolBarRender = () => {
    const {datasource} = this.state
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
    _.each(columns, (col) => {
        tableColumns.push({
          title: col.label,
          key: col.fieldName,
          dataIndex: col.fieldName,
          // ellipsis: true, 
          editable: (text:any, record:any, index:any, ...rest:any) => {
            return !!col.editable
          },
          renderFormItem: (text:any, record:any, _:any, action:any) => {
            return (
              <InputField 
                fieldName={col.fieldName} 
                value={text}
              />
            )
          },
          render: (text:any, record:any, _:any, action:any) => {
            return (
              <OutputField 
                fieldName={col.fieldName} 
                value={text} 
                onClick={() => {
                  action.startEditable?.(record.id);
                }}/>
            )
          }
        })
    });
    return tableColumns;

  }

  render() {
    const {columns, data, ...rest} = this.props
    const {tableColumns} = this.state
    
    return (
      <>
        <EditableProTable 
          rowKey="id"
          headerTitle="可编辑表格"
          rowSelection={{}} 
          columns={tableColumns} 
          // defaultData={data}
          editable={this.editableConfig}
          toolBarRender={this.toolBarRender}
          {...rest}
          >
        </EditableProTable>
      </>
    )
  }
}