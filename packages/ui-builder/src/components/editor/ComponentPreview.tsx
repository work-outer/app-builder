import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import AlertPreview from '~components/editor/previews/AlertPreview'
import AvatarPreview, {
  AvatarBadgePreview,
  AvatarGroupPreview,
} from '~components/editor/previews/AvatarPreview'
import AccordionPreview, {
  AccordionButtonPreview,
  AccordionItemPreview,
  AccordionPanelPreview,
} from '~components/editor/previews/AccordionPreview'
import * as Chakra from '@chakra-ui/react'
// import * as SteedosUI from '@steedos/ui-components'
import { getComponentBy } from '~core/selectors/components'
import { InputRightElementPreview } from '~components/editor/previews/InputRightElement'
import { InputLeftElementPreview } from '~components/editor/previews/InputLeftElement'
import AspectRatioPreview from '~components/editor/previews/AspectRatioBoxPreview'
import ButtonPreview from '~components/editor/previews/ButtonPreview'
import PreviewContainer from '~components/editor/PreviewContainer'
import WithChildrenPreviewContainer from '~components/editor/WithChildrenPreviewContainer'
import IconPreview from './previews/IconPreview'
import IconButtonPreview from './previews/IconButtonPreview'
import SelectPreview from '~components/editor/previews/SelectPreview'
import NumberInputPreview from '~components/editor/previews/NumberInputPreview'
import { getPreviewComponent, getDroppable } from '~core/selectors/types'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  console.log("===ComponentPreview===componentName==", componentName);
  console.log("===ComponentPreview===forwardedProps==", forwardedProps);
  const component = useSelector(getComponentBy(componentName))
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null
  console.log("===ComponentPreview==component===", component);
  const previewComponentType = useSelector(getPreviewComponent(type))
  if (!previewComponentType) {
    console.error(`ComponentPreview unavailable for component type ${type}`)
  }
  const droppable = useSelector(getDroppable(type))
  if(typeof droppable === "boolean" || (droppable instanceof Array && droppable.length)){
    if(droppable === true){
      // 表示可以拖入任意控件类型到这里
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={previewComponentType}
          {...forwardedProps}
        />
      )
    }
    else{
      // 表示可以拖入droppable数组中指定的控件类型到这里
      const accept:any = droppable;
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={previewComponentType}
          accept={accept}
          {...forwardedProps}
        />
      )
    }
  }
  else{
    // 表示不可以拖入控件到这里
    return (
      <PreviewContainer
        component={component}
        type={previewComponentType}
        {...forwardedProps}
      />
    )
  }
  /*
  switch (type) {
    case 'FormSection':
      // return <AccordionPreview component={component} />
      return <ButtonPreview component={component} />
    // 以下是Chakra组件
    // Simple components
    case 'Badge':
    case 'Image':
    case 'Text':
    case 'Link':
    case 'Spinner':
    case 'Checkbox':
    case 'Textarea':
    case 'CircularProgress':
    case 'Heading':
    case 'Switch':
    case 'FormLabel':
    case 'FormHelperText':
    case 'FormErrorMessage':
    case 'TabPanel':
    case 'Tab':
    case 'Input':
    case 'Radio':
    case 'ListItem':
    case 'BreadcrumbLink':
      return (
        <PreviewContainer
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
        />
      )
    // Wrapped functional components (forward ref issue)
    case 'AlertIcon':
    case 'Progress':
    case 'CloseButton':
    case 'AccordionIcon':
    case 'Code':
    case 'ListIcon':
    case 'Divider':
    case 'AlertDescription':
    case 'AlertTitle':
    case 'InputRightAddon':
    case 'InputLeftAddon':
    case 'Tag':
      return (
        <PreviewContainer
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    // Components with childrens
    case 'Box':
    case 'SimpleGrid':
    case 'Flex':
    case 'FormControl':
    case 'Tabs':
    case 'List':
    case 'TabList':
    case 'TabPanels':
    case 'Grid':
    case 'Center':
    case 'Container':
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
        />
      )
    case 'RadioGroup':
    case 'Stack':
    case 'Breadcrumb':
    case 'InputGroup':
    case 'BreadcrumbItem':
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    // More complex components
    case 'InputRightElement':
      return <InputRightElementPreview component={component} />
    case 'InputLeftElement':
      return <InputLeftElementPreview component={component} />
    case 'Avatar':
      return <AvatarPreview component={component} />
    case 'AvatarBadge':
      return <AvatarBadgePreview component={component} />
    case 'AvatarGroup':
      return <AvatarGroupPreview component={component} />
    case 'Alert':
      return <AlertPreview component={component} />
    case 'Accordion':
      return <AccordionPreview component={component} />
    case 'AccordionButton':
      return <AccordionButtonPreview component={component} />
    case 'AccordionItem':
      return <AccordionItemPreview component={component} />
    case 'AccordionPanel':
      return <AccordionPanelPreview component={component} />
    case 'AspectRatio':
      return <AspectRatioPreview component={component} />
    case 'Button':
      return <ButtonPreview component={component} />
    case 'Icon':
      return <IconPreview component={component} />
    case 'IconButton':
      return <IconButtonPreview component={component} />
    case 'Select':
      return <SelectPreview component={component} />
    case 'NumberInput':
      return <NumberInputPreview component={component} />
    default:
      return null
  }
  */
}

export default memo(ComponentPreview)
