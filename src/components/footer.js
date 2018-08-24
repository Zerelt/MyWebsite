import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>Copyright © {this.props.footer_year} Dobre Alexandru</p>
      </div>
    )
  }
}

export default hot(module)(Footer);