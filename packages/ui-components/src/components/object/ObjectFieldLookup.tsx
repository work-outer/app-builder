import React from "react";

import { FormProps } from "../form/Form";
import { FieldLookup } from "../field/FieldLookup";
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { GridItem } from "@chakra-ui/react";
import ProForm from '@ant-design/pro-form';

export type FormFieldProps = {
    name: string,
    valueType: any,
    mode?: ProFieldFCMode,
    text?: string,
    required?: boolean,
    label?: string,
    help?: string, 
    tooltip?: string, 
    colSpan?: number,
    fieldProps?: any,
    formProps?: FormProps,
    onInlineEdit?: Function,
    referenceTo?: string,
    enableAdd?: boolean,
    readonly?: boolean,
    valueEnum?: any,
    placeholder?: string,
  };

export function ObjectFieldLookup(props:FormFieldProps) {
    const {
        name, 
        valueType, 
        required, 
        colSpan = 1,
        label, 
        help, 
        tooltip, 
        fieldProps,
        mode = 'edit',
        referenceTo,
        placeholder,
        readonly,
        formProps = {
          layout: 'vertical'
        },
        ...rest
      } = props
    
      const itemOptions = {
        name, 
        label: label?label:name, 
        help,
        tooltip,
        required,
        labelCol: formProps && formProps.layout=='horizontal'?{
          flex: '120px'
        }:{},
        wrapperCol: formProps && formProps.layout=='horizontal'?{
          flex: 'auto'
        }:{},
      }
      let boxOptions:any = {}
      boxOptions.colSpan = [1, colSpan, colSpan, colSpan]
    
    const fieldLookupProps:FormFieldProps = {
        valueType: valueType,
        label: label,
        referenceTo: referenceTo,
        name: name,
        enableAdd: true,
        placeholder: placeholder,
        readonly: readonly
    }
    return (
        <GridItem 
          key={name}
          {...boxOptions}
        >
          <ProForm.Item 
              style={{marginBottom: 0}}
              {...itemOptions}>
            <FieldLookup 
                {...rest}
                {...fieldLookupProps}
        />
          </ProForm.Item>
        </GridItem>
      )
}