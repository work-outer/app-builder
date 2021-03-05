export const configProFormSwitch = {
  name: 'Steedos:FormSwitch',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'switch'},
    { name: 'label', type: 'string', defaultValue: 'Switch'},
    { name: 'className', type: 'string'},
    { name: 'defaultChecked', type: 'boolean'},
    { name: 'disabled', type: 'boolean'},
    { name: 'size', type: 'string', enum: ['default', 'small']}
  ],
  canHaveChildren: false
};
