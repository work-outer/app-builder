import * as React from "react"
import _ from 'lodash';
import request from 'umi-request';

import { DataTable } from "../src"

export default {
  title: "DataTable",
}

const DATA = [
    { id: 1, name: 'Billy Simonns', age: 40, email: 'billy@salesforce.com' },
    { id: 2, name: 'Kelsey Denesik', age: 35, email: 'kelsey@salesforce.com' },
    { id: 3, name: 'Kyle Ruecker', age: 50, email: 'kyle@salesforce.com' },
    {
        id: 4,
        name: 'Krystina Kerluke',
        age: 37,
        email: 'krystina@salesforce.com',
    },
    { id: 5, name: 'Billy Simonns', age: 40, email: 'billy@salesforce.com' },
    { id: 6, name: 'Kelsey Denesik', age: 35, email: 'kelsey@salesforce.com' },
    { id: 7, name: 'Kyle Ruecker', age: 50, email: 'kyle@salesforce.com' },
    { id: 8, name: 'Billy Simonns', age: 40, email: 'billy@salesforce.com' },
    { id: 9, name: 'Kelsey Denesik', age: 35, email: 'kelsey@salesforce.com' },
    { id: 10, name: 'Kyle Ruecker', age: 50, email: 'kyle@salesforce.com' },
    { id: 11, name: 'Billy Simonns', age: 40, email: 'billy@salesforce.com' },
    { id: 12, name: 'Kelsey Denesik', age: 35, email: 'kelsey@salesforce.com' },
    { id: 13, name: 'Kyle Ruecker', age: 50, email: 'kyle@salesforce.com' },
    { id: 14, name: 'Billy Simonns', age: 40, email: 'billy@salesforce.com' },
    { id: 15, name: 'Kelsey Denesik', age: 35, email: 'kelsey@salesforce.com' },
    { id: 16, name: 'Kyle Ruecker', age: 50, email: 'kyle@salesforce.com' },
];

const COLUMNS = [
    { label: 'Name', fieldName: 'name', editable: true },
    {
        label: 'Age',
        fieldName: 'age',
        type: 'number',
        sortable: true,
        cellAttributes: { alignment: 'left' },
    },
    { label: 'Email', fieldName: 'email', type: 'lookup', editable: true  },
];

const recordMetadata = {
  name: 'name',
  email: 'email',
  website: 'url',
  amount: 'currency',
  phone: 'phoneNumber',
  closeAt: 'dateInFuture',
};

const loadData = async (params?: {pageSize:number,current:number}, sort?:any, filter?:any) => {
  console.log('loadData')
  const data = await request('https://data-faker.herokuapp.com/collection', {
    params,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
        amountOfRecords: params?.pageSize,
        recordMetadata,
    }),
  })

  const total = 100
  return {data, total}
}

const columns2 = [
  { label: 'Label', fieldName: 'name', type: 'text', editable: true, filters: true },
  { label: 'Website', fieldName: 'website', type: 'text', editable: true },
  { label: 'Phone', fieldName: 'phone', type: 'text', editable: true },
  { label: 'CloseAt', fieldName: 'closeAt', type: 'datetime', editable: true, filters: true },
  { label: 'Balance', fieldName: 'amount', type: 'number', editable: true },
];

export const DataTableAntD = () => {
    
  // const [data, setData] = React.useState(() => data)

  return (
    <DataTable 
      columns={columns2} 
      scroll={{ y: 300 }} 
      request={loadData} 
      size='small'
      editable={true}
      pagination={{
        pageSize: 10,
      }}> 
    </DataTable>
  )
}