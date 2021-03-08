export const configProFormSwitch = {
  name: '@steedos/builder-form:Switch',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'switch', required: true},
    { name: 'label', type: 'string', defaultValue: 'Switch', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'defaultChecked', type: 'boolean', defaultValue: false, required: true},
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
