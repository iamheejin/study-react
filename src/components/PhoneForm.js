import React, { Component } from 'react';

class PhoneForm extends Component {
  
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.onCreate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="이름" name="name" onChange={this.handleChange} />
        <input placeholder="전화번호" name="phone" onChange={this.handleChange} />
        <button type="submit">등록</button>
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    ) 
  }
}

export default PhoneForm;