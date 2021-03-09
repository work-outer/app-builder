import * as React from "react"
import { adapt } from "webcomponents-in-react";
import { BuilderComponent, builder } from '@builder.io/react';

import {
  ObjectProvider
} from "../src/providers/ObjectProvider"

export default {
  title: "Object Form",
}



export const Editor = () => {

  const script = document.createElement("script");
  script.src = "https://cdn.builder.io/js/editor";
  script.async = true;
  document.body.appendChild(script);

  const BuilderEditor = adapt("builder-editor");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=object-form--preview&viewMode=story',
  };
  const builderData = {}
  return (
    <BuilderEditor
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e: any) => {
        console.log(e)
      }}
      data={{}}
      env='production'
      options={builderOptions} />
  )
}

export const Fiddle = () => {

  const script = document.createElement("script");
  script.src = "https://cdn.builder.io/js/fiddle";
  script.async = true;
  document.body.appendChild(script);

  const BuilderFiddle = adapt("builder-fiddle");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=object-form--preview&viewMode=story',
  };
  const builderData = {}
  return (
    <BuilderFiddle
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e: any) => {
        console.log(e)
      }}
      data={{}}
      env='production'
      options={builderOptions} />
  )
}


export const Preview = () => {

  builder.init('e9ada5daeb6a4627bc2560d29916c080');

  // Builder.register('editor.settings', {
  //   hideStyleTab: false, // Hide the style tab
  //   hideMainTabs: true, // Hide all main tabs
  //   hideDataTab: false, // Hide the data tab
  //   hideOptionsTab: true, // Hide the options tab
  //   hideToolbar: false, // Hide the main toolbar
  //   hideHeatMap: true, // Hide the heatmap button
  //   hidePageUrlEditor: false, // Hide the page URL editor
  //   hideAnimateTab: true, // Hide the animate tab
  //   hideInsertTab: false, // Hide the insert tab
  //   hideTargeting: false, // Hide the targeting UI
  // });

  require('../src/builder-widgets');

  return (
    <ObjectProvider
      requestObject = {async (objectApiName) => {
        //objectApiName:对象api名称
        console.log("==in function==",objectApiName);
        return {
          "name": "accounts",
          "fields": {
            "name": {
              "label": "客户名",
              "type": "text",
              "searchable": true,
              "required": true,
              "sortable": true,
              "index": true,
              "name": "name",
              "sort_no": 10,
              "help": "请输入客户名"
            },
            "is_supplier": {
              "type": "boolean",
              "label": "供应商",
              "hidden": true,
              "omit": true,
              "sort_no": 30,
              "name": "is_supplier",
              "help": "是否供应商客户"
            }
          }
        }
      }}
      requestRecords = {async (objectApiName, filters, fields , options) => {
        //objectApiName:对象api名称
        //filters: 过滤条件
        //fields: 要返回的字段
        return []
      }}
    >
      <BuilderComponent data={{}} />
      <br /><br /><br />
    </ObjectProvider>
  )
}

