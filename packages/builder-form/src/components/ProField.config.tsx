export const configProField = {
  name: '@steedos/builder-form:ProField',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca',
  inputs: [
    { name: 'text', helpText: '需要格式化的值', type: 'text', defaultValue: ''},
    { name: 'valueType', helpText: '格式化的类型', type: 'text', defaultValue: 'text'},
    { name: 'mode', helpText: '组件的模式', type: 'text', defaultValue: 'read'},
    { name: 'plain', helpText: '精简模式', type: 'boolean', defaultValue: 'false'},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  noWrap: false,
  canHaveChildren: false,
};
