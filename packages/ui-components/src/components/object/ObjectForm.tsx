
import React from "react";
import _ from 'lodash';
import { ObjectContext } from ".";
import { useQuery } from "react-query";

import { Form, FormProps } from "../form/Form";
import { ObjectField } from "./ObjectField";

export type ObjectFormProps = {
  objectApiName: string,
  children: any,
} & FormProps

export function ObjectForm(props:ObjectFormProps) {

  const objectContext = React.useContext(ObjectContext);

  const { objectApiName, ...rest} = props

  const { 
    isLoading, 
    error, 
    data, 
    isFetching 
  } = useQuery(objectApiName, async () => {
    return await objectContext.requestObject(objectApiName);
  });

  const objectSchema:any = data

  if (!objectSchema) 
    return (<div>Loading...</div>)

  const fields:any = []
  _.forEach(objectSchema.fields, (field, fieldName)=>{
    fields.push(field)
  })
  const formProps = {
    fields: fields
  }

  return (
    <Form 
      formFieldComponent = {ObjectField}
      {...rest}
      {...formProps}
    />
  )
}