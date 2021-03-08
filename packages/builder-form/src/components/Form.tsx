import React from 'react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { Form as AntForm } from 'antd';
import ProForm from '@ant-design/pro-form';

// 在 ProForm的基础上扩展属性
// colSpan: 每一列默认占几栅格，总共12栅格
// mode: edit, read

export function Form(props:any) {
  const {columns, mode, children, ...rest} = props

  const [form] = AntForm.useForm();

  const boxOptions = {
    templateColumns: [`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`],
    gap: 4,
  }

  const proFormProps = {
    form,
    ...rest
  }


  if (columns)
    return (
      <ProForm {...proFormProps}>
        <Grid {...boxOptions}>
          {children}
        </Grid>
      </ProForm>
    )
  else
    return (
      <ProForm {...proFormProps}>
          {children}
      </ProForm>
    )
}