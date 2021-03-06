
import React, {useContext} from "react";

import ProField from '@ant-design/pro-field';
import { SteedosClient }  from '@steedos/client';
import { SteedosContext } from '..';
import { ObjectProvider } from "./ObjectProvider";
import { FormProvider } from "./FormProvider";

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
export function SteedosProvider(props:any) {

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

  const steedosContextValues = {
    rootUrl,
    tenantId,
    userId,
    authToken,
    user,
    locale,
    client,
  }

  const requestObject = async(objectApiName:string) => {
    console.log("===requestObject==", objectApiName);
    //TODO 通过接口获取对象信息 /api/bootstrap/:spaceId/:objectName
    if(!objectApiName){
      return;
    }
    const url = `${rootUrl}/api/bootstrap/${tenantId}/${objectApiName}`;
    const token = `Bearer ${tenantId}, ${authToken}`
    const res = await client.doFetch(url,{
      method: 'GET',
      headers: {
          Authorization: token,
          'Content-Type': 'application/json',
      }   
    })
    if (res) {
      return res;
    }
  }

  const requestRecords = async( objectApiName:string, filters:any, fields:any , options:any) => {
    const records = await client.sobject(objectApiName).find(filters, fields);
    return records;

  }

  const objectProviderProps = {
    
    requestObject: requestObject,
    
    requestRecords: requestRecords
  }

  return (
    <SteedosContext.Provider value={steedosContextValues}>
      <ObjectProvider {...objectProviderProps}>
        <FormProvider locale={locale}>
          {children}
        </FormProvider>
      </ObjectProvider>
    </SteedosContext.Provider>
  )
}