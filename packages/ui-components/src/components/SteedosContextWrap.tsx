
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
import { en_US, zh_CN } from '@steedos/ui-locale/src/';
import {SteedosContext, ValueTypeMap} from '../';

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

const zhCNIntl = createSteedosIntl('zh_CN', zh_CN);
const enUSIntl = createSteedosIntl('en_US', en_US);


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
  // const context = useContext(SteedosContext);
  // return context.intl || zhCNIntl;
  return zhCNIntl;
}

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
    valueTypeMap: ValueTypeMap,
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