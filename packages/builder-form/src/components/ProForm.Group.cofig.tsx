export const configProFormGroup = {
  name: '@steedos/builder-form:FormSection',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a',
  inputs: [
    { name: 'title', type: 'text', defaultValue: 'Form Section' },
  ],
  canHaveChildren: true,
  requiresParent: {
    message: 'This block must be inside a "Form"  block',
    query: {
      'component.name': { $in: ['@steedos/builder-form:Form'] }
    }
  }
};
