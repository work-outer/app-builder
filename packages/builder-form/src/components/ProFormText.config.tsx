export const configProFormText = {
  name: 'Steedos:FormText',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'text'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Text Field'},
    { name: 'placeholder', type: 'string'},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']},
      { name: 'bordered', type: 'boolean', defaultValue: true},
      { name: 'defaultValue', type: 'string'}
    ]}
  ],
  canHaveChildren: false
};
