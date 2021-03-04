import React from 'react'
import { FormField, FormFieldProps } from '../form/FormField'

export type FieldDatePickerProps = {
    name: string
}& FormFieldProps

export function FieldDatePicker(props:FieldDatePickerProps ) {

    const { name, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='date'
    />
}

export const FieldDatePickerSettings = {
    name:'Steedos:FieldDatePicker',
    inputs:[
        { name: 'name', type: 'string', defaultValue:'NewFieldDatePicker' },
        { name: 'label', type: 'string' },
        // { name: 'placeholder', type: 'string' },
        // { name: 'allowClear', type: 'boolean', defaultValue: true },  // 是否显示清除按钮
        // { name: 'autoFocus', type: 'boolean', defaultValue: false },  // 自动获取焦点
        // { name: 'bordered', type: 'boolean', defaultValue: true },  // 是否有边框
        // { name: 'className', type: 'string' },  // 选择器 className
        // { name: 'disabled', type: 'boolean', defaultValue: false },  // 禁用
        // { name: 'dropdownClassName', type: 'string' },  // 额外的弹出日历 className
        // { name: 'inputReadOnly', type: 'boolean', defaultValue: false },  // 设置输入框为只读（避免在移动设备上打开虚拟键盘）
        // { name: 'mode', type: 'string', enum:['time', 'date', 'month', 'year', 'decade'] },  // 日期面板的状态
        // { name: 'picker', type: 'string', enum:['date', 'week', 'month', 'quarter', 'year'] },  // 设置选择器类型
        // { name: 'size', type: 'string', enum:['large', 'middle', 'small'] },  // 输入框大小，large 高度为 40px，small 为 24px，默认是 32px
    ],
    canHaveChildren: false
}