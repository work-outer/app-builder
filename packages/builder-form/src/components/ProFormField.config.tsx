export const configProFormField = {
  name: '@steedos/builder-form:FormField',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'name'},
    { name: 'label', type: 'text', defaultValue: 'Label'},
    { name: 'valueType', type: 'text', defaultValue: 'text'},
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
