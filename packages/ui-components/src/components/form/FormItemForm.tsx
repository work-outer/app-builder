import React from 'react';
import _ from 'lodash';

import { Form as AntForm, InputNumber } from 'antd';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';
import Form, { createFormItem } from './Form';
import { ProFormGroup } from '@ant-design/pro-form';
import FormItem, { FormItemProps } from './FormItem';

export type FormItemFormProps = {
  mode?: ProFieldFCMode,
  fields?: FormItemProps[],
  value?: object,
  onValuesChange?: Function,
} & FormItemProps //& Omit<FormItemProps, 'mode'>;

/**
 * 子表单，子表单中的数据以对象格式保存到此字段中。
 *
 * @param FormItemFormProps 
 */
export default function FormItemForm(props: FormItemFormProps) {

  const { 
    value, 
    onValuesChange, 
    fields = [], 
    mode,
    formProps,
    ...rest 
  } = props;

  const [form] = AntForm.useForm();

  const FormItems:any = _.forEach(fields, (field:any) => {
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
      initialValues={value}
      component={false} //子表单不创建 html form tag
      onValuesChange={(changedValues:any, allValues:any)=>{
        if (onValuesChange) onValuesChange(allValues)
      }}
      >
        {
            fields.map((field:FormItemProps) => {
              return createFormItem(field, formProps)
            })
          }
      </Form>
  )
};
