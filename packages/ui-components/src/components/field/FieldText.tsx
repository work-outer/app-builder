import React from "react";
import { FormField } from "../form/FormField";


export type FieldTextProps = {
    name: string,
    placeholder: string
}

export function FieldText(props:FieldTextProps){

    const {name, placeholder, ...rest}  = props;

    return <FormField
        {...rest}
        name={name}
        valueType='text'
        placeholder={placeholder}        
    />
}

export const FieldTextSettings = {
    name: 'Steedos:FieldText',
    inputs: [
      { name: 'name', type: 'string', defaultValue:'NewFieldText'  },
      { name: 'label', type: 'string' },
      { name: 'placeholder', type: 'string'},
      // { name: 'allowClear', type: 'boolean', defaultValue: false },  // 可以点击清除图标删除内容
      { name: 'bordered', type: 'boolean', defaultValue: true },  // 是否有边框
      { name: 'defaultValue', type: 'string' },  // 输入框默认内容
      { name: 'disabled', type: 'boolean', defaultValue: false },  // 是否禁用状态，默认为 false
      { name: 'id', type: 'string' },  // 输入框的 id
      { name: 'maxLength', type: 'number' },  // 最大长度
      { name: 'size', type: 'string', enum:['large', 'middle', 'small'] },  // 控件大小
    ],
    canHaveChildren: false
  }