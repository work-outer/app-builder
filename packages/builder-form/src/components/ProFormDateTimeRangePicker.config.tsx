export const configProFormDateTimeRangePicker = {
  name: '@steedos/builder-form:DatetimeRangePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateTimeRange', required: true },
    { name: 'label', type: 'text', defaultValue: 'DateTimeRange Picker', required: true },
    { name: 'readonly', type: 'boolean', defaultValue: false },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'disabled', type: 'boolean', defaultValue: false, helperText: '禁用' },
    {
      name: 'fieldProps', type: 'object', subFields: [
        { name: 'allowClear', type: 'boolean', defaultValue: true, helperText: '是否显示清除按钮' },
        { name: 'autoFocus', type: 'boolean', defaultValue: false, helperText: '自动获取焦点' },
        { name: 'inputReadOnly', type: 'boolean', defaultValue: false, helperText: '设置输入框为只读（避免在移动设备上打开虚拟键盘）' }
      ]
    },
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please select datetime' }
    ], helperText: '控制组件是否必填和校验信息'},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
