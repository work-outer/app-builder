export const configProFormUploadButton = {
  name: '@steedos/builder-form:UploadButton',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'upload'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Upload Button'},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
