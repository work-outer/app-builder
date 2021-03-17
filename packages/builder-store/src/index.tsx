import { types } from "mobx-state-tree"

export const FormFieldModel = types.model({
  id: types.identifier,
  name: types.string,
  required: types.boolean,
  readonly: types.boolean,
})

export const FormModel = types.model({
  id: types.identifier,
  // objectApiName: types.string,
  // fields: types.array(FormFieldModel),
  mode: types.string, // 'read' | 'edit'
}).actions(self => ({
  // note the `({`, we are returning an object literal
  setMode(newMode: string) {
    self.mode = newMode
  }
}))

export const ObjectModel = types.model({
  id: types.identifier,
  datasource: types.string,
  json: types.string
})

// Define a store just like a model
export const RootStore = types.model({
  currentObjectApiName: types.union(types.string, types.undefined), 
  currentRecordId: types.union(types.string, types.undefined), 
  forms: types.map(FormModel),
  objects: types.map(ObjectModel)
})

export const store = RootStore.create({
  forms: {},
  objects: {},
})