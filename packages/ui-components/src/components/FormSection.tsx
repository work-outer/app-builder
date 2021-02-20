
import React from "react";
import ExpandableSection from '@salesforce/design-system-react/components/expandable-section';

export class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }

  render() {
    const {title,  children, ...rest} = this.props

    return (

      <ExpandableSection
        title="Section Title"
      >
        <div className="grid grid-cols-12 gap-4">
          {children}
        </div>
      </ExpandableSection>
    )
  }
}