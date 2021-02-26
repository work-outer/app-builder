import React from 'react';
import type { ProFieldFC } from '@ant-design/pro-field';
import { Input } from 'antd';

export type FieldHrefProps = {
  text: string;
  href?: string;
  target?: string
};

/**
 * 链接组件
 *
 * @param FieldHrefProps {
 *     text: string;
 *     href?: string;  //如果不传入链接地址，则使用 text
 *     target?: string  //默认_self
 * }
 */
const FieldHref: ProFieldFC<FieldHrefProps> = (
  { text, href, target = '_self', mode: type, render, renderFormItem, fieldProps, ...rest },
  ref,
) => {
  if (!href)
    href = text
  if (type === 'read') {
    const dom = <a href={href} target={target} ref={ref}>{text}</a>;
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    const dom = (
      <><Input
        ref={ref}
        style={{
          width: '100%',
        }}
        {...rest}
        {...fieldProps}
      />
      </>
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default React.forwardRef(FieldHref);
