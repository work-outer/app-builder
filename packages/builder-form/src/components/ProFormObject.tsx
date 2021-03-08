import React from 'react';
import _ from 'lodash';

import { Form as AntForm, InputNumber } from 'antd';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';
// import { Form, createFormField } from './Form';
import ProForm, { ProFormGroup } from '@ant-design/pro-form';

export type ProFormObjectProps = {
  name: string,
  initialValues?: object,
  children: any,
  onValuesChange?: Function,
}  //& Omit<FormFieldProps, 'mode'>;

/**
 * 子表单，子表单中的数据以对象格式保存到此字段中。
 *
 * @param FormFieldObjectProps 
 */
export function ProFormObject(props: ProFormObjectProps) {

  const { 
    name,
    initialValues, 
    onValuesChange, 
    children,
    ...rest 
  } = props;

  const [form] = AntForm.useForm();

  const proFormProps = {
    ...rest,
    name,
    form,
    initialValues,
    onValuesChange: (changedValues:any, allValues:any)=>{
      if (onValuesChange) onValuesChange(allValues)
    }
  }
  return (
    <ProForm 
      component={false}  //子表单不创建 html form tag
      submitter={false}  //子表单不创建 html form tag
      {...proFormProps}
    >
     {children}
    </ProForm>
  )
};
