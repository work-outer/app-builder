export const configProFormSwitch = {
  name: 'Steedos:FormSwitch',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'switch'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'label', type: 'string', defaultValue: 'Switch'}
  ],
  canHaveChildren: false
};
