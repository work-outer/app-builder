import * as React from "react"
import { 
  Form,
} from "../src"
import FormField from "../src/components/form/FormItem"

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
  valueType: 'form',
  colSpan: 2,
  fields: [{
    name: 'o1',
    label: 'Active',
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
  readonly: true,
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
  valueType: 'checkbox'
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
    o1: true,
    o2: 'Hello Object.'
  }
}

export const FormWithChildren = () => (
  <Form 
    layout='vertical'
    mode='edit'
    initialValues={initialValues}>
      <FormField name='username' valueType='text'/>
      <FormField name='password' valueType='password'/>
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

export const FormInline = () => (
  <Form 
    fields={fields}
    layout='inline'
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
