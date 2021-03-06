
import React, { useContext } from "react";
import _ from 'lodash';
// import { BuilderStoreContext } from '@builder.io/react';
import { ObjectContext } from "../";
import { useQuery } from "react-query";
import ProTable, { ProTableProps, RequestData } from "@ant-design/pro-table";
import { SortOrder } from "antd/lib/table/interface";
import { ParamsType } from "@ant-design/pro-provider";
import { observer } from "mobx-react-lite"
import { registerObjectTableComponent } from "..";
import { TableModel, store } from '@steedos/builder-store';

// export type TableProps<T extends Record<string, any>, U extends ParamsType, ValueType>  = {
//   mode?: ProFieldFCMode,
//   editable?: boolean,
// } & ProTableProps<T, U, ValueType> & {
//   defaultClassName: string;
// }

// export type ObjectTableProps = {
//   objectApiName?: string,
//   recordId?: string,
// } & ProTableProps<T, U, ValueType> & {
//   defaultClassName: string;
// }

export type ObjectTableColumnProps = {
  fieldName: string,
  wrap?: boolean
}

export type ObjectTableProps<T extends Record<string, any>, U extends ParamsType, ValueType> = {
  name: string,
  objectApiName?: string,
  columns: ObjectTableColumnProps[]
} & Omit<ProTableProps<T, U, ValueType>, 'columns'> & {
  defaultClassName: string;
}

export const getProColumnProps = (proColumnProps:any, fieldType: string, readonly: boolean, field:any) => {
  switch (fieldType) {
    case 'text':
      proColumnProps.valueType = 'text';
      proColumnProps.readonly = readonly;
      break;
    case 'password':
      proColumnProps.valueType = 'password';
      proColumnProps.readonly = readonly;
      break;
    case 'email':
      proColumnProps.valueType = 'email';
      proColumnProps.readonly = readonly;
      break;
    case 'percent':
      proColumnProps.valueType = 'percent';
      proColumnProps.readonly = readonly;
      break;
    case 'avatar':
      proColumnProps.valueType = 'avatar';
      proColumnProps.readonly = readonly;
      break;
    case 'select':
      proColumnProps.valueType = 'select';
      proColumnProps.fieldProps.options = field.options;
      proColumnProps.readonly = readonly;
      break;
    case 'textarea':
      proColumnProps.valueType = 'textarea';
      proColumnProps.hideInSearch = true;
      proColumnProps.copyable = true;
      proColumnProps.ellipsis = true;
      proColumnProps.readonly = readonly;
      break;
    case 'date':
      proColumnProps.valueType = 'date';
      proColumnProps.readonly = readonly;
      break;
    case 'datetime':
      proColumnProps.valueType = 'dateTime';
      proColumnProps.readonly = readonly;
      break;
    case 'boolean':
      proColumnProps.valueType = 'switch';
      proColumnProps.hideInSearch = true;
      proColumnProps.readonly = readonly;
      break;
    case 'number':
      proColumnProps.valueType = 'digit';
      proColumnProps.readonly = readonly;
      break;
    case 'currency':
      proColumnProps.valueType = 'money';
      proColumnProps.readonly = readonly;
      break;
    case 'autonumber':
      proColumnProps.valueType = 'index';
      proColumnProps.hideInSearch = true;
      proColumnProps.readonly = readonly;
      break;
    case 'url':
      proColumnProps.valueType='href';
      break;
    case 'lookup':
      proColumnProps.render = () => <div>{`?????????????????????${fieldType}?????????`}</div>
      break;
    case 'master_detail':
      proColumnProps.render = () => <div>{`?????????????????????${fieldType}?????????`}</div>
      break;
  }
  return proColumnProps;
}

export const getObjectTableProColumn = (field: any) => {
  // ???yml??????????????????field??????ant???ProTable??????columns?????????
  if (!field) {
    return null;
  }

  const fieldType: string = field.type;
  let proColumnProps: any = {
    title: field.label,
    dataIndex: field.name,
    formItemProps: {},
    fieldProps: {}
  }
  if(field.required){
    proColumnProps.formItemProps.required = true;
  }

  if(field.sortable){
    proColumnProps.sorter = true;
  }

  if(fieldType === 'formula'){
    proColumnProps = getProColumnProps(proColumnProps, field.data_type, true, field);
  }else if(fieldType === 'summary'){
    proColumnProps = getProColumnProps(proColumnProps, field.summary_type, true, field);
  }else{
    proColumnProps = getProColumnProps(proColumnProps, fieldType, field.readonly || false, field);
  }
  return proColumnProps;
}

export const ObjectTable = observer(<T extends Record<string, any>, U extends ParamsType, ValueType>(props: ObjectTableProps<T, U, ValueType>) => {
// export const ObjectTable = <T extends Record<string, any>, U extends ParamsType, ValueType>(props: ObjectTableProps<T, U, ValueType>) => {
  // const store = useContext(BuilderStoreContext);
  const objectContext = useContext(ObjectContext);
  let { currentObjectApiName } = store;
  if (!currentObjectApiName) {
    currentObjectApiName = objectContext.currentObjectApiName;
  }

  const { name: tableId = 'default', columns, ...rest } = props

  if (!store.forms[tableId])
    store.forms[tableId] = TableModel.create({id: tableId});
  const objectApiName = props.objectApiName ? props.objectApiName : currentObjectApiName as string;
  const {
    isLoading,
    error,
    data,
    isFetching
  } = useQuery(objectApiName, async () => {
    return await objectContext.requestObject(objectApiName as string);
  });
  const objectSchema: any = data

  if (!objectSchema)
    return (<div>Object Loading...</div>)

  registerObjectTableComponent(_.keys(objectSchema.fields));

  const objectFields = objectSchema.fields;
  let proColumns: any = []
  _.forEach(columns, (columnItem: ObjectTableColumnProps) => {
    const proColumn = getObjectTableProColumn(objectFields[columnItem.fieldName]);

    if (proColumn) {
      proColumns.push(proColumn);
    }
  });

  const request = async (params: U & {
    pageSize?: number;
    current?: number;
    keyword?: string;
  }, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[]>): Promise<Partial<RequestData<T>>> => {
    // ??????????????? params ??????????????? params ???????????????
    // ?????????????????????????????? pageSize ???  current ????????????????????? antd ?????????
    // ???????????????????????? Promise,??????????????????????????????????????????
    // ???????????????????????????????????????????????????
    /*
    const msg = await myQuery({
      page: params.current,
      pageSize: params.pageSize,
    });
    return {
      data: msg.result,
      // success ????????? true???
      // ?????? table ???????????????????????????????????????
      success: boolean,
      // ??????????????? data ???????????????????????????????????????
      total: number,
    };
    */
    const columnsFields = columns.map((n) => { return n.fieldName });
    return objectContext.requestRecords(objectApiName, filter, columnsFields, {
      pageSize: params.pageSize as number,
      current: params.current as number,
      sort: sort
    });
  }

  return (
    <ProTable
      rowKey="_id"
      request={request}
      columns={proColumns}
      // formFieldComponent = {ObjectField}
      {...rest}
    />
  )
});