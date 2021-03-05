
import { Builder, withChildren } from '@builder.io/react';
import { ObjectForm, configObjectForm } from './ui/ObjectForm';
import { ObjectField, configObjectField } from './ui/ObjectField';

Builder.registerComponent(withChildren(ObjectForm), configObjectForm);
Builder.registerComponent(ObjectField, configObjectField);

export * from './SteedosContext';
export * from './SteedosProvider';
export * from './ObjectContext';
export * from './ObjectProvider';
export * from './FormContext';
export * from './FormProvider';