
import React from "react";
import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import Field from '../field/Field';
import FormFieldObject from './FormFieldObject';

type FormProps = {
  layout: string,
  mode: ProFieldFCMode,
  onInlineEdit?: Function, //用户点击了控件上的编辑按钮，启动表单进入编辑状态。
}

export type FormFieldProps = {
  name: string,
  valueType: any,
  text?: string,
  required?: boolean,
  label?: string,
  help?: string, 
  tooltip?: string, 
  colSpan?: number,
  fieldProps?: any,
  formProps?: FormProps,
  layout?: string,
  mode?: ProFieldFCMode,
  onInlineEdit?: Function,
};

export default function FormField(props:FormFieldProps) {

  const {
    name, 
    valueType, 
    required, 
    colSpan = 1,
    label, 
    help, 
    tooltip, 
    fieldProps = {},
    layout = 'vertical',
    mode = 'read',
    onInlineEdit,
    ...rest
  } = props

  fieldProps.allowClear = false;

  const itemOptions = {
    name, 
    label: label?label:name, 
    help,
    tooltip,
    required,
    labelCol: layout=='horizontal'?{
      flex: '120px'
    }:{},
    wrapperCol: layout=='horizontal'?{
      flex: 'auto'
    }:{},
  }

  const gridItemOptions = {
    key: name,
    colSpan: layout =='inline'? 1: [1, colSpan, colSpan, colSpan],
    borderBottom: mode=='read'?'1px solid #dddbda':''
  }

  if (valueType === 'object') {
    return (
      <GridItem {...gridItemOptions}>
        <ProForm.Item 
          shouldUpdate
          trigger="onValuesChange"
          {...itemOptions}
        >
          <FormFieldObject
            mode={mode}
            {...rest}
          />
        </ProForm.Item>
      </GridItem>
    )
  } else {
    return (
      <GridItem {...gridItemOptions}>
        <ProForm.Item 
            style={{marginBottom: 0}}
            {...itemOptions}>
          <Field 
              mode={mode}
              valueType={valueType}
              fieldProps={fieldProps}
              onInlineEdit={onInlineEdit}
              {...rest}
            />
        </ProForm.Item>
      </GridItem>
    )
  }

}