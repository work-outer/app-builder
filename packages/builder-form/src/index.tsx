import { Builder, withChildren } from '@builder.io/react';
import ProForm, {ProFormText} from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import { configProForm } from './components/ProForm.config';
import { configProFormText } from './components/ProFormText.config';
import { configProTable } from './components/ProTable.config';

Builder.registerComponent(withChildren(ProForm), configProForm);
Builder.registerComponent(ProFormText, configProFormText);

Builder.registerComponent(withChildren(ProTable), configProTable);