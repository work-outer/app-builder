import React, { memo } from 'react'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'

const FormSectionPanel = () => {
  return (
    <>
      <ChildrenControl />
    </>
  )
}

export default memo(FormSectionPanel)
