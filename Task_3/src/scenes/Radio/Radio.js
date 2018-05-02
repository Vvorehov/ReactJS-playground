import React, {Component} from 'react';
import './styles.scss'

class Radio extends Component {

  changeHandler = () => {
    console.log("radio changed");
  };

  render() {
    let className = "radio";
    if (this.props.mod) className += " radio--" + this.props.mod;

    return (
      <label className={className}>
        <input type="radio"
               name={this.props.name}
               defaultChecked={this.props.isChecked}
               onChange={this.changeHandler}
               value={this.props.value}/>
        <span>{this.props.label}</span>
      </label>
    );
  }
}

export default Radio;