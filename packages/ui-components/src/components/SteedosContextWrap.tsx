
import React, {useContext} from "react";

import ProField from '@ant-design/pro-field';
import { SteedosClient }  from '@steedos/client';
import {SteedosContext} from '../';
import { FormProvider } from "./form/FormProvider";

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

  const contextValues = {
    rootUrl,
    tenantId,
    userId,
    authToken,
    user,
    locale,
    client,
  }

  return (
    <SteedosContext.Provider value={contextValues}>
      <FormProvider locale={locale}>
        {children}
      </FormProvider>
    </SteedosContext.Provider>
  )
}