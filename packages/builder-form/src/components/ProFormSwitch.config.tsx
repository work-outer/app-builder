export const configProFormSwitch = {
  name: 'Steedos:FormSwitch',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'switch'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'string', defaultValue: 'Switch'},
    { name: 'className', type: 'string'},
    { name: 'defaultChecked', type: 'boolean'},
    { name: 'disabled', type: 'boolean'},
    { name: 'size', type: 'string', enum: ['default', 'small']}
  ],
  canHaveChildren: false
};
