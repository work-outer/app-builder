

import { Builder, withChildren } from '@builder.io/react';
import { RecordDetailPage, configRecordDetailPage } from './components';

Builder.registerComponent(withChildren(RecordDetailPage), configRecordDetailPage);
