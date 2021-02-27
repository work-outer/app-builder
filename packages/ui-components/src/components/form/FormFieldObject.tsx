import React from 'react';
import _ from 'lodash';

import { Form as AntForm, InputNumber } from 'antd';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';
import { Form, createFormField } from './Form';
import { ProFormGroup } from '@ant-design/pro-form';
import { FormField, FormFieldProps } from './FormField';

export type FormFieldObjectProps = {
  mode?: ProFieldFCMode,
  fields?: FormFieldProps[],
  value?: object,
  onValuesChange?: Function,
} & FormFieldProps //& Omit<FormFieldProps, 'mode'>;

/**
 * 子表单，子表单中的数据以对象格式保存到此字段中。
 *
 * @param FormFieldObjectProps 
 */
export function FormFieldObject(props: FormFieldObjectProps) {

  const { 
    value, 
    onValuesChange, 
    fields = [], 
    mode,
    formProps = {
      layout: 'vertical'
    },
    ...rest 
  } = props;

  const [form] = AntForm.useForm();

  const FormFields:any = _.forEach(fields, (field:any) => {
    const f = _.cloneDeep(field)
    f.key = f.name
    return f
  });
  return (
    <Form 
      {...formProps}
      {...rest}
      form={form}
      mode={mode}
      layout={formProps.layout}
      initialValues={value}
      component={false} //子表单不创建 html form tag
      onValuesChange={(changedValues:any, allValues:any)=>{
        if (onValuesChange) onValuesChange(allValues)
      }}
    >
      {
        fields.map((field:FormFieldProps) => {
          return createFormField(field, formProps)
        })
      }
    </Form>
  )
};
