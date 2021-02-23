
import React, {useContext} from "react";

import ProProvider, {zhCNIntl} from '@ant-design/pro-provider';
import { InputField } from "..";
import { Input, Space, Tag } from 'antd';

export const SteedosContext = React.createContext<any>({
  rootUrl: {},
  version: '1.23',
  tenantId: null,
  userId: null, 
  authToken: null,
  locale: 'zh-CN',
});

const { Consumer: ConfigConsumer, Provider: ConfigProvider } = SteedosContext;

export class SteedosContextWrap extends React.Component {

	render() {
    return (
      <ConfigConsumer>
        {(value) => (
          <SteedosContext.Provider value={value}>
            <ProProvider.Provider value={{
              intl: {
                ...zhCNIntl,
                locale: 'default',
              },
              valueTypeMap: {
                href: {
                  render: (text) => <a>{text}</a>,
                  renderFormItem: (text, props) => (
                    <Input placeholder="请输入链接" {...props?.fieldProps} />
                  ),
                }
              }
            }}>
              {this.props.children}
            </ProProvider.Provider>
          </SteedosContext.Provider>
        )}
      </ConfigConsumer>
		)
	}
}