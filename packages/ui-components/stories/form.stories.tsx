import * as React from "react"
import { RecordEditForm, FormSection, FormItem, InputLookup } from "../src"
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

export default {
  title: "Form",
}

export const RecordEditForm1 = () => (
  <RecordEditForm>
    <FormItem fieldName="name"/>
    <FormItem fieldName="email"/>
  </RecordEditForm>
)

export const RecordEditFormWithSection = () => (
    <RecordEditForm>
      <FormSection title="Section 1">
        <FormItem fieldName="name" required/>
        <FormItem fieldName="email" readonly/>
        <FormItem fieldName="start" type="number"/>
        <FormItem fieldName="user" type="lookup"/>
      </FormSection>
      <FormSection title="Section 2">
        <FormItem fieldName="name"/>
        <InputLookup fieldName="email" label="Lookup"/>
      </FormSection>
    </RecordEditForm>
  )
  