import * as React from "react"
import { 
  Form,
} from "../src"

export default {
  title: "Form",
}

const fields = [{
  name: 'name',
  valueType: 'text',
  colSpan: 2
},{
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
  valueType: 'datetime',
}]

const initialValues = {
  name: 'Hello World',
  active: true,
  created: new Date(),
  birthday: new Date(),
  website: 'https://www.steedos.com',
  email: 'support@steedos.com',
}
export const FormReadOnly = () => (
  <Form 
    fields={fields}
    layout='vertical'
    mode='read'
    initialValues={initialValues}/>
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
