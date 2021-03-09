export const configField = {
  name: '@steedos/builder-form:Field',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'name'},
    { name: 'label', type: 'text', defaultValue: 'Label'}, 
    { name: 'valueType', type: 'string', 
      enum: [
            'password','money','textarea','option','date',
            'dateWeek','dateMonth','dateQuarter','dateYear',
            'dateRange','dateTimeRange','dateTime','time',
            'timeRange','text','select','checkbox','rate',
            'radio','radioButton','index','indexBorder',
            'progress','percent','digit','second','avatar',
            'code','switch', 'fromNow','image', 'jsonCode',
          ]
    },
    { name: 'readonly', type: 'boolean', defaultValue: false },
    { name: 'placeholder', type: 'string' },
    { name: 'tooltip', type: 'string' },
    { name: 'disabled', type: 'boolean', defaultValue: false, helperText: '禁用' },
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
    marginBottom: '0',
  },
  noWrap: true,
  canHaveChildren: false,
  requiresParent: {
    message: 'This block must be inside a "Field Section" block',
    query: {
      'component.name': { $in: ['@steedos/builder-form:FieldSection'] }
    }
  }
};
