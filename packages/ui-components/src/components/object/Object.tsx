
import React from "react";
import { ObjectFieldProps } from "./ObjectField";


export type ObjectProviderProps = {
  name: string,
  label: string,
  fields: ObjectFieldProps[],
}

export function Object(props:ObjectProviderProps) {

  const { ...rest} = props

  return (
    <>
    </>
  )
}