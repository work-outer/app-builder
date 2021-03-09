
import React from "react";
import { Builder, withChildren } from '@builder.io/react';
import { ObjectForm, configObjectForm } from './ui/ObjectForm';
import { ObjectField, configObjectField } from './ui/ObjectField';
import { ObjectProvider, configObjectProvider } from './ObjectProvider';
import { withFunctions } from './withFunctions';

const ObjectProviderWrap = withFunctions(ObjectProvider, ['requestObject', 'requestRecords']);
Builder.registerComponent(withChildren(ObjectProviderWrap), configObjectProvider);
Builder.registerComponent(withChildren(ObjectForm), configObjectForm);
Builder.registerComponent(ObjectField, configObjectField);

// export * from './SteedosContext';
// export * from './SteedosProvider';
export * from './ObjectContext';
export * from './ObjectProvider';
export * from './FormContext';
export * from './FormProvider';
export * from './ui';