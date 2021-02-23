import { Divider } from "antd"
import * as React from "react"
import { 
  RecordEditForm, 
  FormSection, 
  InputField, 
  InputText, 
  InputLookup, 
  InputDate, 
  InputDateTime, 
  InputTextWithFix,
  InputTextarea
} from "../src"

export default {
  title: "Form",
}

export const SimpleForm = () => (
  <form>
      <Divider plain orientation="left" >Text</Divider>
      <InputText fieldName="Text" label="text"/>
      <Divider plain orientation="left" >Date</Divider>
      <InputDate fieldName="Date" label="Date" />
      <Divider plain orientation="left" >DateTime</Divider>
      <InputDateTime fieldName="DateTime" label="DateTime" />
      <Divider plain orientation="left" >Lookup</Divider>
      <InputLookup fieldName="lookup" placeholder="Please select object" />
      <Divider plain orientation="left" >InputTextWithFix</Divider>
      <InputTextWithFix placeholder="Input Text" prefix="Name" />
      <Divider plain orientation="left" >InputTextarea</Divider>
      <InputTextarea rows="4" />
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
  