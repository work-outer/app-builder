export const configField = {
  name: '@steedos/builder-form:Field',
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
    marginBottom: '0',
  },
  noWrap: true,
  canHaveChildren: false,
  requiresParent: {
    message: 'This block must be inside a "Field Section" block',
    query: {
      'component.name': { $in: ['@steedos/builder-form:FieldSection'] }
    }
  }
};
