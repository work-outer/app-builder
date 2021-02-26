import React from "react";
import { FieldLookup, InputField } from "..";
import ProForm from '@ant-design/pro-form';
import { SteedosContext } from '..'
import { Col, Space} from "antd";
const _ = require('underscore');

export class RecordForm extends React.Component<any, any> {
  static contextType = SteedosContext
  
  state = {
    conmmonFields: [],
    specialFields:[]
  };
  componentDidMount = async () => {
    const {objectApiName, spaceId } = this.props;
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
    const conmmonFields = [];
    const specialFields = [];
    for(const k in keys ){
      const field = fields[keys[k]];
      if(field.hidden) continue;
      if(typeof field.sort_no === 'undefined' && field.type !== 'lookup') continue;
      if(field.type === 'lookup'){
        specialFields.push({
          name: field.name,
          type: field.type,
          label: field.label,
          referenceTo: field.reference_to,
          disabled: field.disabled,
          readonly: field.readonly,
          omit: field.omit
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
      specialFields: specialFields
    })
  }

  render() {
    const {objectApiName, recordId, children, ...rest} = this.props
    const colSpan = {span:24, xs:24, sm:24, md:12, lg:12};
    const conmmonFields =  this.state.conmmonFields;
    const specialFields =  this.state.specialFields;
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
            {specialFields.map((d:any, index) => ( 
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
      </ProForm>
    )
  }
}
