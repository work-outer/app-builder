export const configProFormRadio = {
  name: '@steedos/builder-form:Radio',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'radio'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Radio'},
    { name: 'radioType', type: 'string', defaultValue: 'radio', enum:['radio', 'button']},
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]}
  ],
  canHaveChildren: false
};
