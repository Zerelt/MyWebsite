import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

class Navigation extends Component {
  render() {

    let a = this.props.asd.first;
    let b = this.props.asd.second;
    let c = this.props.asd.third;
    let d = this.props.asd.forth;

    let h= this.props.asd.height;
    let w= this.props.asd.width;

    return (
      <div className='navigation'>
        <span
          className={b.top > (h-h/3) ? 'span_selected' : '' }
          onClick={()=>{this.props.handleNavClick(1);}}
          >
        </span>
        <span
          className={(b.top <= (h-h/3) && c.top>(h-h/3)) ? 'span_selected' : '' }
          onClick={()=>this.props.handleNavClick(2)}
          >
        </span>
        <span
          className={(c.top <= (h-h/3) && d.top>(h-h/3)) ? 'span_selected' : '' }
          onClick={()=>this.props.handleNavClick(3)}
          >
        </span>
        <span
          className={(d.top < (h-h/3)) ? 'span_selected' : '' } //(d.top < (h-h/3) && d.top>=0)
          onClick={()=>this.props.handleNavClick(4)}
          >
        </span>
      </div>
    )
  }
}

export default hot(module)(Navigation);