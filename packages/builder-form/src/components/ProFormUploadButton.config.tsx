export const configProFormUploadButton = {
  name: '@steedos/builder-form:UploadButton',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'upload', required: true},
    { name: 'label', type: 'text', defaultValue: 'Upload Button', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'title', type: 'string'},
    { name: 'extra', type: 'string'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
