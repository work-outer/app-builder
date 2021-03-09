// import React from "react";

// import { FormProps } from "../form/Form";
// import type { ProFieldFCMode } from '@ant-design/pro-utils';
// import { GridItem } from "@chakra-ui/react";
// import ProForm from '@ant-design/pro-form';
// import { Button, Select, Spin } from 'antd';
// import { PlusOutlined } from "@ant-design/icons";
// import { ObjectContext } from "../";
// import { useQuery } from "react-query";
// import _ from 'lodash';

// export type ObjectFieldLookupProps = {
//     name: string,
//     valueType: any,
//     referenceTo: string,
//     enableAdd: boolean,
//     mode?: ProFieldFCMode,
//     text?: string,
//     required?: boolean,
//     label?: string,
//     help?: string, 
//     tooltip?: string, 
//     colSpan?: number,
//     fieldProps?: any,
//     formProps?: FormProps,
//     onInlineEdit?: Function,
//     readonly?: boolean,
//     placeholder?: string
//   };


// export function ObjectFieldLookup(props:ObjectFieldLookupProps) {
//   const objectContext = React.useContext(ObjectContext);
//   const [value, setValue] = React.useState([]);
//   const {
//       name, 
//       valueType,
//       enableAdd, 
//       required, 
//       colSpan = 1,
//       label, 
//       help, 
//       tooltip, 
//       fieldProps,
//       mode = 'edit',
//       referenceTo,
//       placeholder,
//       readonly,
//       formProps = {
//         layout: 'vertical'
//       },
//       ...rest
//     } = props

//     const itemOptions = {
//       name, 
//       label: label?label:name, 
//       help,
//       tooltip,
//       required,
//       labelCol: formProps && formProps.layout=='horizontal'?{
//         flex: '120px'
//       }:{},
//       wrapperCol: formProps && formProps.layout=='horizontal'?{
//         flex: 'auto'
//       }:{},
//     }
//     let boxOptions:any = {}
//     boxOptions.colSpan = [1, colSpan, colSpan, colSpan]
  
//   const [fetching, setFetching] = React.useState(false);
//   const [options, setOptions] = React.useState([]); 
//   // const { 
//   //   isLoading, 
//   //   error, 
//   //   data, 
//   //   isFetching 
//   // } = useQuery('', async () => {
//   //   const filters = null;
//   //   const fields = ['_id', 'name'];
//   //   return await objectContext.requestRecords(referenceTo, filters, fields);
//   // });
//   // console.log("objectContext.requestRecords---", data);
//   const handleSearch = (value:any) => {
//       setFetching(true);
//       const { 
//         isLoading, 
//         error, 
//         data, 
//         isFetching 
//       } = useQuery('', async () => {
//         const filters = [['name', 'contains', value]];
//         const fields = ['_id', 'name'];
//         return await objectContext.requestRecords(referenceTo, filters, fields);
//       });

//       const objectSchema:any = data
//       if(!objectSchema)
//         return (<div>Loading...</div>)
        
//       const newOptions:any = []
//         _.forEach(objectSchema, (object, name)=>{
//           newOptions.push({
//             label: object.name,
//             value: object._id
//           })
//       })
//       setOptions(newOptions);
//       setFetching(false);
//   };
  

//   return (
//       <GridItem 
//         key={name}
//         {...boxOptions}
//       >
//         <ProForm.Item 
//             style={{marginBottom: 0}}
//             {...itemOptions}>
//           <Select
//             showSearch
//             notFoundContent={fetching ? <Spin size="small" /> : null}
//             showArrow={true}
//             filterOption={false}    
//             placeholder={placeholder}
//             defaultActiveFirstOption={false}
//             value={value}
//             onSearch={handleSearch}
//             onChange={(newValue) => {
//               setValue(newValue);
//             }}
//             style={{
//               width: '100%',
//             }}
//             disabled={readonly}
//             options={options}
//             {...rest}
//           >
//           </Select>
//         </ProForm.Item>
//       </GridItem>
//     )
// }