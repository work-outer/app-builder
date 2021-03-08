export const configProFormRate = {
  name: '@steedos/builder-form:Rate',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'rate'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Rate'},
  ],
  canHaveChildren: false
};
