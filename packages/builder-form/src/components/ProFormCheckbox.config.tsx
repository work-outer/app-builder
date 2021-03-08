export const configProFormCheckbox = {
  name: '@steedos/builder-form:Checkbox',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'checkbox', required: true},
    { name: 'label', type: 'text', defaultValue: 'Checkbox', required: true},
    { name: 'options',  type: 'list', required: true, subFields: [
      { name: 'label', type: 'string', defaultValue: 'label' },
      { name: 'value', type: 'string', defaultValue: 'value' }  // value没有默认值会出错
    ]},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'disabled', type: 'boolean', defaultValue:false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'layout', type: 'string', defaultValue: 'vertical', enum: ['horizontal', 'vertical']},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
