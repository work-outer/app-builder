import React from "react";
import { Builder, withChildren } from '@builder.io/react';
import { ObjectForm, configObjectForm } from './components/ObjectForm';
import { ObjectField, configObjectField } from './components/ObjectField';

Builder.registerComponent(withChildren(ObjectForm), configObjectForm);
Builder.registerComponent(ObjectField, configObjectField);

export * from './providers/ObjectContext';
export * from './providers/ObjectProvider';
export * from './components/ObjectForm';
export * from './components/ObjectField';
