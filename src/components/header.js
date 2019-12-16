import React, { Component } from 'react';



class Header extends Component {

  state = {
    keywords: ''
  }

  inputChangeHander = (event) => {
    // console.log(event.target.value)
    this.setState({
      keywords: event.target.value
    })
  }

  render() {
    return (
      <header>
        <div className='logo'>Logo</div>
        <input type="text" onChange={this.inputChangeHander}/>
      </header>
    )
  }
}



export default Header;