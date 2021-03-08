export const configProFormGroup = {
  name: '@steedos/builder-form:FormSection',
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
