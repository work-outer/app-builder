export const configProFormTimeRangePicker = {
  name: 'Steedos:FormTimeRangePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'timeRange'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'TimeRange Picker'}
  ],
  canHaveChildren: false
};
