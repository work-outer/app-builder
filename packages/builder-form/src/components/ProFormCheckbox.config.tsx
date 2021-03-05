export const configProFormCheckbox = {
  name: 'Steedos:FormCheckbox',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'checkbox'},
    { name: 'label', type: 'text', defaultValue: 'Checkbox'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'layout', type: 'string', defaultValue: 'vertical', enum: ['horizontal', 'vertical']},
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]}
  ],
  canHaveChildren: false
};
