import { Select } from 'antd';
import React from 'react';
import { SteedosClient }  from '@steedos/client';

const Option = Select;

let timeout:any;
let currentValue:any;
const steedosClient = new SteedosClient();
steedosClient.setUrl("http://localhost:8080/graphql");
function fetch(value:any, callback:any) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  
  currentValue = value;
  console.log('currentValue--', currentValue);

  function fake() {
    steedosClient.graphql.query(`
        {
          objects (filters: [["label", "contains", "${currentValue}"]]){
            _id
            label
            name
            icon
          }
        }
      `).then((res:any) => {
          console.log('res is ', res);
          if (currentValue === value) {
            const data:any = [];
            res.data.objects.forEach((item:any) => {
              data.push({
                id:item._id,
                icon: item.icon,
                name: item.name,
                label: item.label
              });
            });
            callback(data);
          }
        });
  }

  timeout = setTimeout(fake, 200);
}

export class InputLookup extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  constructor(props:any){
    super(props);
    this.handleSearch;
  }

  handleSearch = (value:any) => {
    console.log('value--->', value)
    if (value) {
      fetch(value, (data:any) => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = (value:any) => {
    console.log('value--->', value)
    this.setState({ value });
  };
  render() {
    //const {style, label, placeholder, ...rest} = this.props;
    const { data, value} = this.state;
    return (
      <Select
        showSearch
        value={value}
        style={{ width: '100%' }}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {data.map((d:any) => (
            <Option>{d.label}</Option>
        ))}
      </Select>
    );
  
    }
}
