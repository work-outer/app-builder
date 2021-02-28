
import React from "react";
import { FormField, FormFieldProps } from "../form/FormField";

export type ObjectFieldProps = {
  objectApiName: string,
  fieldName: string,
  type: string,
} &  FormFieldProps

export function ObjectField(props:ObjectFieldProps) {

  const { objectApiName, fieldName, type, ...rest} = props

  // 从对象定义中生成字段信息。
  const fieldProps:FormFieldProps = {
    name: fieldName,
    valueType: type
  }

  return (
    <FormField 
      {...rest}
      {...fieldProps} 
    />
  )
}