import React from "react";
import { ObjectContext, ObjectContextValueType, RecordQueryRequestParams } from "./ObjectContext";

import DataLoader from 'dataloader';

/* 通过 valueTypeMap，支持给Form传入第三方自定义控件 */
type ObjectProviderProps = ObjectContextValueType & {
  children: any,
}

export function ObjectProvider(props: ObjectProviderProps) {

  const {
    objectQueryRequest,
    recordQueryRequest,
    children,
  } = props;

  return (
    <ObjectContext.Provider value={{
      objectQueryRequest,
      recordQueryRequest,
    }}>
      {children}
    </ObjectContext.Provider>
  )
}
