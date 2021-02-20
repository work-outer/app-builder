import * as React from "react"
import { RecordEditForm, FormSection, FormItem, InputLookup } from "../src"
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

export default {
  title: "Form",
}

export const RecordEditForm1 = () => (
  <RecordEditForm>
    <FormItem fieldName="name" placeholder="name"/>
    <FormItem fieldName="email" placeholder="email"/>
  </RecordEditForm>
)

export const RecordEditFormWithSection = () => (
    <RecordEditForm>
      <FormSection title="Section 1">
        <FormItem fieldName="name" required label="Name"/>
        <FormItem fieldName="email" readonly label="Email"/>
        <FormItem fieldName="start" type="number" label="Start"/>
        <FormItem fieldName="lookup" type="lookup" label="Lookup"/>
      </FormSection>
      <FormSection title="Section 2">
        <FormItem fieldName="name" label="Name"/>
        <InputLookup fieldName="lookup2" label="Lookup"/>
      </FormSection>
    </RecordEditForm>
  )
  