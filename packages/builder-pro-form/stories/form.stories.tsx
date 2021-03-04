import * as React from "react"
import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from '@ant-design/pro-form';

import { ProFormSettings } from '../src';

import { Builder, BuilderComponent, builder, withChildren } from '@builder.io/react';

export default {
  title: "Pro Form",
}


export const Preview = () => {

  builder.init('e9ada5daeb6a4627bc2560d29916c080');

  Builder.register('editor.settings', {
    hideStyleTab: true, // Hide the style tab
    hideMainTabs: true, // Hide all main tabs
    hideDataTab: true, // Hide the data tab
    hideOptionsTab: true, // Hide the options tab
    hideToolbar: true, // Hide the main toolbar
    hideHeatMap: true, // Hide the heatmap button
    hidePageUrlEditor: false, // Hide the page URL editor
    hideAnimateTab: true, // Hide the animate tab
    hideInsertTab: false, // Hide the insert tab
    hideTargeting: false, // Hide the targeting UI
  });

  Builder.registerComponent(withChildren(ProForm), ProFormSettings);

  return (
      <BuilderComponent /> 
    )
  }
