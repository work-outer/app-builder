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
  const {columns, mode, children, ...rest} = props
  const [form] = AntForm.useForm();

  const boxOptions = {
    templateColumns: [`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`],
    gap: 4,
  }

  const GridComponent = columns==9?Grid:React.Fragment
  const {formOptions} = store.context
  const proFormProps = {
    form,
    ...rest,
    ...formOptions,
  }

  return (
      <ProForm {...proFormProps}>
        <Grid {...boxOptions}>
          {children}
        </Grid>
      </ProForm>
  )
}