
import React, {useContext} from "react";

import ProProvider, {zhCNIntl} from '@ant-design/pro-provider';
import { Input, Space, Tag } from 'antd';


export const SteedosContext = React.createContext<any>(null);

export class SteedosContextWrap extends React.Component {

  defaultProps = {
    rootUrl: null,
  }

  state = {
    rootUrl: null,
    version: null,
    tenantId: null,
    userId: null, 
    authToken: null,
    locale: 'zh-CN',
  }


  constructor(props:any) {
    super(props);

    const {rootUrl, tenantId, userId, authToken, locale} = props;

    this.setState({
      rootUrl,
      tenantId,
      userId,
      authToken,
      locale: locale?locale:'zh-CN',
    })
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