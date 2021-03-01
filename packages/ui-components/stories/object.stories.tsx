import * as React from "react"
import { 
  Form,
  FormField
} from "../src"
import { ObjectForm, ObjectProvider } from "../src/components/object"

export default {
  title: "Object",
}

const requestObject = async () => {
  return require('./test__c.json')
}

const requestRecords = async () => {
  return require('./test__c_records.json')
}


export const AccountForm = () => (
  <ObjectProvider requestObject={requestObject} requestRecords={requestRecords}>
    <ObjectForm 
      objectApiName='test__c'
      layout='vertical'
      mode='read'>
        <FormField name='testChild' valueType='text'/>
    </ObjectForm>
    <br /><br /><br />
  </ObjectProvider>
)