import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

class Circle extends Component {
  render() {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-611 877.5 311.5 295.5" className='circles-bg' id={this.props.secondID}>
              {/* <!-- outermost black --> */}
              <path id="XMLID_26_" d="M-598.6,978.9c0,0,11.1-45.4,59.3-74.5c57.9-35.1,111.7-21.2,111.7-21.2" className="st0"/>
              {/* <!-- black outline   --> */}
              <path id="XMLID_24_" d="M-353.5,979.6c-15.5-38-53.1-65.9-99.2-69.7c-63.8-5.4-119.5,38.4-124.4,97.5c-4.9,59.1,42.7,111.5,106.4,116.8" className="st2"/>
              {/* <!-- orange line inside black one    --> */}
              <path style={{stroke:this.props.strokeUrlOne}} id="XMLID_23_" d="M-353.5,979.6c-15.5-38-53.1-65.9-99.2-69.7c-63.8-5.4-119.5,38.4-124.4,97.5c-4.9,59.1,42.7,111.5,106.4,116.8" className="st1"/>
              {/* <!-- inner most orange   --> */}
              <path style={{stroke:this.props.colorCenter}} id="XMLID_25_" d="M-384,982.6c-13.8-27-43.3-45.2-77.6-45.2c-47.4,0-85.9,35.6-85.9,79.5s38.5,79.5,85.9,79.5c4.5,0,8.8-0.3,13.1-0.9" className="st5"/>
              {/* <!-- inner most black    --> */}
              <path id="XMLID_22_" d="M-553.6,1067.1c0,0,38.3,61.2,111,46.7s79.6-64.1,79.6-64.1" className="st3"/>
              {/* <!-- outer most orange    --> */}
              <path style={{stroke:this.props.strokeUrlTwo}} id="XMLID_21_" d="M-301,1052.6c0,0-22.5,83.8-121,111.5c-125.5,35.4-187.5-67.8-187.5-67.8" className="st4"/>
              <linearGradient id={this.props.gradientIdOne} gradientUnits="userSpaceOnUse" x1="-580.4468" y1="1016.8248" x2="-350.5" y2="1016.8248">
                <stop  offset="0%" stopColor={this.props.colorOne}/>
                <stop  offset="10.25033%" stopColor={this.props.colorTwo}/>
                <stop  offset="35.36%" stopColor={this.props.colorThree}/>
                <stop  offset="64.47%" stopColor={this.props.colorFour}/>
                <stop  offset="86.92%" stopColor={this.props.colorFive}/>
                <stop  offset="1" stopColor={this.props.colorSix}/>
              </linearGradient>
              <linearGradient id={this.props.gradientIdTwo} gradientUnits="userSpaceOnUse" x1="-610.3572" y1="1112.4176" x2="-300.0342" y2="1112.4176">
                <stop  offset="0%" stopColor={this.props.colorOne}/>
                <stop  offset="10.25033%" stopColor={this.props.colorTwo}/>
                <stop  offset="35.36%" stopColor={this.props.colorThree}/>
                <stop  offset="64.47%" stopColor={this.props.colorFour}/>
                <stop  offset="86.92%" stopColor={this.props.colorFive}/>
                <stop  offset="1" stopColor={this.props.colorSix}/>
              </linearGradient>
            </svg>
    )
  }
}

export default hot(module)(Circle);