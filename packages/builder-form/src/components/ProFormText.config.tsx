export const configProFormText = {
  name: 'Steedos:FormText',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'text'},
    { name: 'label', type: 'text', defaultValue: 'Text Field'},
    { name: 'placeholder', type: 'string'},
    // { name: 'allowClear', type: 'boolean', defaultValue: false },  // 可以点击清除图标删除内容
    { name: 'bordered', type: 'boolean', defaultValue: true },  // 是否有边框
    { name: 'defaultValue', type: 'string' },  // 输入框默认内容
    { name: 'disabled', type: 'boolean', defaultValue: false },  // 是否禁用状态，默认为 false
    { name: 'id', type: 'string' },  // 输入框的 id
    { name: 'maxLength', type: 'number' },  // 最大长度
    { name: 'size', type: 'string', enum:['large', 'middle', 'small'] },  // 控件大小
  ],
};
