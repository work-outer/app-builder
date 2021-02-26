import React from 'react';
import _ from 'lodash';

import { InputNumber } from 'antd';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';
import {Form} from '../Form';

export type FieldObjectProps = {
  id: string,
  text: string,
  fields: string[],
};

/**
 * 数字组件
 *
 * @param FieldObjectProps {
 *     text: number;
 */
const FieldObject: ProFieldFC<FieldObjectProps> = (
  { id, text, mode: type, render, renderFormItem, fieldProps, fields, ...rest },
  ref,
) => {
  const formFields = fields.map((field:any) => {
    // const f = _.cloneDeep(field)
    // f.name = `${id}.${field.name}`
    // return f
    return field
  });
  const dom = (
    <Form 
      ref={ref}
      fields={formFields}
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
        fields={formFields}
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
