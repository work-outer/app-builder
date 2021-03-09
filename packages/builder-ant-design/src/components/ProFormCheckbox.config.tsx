export const configProFormCheckbox = {
  name: '@steedos/builder-form:Checkbox',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'checkbox', required: true},
    { name: 'label', type: 'text', defaultValue: 'Checkbox', required: true},
    { name: 'options',  type: 'list', required: true, subFields: [
      { name: 'value', type: 'string', defaultValue: 'value' },
      { name: 'label', type: 'string', defaultValue: 'label' }        // value没有默认值会出错
    ]},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'disabled', type: 'boolean', defaultValue:false, helperText: '禁用' },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'layout', type: 'string', defaultValue: 'vertical', enum: ['horizontal', 'vertical'], helperText: '配置 checkbox 的样子' },
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please select...' }
    ], helperText: '控制组件是否必填和校验信息'},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
