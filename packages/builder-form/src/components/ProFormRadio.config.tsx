export const configProFormRadio = {
  name: '@steedos/builder-form:Radio',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'radio', required: true},
    { name: 'label', type: 'text', defaultValue: 'Radio', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'options',  type: 'list', required: true, subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]},
    { name: 'disabled', type: 'boolean', defaultValue:false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'radioType', type: 'string', defaultValue: 'radio', enum:['radio', 'button']}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
