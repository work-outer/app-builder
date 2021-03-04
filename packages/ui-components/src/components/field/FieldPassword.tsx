import React from 'react'
import { FormField } from '../form/FormField'



export type FieldPasswordProps = {
    name: string,
    placeholder: string
}

export function FieldPassword(props:FieldPasswordProps ) {

    const { name, placeholder, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='password'
        placeholder={placeholder}
    />
}

export const FieldPasswordSettings = {
    name:'Steedos:FieldPassword',
    inputs:[
        { name: 'name', type: 'text', defaultValue:'NewFieldPassword'},
        { name: 'label', type: 'string' },
        // { name: 'allowClear', type: 'boolean', defaultValue: false },  // 可以点击清除图标删除内容
        { name: 'bordered', type: 'boolean', defaultValue: true },  // 是否有边框
        { name: 'disabled', type: 'boolean', defaultValue: false },  // 是否禁用状态，默认为 false
        { name: 'id', type: 'string' },  // 输入框的 id
        { name: 'maxLength', type: 'number' },  // 最大长度
        { name: 'size', type: 'string', enum:['large', 'middle', 'small'] },  // 控件大小
    ],
    canHaveChildren: false
}