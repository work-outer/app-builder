import * as React from "react"
import { RecordEditForm, FormSection, InputField, FieldLookup } from "../src"

export default {
  title: "Form",
}

export const RecordEditForm1 = () => (
  <RecordEditForm>
    <InputField fieldName="name"/>
    <InputField fieldName="email"/>
  </RecordEditForm>
)

export const RecordEditFormWithSection = () => (
    <RecordEditForm>
      <FormSection title="Section 1">
        <InputField fieldName="name" isRequired/>
        <InputField fieldName="email"/>
      </FormSection>
      <FormSection title="Section 2">
        <InputField fieldName="name"/>
        <FieldLookup fieldName="email"/>
      </FormSection>
    </RecordEditForm>
  )
  