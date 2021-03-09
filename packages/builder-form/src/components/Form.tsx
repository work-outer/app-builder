import React, { useContext } from 'react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { Form as AntForm } from 'antd';
import ProForm from '@ant-design/pro-form';
import { BuilderStoreContext } from '@builder.io/react';

// 在 ProForm的基础上扩展属性
// colSpan: 每一列默认占几栅格，总共12栅格
// mode: edit, read

export function Form(props:any) {
  const store = useContext(BuilderStoreContext)
  const {mode, children, ...rest} = props
  const [form] = AntForm.useForm();


  const { formOptions } = store.context
  const proFormProps = {
    form,
    ...rest,
    ...formOptions,
  }

  return (
      <ProForm {...proFormProps}>
          {children}
      </ProForm>
  )
}