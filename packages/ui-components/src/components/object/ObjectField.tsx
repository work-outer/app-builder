
import React from "react";
import { FormField, FormFieldProps } from "../form/FormField";

export type ObjectFieldProps = {
  objectApiName: string,
  fieldName: string,
  type: string,
  isRequired: boolean,
  isReadOnly: boolean,
  options: []
} &  FormFieldProps

export function ObjectField(props:ObjectFieldProps) {

  const { objectApiName, fieldName, type, ...rest} = props
  
  // 从对象定义中生成字段信息。
  const formFieldProps:FormFieldProps = {
    name: fieldName,
    valueType: type,
  }
  console.log('this field--', props);
  if (type === 'url') {
    formFieldProps.valueType = 'href';
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

  return (
    <FormField 
      {...rest}
      {...formFieldProps} 
    />
  )
}