
import React from "react";
import { FormField, FormFieldProps } from "../form/FormField";

export type ObjectFieldProps = {
  objectApiName: string,
  fieldName: string,
  type: string,
  isRequired: boolean,
  isReadOnly: boolean,
  options: [],
  reference_to: any
} &  FormFieldProps

export function ObjectField(props:ObjectFieldProps) {

  const { objectApiName, fieldName, type, reference_to, ...rest} = props
  // 从对象定义中生成字段信息。
  const formFieldProps:FormFieldProps = {
    name: fieldName,
    valueType: type
  }
  console.log('test__c object field---', props);

  if (type === 'url') {
    formFieldProps.valueType = 'href';
  }

  if (type === 'currency') {
    formFieldProps.valueType = 'money';
  }

  if (type === 'autonumber') {
    formFieldProps.valueType = 'index';
  }

  if (type === 'datetime') {
    formFieldProps.valueType = 'dateTime';
  }

  if (type === 'boolean') {
    formFieldProps.valueType = 'switch';
  }

  if (type === 'select') {
    const valueEnum = {}
    props.options.map((option:any) => {
      valueEnum[option.label] = option.value;
    })
    formFieldProps.valueEnum = valueEnum;
  }

  if (type === 'lookup') {
    formFieldProps.referenceTo = reference_to;
    
  }
  return (
    <FormField 
      {...rest}
      {...formFieldProps} 
    />
  )
}