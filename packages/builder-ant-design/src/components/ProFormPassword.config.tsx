export const configProFormPassword = {
  name: '@steedos/builder-form:Password',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'password', required: true},
    { name: 'label', type: 'text', defaultValue: 'Password', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'placeholder', type: 'string'},
    { name: 'tooltip', type: 'string'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false, helperText: '禁用' },
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false, helperText: '可以点击清除图标删除内容' },
      { name: 'maxLength', type: 'number', helperText: '最大长度' },
    ]},
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please input password' }
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
