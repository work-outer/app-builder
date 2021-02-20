
import React from "react";
import SFCombobox from '@salesforce/design-system-react/components/combobox/combobox'; 
import onClickOutside from 'react-onclickoutside';

// 解决typescript编译的问题
const Combobox:any = onClickOutside(SFCombobox as any, {
  excludeScrollbar: true,
});

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputLookup extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {label, placeholder, ...rest} = this.props
    const labels = {label, placeholder}
    
    return (
      <Combobox labels={labels} {...rest}/>
    )
  }
}