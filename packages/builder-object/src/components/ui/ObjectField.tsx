import React from "react";
import ProField from '@ant-design/pro-field';

export type ObjectFieldProps = {
  objectApiName: string,
  fieldName: string,
  required: boolean,
  readonly: boolean
}

export function ObjectField(props: ObjectFieldProps) {

  const { objectApiName, fieldName, required, readonly } = props
  // 从对象定义中生成字段信息。
  const type: any = "";//根据objectApiName及fieldName算出type值
  let formFieldProps: any = {
    name: fieldName,
    valueType: type
  }

  switch (type) {
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
  }
  if (type === 'lookup') {
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