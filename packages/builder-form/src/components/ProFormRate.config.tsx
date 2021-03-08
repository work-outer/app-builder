export const configProFormRate = {
  name: '@steedos/builder-form:Rate',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'rate', required: true},
    { name: 'label', type: 'text', defaultValue: 'Rate', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
