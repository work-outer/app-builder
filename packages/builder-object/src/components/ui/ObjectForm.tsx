
import React, { useContext } from "react";
import _ from 'lodash';
import { ObjectContext } from "../";
import { useQuery } from "react-query";

import ProForm from '@ant-design/pro-form';
import { BaseFormProps } from "@ant-design/pro-form/lib/BaseForm";
import type { ProFieldFCMode } from '@ant-design/pro-utils';

export type FormProps<T = Record<string, any>>  = {
  mode?: ProFieldFCMode,
  editable?: boolean,
} & BaseFormProps

export type ObjectFormProps = {
  objectApiName: string,
  recordId?: string,
} & FormProps

export function ObjectForm(props:ObjectFormProps) {

  const objectContext = useContext(ObjectContext);

  const { objectApiName, recordId, mode, editable,  ...rest} = props

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
  
  // const fields:any = []
  // _.forEach(objectSchema.fields, (field, fieldName)=>{
  //   if(!field.hidden)
  //     fields.push(field)
  // })
  // const formProps = {
  //   fields: fields
  // }

  const initialValues = {} // 根据 recordId 抓数据，生成。
  return (
    <ProForm 
      // formFieldComponent = {ObjectField}
      {...rest}
    />
  )
}

export const configObjectForm = {
  name: 'Steedos:ObjectForm',
  inputs: [
    { name: 'objectApiName', type: 'text', friendlyName: "对象名" },
    { name: 'recordId', type: 'text', friendlyName: "记录ID" },
    { name: 'mode', type: 'text', friendlyName: "Mode" }, 
    { name: 'editable', type: 'text', friendlyName: "Editable" }
  ],
  canHaveChildren: true
};
