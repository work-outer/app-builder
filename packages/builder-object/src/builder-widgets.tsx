

import { Builder, withChildren } from '@builder.io/react';
import { ObjectForm, configObjectForm, registerObjectTableComponent } from './components';

Builder.registerComponent(withChildren(ObjectForm), configObjectForm);

registerObjectTableComponent(["name"]);
