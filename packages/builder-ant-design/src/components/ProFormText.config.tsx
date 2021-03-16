export const configProFormText = {
  name: '@steedos/builder-form:Text',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'text', required: true },
    { name: 'label', type: 'text', defaultValue: 'Text Field', required: true },
    { name: 'readonly', type: 'boolean', defaultValue: false },
    { name: 'placeholder', type: 'string' },
    { name: 'tooltip', type: 'string' },
    { name: 'disabled', type: 'boolean', defaultValue: false, helperText: '禁用' },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'initialValue', type: 'string' },
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please input...' }
    ], helperText: '控制组件是否必填和校验信息'},
    {
      name: 'fieldProps', type: 'object', subFields: [
        { name: 'allowClear', type: 'boolean', defaultValue: false, helperText: '可以点击清除图标删除内容' }
      ]
    }
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  noWrap: false,
  canHaveChildren: false,
  requiresParent: {
    message: 'This block must be inside a "Form" or "FormSection" or "FormList" or "Table" block',
    query: {
      'component.name': { $in: ['@steedos/builder-form:Form', '@steedos/builder-form:FormSection', '@steedos/builder-form:FormList', '@steedos/builder-form:Table'] }
    }
  }
};
