import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import DropdownNav from './components/DropdownNav/DropdownNav';
import RepsList from './components/RepsList/RepsList';
import RepInfo from './components/RepInfo/RepInfo';
import classes from './App.module.css';

class App extends Component {

  state = {
    personType: null,
    selectedState: null,
    buttonDisabled: true,
    repsList: [],
    selectRep: null
  }

  personTypeChangedHandler = (event) => {
    this.setState({ personType: event.target.value.toLowerCase() }, () => {
      this.searchButtonStatus();
    })
  }

  stateChangedHandler = (event) => {
    this.setState({ selectedState: event.target.value }, () => {
      this.searchButtonStatus();
    })
  }

  searchButtonStatus() {
    if (this.state.selectedState && this.state.personType) {
      this.setState({ buttonDisabled: false })
    } else {
      this.setState({ buttonDisabled: true })
    }
  }

  onSearchHandler = () => {
    if (this.state.personType && this.state.selectedState) {
      axios.get(`/${this.state.personType}/${this.state.selectedState}`).then(data => {
        this.setState({ repsList: data.data.results })
      })
    }
  }

  selectRepHandler = (rep) => {
    this.setState({selectedRep: rep})
  }




  render() {
    return (
      <div>
        <Header />
        <DropdownNav buttonDisabled={this.state.buttonDisabled} personTypeChanged={this.personTypeChangedHandler} stateChanged={this.stateChangedHandler} search={this.onSearchHandler} />
        <div className={classes.pageContent}>
          <RepsList selectRep={this.selectRepHandler} repsList={this.state.repsList} personType={this.state.personType} />
          <RepInfo rep={this.state.selectedRep} />
        </div>

      </div>
    );
  }
}

export default App;
