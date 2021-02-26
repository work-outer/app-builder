import React from "react";
import { FieldLookup, InputField } from "..";
import ProForm from '@ant-design/pro-form';
import { SteedosContext } from '..'
import { Col, Space } from "antd";
const _ = require('underscore');


// 通过调用接口获取对象字段列表，并按照 Ant Design ProForm 的规范，自动生成表单
// objectApiName：对象的API名称
// fields: 需要展示的字段数组
export class RecordForm extends React.Component<any, any> {
  static contextType = SteedosContext
  
  state = {
    data: []
  };

  getObjectFields = async (fields:any) => {
    const {objectApiName} = this.props;
    const spaceId = this.context.tenantId;
    const steedosClient = this.context.client;
    const url = `${this.context.rootUrl}/api/bootstrap/${spaceId}/${objectApiName}`;
    const token = `Bearer ${spaceId}, ${this.context.authToken}`
    const res = await steedosClient.doFetch(url,{
      method: 'GET',
      headers: {
          Authorization: token,
          'Content-Type': 'application/json',
      }
    })
   
    const fields_all =  res.fields;
    let keys =  _.keys(fields_all);
    if(fields) keys = fields; 
    const data = [];
    for(const k in keys ){
      const field = fields_all[keys[k]];
      if(typeof field === 'undefined') continue;
      if(field.hidden) continue;
      if(field.type === 'lookup'){
        data.push({
          name: field.name,
          type: field.type,
          label: field.label,
          referenceTo: field.reference_to,
          disabled: field.disabled,
          readonly: field.readonly,
          omit: field.omit,
          placeholder: `请搜索${field.reference_to}...`
        });
      }else{
        data.push({
          name: field.name,
          type: field.type,
          label: field.label,
          required: field.required
        });
      }
    }
    return data;
  }

  componentDidMount = async () => {
    const { fields } = this.props
    const data = await this.getObjectFields(fields) || []
    this.setState({
      data: data
    })
  }

  render() {
    const {objectApiName, recordId, children, ...rest} = this.props
    const { data } =  this.state;
    return (
      <ProForm>
          {data.map((d:any, index) => (
            <InputField
                key={index}
                required={d.required} 
                fieldName={d.name}
                type={d.type}
                label={d.label}
                referenceTo={d.referenceTo}
                placeholder={d.placeholder}
              /> 
          ))}
      </ProForm>
    )
  }
}
