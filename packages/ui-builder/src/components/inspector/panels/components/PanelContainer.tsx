import React, { memo } from 'react'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import { useSelector } from 'react-redux'
import { getSettingsComponent } from '~core/selectors/types'

const PanelContainer: React.FC<{
  type: string
}> = ({
  type
}) => {
  const { setValueFromEvent, setValue } = useForm()
  const children = usePropsSelector('children')

  const settingsComponentType = useSelector(getSettingsComponent(type))
  if (!settingsComponentType) {
    console.error(`PanelContainer unavailable for component type ${type}`)
  }
  

  const settingsComponent = React.createElement(settingsComponentType, {
    value: {children: children},
    onChange: (name: string, value: any)=>{
      setValue(name, value)
    }
  })

  return settingsComponent

  // const size = usePropsSelector('size')
  // const variant = usePropsSelector('variant')

  // return (
  //   <>
  //     <ChildrenControl />

  //     <SizeControl name="size" label="Size" value={size} />

  //     <FormControl htmlFor="variant" label="Variant">
  //       <Select
  //         id="variant"
  //         onChange={setValueFromEvent}
  //         name="variant"
  //         size="sm"
  //         value={variant || ''}
  //       >
  //         <option>outline</option>
  //         <option>ghost</option>
  //         <option>unstyled</option>
  //         <option>link</option>
  //         <option>solid</option>
  //       </Select>
  //     </FormControl>

  //     <ColorsControl label="Color Scheme" name="colorScheme" />
  //     <IconControl label="Left icon" name="leftIcon" />
  //     <IconControl label="Right icon" name="rightIcon" />
  //   </>
  // )
}

export default memo(PanelContainer)
