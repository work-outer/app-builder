export const configProForm = {
  name: 'Steedos:Form',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'initialValues', type: 'code', language: 'javascript'},
    { name: 'onValuesChange', type: 'code', language: 'javascript'},
    { name: 'onFinish', type: 'code', language: 'javascript'},
  ],
  canHaveChildren: true
};
