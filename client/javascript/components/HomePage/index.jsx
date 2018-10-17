import React, {Component} from 'react';
import './index.style';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.showCatalog = this.showCatalog.bind(this);
    this.state = {
      showCatalog: false
    }
  }

  showCatalog() {
    this.setState({showCatalog: true});
  }

  get content() {
    if(!this.state.showCatalog) {
      return (
        <span className="homepage">
          <img src='/images/life.jpg' className="homepage__image" />
          <img src='/images/down_arrow.png' className="homepage__arrow" onClick={this.showCatalog}/>
        </span>
      )
    }
  }

  render() {
    return(
        <div>{this.content}</div>
      )
    }
}
