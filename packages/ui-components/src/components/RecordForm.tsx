import React from "react";
import { FieldLookup, InputField } from "..";
import ProForm from '@ant-design/pro-form';
import { SteedosContext } from '..'
import { Col, Space, Divider, Switch} from "antd";
const _ = require('underscore');


/*
  objectApiName: accounts
  fields?: ['name', 'created'] 
*/
export class RecordForm extends React.Component<any, any> {
  static contextType = SteedosContext
  
  state = {
    conmmonFields: [],
    lookupFields:[],
    booleanFields:[]
  };
  componentDidMount = async () => {
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
   
    const fields =  res.fields;
    const keys =  _.keys(fields);
    const conmmonFields = [];
    const lookupFields = [];
    const booleanFields = [];
    for(const k in keys ){
      const field = fields[keys[k]];
      if(field.hidden) continue;
      if(typeof field.sort_no === 'undefined' && field.type === 'text') continue;
      if(field.type === 'lookup'){
        lookupFields.push({
          name: field.name,
          type: field.type,
          label: field.label,
          referenceTo: field.reference_to,
          disabled: field.disabled,
          readonly: field.readonly,
          omit: field.omit
        });
      }else if(field.type === 'boolean'){
        let checked = false;
        if(field.label.includes('已')){
          checked = true;
        } 
        booleanFields.push({
          name: field.name,
          type: field.type,
          label: field.label,
          checked: checked
        });
      }else{
        conmmonFields.push({
          name: field.name,
          type: field.type,
          label: field.label,
          sort: field.sort_no,
          required: field.required
        });
      }
    }
    const sortedConmmonFields = conmmonFields.sort((a, b) => a.sort >= b.sort ? 1 : -1);
    this.setState({
      conmmonFields: sortedConmmonFields,
      lookupFields: lookupFields,
      booleanFields: booleanFields
    })
  }

  render() {
    const {objectApiName, recordId, children, ...rest} = this.props
    const colSpan = {span:24, xs:24, sm:24, md:12, lg:12};
    const { conmmonFields, lookupFields, booleanFields} =  this.state;
    return (
      <ProForm>
          {conmmonFields.map((d:any, index) => (
            <InputField
                key={index}
                required={d.required} 
                fieldName={d.name}
                type={d.type}
                label={d.label}
                labelCol
              /> 
          ))}
          <Space direction="vertical" size="large" style={{ width: '75%' }}>
            {lookupFields.map((d:any, index) => ( 
              <Col {...colSpan} >
                <FieldLookup 
                  key={index}
                  name={d.name} 
                  referenceTo={d.referenceTo}
                  style={{ width: '100%' }} 
                  enableAdd={true}
                  readonly={d.readonly}
                  disabled={d.disabled}
                  placeholder={`请搜索${d.name}...`} />
              </Col>
            ))}
          </Space>
          <br /><br />
          <Space split={<Divider type="vertical" />} style={{ width: '75%' }}>
            {
              booleanFields.map((d:any, index) => (
                <Switch 
                  key={index} 
                  checkedChildren={`已${d.label.substring(1)}`}
                  unCheckedChildren={`未${d.label.substring(1)}`} 
                  defaultChecked={d.checked}
                />
              ))
            }
          </Space>
          <br /><br />
      </ProForm>
    )
  }
}
