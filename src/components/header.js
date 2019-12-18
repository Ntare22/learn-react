import React, { Component } from 'react';



class Header extends Component {

  state = { 
    active: 'active',
    keywords: ''
  }

  inputChangeHander = (event) => {
    this.setState({
      keywords: event.target.value
    })
  }

  render() {

    return (
      <header className={this.state.active }>
        <div className='logo'>Logo</div>
        <input type="text" onChange={this.inputChangeHander}/>
      </header>
    )
  }
}



export default Header;