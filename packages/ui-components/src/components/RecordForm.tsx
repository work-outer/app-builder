
import React from "react";
import { SteedosClient }  from '@steedos/client';
import data from '../../stories/account.json'
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
  componentDidMount = () => {
    const fields =  data.fields;
    console.log('res.fields---', fields);
    this.setState({fields})
  }

  render() {
    const {objectApiName, recordId, children, ...rest} = this.props
    const url = `/api/bootstrap/wspdRw3z3gqkWBWWF/accounts`;
    const res = steedosClient.doFetch(url).then((data:any) => {
      console.log('data-----', data);
      return data || {}
    })
    
    
    const fields =  data.fields;
    const keys =  _.keys(fields);
    const datas = [];
    for(const k in keys ){
      const field = fields[keys[k]];
      datas.push({
        name: field.name,
        type: field.type,
        label: field.label
      });
    }
    return (
      <ProForm>
          {datas.map((d:any) => (
            <InputField 
                 fieldName={d.name}
                 type={d.type}
                 label={d.label}
              />
          ))}
      </ProForm>
    )
  }
}
