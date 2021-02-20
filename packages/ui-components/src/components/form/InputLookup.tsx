
import React from "react";
import SFCombobox from '@salesforce/design-system-react/components/combobox/combobox'; 
import onClickOutside from 'react-onclickoutside';
import Icon from '@salesforce/design-system-react/components/icon';

// 解决typescript编译的问题
const Combobox:any = onClickOutside(SFCombobox as any, {
  excludeScrollbar: true,
});

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation

const accounts = [
	{
		id: '1',
		label: 'Acme',
		subTitle: 'Account • San Francisco',
		type: 'account',
	},
	{
		id: '2',
		label: 'Salesforce.com, Inc.',
		subTitle: 'Account • San Francisco',
		type: 'account',
	},
	{
		id: '3',
		label: "Paddy's Pub",
		subTitle: 'Account • Boston, MA',
		type: 'account',
	},
	{
		id: '4',
		label: 'Tyrell Corp',
		subTitle: 'Account • San Francisco, CA',
		type: 'account',
	},
	{
		id: '5',
		label: 'Paper St. Soap Company',
		subTitle: 'Account • Beloit, WI',
		type: 'account',
	},
	{
		id: '6',
		label: 'Nakatomi Investments',
		subTitle: 'Account • Chicago, IL',
		type: 'account',
	},
	{ id: '7', label: 'Acme Landscaping', subTitle: '\u00A0', type: 'account' },
	{
		id: '8',
		label: 'Acme Construction',
		subTitle: 'Account • Grand Marais, MN',
		type: 'account',
	},
];

const accountsWithIcon = accounts.map((elem) => ({
	...elem,
	...{
		icon: (
			<Icon
				assistiveText={{ label: 'Account' }}
				category="standard"
				name={elem.type}
			/>
		),
	},
}));
export class InputLookup extends React.Component<any> {
  static defaultProps = {
    referenceTo: null,
    filters: [],
    referenceKey: '_id'
  }

  render() {
    const {label, placeholder, ...rest} = this.props
    const labels = {label, placeholder}
    
    return (
      <Combobox 
        labels={labels} {...rest}
        options={accountsWithIcon}
        multiple
      />
    )
  }
}