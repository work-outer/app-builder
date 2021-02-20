import * as React from "react"
import { DataTable } from "../src"

export default {
  title: "DataTable",
}

const data = [
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

const columns = [
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

export const DataTableSimple = () => {
    
// const mColumns = React.useMemo(() => columns, []);

    return (

    <DataTable data={data} columns={columns} id="DataTableExample-1-default">
    </DataTable>
)}