import { Builder } from '@builder.io/react';
import _ from 'lodash';
import { ObjectField } from "../";

export const configObjectField: any = {
  name: 'Steedos:ObjectField',
  inputs: [
    // { name: 'fieldName', type: 'text', friendlyName: "字段名" },
    // { name: 'required', type: 'boolean', friendlyName: "必须" },
    // { name: 'readonly', type: 'boolean', friendlyName: "只读" }
  ],
  canHaveChildren: false
};

export const registerObjectFieldComponent = (fieldNames: string[]) => {
  let configInputs = _.clone(configObjectField.inputs);
  configInputs.unshift({
    name: 'fieldName', 
    type: 'string', 
    enum: fieldNames,
    helperText: '请选择字段名'
  });
  const config = Object.assign({}, configObjectField, {inputs: configInputs});
  Builder.registerComponent(ObjectField, config);
}
