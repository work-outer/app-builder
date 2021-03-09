export const configProFormSelect = {
  name: '@steedos/builder-form:Select',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'select', required: true },
    { name: 'label', type: 'string', defaultValue: 'Select Field', required: true },
    { name: 'placeholder', type: 'string' },
    { name: 'readonly', type: 'boolean', defaultValue: false },
    {
      name: 'options', type: 'list', required: true, subFields: [
        { name: 'value', type: 'string' },
        { name: 'label', type: 'string' }
      ]
    },
    { name: 'disabled', type: 'boolean', defaultValue: false, helperText: '禁用' },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'initialValue', type: 'string' },
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please select...' }
    ], helperText: '控制组件是否必填和校验信息'},
    {
      name: 'fieldProps', type: 'object', subFields: [
        { name: 'allowClear', type: 'boolean', defaultValue: false, helperText: '支持清除' },
        { name: 'autoClearSearchValue', type: 'boolean', defaultValue: true, helperText: '是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效' },
        { name: 'defaultActiveFirstOption', type: 'boolean', defaultValue: true, helperText: '默认获取焦点' },
        { name: 'defaultOpen', type: 'boolean', defaultValue: false, helperText: '是否默认展开下拉菜单' },
        { name: 'dropdownClassName', type: 'string', helperText: '下拉菜单的 className 属性' },
        {
          name: 'dropdownMatchSelectWidth', type: 'boolean', defaultValue: true,
          helperText: '下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动'
        },
        { name: 'listHeight', type: 'number', defaultValue: 256, helperText: '设置弹窗滚动高度' },
        { name: 'mode', type: 'string', enum: ['multiple', 'tags'], helperText: '设置 Select 的模式为多选或标签' },
        { name: 'virtual', type: 'boolean', defaultValue: false, helperText: '设置 false 时关闭虚拟滚动' },
      ]
    }

  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
