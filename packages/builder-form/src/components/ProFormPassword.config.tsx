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
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
