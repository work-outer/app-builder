export const configProForm = {
  name: '@steedos/builder-form:Form',
  image:
  'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fef36d2a846134910b64b88e6d18c5ca5',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'columns', type: 'number', defaultValue: 2},
    { name: 'layout', type: 'string', defaultValue: 'horizontal', enum: ['horizontal', 'vertical', 'inline']},
    { name: 'initialValues', helperText:'表单默认值，只有初始化以及重置时生效。', type: 'code', language: 'javascript', defaultValue: "({})"},
    { name: 'onValuesChange', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
    { name: 'onFinish', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
  ],
  canHaveChildren: true
};
