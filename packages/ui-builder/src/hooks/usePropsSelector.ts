import { useSelector } from 'react-redux'
import { RootState } from '~core/store'
// import { getDefaultFormProps } from '~utils/defaultProps'
import { useInspectorUpdate } from '~contexts/inspector-context'
import { useEffect } from 'react'
import { getComponentDefaultProps } from '~core/selectors/types'

const usePropsSelector = (propsName: string) => {
  const { addActiveProps } = useInspectorUpdate()

  useEffect(() => {
    // Register form props name for custom props panel
    addActiveProps(propsName)
  }, [addActiveProps, propsName])

  const value = useSelector((state: RootState) => {
    const component =
      state.components.present.components[state.components.present.selectedId]
    const propsValue = component.props[propsName]

    if (propsValue !== undefined) {
      return propsValue
    }

    const prop = getComponentDefaultProps(component.type)(state)

    if (prop && prop[propsName] !== undefined) {
      return prop[propsName]
    }

    return ''
  })

  return value
}

export default usePropsSelector
