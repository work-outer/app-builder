
import React from "react";
import { FormField, FormFieldProps } from "../form/FormField";

export type ObjectFieldProps = {
  objectApiName: string,
  fieldName: string,
  type: string,
  isRequired: boolean,
  isReadOnly: boolean,
} &  FormFieldProps

export function ObjectField(props:ObjectFieldProps) {

  const { objectApiName, fieldName, type, ...rest} = props

  // 从对象定义中生成字段信息。
  const formFieldProps:FormFieldProps = {
    name: fieldName,
    valueType: type,
  }

  if (type == 'boolean') {
    formFieldProps.valueType = 'switch'
  }

  return (
    <FormField 
      {...rest}
      {...formFieldProps} 
    />
  )
}