import { Builder, withChildren } from '@builder.io/react';
import ProForm, {ProFormDatePicker, ProFormDateRangePicker, ProFormDateTimePicker, 
    ProFormDateTimeRangePicker, ProFormText, ProFormTextArea, ProFormTimePicker, 
    ProFormSwitch, ProFormRate, ProFormUploadDragger, ProFormUploadButton, 
    ProFormSlider, ProFormSelect, ProFormDigit, ProFormRadio, ProFormCheckbox, ProFormField, ProFormList } from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';

import ProTable from '@ant-design/pro-table';
import { withFunctions } from './functions/withFunctions'
import { configProField } from './components/ProField.config';
import { configProForm } from './components/ProForm.config';
import { configProFormText } from './components/ProFormText.config';
import { configProTable } from './components/ProTable.config';
import { configProFormDatePicker } from './components/ProFormDatePicker.config';
import { configProFormDateTimePicker } from './components/ProFormDateTimePicker.config';
import { configProFormDateRangePicker } from './components/ProFormDateRangePicker.config';
import { configProFormDateTimeRangePicker } from './components/ProFormDateTimeRangePicker.config';
import { configProFormPassword } from './components/ProFormPassword.config';
import { configProFormTimePicker } from './components/ProFormTimePicker.config';
import { configProFormTextArea } from './components/ProFormTextArea.config';
import { configProFormDigit } from './components/ProFormDigit.config';
import { configProFormSelect } from './components/ProFormSelect.config';
import { configProFormUploadButton } from './components/ProFormUploadButton.config';
import { configProFormUploadDragger } from './components/ProFormUploadDragger.config';
import { configProFormSlider } from './components/ProFormSlider.config';
import { configProFormRate } from './components/ProFormRate.config';
import { configProFormSwitch } from './components/ProFormSwitch.config';
import { configProFormCheckbox } from './components/ProFormCheckbox.config';
import { configProFormRadio } from './components/ProFormRadio.config';
import { configProFormTimeRangePicker } from './components/ProFormTimeRangePicker.config';
import { configProFormGroup } from './components/ProForm.Group.cofig';
import { configProFormList } from './components/ProFormList.config';

const ProFormWrap = withFunctions(ProForm, ['onValuesChange', 'initialValues', 'onFinish']);
Builder.registerComponent(withChildren(ProFormWrap), configProForm);
Builder.registerComponent(withChildren(ProForm.Group), configProFormGroup);
Builder.registerComponent(withChildren(ProFormList), configProFormList);
Builder.registerComponent(ProFormText, configProFormText);
Builder.registerComponent(ProFormText.Password, configProFormPassword);
Builder.registerComponent(ProFormTextArea, configProFormTextArea);
Builder.registerComponent(ProFormDatePicker, configProFormDatePicker);
Builder.registerComponent(ProFormTimePicker, configProFormTimePicker);
Builder.registerComponent(ProFormTimePicker.RangePicker, configProFormTimeRangePicker);
Builder.registerComponent(ProFormDateTimePicker, configProFormDateTimePicker);
Builder.registerComponent(ProFormDateRangePicker, configProFormDateRangePicker);
Builder.registerComponent(ProFormDateTimeRangePicker, configProFormDateTimeRangePicker);
Builder.registerComponent(ProFormCheckbox.Group, configProFormCheckbox);
Builder.registerComponent(ProFormRadio.Group, configProFormRadio);
Builder.registerComponent(ProFormSwitch, configProFormSwitch);
Builder.registerComponent(ProFormRate, configProFormRate);
Builder.registerComponent(ProFormSlider, configProFormSlider);
Builder.registerComponent(ProFormUploadDragger, configProFormUploadDragger);
Builder.registerComponent(ProFormUploadButton, configProFormUploadButton);
Builder.registerComponent(ProFormSelect, configProFormSelect);
Builder.registerComponent(ProFormDigit, configProFormDigit);
Builder.registerComponent(withChildren(ProTable), configProTable);
