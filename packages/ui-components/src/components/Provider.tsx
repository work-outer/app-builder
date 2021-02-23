
import React, {useContext} from "react";

import ProProvider from '@ant-design/pro-provider';
import { Input, Space, Tag } from 'antd';

// 在这里扩充lookup的定义
export default () => {
  const values = useContext(ProProvider);
  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          link: {
            render: (text) => <a>{text}</a>,
            renderFormItem: (text, props) => (
              <Input placeholder="请输入链接" {...props?.fieldProps} />
            ),
          }
        }
      }}
    />
  )
}  