import React, { useContext } from 'react'
import { Field } from '../components/Field'

export const href = {
  render: (props:any)=> {
    const { value } = props
    return (<a href='value'>value</a>)
  },
  renderFormItem: (props:any)=> {
    return (<Field {...props}/>)
  }
}

