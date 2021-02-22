import React, {FC, forwardRef, PropsWithChildren, ReactElement, Ref} from "react";
import onClickOutside from 'react-onclickoutside';
import Button from '@salesforce/design-system-react/components/button'; 

import { InputField } from '../..'


// Create an editable cell renderer
export class CustomCell extends React.Component<any, any> {
    inputFieldRef: any; //React.RefObject<HTMLInputElement>;
  
    static defaultProps = {
    }
  
    static state = {
      editing: false,
      editable: false,
      value: null,
    }
  
    constructor(props:any) {
      super(props);
      this.state = {
        value: this.props.value,
        isEdited: false,
        editable: !!this.props.column.editable
      };
      this.inputFieldRef = React.createRef();
    }
  
    onEdit = () => {
      this.setState({editing: true});
      setTimeout(() => {
        this.inputFieldRef && this.inputFieldRef.current && this.inputFieldRef.current.focus() 
      }, 100);
    }
  
    // We'll only update the external data when the input is blurred
    onBlur = () => {
      this.setState({editing: false})
      // this.props.updateData(this.props.row.index, this.props.column.id, this.state.value)
    }
  
    onChange = (e:any) => {
      this.setState({value: e.target.value})
      this.setState({isEdited: (this.props.value !== e.target.value)})
    }
  
    handleClickOutside = (evt:any) => {
      this.setState({editing: false})
      // ..handling code goes here...
    };
  
    render() {
      // return 
      if (this.state["editable"]) {
        const className = "slds-grid slds-grid_align-spread "  + (this.state['isEdited']?'slds-is-edited':'')
        return (
          <span className={className} onDoubleClick={this.onEdit}>
            <span className="slds-truncate" title={this.state["value"]}>{this.state["value"]}</span>
            
            {this.state["editing"] && (
              <section aria-describedby="dialog-body-id-225" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position: "absolute", top: "0px", left: "0.0625rem"}}>
                <div id="popover-body-id" className="slds-popover__body">
                  <InputField 
                    value={this.state["value"]} 
                    type={this.props.column.type} 
                    onChange={this.onChange} 
                    onBlur={this.onBlur} 
                    inputRef={this.inputFieldRef}/>
                </div>
              </section>
            )}
  
            <Button
              iconCategory="utility"
              iconName="edit"
              variant="icon"
              className=" slds-cell-edit__button"
              iconClassName=" slds-button__icon_hint slds-button__icon_edit"
              onClick={this.onEdit}
            />
          </span>
        )
      }
      else 
        return (<span className="slds-truncate" title={this.state["value"]}>{this.state["value"]}</span>)
    }
  }
  
  export const CustomCellEnhanced = onClickOutside(CustomCell)
  
  