export const configFieldObject = {
  name: 'Steedos:FieldObject',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'object'},
    { name: 'label', type: 'text', defaultValue: 'Object'},
  ],
  defaultStyles: {
    display: 'block',
    minHeight: '50px',
    marginTop: '0',
  },
  noWrap: false,
  canHaveChildren: true,
  // requiresParent: {
  //   message: 'This block must be inside a "Form" block',
  //   query: {
  //     'component.name': { $in: ['@steedos/builder-form:Form'] }
  //   }
  // }
};
