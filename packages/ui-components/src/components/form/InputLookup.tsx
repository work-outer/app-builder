import { Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { SteedosContext } from '../..'
const _ = require('underscore');
const Option = Select;

async function searchData(steedosClient:any, value:any, referenceTo:any) {
  const query = `
      {
        ${referenceTo} (filters: [["name", "contains", "${value}"]]){
          _id
          name
          type
          type__label
        }
      }
    `; 
  const res = await steedosClient.graphql.query(query);
  const objectName = _.keys(res.data);
  const objects = res.data[objectName[0]];
  const children = objects.map((item:any) => ({
    id:item._id,
    type: item.type,
    name: item.name,
    label: item.type__label
  }));
  return children;
}
export class InputLookup extends React.Component<any, any> {

  static contextType = SteedosContext

  state = {
    data: [],
    value: undefined,
  };
  
  componentDidMount = () => {
    this.getQueryData()
  }

  getQueryData =() => {
    const steedosClient = this.context.client;
    const { referenceTo } = this.props;
    steedosClient.graphql.query(`
      {
        ${referenceTo} {
          _id
          name
          type
          type__label
        }
      }
    `).then((res:any) => {
        const objectName = _.keys(res.data);
        const objects = res.data[objectName[0]];
        const children = objects.map((item:any) => ({
          id:item._id,
          type: item.type,
          name: item.name,
          label: item.type__label
        }));
        this.setState({data:children});
      });
  };

  handleSearch = (value:any) => {
    const steedosClient = this.context.client;
    const { referenceTo } = this.props;
    if (value) {
      searchData(steedosClient, value, referenceTo).then((data) => {
        this.setState({data});
      });
      
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = (value:any) => {
    if(value !== 'and') 
      this.setState({ value });
  };
  render() {
    const { data, value} = this.state;
    const { name, referenceTo, enableAdd, placeholder} = this.props;
    return (
      <Select
        showSearch
        value={value}
        style={{ width: '50%' }}
        placeholder={placeholder}
        loading={true}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {data.map((d:any) => (
            <Option key={d.id}>{d.name}</Option>
        ))}
        {<Option key={'and'} disabled={true}>
          <Button
              type="dashed"
              style={{ width: '100%', marginTop: '20px' }}
              icon={<PlusOutlined />}
            >
                Add New Object
          </Button>
        </Option>}
      </Select>
    );
  
    }
}
