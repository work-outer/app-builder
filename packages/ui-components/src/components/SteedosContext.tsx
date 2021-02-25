
import React, {useContext} from "react";

import ProContext, {createIntl, 
    zhCNIntl as pro_zhCN, 
    zhTWIntl as pro_zhTW, 
    enUSIntl as pro_enUS
  } from '@ant-design/pro-provider';
import ProField from '@ant-design/pro-field';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import antd_zhCN from 'antd/lib/locale/zh_CN';
import antd_zhTW from 'antd/lib/locale/zh_TW';
import antd_enUS from 'antd/lib/locale/zh_CN';
import { SteedosClient }  from '@steedos/client';
import { IntlType } from "@ant-design/pro-table";


function getMessageFromLocaleMap(
  source: Record<string, unknown>,
  path: string,
  defaultValue?: string,
): string | undefined {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = source;
  let message = defaultValue;
  // eslint-disable-next-line no-restricted-syntax
  for (const p of paths) {
    message = Object(result)[p];
    result = Object(result)[p];
    if (message === undefined) {
      return defaultValue;
    }
  }
  return message;
}

/**
 * 创建一个操作函数
 *
 * @param locale
 * @param localeMap
 */
const createSteedosIntl = (locale: string, localeMap: Record<string, any>): IntlType => ({
  getMessage: (id: string, defaultMessage: string) => {
    let message = getMessageFromLocaleMap(localeMap, id, defaultMessage);
    if (!message)
      message = getProLocale(locale).getMessage(id, '');
      if (!message)
        message = getMessageFromLocaleMap(getAntdLocale(locale), id);
    return message || defaultMessage
  },
  locale,
});

import zhCN from '../locale/zh_CN';
import enUS from '../locale/en_US';
const zhCNIntl = createSteedosIntl('zh_CN', zhCN);
const enUSIntl = createSteedosIntl('en_US', enUS);

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

const getAntdLocale:any = (locale: string)=> {
  switch (locale) {
    case 'en_US': return antd_enUS
    case 'zh_CN': return antd_zhCN
    case 'zh_TW': return antd_zhTW
    default: return antd_zhCN
  }
}

const getProLocale = (locale: string)=> {
  switch (locale) {
    case 'en_US': return pro_enUS
    case 'zh_CN': return pro_zhCN
    case 'zh_TW': return pro_zhTW
    default: return pro_zhCN
  }
}

const getSteedosIntl = (locale: string) => {
  switch (locale) {
    case 'en_US': return enUSIntl
    case 'zh_CN': return zhCNIntl
    case 'zh_TW': return zhCNIntl
    default: return zhCNIntl
  }
}

export function useIntl(): IntlType {
  const context = useContext(SteedosContext);
  return context.intl || zhCN;
}

export const SteedosContext = React.createContext<any>(null);


const {
  STEEDOS_ROOT_URL,
  STEEDOS_TENANT_ID,
  STEEDOS_USER_ID,
  STEEDOS_AUTH_TOKEN,
  STEEDOS_LOCALE = 'zh_CN'
} = process.env

/*
参数：
- locale: zh_CN, en_US, zh_TW  TODO: 和steedos的locale值不一样，获取user之后需要转换。

*/
export function SteedosContextWrap(props:any) {

  const {
    rootUrl = STEEDOS_ROOT_URL,
    tenantId = STEEDOS_TENANT_ID,
    userId = STEEDOS_USER_ID,
    authToken =  STEEDOS_AUTH_TOKEN,
    user = {},
    locale = STEEDOS_LOCALE,
    children,
  } = props;

  const client = new SteedosClient();
  
  client.setUrl(rootUrl)
  client.setUserId(userId)
  client.setToken(authToken);

  const intl = getSteedosIntl(locale);
  const contextValues = {
    rootUrl,
    tenantId,
    userId,
    authToken,
    user,
    locale,
    intl,
    client,
  }

  const proContextValues = {
    intl: {
      ...getProLocale(locale),
    },
    valueTypeMap,
  }

  const antdContextValues = {
    locale: getAntdLocale(locale)
  }

  return (
    <SteedosContext.Provider value={contextValues}>
      <AntdConfigProvider {...antdContextValues}>
        <ProContext.Provider value={proContextValues}>
          {children}
        </ProContext.Provider>
        </AntdConfigProvider>
    </SteedosContext.Provider>
  )
}