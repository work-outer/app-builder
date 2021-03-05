export const configProFormCheckbox = {
  name: 'Steedos:FormCheckbox',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'checkbox'},
    { name: 'label', type: 'text', defaultValue: 'Checkbox'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'layout', type: 'string', defaultValue: 'vertical', enum: ['horizontal', 'vertical']},
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string', defaultValue: 'label' },
      { name: 'value', type: 'string', defaultValue: 'value' }  // value没有默认值会出错
    ]}
  ],
  canHaveChildren: false
};
