export const configProFormCheckbox = {
  name: 'Steedos:FormCheckbox',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'checkbox'},
    { name: 'label', type: 'text', defaultValue: 'Checkbox'},
    { name: 'layout', type: 'stirng', defaultValue: 'vertical'},
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]}
  ],
};
