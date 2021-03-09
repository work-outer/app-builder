import { Builder, withChildren } from '@builder.io/react';

import { withFunctions } from './functions/withFunctions'
// import { ProFormObject } from './components/ProFormObject';
import { FieldSection } from './components/FieldSection';
import { configFieldSection } from './components/FieldSection.cofig';
import { Field } from './components/Field';
import { configField } from './components/Field.config';
import { Form } from './components/Form';
import { configForm } from './components/Form.config';

const ProFormWrap = withFunctions(Form, ['onValuesChange', 'initialValues', 'onFinish']);
Builder.registerComponent(withChildren(ProFormWrap), configForm);
Builder.registerComponent(withChildren(FieldSection), configFieldSection);
Builder.registerComponent(Field, configField);
// Builder.registerComponent(withChildren(ProFormObject), configProFormObject);