import React, { Component } from 'react';
import './App.css';
import ShopPage from './shopPage'
import FrontPage from './mainpage/index'
import ShopItem from './ShopItem/index'
import MainMain from './mainpage/header/index'

class App extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        page:'Front'
      }
    };

    renderMainContent =() => {
      switch(this.state.page) {
        case 'Front':
          return <FrontPage />
        case 'Shop':
          return <ShopPage />
        case 'ItemPage':
          return <ShopItem />
        default:
        return <div>Page Broke</div>;
      }
    }
    updatePage = (event) => {
      event.preventDefault()
      this.setState({page:event.target.value})
      console.log("Click has been made.")
    }
  render() {
     return (
     <div>
    <label>
    <input type="radio" name="pageChange" value="Front" onClick={this.updatePage} />
    _Front Page_
    </label>
    <label>
    <input type="radio" name="pageChange" value="Shop" onClick={this.updatePage} />
    _Shop Page_
    </label>
    <label>
    <input type="radio" name="pageChange" value="ItemPage" onClick={this.updatePage} /> 
    _Item Page_
    </label>
    <MainMain />
    {this.renderMainContent()}
    </div>
    );
  }
}

export default App;
