

import { Builder, withChildren } from '@builder.io/react';
import { ObjectForm, configObjectForm } from './components';

Builder.registerComponent(withChildren(ObjectForm), configObjectForm);
