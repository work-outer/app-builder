import React, { useContext } from "react";
import { BuilderStoreContext } from '@builder.io/react';

import { Field } from '@steedos/builder-form/src/index'
import _ from 'lodash';
import { useQuery } from "react-query";
import { ObjectContext } from "../";

export type ObjectFieldProps = {
  objectApiName?: string,
  fieldName: string,
  required: boolean,
  readonly: boolean
}

export function ObjectField(props: ObjectFieldProps) {
  const store = useContext(BuilderStoreContext);
  const objectContext = useContext(ObjectContext);
  const { currentObjectApiName } = store.context;
  const { fieldName, required, readonly } = props
  let objectApiName = props.objectApiName ? props.objectApiName : currentObjectApiName as string;
  if(!objectApiName){
    objectApiName = objectContext.currentObjectApiName as string;
  }
  //console.log("=ObjectField===objectApiName, fieldName===", objectApiName, fieldName);
  // 请注意所有的react use函数必须放在最前面，不可以放在if等判断逻辑后面
  const {
    isLoading,
    error,
    data,
    isFetching
  } = useQuery(objectApiName, async () => {
    return await objectContext.requestObject(objectApiName);
  });

  if (!objectApiName || !fieldName)
    return (<div>请输入字段名</div>)

  const objectSchema: any = data
  //console.log("==requestObject==data===", data);

  if (!objectSchema)
    return (<div>Field Loading...</div>)

  //TODO  fields['name', 'type']不为空

  const field: any = _.find(objectSchema.fields, (field, key) => {
    return fieldName === key;
  })
  console.log("==requestObject==field===", field);
  if (!field) {
    return (<div>{`对象${objectApiName}上未定义字段${fieldName}`}</div>)
  }

  // 从对象定义中生成字段信息。
  const fieldType: string = field.type;//根据objectApiName及fieldName算出type值
  let formFieldProps: any = {
    name: fieldName,
    mode: "edit",
    label: field.label,
    placeholder: field.help,
   // hidden: field.hidden,
    valueType: fieldType,
    required: field.required,
    options: field.options
  }

  // if(formFieldProps.mode == "edit"){

  //   if(field.omit){
  //     formFieldProps.hidden = true
  //   }
  // }else if (formFieldProps.mode == "read"){
    
  //   formFieldProps.readonly = true
  // }

  switch (fieldType) {
    
    case 'datetime':
      formFieldProps.valueType='dateTime';
      break;

    case 'boolean':
      formFieldProps.valueType='switch';
      break;

    case 'number':
      formFieldProps.valueType='digit';
      break;

    case 'select':
      formFieldProps.valueType='select';
      break;

    case 'url':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'currency':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'autonumber':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'lookup':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'formula':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'summary':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'master_detail':
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
  }
  // 默认取ProFormText组件
  return (
    <Field
      {...formFieldProps}
    />
  )
  // if (fieldType === 'lookup') {
  //   return (
  //     <div></div>
  //     // <ObjectFieldLookup
  //     //   {...rest}
  //     //   label={props.label}
  //     //   name={fieldName}
  //     //   referenceTo={reference_to}
  //     //   enableAdd={true}
  //     //   placeholder={`请搜索${props.label}...`}
  //     //   readonly={readonly}
  //     // />
  //   )
  // } else {
  //   return (
  //     <ProField
  //       {...formFieldProps}
  //     />
  //   )
  // }
}