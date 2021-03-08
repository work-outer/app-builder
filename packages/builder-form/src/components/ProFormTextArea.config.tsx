export const configProFormTextArea = {
  name: '@steedos/builder-form:Textarea',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'textarea'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'TextArea'},
    { name: 'placeholder', type: 'string'}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
