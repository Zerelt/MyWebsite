import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

class Separator extends Component {
  render() {
    return (
      <img className='separator'src={require('../images/top shape 3.svg')} />
    )
  }
}

export default hot(module)(Separator)