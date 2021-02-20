import * as React from "react"
import { RecordEditForm, FormSection, InputField, InputText, InputLookup } from "../src"

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
        <InputField fieldName="name" required label="Name" isWide placeholder="Please enter name." fieldLevelHelp="Please input name"/>
        <InputField fieldName="email" readOnly label="Email" value="user@company.com"/>
        <InputField fieldName="number" type="number" label="Number"/>
        <InputField fieldName="lookup" type="lookup" label="Lookup"/>
      </FormSection>
      <FormSection title="Section 2">
        <InputField fieldName="name" label="Name"/>
      </FormSection>
    </RecordEditForm>
  )
  