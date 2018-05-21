import React, {Component} from 'react';
import './styles.scss'

class Radio extends Component {

  render() {
    let className = "radio";
    if (this.props.mod) className += " radio--" + this.props.mod;

    return (
      <label className={className}>
        <input type="radio"
               name={this.props.name}
               data-action-type={this.props.dataActionType}
               defaultChecked={this.props.isChecked}
               onChange={this.props.onChange}
               value={this.props.value}/>
        <span>{this.props.label}</span>
      </label>
    );
  }
}

export default Radio;