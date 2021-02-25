
import React, {useContext} from "react";

import ProProvider, {zhCNIntl} from '@ant-design/pro-provider';
import ProField from '@ant-design/pro-field';
import { Input, Space, Tag } from 'antd';


const valueTypeMap = {
  href: {
    render: (text:any, props:any) => <a>{text}</a>,
    renderFormItem: (text:any, props:any) => {return <ProField valueType='text' mode='edit' {...props.fieldProps} allowClear={false} />},
  },
  checkbox: {
    render: (text:any, props:any) => {
      if (text) 
        return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 52 52" name="check"><path d="M19.1 42.5L2.6 25.9c-.6-.6-.6-1.6 0-2.2l2.2-2.2c.6-.6 1.6-.6 2.2 0L19.4 34c.4.4 1.1.4 1.5 0L45.2 9.5c.6-.6 1.6-.6 2.2 0l2.2 2.2c.6.6.6 1.6 0 2.2L21.3 42.5c-.6.7-1.6.7-2.2 0z"></path></svg>
      else
        return <span></span>
    },
    renderFormItem: (text:any, props:any) => {
      return <ProField valueType='switch' mode='edit' {...props.fieldProps} allowClear={false} />
    },
  },
  datetime: {
    render: (text:any, props:any) => {return <ProField valueType='dateTime' mode='read' {...props.fieldProps} allowClear={false} />}, // (text.toUTCString()),
    renderFormItem: (text:any, props:any) => {return <ProField valueType='dateTime' mode='edit' {...props.fieldProps} allowClear={false} />},
  }
}

export const SteedosContext = React.createContext<any>(null);

export class SteedosContextWrap extends React.Component<any, any> {

  defaultProps = {
    rootUrl: null,
  }

  constructor(props:any) {
    super(props);

    const {rootUrl, tenantId, userId, authToken, locale} = props;

    this.state = {
      rootUrl: rootUrl?rootUrl:process.env.STEEDOS_ROOT_URL,
      tenantId: tenantId?userId:process.env.STEEDOS_TENANT_ID,
      userId: userId?userId:process.env.STEEDOS_USER_ID,
      authToken: authToken?userId:process.env.STEEDOSAUTH_TOKEN,
      user: {},
      locale: locale?locale:'zh-CN',
    }
  }

  componentDidMount() {
  }

	render() {
    //console.log(this.state)
    return (
      <SteedosContext.Provider value={this.state}>
        <ProProvider.Provider value={{
          intl: {
            ...zhCNIntl,
            locale: 'default',
          },
          valueTypeMap,
        }}>
          {this.props.children}
        </ProProvider.Provider>
      </SteedosContext.Provider>
		)
	}
}
