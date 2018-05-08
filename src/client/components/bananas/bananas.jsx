import React from 'react';
import { withRouter } from 'react-router-dom';

class Bananas extends React.Component {
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    setTimeout(()=>{
      this.props.history.push('/results');
    },1000);
  }

  render() {
    return (
      <div>
        <p>Bananas</p>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default withRouter(Bananas);
