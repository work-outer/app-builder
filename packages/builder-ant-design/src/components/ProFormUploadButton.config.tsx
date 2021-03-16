export const configProFormUploadButton = {
  name: '@steedos/builder-form:UploadButton',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'upload', required: true},
    { name: 'label', type: 'text', defaultValue: 'Upload Button', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'title', type: 'string'},
    { name: 'extra', type: 'string'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false, helperText: '是否禁用' },
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please select file' }
    ], helperText: '控制组件是否必填和校验信息'},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false,
  requiresParent: {
    message: 'This block must be inside a "Form" or "FormSection" or "FormList" or "Table" block',
    query: {
      'component.name': { $in: ['@steedos/builder-form:Form', '@steedos/builder-form:FormSection', '@steedos/builder-form:FormList', '@steedos/builder-form:Table'] }
    }
  }
};
