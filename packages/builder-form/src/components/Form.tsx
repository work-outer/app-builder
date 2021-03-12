import React, { useContext } from 'react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { Form as AntForm } from 'antd';
import BaseForm from '@ant-design/pro-form/es/BaseForm';
import { BuilderStoreContext } from '@builder.io/react';

// 在 ProForm的基础上扩展属性
// colSpan: 每一列默认占几栅格，总共12栅格
// mode: edit, read

export function Form(props:any) {
  const store = useContext(BuilderStoreContext)
  const {
    mode = 'read', 
    layout = 'horizontal',
    children, 
    ...rest
  } = props


  const { 
    formMode
  } = store.context

  const formProps = {
    mode: formMode ? formMode: mode, 
    layout,
    ...rest,
  }

  console.log(formProps)
  return (
      <BaseForm {...formProps}>
          {children}
      </BaseForm>
  )
}