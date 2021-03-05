export const configProFormText = {
  name: 'Steedos:FormText',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'text'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Text Field'},
    { name: 'placeholder', type: 'string'}
  ],
  canHaveChildren: false
};
