import React, {Component} from 'react';
import './index.style';

export default class Button extends Component {
  render() {
    return(
        <div className="wrapper">
          <button className='primary-button'>I am a button</button>
        </div>
      )
    }
}
