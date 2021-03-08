export const configProFormRadio = {
  name: '@steedos/builder-form:Radio',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'radio', required: true},
    { name: 'label', type: 'text', defaultValue: 'Radio', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'options',  type: 'list', required: true, subFields: [
      { name: 'value', type: 'string' },
      { name: 'label', type: 'string' }
    ]},
    { name: 'disabled', type: 'boolean', defaultValue:false, helperText: '禁用' },
    { name: 'initialValue', type: 'string' },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'radioType', type: 'string', defaultValue: 'radio', enum:['radio', 'button'], helperText: '设置是按钮模式还是 radio 模式' }
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
