import React from 'react';
import { InputNumber } from 'antd';
import type { ProFieldFC } from '../../index';
import { Input } from 'antd';
import {Form} from '../Form';

export type FieldObjectProps = {
  text: string;
};

/**
 * 数字组件
 *
 * @param FieldObjectProps {
 *     text: number;
 */
const FieldObject: ProFieldFC<FieldObjectProps> = (
  { text, mode: type, render, renderFormItem, fieldProps, fields, ...rest },
  ref,
) => {
  const dom = (
    <Form 
      ref={ref}
      fields={fields}
      layout='vertical'
      mode='read'
      style={{
        width: '100%',
      }}
      {...rest}
      {...fieldProps}
      initialValues={text}/>
  )
  if (type === 'read') {
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    const dom = (
      <Form 
        ref={ref}
        fields={fields}
        layout='vertical'
        mode='edit'
        style={{
        width: '100%',
        }}
        {...rest}
        {...fieldProps}
        initialValues={text}/>
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default React.forwardRef(FieldObject);
