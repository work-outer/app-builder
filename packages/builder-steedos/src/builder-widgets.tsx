

import { Builder, withChildren } from '@builder.io/react';
import { RecordDetailPage, configRecordDetailPage } from './components/RecordDetailPage';

Builder.registerComponent(withChildren(RecordDetailPage), configRecordDetailPage);
