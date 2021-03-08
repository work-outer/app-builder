export const configProFormPassword = {
  name: '@steedos/builder-form:Password',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'password', required: true},
    { name: 'label', type: 'text', defaultValue: 'Password', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'placeholder', type: 'string'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']},
      { name: 'maxLength', type: 'number'},
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
