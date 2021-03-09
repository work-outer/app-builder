import React, { useContext } from "react";
// import ProField from '@ant-design/pro-field';
import ProForm, {
  ProFormDatePicker, ProFormDateRangePicker, ProFormDateTimePicker,
  ProFormDateTimeRangePicker, ProFormText, ProFormTextArea, ProFormTimePicker,
  ProFormSwitch, ProFormRate, ProFormUploadDragger, ProFormUploadButton,
  ProFormSlider, ProFormSelect, ProFormDigit, ProFormRadio, ProFormCheckbox
} from '@ant-design/pro-form';
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

  const objectSchema: any = data
  console.log("==requestObject==data===", data);

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
    placeholder: field.help
  }

  switch (fieldType) {
    case 'text':
      return (
        <ProFormText
          {...formFieldProps}
        />
      )
    case 'url':
      // @ant-design/pro-field中并没有url字段组件，需要先参考FieldText实现方式实现一个FieldUrl组件
      // 然后参考@ant-design的ProFormText控件封装上述实现的FieldUrl组件来实现ProFormUrl组件
      // 注：ProFormUrl与FieldUrl组件的区别是前者依赖了后者，前者只是在后者的基础上加上了ProForm中的字段label显示而已
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'currency':
      // formFieldProps.valueType = 'money';
      // 需要参考@ant-design其他ProFormXXX字段控件封装@ant-design/pro-field的FieldMoney组件实现ProFormMoney组件
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'autonumber':
      // formFieldProps.valueType = 'index';
      // 需要参考@ant-design其他ProFormXXX字段控件封装@ant-design/pro-field的FieldIndexColumn组件实现ProFormIndexColumn组件
      return (
        <div>{`未实现字段类型${fieldType}的组件`}</div>
      )
    case 'datetime':
      return (
        <ProFormDateTimePicker
          {...formFieldProps}
        />
      )
    case 'boolean':
      return (
        <ProFormSwitch
          {...formFieldProps}
        />
      )
    case 'number':
      return (
        <ProFormDigit
          {...formFieldProps}
        />
      )
    case 'select':
      // const valueEnum = {}
      // props.options.map((option:any) => {
      //   valueEnum[option.value] = option.label;
      // })
      // formFieldProps.valueEnum = valueEnum;
      return (
        <ProFormSelect
          {...formFieldProps}
        />
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
    <ProFormText
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