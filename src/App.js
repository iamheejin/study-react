import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm'

class App extends Component{
  id = 3;
  state = {
    information: [
      {
        id:0,
        name:'홍길동',
        phone:'010-2222-3333'
      },
      {
        id:1,
        name:'김철수',
        phone:'010-1234-3333'
      },
      {
        id:2,
        name:'김영희',
        phone:'010-1234-4444'
      }
    ]
  }
  handleCreate = (data) => {
    console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }
  render(){
    return (
      <div>
        {this.props.name}
        <PhoneForm onCreate={this.handleCreate}/>
        {JSON.stringify(this.state.information)}
      </div>
    )
  }
}

export default App;
