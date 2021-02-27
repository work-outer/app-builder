
import React from "react";

export type RecordQueryRequestParams = {
  pageSize: number,
  current: number,
  sort: any,
  filter: any
}

const defaultObjectQueryRequest = async (keys: readonly string[]) =>{
  throw new Error(`objectQueryRequest ${keys} failed, you should impl this function in ObjectProvider.`)
}

const defaultRecordQueryRequest = async ( objectApiName:string, params: RecordQueryRequestParams ) =>{
  throw new Error(`recordQueryRequest ${objectApiName} failed, you should impl this function in ObjectProvider.`)
}

export type ObjectContextValueType = {
  objectQueryRequest: ( keys: readonly string[] ) => Promise<ArrayLike<object | Error>>
  recordQueryRequest: ( objectApiName:string, params: RecordQueryRequestParams ) => Promise<ArrayLike<object | Error>>
}

export const ObjectContext = React.createContext<ObjectContextValueType>({
  objectQueryRequest: defaultObjectQueryRequest,
  recordQueryRequest: defaultRecordQueryRequest
});
