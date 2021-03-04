import * as React from "react"
import { 
  Form,
  FormSettings,
  FormField,
  FormFieldSettings,
  FieldSelect,
  FieldSelectSettings,
  FieldTextSettings,
  FieldText,
  FieldPasswordSettings,
  FieldPassword,
  FieldDatePickerSettings,
  FieldDatePicker,
  FieldDateTimePickerSettings,
  FieldDateTimePicker,
  FieldDateRangePickerSettings,
  FieldDateRangePicker
  
} from "../src"
import { builder, withChildren } from '@builder.io/react'

import { Builder, BuilderComponent } from '@builder.io/react';

export default {
  title: "Builder",
}

export const FormBuilder = () => {


  builder.init('e9ada5daeb6a4627bc2560d29916c080')

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
  Builder.registerComponent(FieldPassword, FieldPasswordSettings)
  Builder.registerComponent(FieldDatePicker, FieldDatePickerSettings)
  Builder.registerComponent(FieldDateTimePicker, FieldDateTimePickerSettings)
  Builder.registerComponent(FieldDateRangePicker, FieldDateRangePickerSettings)

  return (
    <BuilderComponent /> 
  )
}