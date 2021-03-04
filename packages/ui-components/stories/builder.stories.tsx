import * as React from "react"
import { 
  Form,
  FormSettings,
  FormField,
  FormFieldSettings,
  FieldSelect,
  FieldSelectSettings,
  FieldTextSettings,
  FieldText
  
} from "../src"
import { builder, withChildren } from '@builder.io/react'

import { Builder, BuilderComponent } from '@builder.io/react';

builder.init('e9ada5daeb6a4627bc2560d29916c080')

export default {
  title: "Builder",
}


Builder.register('editor.settings', {
  hideStyleTab: true,      // Hide the style tab
  hideMainTabs: true,      // Hide all main tabs
  hideDataTab: true ,      // Hide the data tab
  hideOptionsTab: true,    // Hide the options tab
  hideToolbar: true,       // Hide the main toolbar
  hideHeatMap: true,       // Hide the heatmap button
  hidePageUrlEditor: false, // Hide the page URL editor
  hideAnimateTab: true,    // Hide the animate tab
  hideInsertTab: false,     // Hide the insert tab
  hideTargeting: false,     // Hide the targeting UI
})


Builder.registerComponent(withChildren(Form), FormSettings)
Builder.registerComponent(FormField, FormFieldSettings)
Builder.registerComponent(FieldSelect, FieldSelectSettings)
Builder.registerComponent(FieldText, FieldTextSettings)


// Register our heading component for use in 
// the visual editor
const Heading = (props:any) => (
  <h1 >{props.title}</h1>
)
 
Builder.registerComponent(Heading, { 
  name: 'Heading',
  inputs: [{ name: 'title', type: 'text' }]
})

export const FormBuilder = () => (
  <BuilderComponent /> 
)
