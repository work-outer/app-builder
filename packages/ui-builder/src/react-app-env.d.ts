/// <reference types="react-scripts" />;
declare module 'prettier/standalone'
declare module 'coloreact'
declare module 'browser-nativefs'

// import React, { FunctionComponent, ComponentClass } from 'react'

// type ComponentType =
//   | 'FormSection'
//   // 以下是Chakra组件
//   | 'Accordion'
//   | 'AccordionItem'
//   | 'AccordionButton'
//   | 'AccordionPanel'
//   | 'AccordionIcon'
//   | 'Alert'
//   | 'AlertIcon'
//   | 'AlertTitle'
//   | 'AlertDescription'
//   | 'AspectRatio'
//   | 'AvatarBadge'
//   | 'AvatarGroup'
//   | 'Avatar'
//   | 'Badge'
//   | 'Box'
//   | 'Breadcrumb'
//   | 'BreadcrumbItem'
//   | 'BreadcrumbLink'
//   | 'Button'
//   | 'Center'
//   | 'Checkbox'
//   | 'CircularProgress'
//   | 'CloseButton'
//   | 'Code'
//   | 'Container'
//   | 'Divider'
//   | 'Editable'
//   | 'Flex'
//   | 'FormControl'
//   | 'FormLabel'
//   | 'FormHelperText'
//   | 'FormErrorMessage'
//   | 'Grid'
//   | 'Heading'
//   | 'Icon'
//   | 'IconButton'
//   | 'Image'
//   | 'Input'
//   | 'InputGroup'
//   | 'InputLeftAddon'
//   | 'InputRightAddon'
//   | 'InputLeftElement'
//   | 'InputRightElement'
//   | 'Link'
//   | 'List'
//   | 'ListItem'
//   | 'ListIcon'
//   | 'Menu'
//   | 'NumberInput'
//   | 'Progress'
//   | 'Radio'
//   | 'RadioGroup'
//   | 'Select'
//   | 'SimpleGrid'
//   | 'Spinner'
//   | 'Stack'
//   | 'Switch'
//   | 'Tab'
//   | 'Tabs'
//   | 'TabList'
//   | 'TabPanel'
//   | 'TabPanels'
//   | 'Tag'
//   | 'Text'
//   | 'Textarea'

// type MetaComponentType =
//   | 'FormControlMeta'
//   | 'AccordionMeta'
//   | 'ListMeta'
//   | 'AlertMeta'
//   | 'InputGroupMeta'
//   | 'BreadcrumbMeta'

type ComponentType = string | FunctionComponent<any> | ComponentClass<any, any>

interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface ComponentItemProps {
  id?: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType, 
  defaultProps?: any
}

interface ComponentPropsItemConfig {
  name: string
  valueType: string
}

interface ComponentTypeProps {
  component: string | FunctionComponent<any> | ComponentClass<any, any>,
  componentSettings?: string | FunctionComponent<any> | ComponentClass<any, any>,
  componentProps?: Array<ComponentPropsItemConfig>,
  droppable?: Array<string> | boolean
}

interface UIBuilderComponentsItemProps {
  type: string,
  label: string,
  props?: any
}

interface UIBuilderComponentsGroupProps {
  label: string,
  expanded?: boolean,
  children: Array<UIBuilderComponentsItemProps>
}

interface UIBuilderComponentProps {
  components: any,//一个json，key为componentTree中children元素中的type，value为ComponentTypeProps类型
  customValueTypes?: any,//一个json，用于配置components中componentProps属性中配置valueType时希望扩展的自定义的valueType可选项
  componentTree: Array<UIBuilderComponentsGroupProps>
}

interface UIBuilderSidebarComponentProps {
  componentTree: Array<UIBuilderComponentsGroupProps>
}