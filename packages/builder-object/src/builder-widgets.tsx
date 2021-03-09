

import { Builder, withChildren } from '@builder.io/react';
import { ObjectForm, configObjectForm } from './components/ObjectForm';
import { ObjectField, configObjectField } from './components/ObjectField';

Builder.registerComponent(withChildren(ObjectForm), configObjectForm);
Builder.registerComponent(ObjectField, configObjectField);
