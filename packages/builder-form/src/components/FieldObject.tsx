import React from 'react';
import _ from 'lodash';

import { Form as AntForm, InputNumber } from 'antd';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';
// import { Form, createFormField } from './Form';
import ProForm, { ProFormGroup } from '@ant-design/pro-form';

export type FieldObjectProps = {
  name: string,
  label: string,
  value?: object,
  children: any,
  onValuesChange?: Function,
}  //& Omit<FormFieldProps, 'mode'>;

/**
 * 子表单，子表单中的数据以对象格式保存到此字段中。
 *
 * @param FormFieldObjectProps 
 */
export function FieldObject(props: FieldObjectProps) {

  const { 
    name,
    label,
    value, 
    onValuesChange, 
    children,
    ...rest 
  } = props;


  const formItemProps = {
    name,
    label,
  }
  return (
    <ProForm.Item 
      shouldUpdate
      trigger="onValuesChange"
      {...formItemProps}
    >
      <FieldObjectForm>
        {children}
      </FieldObjectForm>
    </ProForm.Item>
  )
};

function FieldObjectForm(props:any){

  const { 
    name,
    label,
    value, 
    onValuesChange, 
    children,
    ...rest 
  } = props;

  const [form] = AntForm.useForm();

  const proFormProps = {
    ...rest,
    name,
    form,
    initialValues: value,
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
}