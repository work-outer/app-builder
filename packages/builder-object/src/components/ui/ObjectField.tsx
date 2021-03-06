import React, { useContext } from "react";
import ProField from '@ant-design/pro-field';
import _ from 'lodash';
import { useQuery } from "react-query";
import { ObjectContext } from "../";

export type ObjectFieldProps = {
  objectApiName: string,
  fieldName: string,
  required: boolean,
  readonly: boolean
}

export function ObjectField(props: ObjectFieldProps) {
  const objectContext = useContext(ObjectContext);

  const { objectApiName, fieldName, required, readonly } = props
  
  if (!objectApiName || !fieldName) 
    return (<div>请输入对象名和字段名</div>)

  console.log("=ObjectField===objectApiName, fieldName===", objectApiName, fieldName);
  const { 
    isLoading, 
    error, 
    data, 
    isFetching 
  } = useQuery(objectApiName, async () => {
    return await objectContext.requestObject(objectApiName);
  });

  const objectSchema:any = data
  console.log("==requestObject==data===", data);

  if (!objectSchema) 
    return (<div>Loading...</div>)
  
  //TODO  fields['name', 'type']不为空
  
  const field:any = _.find(objectSchema.fields, (field, key)=>{
    return fieldName === key;
  })
  console.log("==requestObject==field===", field);
  if(!field){
    return (<div>{`对象${objectApiName}上未定义字段${fieldName}`}</div>)
  }

  // 从对象定义中生成字段信息。
  const fieldType: string = field.type;//根据objectApiName及fieldName算出type值
  let formFieldProps: any = {
    name: fieldName, 
    mode: "edit",
    label:"名称",
    placeholder:"aa"
  }

  switch (fieldType) {
    case 'url':
      formFieldProps.valueType = 'href';
      break;
    case 'currency':
      formFieldProps.valueType = 'money';
      break;
    case 'autonumber':
      formFieldProps.valueType = 'index';
      break;
    case 'datetime':
      formFieldProps.valueType = 'dateTime';
      break;
    case 'boolean':
      formFieldProps.valueType = 'switch';
      break;
    case 'number':
      formFieldProps.valueType = 'digit';
      break;
    // case 'formula':

    // case 'master_detail':

    // case 'select':{
    //   const valueEnum = {}
    //   props.options.map((option:any) => {
    //     valueEnum[option.value] = option.label;
    //   })
    //   formFieldProps.valueEnum = valueEnum;
    //   break;
    default:
      formFieldProps.valueType = fieldType;
  }
  if (fieldType === 'lookup') {
    return (
      <div></div>
      // <ObjectFieldLookup
      //   {...rest}
      //   label={props.label}
      //   name={fieldName}
      //   referenceTo={reference_to}
      //   enableAdd={true}
      //   placeholder={`请搜索${props.label}...`}
      //   readonly={readonly}
      // />
    )
  } else {
    return (
      <ProField
        {...formFieldProps}
      />
    )
  }
}

export const configObjectField = {
  name: 'Steedos:ObjectField',
  inputs: [
    { name: 'objectApiName', type: 'text', friendlyName: "对象名" },
    { name: 'fieldName', type: 'text', friendlyName: "字段名" },
    { name: 'required', type: 'boolean', friendlyName: "必须" }, 
    { name: 'readonly', type: 'boolean', friendlyName: "只读" }
  ],
  canHaveChildren: false
};