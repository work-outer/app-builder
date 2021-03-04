import { Builder, withChildren } from '@builder.io/react';
import ProForm, {ProFormText} from '@ant-design/pro-form';
import { configProForm } from './components/ProForm.config';
import { configProFormText } from './components/ProFormText.config';

export {
  configProForm,
  configProFormText,
}

Builder.registerComponent(withChildren(ProForm), configProForm);
Builder.registerComponent(ProFormText, configProFormText);
