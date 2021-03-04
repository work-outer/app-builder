import { Builder, withChildren } from '@builder.io/react';
import ProForm, {ProFormText} from '@ant-design/pro-form';
import { ProFormConfig } from './components/ProForm.config';
import { ProFormTextConfig } from './components/ProFormText.config';


Builder.registerComponent(withChildren(ProForm), ProFormConfig);
Builder.registerComponent(ProFormText, ProFormTextConfig);