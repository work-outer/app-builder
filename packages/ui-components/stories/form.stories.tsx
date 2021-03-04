

import { ProFormSelect } from "@ant-design/pro-form"
import * as React from "react"
import { 
  FieldSelect,
  Form,
  FormField
} from "../src"

export default {
  title: "Form",
}

const fields = [{
  name: 'name',
  valueType: 'text',
  colSpan: 2
},
{
  name: 'object',
  valueType: 'object',
  colSpan: 2,
  columns: 4,
  fields: [{
    name: 'o1',
    valueType: 'switch'
  },{
    name: 'o2',
    valueType: 'text',
  }]
},
{
  name: 'email',
  label: 'Email',
  valueType: 'email',
  readOnly: true,
  colSpan: 1
},{
  name: 'website',
  valueType: 'href',
  colSpan: 1
},{
  name: 'birthday',
  valueType: 'date',
},{
  name: 'active',
  label: 'Active',
  valueType: 'switch'
},{
  name: 'created',
  valueType: 'dateTime',
},{
  name: 'select',
  valueType: 'select',
  valueEnum: {
    open: '未解决',
    closed: '已解决',
  }
}]

const initialValues = {
  name: 'Hello World',
  active: true,
  created: new Date(),
  birthday: new Date(),
  website: 'https://www.steedos.com',
  email: 'support@steedos.com',
  object: {
    o1: false,
    o2: 'Hello Object.'
  }
}

const options=[
  { label: '全部', value: 'all' },
  { label: '未解决', value: 'open' },
  { label: '已解决', value: 'closed' },
  { label: '解决中', value: 'processing' }
]

export const FormWithChildren = () => (
  <Form 
    layout='vertical'
    mode='edit'
    initialValues={initialValues}>
      <FormField name='username' valueType='text'/>
      <FormField name='password' valueType='password'/>
      <FieldSelect name='select' valueType='select' valueEnum={options}  />
  </Form>
)

export const FormReadOnly = () => (
  <Form 
    fields={fields}
    layout='vertical'
    mode='read'
    initialValues={initialValues}>
      <FormField name='testChild' valueType='text'/>
  </Form>
)
export const FormVertical = () => (
  <Form 
    fields={fields}
    layout='vertical'
    initialValues={initialValues}/>
)

export const FormHorizontal = () => (
  <Form 
    fields={fields}
    layout='horizontal'
    initialValues={initialValues}/>
)

export const FormFourColumn = () => (
  <Form 
    fields={fields}
    layout='vertical'
    columns={4}
    initialValues={initialValues}/>
)

export const FormNoSubmit = () => (
  <Form 
    fields={fields}
    submitter={false}
    initialValues={initialValues}/>
)

export const FormFunctionString = () => (
  <Form 
    fields={fields}
    layout='horizontal'
    initialValues={initialValues}
    onFinishString="console.log(JSON.stringify(values))"/>
)
