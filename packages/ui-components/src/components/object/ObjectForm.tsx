
import React from "react";
import _ from 'lodash';
import { ObjectContext } from ".";
import { useQuery } from "react-query";

import { Form, FormProps } from "../form/Form";
import { ObjectField } from "./ObjectField";

export type ObjectFormProps = {
  objectApiName: string,
  fields?: [], //如果传入字段名数组，只显示指定的字段。如果不传，显示当前用户的简档的页面布局对应的所有字段。
  recordId?: string,
  columns?: number,
  children?: any,
} & FormProps

export function ObjectForm(props:ObjectFormProps) {

  const objectContext = React.useContext(ObjectContext);

  const { objectApiName, ...rest} = props

  const { 
    isLoading, 
    error, 
    data, 
    isFetching 
  } = useQuery(objectApiName, async () => {
    return await objectContext.requestObject(objectApiName);
  });

  const objectSchema:any = data

  if (!objectSchema) 
    return (<div>Loading...</div>)
  
  //TODO  fields['name', 'type']不为空
  
  const fields:any = []
  _.forEach(objectSchema.fields, (field, fieldName)=>{
    if(!field.hidden)
      fields.push(field)
  })
  const formProps = {
    fields: fields
  }

  const initialValues = {} // 根据 recordId 抓数据，生成。
  return (
    <Form 
      formFieldComponent = {ObjectField}
      {...rest}
      {...formProps}
    />
  )
}

export const ObjectFormSettings = { 
  name: 'ObjectForm',
  inputs: [
    { name: 'objectApiName', type: 'text' },
    { name: 'columns', type: 'number' },
    { name: 'onSubmit', type: 'text' }
  ]
};