import { RootState } from '~core/store'
import { DEFAULT_PROPS } from '~utils/defaultProps'

export const getTypes = (state: RootState) => state.types.components

export const getTypeNames = (state: RootState) => Object.keys(getTypes(state))

export const getType = (type: string) => (
  state: RootState,
) => getTypes(state)[type]

export const getComponent = (type: string) => (
  state: RootState,
) => {
  const t = getType(type)(state);
  return t && t["component"];
}

export const getPreviewComponent = (type: string) => (
  state: RootState,
) => {
  const t = getType(type)(state);
  if(!t){
    return null;
  }
  const p = t["componentPreview"];
  return p ? p : t["component"];
}

export const getSettingsComponent = (type: string) => (
  state: RootState,
) => {
  const t = getType(type)(state);
  return t && t["componentSettings"];
}

export const getComponentProps = (type: string) => (
  state: RootState,
) => {
  const t = getType(type)(state);
  return t && t["componentProps"];
}

export const getDroppable = (type: string) => (
  state: RootState,
) => {
  const t = getType(type)(state);
  return t && t["droppable"];
}

export const getComponentDefaultProps = (type: string) => (
  state: RootState,
) => {
  const t = getType(type)(state);
  if(!t){
    return null;
  }
  const typeDefaultProps = t && t["defaultProps"];
  const component = t["component"];
  const componentDefaultProps = component && component.defaultProps;
  const formDefaultProps:any = DEFAULT_PROPS[type]?.form;
  return { ...componentDefaultProps, ...formDefaultProps, ...typeDefaultProps }
}

export const getCustomValueTypes = (state: RootState) => state.types.customValueTypes