
import React, { useContext } from "react";
import _ from 'lodash';
import { BuilderStoreContext } from '@builder.io/react';

export type RecordDetailPageProps = {
  objectApiName?: string,
  recordId?: string,
  children: any
} 

export function RecordDetailPage(props:RecordDetailPageProps) {
  const store = useContext(BuilderStoreContext);
  console.log("=RecordDetailPage===store===", store);
  const { children, ...rest } = props;
  let { currentObjectApiName, currentRecordId } = store.context;

  const objectApiName = props.objectApiName ? props.objectApiName : currentObjectApiName as string;
  const recordId = props.recordId ? props.recordId : currentRecordId;
  console.log("=RecordDetailPage===objectApiName, recordId===", objectApiName, recordId);

  return (
      <div>
        {children}
      </div>
  )
}