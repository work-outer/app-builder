import ProField from "@ant-design/pro-field";
import { Form } from 'antd';

import React, { useContext, useState } from "react";
import { Flex, Box } from "@chakra-ui/layout"
import {EditIcon, LockIcon} from '@chakra-ui/icons'
import { FormContext } from "../providers/FormContext";
import { ProFormDatePicker } from "@ant-design/pro-form";
import { BuilderStoreContext } from "@builder.io/react";

export function Field(props: any) {
  const store = useContext(BuilderStoreContext)
  const { state } = store;
  
  const {
    attributes, 
    name, 
    label, 
    tooltip, 
    allowClear,
    placeholder,
    required,
    readonly, 
    disabled,
    valueType, 
    type,
    count,
    defaultValue,
    defaultChecked,
    options,
    ...rest
  } = props  

  const { formMode = 'read' } = state;

  const mode = readonly?'read':formMode;

  const formItemOptions = {
    name,
    label,
    tooltip,
    required,
    // shouldUpdate: true,
    valuePropName: 'value',
    ...attributes,
  }

  const fieldOptions = {
    name,
    mode,
    readonly,
    valueType,
    placeholder,
    fieldProps: {
      disabled,
      allowClear,
      placeholder,
      type,
      count,
      defaultValue,
      defaultChecked,
      options,
    },
    ...rest,
  }


  return (
    <Form.Item shouldUpdate {...formItemOptions}>
      {mode === 'read' &&(
        <ProFieldRead {...fieldOptions}/>
      )}
      {mode === 'edit' &&(
        <ProFieldEdit {...fieldOptions}/>
      )}
    </Form.Item>
  )
}

export function ProFieldEdit (props: any) {
  const { mode, ...rest } = props
  return <ProField mode='edit' {...rest}/>
}

export function ProFieldRead(props:any) {

  const store = useContext(BuilderStoreContext)
  const onInlineEdit = () => {
    store.update((state:any) => {
      state.formMode = 'edit'
    })
  };
  const { readonly, mode, ...rest } = props
  const inlineIconOpacity = 0.4
  const inlineIcon = readonly?
    <LockIcon color='gray.600' opacity={inlineIconOpacity} _groupHover={{ opacity: 1 }}/>:
    <EditIcon color='gray.600' opacity={inlineIconOpacity} _groupHover={{ opacity: 1 }} 
      onClick={()=> {
          onInlineEdit()
      }}
    />

  
  const containerOptions = {
    borderBottom: (mode=='read')?'1px solid #dddbda':'',
    pb: 1,
  }

  return (
    <Flex 
      {...containerOptions}
      role="group"
      onDoubleClick={()=> {if (!readonly) onInlineEdit();}}
    >
      <Box flex="1"><ProField mode='read' {...props}/></Box>
      <Box width="16px">{inlineIcon}</Box>
    </Flex>
  )
}