import React from "react"
import { FormField } from "../form/FormField"


export type FieldSelectProps = {
  name: string,
  valueEnum: any
}

export function FieldSelect(props:FieldSelectProps) {
  const {name, valueEnum, ...rest} = props;
  const options = {};
  if(valueEnum){
    valueEnum.map((option:any) =>{
      options[option.value] = option.label;
    })
  }
  return <FormField 
    {...rest}
    name={name} 
    valueType='select'
    valueEnum={options}
    />
}

export const FieldSelectSettings = {
  name: 'Steedos:FieldSelect',
  inputs: [
    { name: 'name', type: 'string', defaultValue:'NewField'  },
    { name: 'required', type: 'boolean' },
    { name: 'colSpan', type: 'number', defaultValue:'1'},
    { name: 'help', type: 'string' },
    { name: 'tooltip', type: 'string' },
    { name: 'label', type: 'string' },
    { name: 'placeholder', type: 'string' },
    // { name: 'layout', type: 'string', enum: ['horizontal', 'vertical']},
    { name: 'valueEnum',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]},
    { name: 'showSearch', type: 'boolean', defaultValue: false },  // 支持搜索
    // { name: 'allowClear', type: 'boolean', defaultValue: false },  // 支持清除
    // { name: 'autoFocus', type: 'boolean', defaultValue: false },  // 默认获取焦点
    { name: 'bordered', type: 'boolean', defaultValue: true },  // 是否有边框
    // { name: 'defaultActiveFirstOption', type: 'boolean', defaultValue: true },  // 是否默认高亮第一个选项
    { name: 'defaultOpen', type: 'boolean', defaultValue: false },  // 是否默认展开下拉菜单
    // { name: 'defaultValue', type: 'list' },  // 指定默认选中的条目
    // { name: 'disabled', type: 'boolean' },  // 是否禁用
    // { name: 'dropdownClassName', type: 'string' },  // 下拉菜单的 className 属性
    // 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动
    // { name: 'dropdownMatchSelectWidth', type: 'string' },  
    // 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
    { name: 'labelInValue', type: 'boolean', defaultValue: false },  
    // { name: 'virtual', type: 'boolean', defaultValue: true },  // 设置 false 时关闭虚拟滚动
    // { name: 'listHeight', type: 'number', defaultValue: 256 },  // 设置弹窗滚动高度
  ],
  canHaveChildren: false
}