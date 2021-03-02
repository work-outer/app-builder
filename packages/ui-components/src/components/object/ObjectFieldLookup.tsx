import React from "react";

import { FormProps } from "../form/Form";
import { FieldLookup } from "../field/FieldLookup";

export type ObjectFieldLookupProps = {
    referenceTo: string,
    fieldName: string,
    enableAdd: boolean,
    readonly: boolean
} & FormProps

export function ObjectFieldLookup(props:ObjectFieldLookupProps) {

    const {  referenceTo, fieldName, placeholder, readonly,...rest} = props
    
    const fieldLookupProps:ObjectFieldLookupProps = {
        referenceTo: referenceTo,
        fieldName: fieldName,
        enableAdd: true,
        placeholder: placeholder,
        readonly: readonly
    }
    return (
        <FieldLookup 
           {...rest}
           {...fieldLookupProps}
        />
    )
}