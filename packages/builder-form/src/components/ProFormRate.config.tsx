export const configProFormRate = {
  name: 'Steedos:FormRate',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'rate'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Rate'},
  ],
  canHaveChildren: false
};
