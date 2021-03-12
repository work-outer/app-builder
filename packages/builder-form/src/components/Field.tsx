import ProField from "@ant-design/pro-field";
import { Form } from 'antd';
import type { InputProps } from 'antd';

import React, { useContext, useState } from "react";
import { Flex, Box } from "@chakra-ui/layout"
import {EditIcon, LockIcon} from '@chakra-ui/icons'
import { FormContext } from "../providers/FormContext";
import { ProFormDatePicker } from "@ant-design/pro-form";
import createField from '@ant-design/pro-form/es/BaseForm/createField'

import { BuilderStoreContext } from "@builder.io/react";
import { ProFormItemProps } from "@ant-design/pro-form/es/interface";

import './Field.css'

export function Field(props: any) {
  const store = useContext(BuilderStoreContext)
  const { state } = store;
  
  const {
    attributes, 
    // name, 
    // label, 
    // tooltip, 
    // allowClear,
    // placeholder,
    // required,
    readonly, 
    // disabled,
    mode: fieldMode,
    valueType, 
    // type,
    // count,
    // defaultValue,
    // defaultChecked,
    options,
    ...rest
  } = props  

  const { formMode = 'read' } = state;

  const mode = readonly?'read':fieldMode?fieldMode:formMode;

  const formItemProps ={
    ...attributes,
    style: { borderBottom: (mode=='read')?'1px solid #dddbda':''},
  }

  const fieldProps ={
    options
  }

  if (valueType == 'select') {
    fieldProps['showSearch'] = true
    fieldProps['showArrow'] = true
  }

  if (valueType != 'switch') {
    fieldProps['style'] = {width: '100%'}
  }

  const ProFormField = createField<ProFormItemProps<InputProps>>(
    (props: ProFormItemProps<InputProps>) => { 
      return (
        <ProFieldWrap valueType={valueType} fieldProps={props.fieldProps} {...props.proFieldProps} mode={mode} />
      )
    },
    {
      valueType,
    },
  );
  
  return (<ProFormField {...rest} mode={mode} formItemProps={formItemProps} fieldProps={fieldProps} readonly={readonly}/>)
}


export function ProFieldWrap(props:any) {

  const { readonly, mode, ...rest } = props
  
  const proFieldProps = {
    readonly,
    emptyText: '',
    ...rest
  }

  if (!readonly && mode === 'edit')
    return <ProField mode='edit' {...proFieldProps}/>

  const store = useContext(BuilderStoreContext)
  const onInlineEdit = () => {
    store.update((state:any) => {
      state.formMode = 'edit'
    })
  };
  const inlineIconOpacity = 0.4
  const inlineIcon = readonly?
    <LockIcon color='gray.600' opacity={inlineIconOpacity} _groupHover={{ opacity: 1 }}/>:
    <EditIcon color='gray.600' opacity={inlineIconOpacity} _groupHover={{ opacity: 1 }} 
      onClick={()=> {
          onInlineEdit()
      }}
    />

  
  const containerOptions = {
    // borderBottom: (mode=='read')?'1px solid #dddbda':'',
    // pb: 1,
  }

  return (
    <Flex 
      {...containerOptions}
      role="group"
      onDoubleClick={()=> {if (!readonly) onInlineEdit();}}
    >
      <Box flex="1"><ProField mode='read' {...proFieldProps}/></Box>
      <Box width="16px">{inlineIcon}</Box>
    </Flex>
  )
}