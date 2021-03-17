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

export const TableModel = types.model({
  id: types.identifier
}).actions(self => ({
}))

export const ObjectModel = types.model({
  id: types.identifier,
  datasource: types.string,
  json: types.string
})

// Define a store just like a model
export const RootStore = types.model({
  currentObjectApiName: types.union(types.string, types.undefined, types.null), 
  currentRecordId: types.union(types.string, types.undefined, types.null), 
  forms: types.map(FormModel),
  tables: types.map(TableModel),
  objects: types.map(ObjectModel)
}).actions(self => ({
  setCurrentObjectApiName(name: string) {
    self.currentObjectApiName = name;
  },
  setCurrentRecordId(id: string) {
    self.currentRecordId = id;
  }
}))

export const store = RootStore.create({
  currentObjectApiName: null,
  currentRecordId: null,
  forms: {},
  tables: {},
  objects: {},
})