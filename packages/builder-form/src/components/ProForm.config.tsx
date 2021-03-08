export const configProForm = {
  name: '@steedos/builder-form:Form',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fef36d2a846134910b64b88e6d18c5ca5',
  inputs: [
    { name: 'name', type: 'string', helperText: '表单名称，会作为表单字段 id 前缀使用' },
    { name: 'columns', type: 'number', defaultValue: 2 },
    { name: 'layout', type: 'string', defaultValue: 'vertical', enum: ['horizontal', 'vertical', 'inline'], helperText: '表单布局' },
    { name: 'labelAlign', type: 'string', enum: ['left', 'right'], defaultValue: 'right', helperText: 'label 标签的文本对齐方式' },
    { name: 'size', type: 'string', enum: ['small', 'middle', 'large'], defaultValue: 'middle', helperText: '设置字段组件的尺寸' },
    { name: 'initialValues', type: 'code', language: 'javascript', defaultValue: "({})", helperText: '表单默认值，只有初始化以及重置时生效。' },
    { name: 'onValuesChange', type: 'code', language: 'javascript', defaultValue: "(values) => {  }", helperText: '字段值更新时触发回调事件' },
    { name: 'onFinish', type: 'code', language: 'javascript', defaultValue: "(values) => {  }", helperText: '提交表单且数据验证成功后回调事件' },
    { name: 'preserve', type: 'boolean', defaultValue: 'true', helperText: '当字段被删除时保留字段值' },
    { name: 'submitter', type: 'boolean', defaultValue: 'true', helperText: '提交按钮相关配置' },
    { name: 'scrollToFirstError', type: 'boolean', defaultValue: 'false', helperText: ' 提交失败自动滚动到第一个错误字段' },
    {
      name: 'dateFormatter', type: 'string', enum: ['string', 'number', 'false'],
      defaultValue: 'string', helperText: '自动格式数据,主要是 moment 的表单'
    },
    {
      name: 'omitNil', type: 'boolean', defaultValue: 'true',
      helperText: 'ProForm 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能'
    },
    {
      name: 'labelCol', type: 'object', subFields: [
        { name: 'span', type: 'number' },
        { name: 'offset', type: 'number' }
      ], helperText: 'label 标签布局，同 <Col> 组件，设置 span offset 值'
    },

  ],
  canHaveChildren: true
};
