export const configProFormText = {
  name: '@steedos/builder-form:Text',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'text', required: true},
    { name: 'label', type: 'text', defaultValue: 'Text Field', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'placeholder', type: 'string'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'initialValue', type: 'string' },
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']}
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  noWrap: false,
  canHaveChildren: false,
  requiresParent: {
    message: 'This block must be inside a "Form" or "Form Section" block',
    query: {
      'component.name': { $in: ['@steedos/builder-form:Form', '@steedos/builder-form:FormSection'] }
    }
  }
};
