export const configProFormPassword = {
  name: 'Steedos:FormPassword',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'password'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Password'},
    { name: 'placeholder', type: 'string'},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']},
      { name: 'bordered', type: 'boolean', defaultValue: true},
      { name: 'maxLength', type: 'number'},
      { name: 'defaultValue', type: 'string'}
    ]}
  ],
  canHaveChildren: false
};
