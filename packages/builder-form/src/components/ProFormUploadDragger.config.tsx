export const configProFormUploadDragger = {
  name: 'Steedos:FormUploadDragger',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dragger'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Dragger'},
  ],
  canHaveChildren: false
};
