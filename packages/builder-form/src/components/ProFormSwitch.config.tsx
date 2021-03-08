export const configProFormSwitch = {
  name: '@steedos/builder-form:Switch',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'switch'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'label', type: 'string', defaultValue: 'Switch'},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'defaultChecked', type: 'boolean', defaultValue: false, required: true},
    ]}
  ],
  canHaveChildren: false
};
