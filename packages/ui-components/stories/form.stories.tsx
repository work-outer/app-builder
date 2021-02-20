import * as React from "react"
import { RecordEditForm, FormSection, FormItem, InputText, InputLookup } from "../src"
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

export default {
  title: "Form",
}

export const SimpleForm = () => (
  <form>
      <InputLookup fieldName="lookup" label="Lookup"/>
      <InputText fieldName="Text" label="text"/>
  </form>
)

export const RecordForm = () => (
    <RecordEditForm>
      <FormSection title="Section 1">
        <FormItem fieldName="name" required label="Name" fieldLevelHelp="Please input name"/>
        <FormItem fieldName="email" readonly label="Email"/>
        <FormItem fieldName="start" type="number" label="Start"/>
        <FormItem fieldName="lookup" type="lookup" label="Lookup"/>
      </FormSection>
      <FormSection title="Section 2">
        <FormItem fieldName="name" label="Name"/>
      </FormSection>
    </RecordEditForm>
  )
  