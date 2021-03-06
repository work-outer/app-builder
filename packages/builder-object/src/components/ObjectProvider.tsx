import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ObjectContext, ObjectContextValueType, RecordQueryRequestParams } from "./ObjectContext";

/* 通过 valueTypeMap，支持给Form传入第三方自定义控件 */
type ObjectProviderProps = ObjectContextValueType & {
  children: any,
}

export function ObjectProvider(props: ObjectProviderProps) {

  const {
    requestObject,
    requestRecords,
    queryClient = new QueryClient(),
    children,
  } = props;

  return (
    <ObjectContext.Provider value={{
      queryClient,
      requestObject,
      requestRecords,
    }}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ObjectContext.Provider>
  )
}

export const configObjectProvider = {
  name: 'Steedos:ObjectProvider',
  inputs: [{ 
    name: 'requestObject', 
    type: 'code', 
    language: 'javascript', 
    helperText:'请提供从服务端抓取对象配置的函数',
    defaultValue: `async (objectApiName) => {
  //objectApiName:对象api名称
}` 
  },{ 
    name: 'requestRecords', 
    type: 'code', 
    language: 'javascript', 
    helperText:'请提供从服务端抓取对象记录的函数',
    defaultValue: `async (objectApiName, filters, fields , options) => {
  //objectApiName:对象api名称
  //filters: 过滤条件
  //fields: 要返回的字段
}` 
  }],
  canHaveChildren: true
};
