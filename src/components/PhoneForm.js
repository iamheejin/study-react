import React, { Component } from 'react';

class PhoneForm extends Component {
  handleChange = (e) => {
    console.log('input text value : ' + e.target.value);
  }

  render() {
    return (
      <form>
        <input placeholder="이름" onChange={this.handleChange} />

      </form>
    ) 
  }
}

export default PhoneForm;