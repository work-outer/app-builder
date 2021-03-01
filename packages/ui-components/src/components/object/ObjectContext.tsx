
import React from "react";

export type RecordQueryRequestParams = {
  pageSize: number,
  current: number,
  sort: any,
  filter: any
}

const defaultRequestObject = async ( objectApiName:string) =>{
  throw new Error(`requestObject ${objectApiName} failed, you should impl this function in ObjectProvider.`)
}

const defaultRequestRecords = async ( objectApiName:string, params: RecordQueryRequestParams ) =>{
  throw new Error(`requestRecords ${objectApiName} failed, you should impl this function in ObjectProvider.`)
}

export type ObjectContextValueType = {
  currentObjectApiName?: string,
  currentRecordId?: string,
  queryClient?: any,
  requestObject: ( objectApiName:string) => Promise<object | Error>
  requestRecords: ( objectApiName:string, params: RecordQueryRequestParams ) => Promise<ArrayLike<object | Error>>
}

export const ObjectContext = React.createContext<ObjectContextValueType>({
  requestObject: defaultRequestObject,
  requestRecords: defaultRequestRecords
});
