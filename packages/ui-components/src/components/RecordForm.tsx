
import React from "react";
import { InputField } from "..";
import ProForm from '@ant-design/pro-form';
import { SteedosContext } from '..'
const _ = require('underscore');

export class RecordForm extends React.Component<any, any> {
  static contextType = SteedosContext
  
  state = {
    data: []
  };
  componentDidMount = async () => {
    const {objectApiName, spaceId } = this.props;
    console.log('RecordForm--this.context---', this.context);
    const steedosClient = this.context.client;
    const url = `${this.context.rootUrl}/api/bootstrap/${spaceId}/${objectApiName}`;
    const token = `Bearer C6tdnBaPhEFomAWE7, ${this.context.authToken}`
    const res = await steedosClient.doFetch(url,{
      method: 'GET',
      headers: {
          Authorization: token,
          'Content-Type': 'application/json',
      }
    })
   
    const fields =  res.fields;
    const keys =  _.keys(fields);
    const datas = [];
    for(const k in keys ){
      const field = fields[keys[k]];
      if(field.hidden) continue;
      if(typeof field.sort_no === 'undefined') continue;
      datas.push({
        name: field.name,
        type: field.type,
        label: field.label,
        sort: field.sort_no
      });
    }
    const sortedData = datas.sort((a, b) => a.sort >= b.sort ? 1 : -1);
    this.setState({data:sortedData})
  }

  render() {
    console.log('this.context--render-', this.context)
    const {objectApiName, recordId, children, ...rest} = this.props
    const fields =  this.state.data;
    return (
      <ProForm>
          {fields.map((d:any, index) => (
            <InputField
                key={index} 
                fieldName={d.name}
                type={d.type}
                label={d.label}
              />
          ))}
      </ProForm>
    )
  }
}
