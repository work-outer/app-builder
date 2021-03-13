import * as React from "react"
import { adapt } from "webcomponents-in-react";
import { BuilderComponent, builder } from '@builder.io/react';

import {
  ObjectProvider,
  ObjectTable
} from "../src/index"

export default {
  title: "Object Table",
}


declare var window;

const apiKey = 'e9ada5daeb6a4627bc2560d29916c080';

export const Editor = () => {

  if (!window.hasEditor) {
    const script = document.createElement("script");
    script.src = "https://cdn.builder.io/js/editor";
    script.async = true;
    document.body.appendChild(script);
    window.hasEditor = true;
  }

  const BuilderEditor = adapt("builder-editor");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=object-table--preview&viewMode=story',
  };
  const initialContent = {
    data: {
      blocks: [{
        "@type": "@builder.io/sdk:Element",
        "@version": 2,
        "id": "builder-0e6f5d94e39e41f0bc39bd42b55cd457",
        "component": {
          "name": "Text",
          "options": {
            "text": "<p>Steedos App Builder</p>"
          }
        },
        "responsiveStyles": {
          "large": {
            "marginLeft": "auto",
            "marginRight": "auto",
            "fontSize": "20px"
          }
        }
      }, {
        "@type": "@builder.io/sdk:Element",
        "@version": 2,
        "id": "builder-93a4e25cb18f469dbe013967acc94946",
        "component": {
          "name": "Steedos:ObjectTable",
          "options": {
            "objectApiName": "accounts",
            "columns": [
              {
                "fieldName": "name"
              },
              {
                "fieldName": "is_customer"
              }
            ]
          }
        },
        "responsiveStyles": {
          "large": {
            "display": "flex",
            "flexDirection": "column",
            "position": "relative",
            "flexShrink": "0",
            "boxSizing": "border-box",
            "marginTop": "20px"
          }
        }
      }]
    }
  }
  return (
    <BuilderEditor
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e: any) => {
        console.log(e)
      }}
      data={initialContent}
      env='production'
      options={builderOptions} />
  )
}

export const Fiddle = () => {

  if (!window.hasFiddle) {
    const script = document.createElement("script");
    script.src = "https://cdn.builder.io/js/fiddle";
    script.async = true;
    document.body.appendChild(script);
    window.hasFiddle = true;
  }

  const BuilderFiddle = adapt("builder-fiddle");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=object-table--preview&viewMode=story',
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

  builder.init(apiKey);

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

  const context = {
    currentObjectApiName: "accounts"
  };
  const data = {
    initialValues: { name: 'Hello World!' },
    columns: 3,
  }
  const content = {}//require('./object-field-table.builder.json');
  const bcProps = {
    apiKey,
    //content,
    context,
    data,
    onStateChange: (newData: any) => {
    }
  }

  const accountsJson = require('../../ui-components/stories/account.json')
  return (
    <ObjectProvider
      currentObjectApiName="accounts"
      requestObject={async (objectApiName) => {
        //objectApiName:对象api名称
        console.log("==in function==", objectApiName);
        return accountsJson;
      }}
      requestRecords={async (objectApiName, filters, fields, options) => {
        //objectApiName:对象api名称
        //filters: 过滤条件
        //fields: 要返回的字段
        return []
      }}
    >
      <BuilderComponent {...bcProps}>
      </BuilderComponent>
      <br /><br /><br />
    </ObjectProvider>
  )
}

export const ObjectTableSimple = () => {

  require('../src/builder-widgets');

  builder.init(apiKey);

  const fieldSectionContent = require('./table.builder.json');
  const data =  {
    formMode: 'read',
  }
  const bcProps = {
    apiKey,
    content: fieldSectionContent,
    data,
    onStateChange: (newData: any) => {
    }
  }

  const accountsJson = require('../../ui-components/stories/account.json')
  return (
    <ObjectProvider
      currentObjectApiName="accounts"
      requestObject={async (objectApiName) => {
        //objectApiName:对象api名称
        console.log("==in function==", objectApiName);
        return accountsJson;
      }}
      requestRecords={async (objectApiName, filters, fields, options) => {
        //objectApiName:对象api名称
        //filters: 过滤条件
        //fields: 要返回的字段
        const result: any = [{
          _id: "1",
          name: "张三",
          is_customer: true
        }];
        console.log("===request===table===", result);
        return {
          data: result,
          success: true,
          total: 1
        }
      }}
    >
      <BuilderComponent {...bcProps}>
      </BuilderComponent>
      <br /><br /><br />
    </ObjectProvider>
  )
}

