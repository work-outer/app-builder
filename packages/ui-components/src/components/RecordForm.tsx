
import React from "react";
import { SteedosClient }  from '@steedos/client';
import { InputField } from "..";
import ProForm from '@ant-design/pro-form';
const _ =require('underscore');


// https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form/documentation
const steedosClient = new SteedosClient();
export class RecordForm extends React.Component<any> {
  static defaultProps = {
    
  }
  state = {
    data: []
  };
  componentDidMount = async () => {
    const {objectApiName, recordId } = this.props
    const url = `http://localhost:8080/api/bootstrap/${recordId}/${objectApiName}`;
    const token = `Bearer C6tdnBaPhEFomAWE7,1d48e7c566307d9a80156811c3cf91cead17e0ef04eb4eba8d752e660bbdd580ce00bd0dbd643d2c25f877`
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
