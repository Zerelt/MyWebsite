import React, {Component} from 'react';

export default class LoadingScreen extends Component{
  render() {
    return(
      <div className={'loading-screen ' + (this.props.asd.display_Percentage===100 ? 'loading-screen-after' : '')}>
        {this.props.asd.display_Percentage+' %'}
        <p>
          <span className={this.props.asd.display_Percentage===100 ? 'message-show' : 'message-hide'}>All done !</span>
          <span className={this.props.asd.display_Percentage===100 ? 'message-hide' : 'message-show'}>Loading assets for you</span>
        </p>
        <div className={'loading-screen-circle ' + (this.props.asd.display_Percentage===100 ? 'loading-screen-circle-after' : '')}></div>
      </div>
    )
  }
}
