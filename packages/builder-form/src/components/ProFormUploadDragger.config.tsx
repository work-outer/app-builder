export const configProFormUploadDragger = {
  name: '@steedos/builder-form:UploadDragger',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dragger', required: true},
    { name: 'label', type: 'text', defaultValue: 'Dragger', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
