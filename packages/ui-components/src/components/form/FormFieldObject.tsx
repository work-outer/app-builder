import React from 'react';
import _ from 'lodash';

import { Form as AntForm, InputNumber } from 'antd';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';
import Form from './Form';
import { ProFormGroup } from '@ant-design/pro-form';
import FormField, { FormFieldProps } from './FormField';

export type FormFieldObjectProps = {
  mode: string,
  fields?: string[],
  value?: object,
  onValuesChange?: Function
};

/**
 * 数字组件
 *
 * @param FieldObjectProps {
 *     text: number;
 */
export default function FormFieldObject(props: FormFieldObjectProps) {

  const { mode, value, onValuesChange, fields = [], ...rest } = props;
  const formFields:any = _.forEach(fields, (field:any) => {
    const f = _.cloneDeep(field)
    f.key = f.name
    return f
  });
  return (
    <Form 
      collapsible={true}
      initialValues={value}
      onValuesChange={(changedValues:any, allValues:any)=>{
        onValuesChange(allValues)
      }}
      {...rest}>
        {renderFields(formFields, 
          {
            layout:'vertical',
            mode,
          })}
      </Form>
  )
};

const renderFields = (fields:[], defaultFieldProps:any) => {

  const {
    name,
    valueType,
    onInlineEdit,
    mode,
    ...rest
  } = defaultFieldProps

  return fields.map((field:FormFieldProps) => {
    
    const fieldOptions = _.defaultsDeep(_.cloneDeep(field), rest)

    return (
      <FormField 
        name={name}
        valueType={valueType}
        key={name}
        mode={mode}
        onInlineEdit={onInlineEdit} {...fieldOptions} 
      />
    )

  })
}