import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>Copyright © {this.props.footer_year} Dobre Alexandru</p>
      </div>
    )
  }
}
