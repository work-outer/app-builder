export const configProFormTextArea = {
  name: 'Steedos:FormTextArea',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'textarea'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'TextArea'},
    { name: 'placeholder', type: 'string'}
  ],
  canHaveChildren: false
};
