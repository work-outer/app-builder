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
  
  const { formMode:mode = 'read' } = state;

  const {
    attributes, 
    name, 
    label, 
    tooltip, 
    allowClear,
    placeholder,
    required,
    readonly, 
    valueType, 
    ...rest
  } = props  

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
    valueType,
    placeholder,
    fieldProps: {
      allowClear,
      placeholder,
    },
    onInlineEdit: ()=>{
      store.update((state:any) => {
        state.formMode = 'edit'
      })
    },
    ...rest,
  }


  return (
    <Form.Item {...formItemOptions}>
      {mode === 'read' &&(
        <ProFieldRead {...fieldOptions}/>
      )}
      {mode === 'edit' &&(
        <ProFieldEdit {...fieldOptions}/>
      )}
    </Form.Item>
  )
}

export const ProFieldEdit = (props: any) => {
  const { mode, ...rest } = props
  return <ProField mode='edit' {...rest}/>
}

export const ProFieldRead = (props:any)=> {

  const { readOnly, mode, onInlineEdit, ...rest } = props
  const inlineIconOpacity = 0.4
  const inlineIcon = readOnly?
    <LockIcon color='gray.600' opacity={inlineIconOpacity} _groupHover={{ opacity: 1 }}/>:
    <EditIcon color='gray.600' opacity={inlineIconOpacity} _groupHover={{ opacity: 1 }} 
      onClick={()=> {
          if (onInlineEdit) onInlineEdit()
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
      onDoubleClick={()=> {if (!readOnly && onInlineEdit) onInlineEdit();}}
    >
      <Box flex="1"><ProField mode='read' {...props}/></Box>
      <Box width="16px">{inlineIcon}</Box>
    </Flex>
  )
}