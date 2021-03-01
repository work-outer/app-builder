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
  return require('./account.json')
}

const requestRecords = async () => {
  return require('./account_records.json')
}


export const AccountForm = () => (
  <ObjectProvider requestObject={requestObject} requestRecords={requestRecords}>
    <ObjectForm 
      objectApiName='accounts'
      layout='vertical'
      mode='read'>
        <FormField name='testChild' valueType='text'/>
    </ObjectForm>
  </ObjectProvider>
)