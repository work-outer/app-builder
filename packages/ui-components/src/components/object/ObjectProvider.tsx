import React from "react";
import { ObjectContext, ObjectContextValueType } from "./ObjectContext";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 const queryClient = new QueryClient()

/* 通过 valueTypeMap，支持给Form传入第三方自定义控件 */
type ObjectProviderProps = ObjectContextValueType & {
  children: any,
}

export function ObjectProvider(props: ObjectProviderProps) {

  const {
    queryOptions,
    requestObject,
    setObject,
    getObject,
    children,
  } = props;

  return (
    <ObjectContext.Provider value={{
      queryOptions,
      requestObject,
      setObject,
      getObject,
    }}>
      {children}
    </ObjectContext.Provider>
  )
}