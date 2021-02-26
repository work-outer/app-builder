import { createModel } from '@rematch/core'


/**
 * components格式如下：
  {
    "@steedos/ui-components/form-section": {
        "component": FormSection,
        "componentPreview": FormSectionPreview,
        //"componentSettings": FormSectionSettings,
        "componentProps": [{
          name: 
          valueType:
          ...
        }],
        "droppable": ["@steedos/ui-components/form-item"],
    },
    "@steedos/ui-components/form-item": {
        "component": FormItem,
        "componentPreview": FormItemPreview,
        //"componentSettings": FormItemSettings,
        "componentProps": [{
          name: 
          valueType:
          ...
        }],
        "droppable": true,
    }
  }
 * customValueTypes中是配置components中componentProps属性中配置valueType时希望扩展的自定义的valueType可选项
 */

export type ComponentTypesState = {
  components: any,
  customValueTypes: any
}

const types = createModel({
  state: {
    components: {},
    customValueTypes: {}
  } as ComponentTypesState,
  reducers: {
    setComponents(state: ComponentTypesState, components: any): ComponentTypesState {
      return {
        ...state,
        components: components
      }
    },
    setCustomValueTypes(state: ComponentTypesState, customValueTypes: any): ComponentTypesState {
      return {
        ...state,
        customValueTypes: customValueTypes
      }
    }
  },
})

export default types
