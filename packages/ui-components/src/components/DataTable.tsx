import React from "react";
import _ from 'lodash'

import { Form, Table, Tag, Space } from 'antd';

import { InputField } from "..";

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: any;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <InputField/>

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export class DataTable extends React.Component<any> {
  static defaultProps = {
      size: 'small',
  }

  state = {
    selectedRowKeys: []
  }
  
  onSelectChange = (selectedRowKeys:any) => {
    this.setState({ selectedRowKeys });
  };

  
  render() {
    const {columns, data, ...rest} = this.props

    const tableColumns:any = [];
    _.each(columns, (col) => {
        tableColumns.push({
          title: col.label,
          key: col.fieldName,
          dataIndex: col.fieldName,
          // render: (value:any)=> (<InputField fieldName={col.fieldName} value={value}/>)
        })
    });

    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
      ],
    };
    return (
      <>
        <Table rowSelection={rowSelection} columns={tableColumns} dataSource={data}
          {...rest}
          >
        </Table>
      </>
    )
  }
}