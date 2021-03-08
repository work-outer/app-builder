export const configProFormTextArea = {
  name: '@steedos/builder-form:Textarea',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'textarea', required: true},
    { name: 'label', type: 'text', defaultValue: 'TextArea', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'placeholder', type: 'string'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
