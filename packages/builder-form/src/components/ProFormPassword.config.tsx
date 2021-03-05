export const configProFormPassword = {
  name: 'Steedos:FormPassword',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'password'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Password'},
    { name: 'placeholder', type: 'string'}
  ],
  canHaveChildren: false
};
