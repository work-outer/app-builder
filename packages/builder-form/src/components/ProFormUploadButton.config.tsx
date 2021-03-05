export const configProFormUploadButton = {
  name: 'Steedos:FormUploadButton',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'upload'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Upload Button'},
  ],
  canHaveChildren: false
};
