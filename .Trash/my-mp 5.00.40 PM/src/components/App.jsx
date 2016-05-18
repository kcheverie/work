import React from 'react';
import Navbar from './Navbar.jsx';
import MpFooter from './MpFooter.jsx';

import SingleMpView from './SingleMpView.jsx';

import AllMpView from './AllMpView.jsx';



class App extends React.Component {


  render() {
    return (
 
      <div>
        <Navbar />

        <AllMpView data = {this.props.data} />
      </div>
    )
  }
  
}

export default App;