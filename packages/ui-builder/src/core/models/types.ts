import { createModel } from '@rematch/core'


/**
 * components格式如下：
  {
    "@steedos/ui-components/form-section": {
        "component": FormSection,
        "componentPreview": FormSectionPreview,
        "componentSettings": FormSectionSettings,
        "droppable": ["@steedos/ui-components/form-item"],
    },
    "@steedos/ui-components/form-item": {
        "component": FormItem,
        "componentPreview": FormItemPreview,
        "componentSettings": FormItemSettings,
        "droppable": true,
    }
  }
 */

export type ComponentTypesState = {
  components: any
}

const types = createModel({
  state: {
    components: {}
  } as ComponentTypesState,
  reducers: {
    setComponents(state: ComponentTypesState, components: any): ComponentTypesState {
      return {
        ...state,
        components: components
      }
    }
  },
})

export default types
