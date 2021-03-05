import * as React from "react"
import { 
  Form,
  FormField,
  SteedosProvider
} from "../src"
import { ObjectForm, ObjectProvider } from "../src/components/object"

export default {
  title: "Object",
}

const requestObject = async () => {
  //return require('./test__c.json')
  return require('./account.json')
}

const requestRecords = async () => {
  //return require('./test__c_records.json')
  return require('./account_records.json')
}


export const AccountForm = () => (
  <ObjectProvider requestObject={requestObject} requestRecords={requestRecords}>
    <ObjectForm 
      objectApiName='account'
      layout='vertical'
      mode='read'>
        <FormField name='testChild' valueType='text'/>
    </ObjectForm>
    <br /><br /><br />
  </ObjectProvider>
)

export const SteedosObjectForm = () => (
  <SteedosProvider >
    <ObjectForm 
      objectApiName='accounts'
      layout='vertical'
      mode='read'>
        <FormField name='testChild' valueType='text'/>
    </ObjectForm>
    <br /><br /><br />
  </SteedosProvider>
)