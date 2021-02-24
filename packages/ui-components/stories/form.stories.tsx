import * as React from "react"
import { 
  RecordEditForm, 
  RecordViewForm, 
  FormSection, 
  InputField, 
  OutputField, 
  InputLookup,
  SteedosContextWrap,
  RecordForm, 
} from "../src"

export default {
  title: "Form",
}

export const EditForm = () => (
  <RecordEditForm initialValues={{name: 'xxx', "email": "user@company.com"}}>
      <InputField fieldName="name" required label="Name" isWide placeholder="Please enter name." tooltip="Please input name" help="form help text"/>
      <InputField fieldName="email" label="Email" initialValue="user@company.com"/>
      <InputField fieldName="href" type="href" label="Href" initialValue="https://www.steedos.com"/>
      <InputField fieldName="number" type="number" label="Number"/>
      <InputField fieldName="datetime" type="datetime" label="Datetime"/>
      <InputField fieldName="date" type="date" label="Date"/>
      <InputField fieldName="number" type="number" label="Number"/>
      <InputField fieldName="lookup" type="lookup" label="Lookup"/>
  </RecordEditForm>
)


export const EditFormWithSection = () => (
    <RecordEditForm initialValues={{name: 'xxx', "email": "user@company.com"}}>
      <FormSection title="Section 1">
        <InputField fieldName="name" required label="Name" isWide placeholder="Please enter name." tooltip="Please input name" help="form help text"/>
        <InputField fieldName="email" label="Email"/>
        <InputField fieldName="href" type="href" label="Href"/>
        <InputField fieldName="number" type="number" label="Number"/>
        <InputField fieldName="datetime" type="datetime" label="Datetime"/>
        <InputField fieldName="date" type="date" label="Date"/>
        <InputField fieldName="number" type="number" label="Number"/>
        <InputField fieldName="lookup" type="lookup" label="Lookup"/>
        <SteedosContextWrap 
          rootUrl='http://localhost:8080/graphql'>  
          <InputLookup />
        </SteedosContextWrap>
      </FormSection>
      <FormSection title="Section 2">
        <InputField fieldName="select" type='select' label="Select"/>
      </FormSection>
    </RecordEditForm>
  )
  
export const ReadonlyForm = () => (
  <RecordViewForm>
    <FormSection title="Section 1">
      <OutputField fieldName="name" required label="Name" isWide placeholder="Please enter name." fieldLevelHelp="Please input name" value="123"/>
      <OutputField fieldName="email" readOnly label="Email" value="user@company.com"/>
      <OutputField fieldName="number" type="number" label="Number" value="111222"/>
      <OutputField fieldName="lookup" type="lookup" label="Lookup"/>
      <OutputField fieldName="href" type="href" label="Href" initialValue="https://www.steedos.com"/>
    </FormSection>
    <FormSection title="Section 2">
      <OutputField fieldName="name" label="Name" value="Jack Zhuang"/>
    </FormSection>
  </RecordViewForm>
)

export const objectForm = () => (
  <RecordForm objectApiName='accounts' recordId='wspdRw3z3gqkWBWWF'>

  </RecordForm>
)
