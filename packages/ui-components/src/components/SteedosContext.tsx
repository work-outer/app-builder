
import React, {useContext} from "react";

import ProProvider, {zhCNIntl} from '@ant-design/pro-provider';
import { Input, Space, Tag } from 'antd';


export const SteedosContext = React.createContext<any>(null);

export class SteedosContextWrap extends React.Component<any, any> {

  defaultProps = {
    rootUrl: null,
  }

  constructor(props:any) {
    super(props);
    console.log(props)

    const {rootUrl, tenantId, userId, authToken, locale} = props;

    this.state = {
      rootUrl: rootUrl?rootUrl:process.env.ROOT_URL,
      tenantId,
      userId,
      authToken,
      locale: locale?locale:'zh-CN',
    }
  }

  componentDidMount() {
  }

	render() {
    console.log(this.state)
    return (
      <SteedosContext.Provider value={this.state}>
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
		)
	}
}