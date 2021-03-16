
import React, { useContext } from "react";
import _ from 'lodash';
import { BuilderStoreContext } from '@builder.io/react';
import { ObjectContext } from "../";
import { useQuery } from "react-query";

import { Form } from '@steedos/builder-form/src/index';
import { BaseFormProps } from "@ant-design/pro-form/lib/BaseForm";
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { registerObjectFieldComponent } from "..";
import { observer } from "mobx-react-lite"
import { FormModel, store } from '@steedos/builder-store';

export type FormProps<T = Record<string, any>>  = {
  mode?: ProFieldFCMode,
  editable?: boolean,
} & BaseFormProps

export type ObjectFormProps = {
  objectApiName?: string,
  recordId?: string,
} & FormProps

export const ObjectForm = observer((props:ObjectFormProps) => {
// export function ObjectForm(props:ObjectFormProps) {
  // const store = useContext(BuilderStoreContext);

  // const { editable, name: formId = 'default', ...rest} = props;
  const {
    name: formId = 'default',
    mode = 'edit', 
    layout = 'horizontal',
    ...rest
  } = props;
  if (!store.forms[formId])
    store.forms[formId] = FormModel.create({id: formId, mode});
  console.log("=ObjectForm===store===", store);
  const objectContext = useContext(ObjectContext);
  let { currentObjectApiName, currentRecordId } = store;
  if(!currentObjectApiName){
    currentObjectApiName = objectContext.currentObjectApiName;
  }
  if(!currentRecordId){
    currentRecordId = objectContext.currentRecordId;
  }

  const objectApiName = props.objectApiName ? props.objectApiName : currentObjectApiName as string;
  const recordId = props.recordId ? props.recordId : currentRecordId;
  console.log("=ObjectForm===objectApiName, recordId===", objectApiName, recordId);
  const { 
    isLoading, 
    error, 
    data, 
    isFetching 
  } = useQuery(objectApiName, async () => {
    return await objectContext.requestObject(objectApiName as string);
  });
  const objectSchema:any = data
  //console.log("==requestObject==data===", data);

  if (!objectSchema) 
    return (<div>Object Loading...</div>)

  registerObjectFieldComponent(_.keys(objectSchema.fields));
  
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
    <Form 
      // formFieldComponent = {ObjectField}
      mode={mode}
      layout={layout}
      {...rest}
    />
  )
});