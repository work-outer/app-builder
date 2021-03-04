import * as React from "react"
import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from '@ant-design/pro-form';

import { adapt } from "webcomponents-in-react";

import { Builder, BuilderComponent, builder, withChildren } from '@builder.io/react';

export default {
  title: "Pro Form",
}



export const Editor = () => {

  const BuilderEditor = adapt("builder-editor");
  const builderOptions = {
    useDefaultStyles: false,
    hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=pro-form--preview&viewMode=story',
  };
  const builderData = {}
  return (
    <BuilderEditor
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e:any) => {
        console.log(e)
      }}
      data={{}}
      env='production'
      options={builderOptions}/>
  ) 
}


export const Preview = () => {

  builder.init('e9ada5daeb6a4627bc2560d29916c080');

  Builder.register('editor.settings', {
    hideStyleTab: true, // Hide the style tab
    hideMainTabs: true, // Hide all main tabs
    hideDataTab: true, // Hide the data tab
    hideOptionsTab: true, // Hide the options tab
    hideToolbar: false, // Hide the main toolbar
    hideHeatMap: true, // Hide the heatmap button
    hidePageUrlEditor: false, // Hide the page URL editor
    hideAnimateTab: true, // Hide the animate tab
    hideInsertTab: false, // Hide the insert tab
    hideTargeting: false, // Hide the targeting UI
  });

  require('../src');

  return (
      <BuilderComponent data={{}} /> 
    )
}

