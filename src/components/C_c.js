import React , {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

export default class C_c extends Component {
  render() {

    let images_width = this.props.asd.width < 769 ? (this.props.asd.eP_container-250)/2 : this.props.asd.eP_container/3;

    let distanceToMove = (this.props.displayedProject >= 3 && this.props.displayedProject<=9) ?
                         (this.props.displayedProject-2) * (-images_width) :
                         (this.props.displayedProject!==2 ? (this.props.displayedProject)*(images_width) : 0);

    return (
      <div className='C_c'>
        <div className='project-container'>

          <div className={this.props.asd.titleClassName_Work}>
            <h1><span className='span-container'><span className='span-text'>WORK</span></span></h1>
            <p>Have a look at the projects below, click the Live button if you'd like to see the app.
              Note: this site was made with react, hand made Js scrollspy and scroll based animations, sass, webpack 2,
              svg animations, Illustrator and a bit of Photoshop. You can view the source code
              <a href='https://github.com/Zerelt/MyWebsite_Nov_2017'> here</a>, and all my projects
              are on <a href='https://www.github.com/zerelt'>Github</a> as well.</p>
          </div>

          <div className='project-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.5 295.5" className='circles-bg' id='circles-bg-one'>
              {/* <!-- outermost black --> */}
              <path id="XMLID_26_" d="M12.4 101.4S23.5 56 71.7 26.9C129.6-8.2 183.4 5.7 183.4 5.7" className="st0"/>
              {/* <!-- black outline   --> */}
              <path id="XMLID_24_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st2"/>
              {/* <!-- orange line inside black one    --> */}
              <path id="XMLID_23_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st1"/>
              {/* <!-- inner most orange   --> */}
              <path id="XMLID_25_" d="M227 105.1c-13.8-27-43.3-45.2-77.6-45.2-47.4 0-85.9 35.6-85.9 79.5s38.5 79.5 85.9 79.5c4.5 0 8.8-.3 13.1-.9" className="st5"/>
              {/* <!-- inner most black    --> */}
              <path id="XMLID_22_" d="M57.4 189.6s38.3 61.2 111 46.7 79.6-64.1 79.6-64.1" className="st3"/>
              {/* <!-- outer most orange    --> */}
              <path id="XMLID_21_" d="M310 175.1s-22.5 83.8-121 111.5C63.5 322 1.5 218.8 1.5 218.8" className="st4"/>
            </svg>
            <div className='project'>
              <div className='project-image'>
                <p>Pomodoro App</p>
                <img src={require('../images/mockups/pomodoro-left.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>Javascript Pomodoro timer with different audio and visual notifications when the Session and Break periods end.</p>
                <ul>
                  <li><img src={require('../images/logos/jquery-logo.svg')}/></li>
                  <li><img className='css3-logo' src={require('../images/logos/css3-logo.svg')}/></li>
                  <li><img className='gulp-logo' src={require('../images/logos/gulp-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://pomodoroapp.netlify.com/' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.5 295.5" className='circles-bg' id='circles-bg-two'>
              <path id="XMLID_26_" d="M12.4 101.4S23.5 56 71.7 26.9C129.6-8.2 183.4 5.7 183.4 5.7" className="st0"/>
              <path id="XMLID_24_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st2"/>
              <path id="XMLID_23_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st1"/>
              <path id="XMLID_25_" d="M227 105.1c-13.8-27-43.3-45.2-77.6-45.2-47.4 0-85.9 35.6-85.9 79.5s38.5 79.5 85.9 79.5c4.5 0 8.8-.3 13.1-.9" className="st5"/>
              <path id="XMLID_22_" d="M57.4 189.6s38.3 61.2 111 46.7 79.6-64.1 79.6-64.1" className="st3"/>
              <path id="XMLID_21_" d="M310 175.1s-22.5 83.8-121 111.5C63.5 322 1.5 218.8 1.5 218.8" className="st4"/>
            </svg>
            <div className='project'>
              <div className='project-image'>
                <p>Redux times</p>
                <img src={require('../images/mockups/times-right.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>Tree apps in 1: Stopwatch, Countdown timer, Current time with 14 other different timezones to select from.</p>
                <ul>
                  <li><img src={require('../images/logos/react-logo.svg')}/></li>
                  <li><img src={require('../images/logos/redux-logo.svg')}/></li>
                  <li><img src={require('../images/logos/reactrouter-logo.svg')}/></li>
                  <li><img src={require('../images/logos/sass-logo.svg')}/></li>
                  <li><img src={require('../images/logos/webpack2-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://reduxroutertimes.netlify.com/' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.5 295.5" className='circles-bg' id='circles-bg-three'>
              <path id="XMLID_26_" d="M12.4 101.4S23.5 56 71.7 26.9C129.6-8.2 183.4 5.7 183.4 5.7" className="st0"/>
              <path id="XMLID_24_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st2"/>
              <path id="XMLID_23_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st1"/>
              <path id="XMLID_25_" d="M227 105.1c-13.8-27-43.3-45.2-77.6-45.2-47.4 0-85.9 35.6-85.9 79.5s38.5 79.5 85.9 79.5c4.5 0 8.8-.3 13.1-.9" className="st5"/>
              <path id="XMLID_22_" d="M57.4 189.6s38.3 61.2 111 46.7 79.6-64.1 79.6-64.1" className="st3"/>
              <path id="XMLID_21_" d="M310 175.1s-22.5 83.8-121 111.5C63.5 322 1.5 218.8 1.5 218.8" className="st4"/>
            </svg>
            <div className='project'>
              <div className='project-image'>
                <p>Filters copy</p>
                <img src={require('../images/mockups/filters-left.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>Fully responsive, 1-to-1 copy of the Filters for Iphone app landing page. Made primarily to test out webpack 2 configuration</p>
                <ul>
                  <li><img src={require('../images/logos/react-logo.svg')}/></li>
                  <li><img src={require('../images/logos/sass-logo.svg')}/></li>
                  <li><img src={require('../images/logos/webpack2-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://filterscopy.netlify.com/' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.5 295.5" className='circles-bg' id='circles-bg-four'>
              <path id="XMLID_26_" d="M12.4 101.4S23.5 56 71.7 26.9C129.6-8.2 183.4 5.7 183.4 5.7" className="st0"/>
              <path id="XMLID_24_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st2"/>
              <path id="XMLID_23_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st1"/>
              <path id="XMLID_25_" d="M227 105.1c-13.8-27-43.3-45.2-77.6-45.2-47.4 0-85.9 35.6-85.9 79.5s38.5 79.5 85.9 79.5c4.5 0 8.8-.3 13.1-.9" className="st5"/>
              <path id="XMLID_22_" d="M57.4 189.6s38.3 61.2 111 46.7 79.6-64.1 79.6-64.1" className="st3"/>
              <path id="XMLID_21_" d="M310 175.1s-22.5 83.8-121 111.5C63.5 322 1.5 218.8 1.5 218.8" className="st4"/>
            </svg>
            <div className='project'>
              <div className='project-image'>
                <p>Date counter</p>
                <img src={require('../images/mockups/date-right.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>App that counts how many days have past or remain since / until the important event you specified.</p>
                <ul>
                  <li><img src={require('../images/logos/react-logo.svg')}/></li>
                  <li><img src={require('../images/logos/sass-logo.svg')}/></li>
                  <li><img src={require('../images/logos/webpack2-logo.svg')}/></li>
                  <li><img src={require('../images/logos/ai-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://datecountdown.netlify.com/' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.5 295.5" className='circles-bg' id='circles-bg-five'>
              <path id="XMLID_26_" d="M12.4 101.4S23.5 56 71.7 26.9C129.6-8.2 183.4 5.7 183.4 5.7" className="st0"/>
              <path id="XMLID_24_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st2"/>
              <path id="XMLID_23_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st1"/>
              <path id="XMLID_25_" d="M227 105.1c-13.8-27-43.3-45.2-77.6-45.2-47.4 0-85.9 35.6-85.9 79.5s38.5 79.5 85.9 79.5c4.5 0 8.8-.3 13.1-.9" className="st5"/>
              <path id="XMLID_22_" d="M57.4 189.6s38.3 61.2 111 46.7 79.6-64.1 79.6-64.1" className="st3"/>
              <path id="XMLID_21_" d="M310 175.1s-22.5 83.8-121 111.5C63.5 322 1.5 218.8 1.5 218.8" className="st4"/>
            </svg>
            <div className='project'>
              <div className='project-image'>
                <p>TwitchTV App</p>
                <img src={require('../images/mockups/twitch-left.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>App showing which of the pre-loaded streamers are online, with information about the stream and link to the live channel</p>
                <ul>
                  <li><img src={require('../images/logos/jquery-logo.svg')}/></li>
                  <li><img className='css3-logo' src={require('../images/logos/css3-logo.svg')}/></li>
                  <li><img src={require('../images/logos/json-logo.svg')}/></li>
                  <li><img className='gulp-logo' src={require('../images/logos/gulp-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://twitchtv.netlify.com/' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.5 295.5" className='circles-bg' id='circles-bg-six'>
              <path id="XMLID_26_" d="M12.4 101.4S23.5 56 71.7 26.9C129.6-8.2 183.4 5.7 183.4 5.7" className="st0"/>
              <path id="XMLID_24_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st2"/>
              <path id="XMLID_23_" d="M257.5 102.1c-15.5-38-53.1-65.9-99.2-69.7C94.5 27 38.8 70.8 33.9 129.9s42.7 111.5 106.4 116.8" className="st1"/>
              <path id="XMLID_25_" d="M227 105.1c-13.8-27-43.3-45.2-77.6-45.2-47.4 0-85.9 35.6-85.9 79.5s38.5 79.5 85.9 79.5c4.5 0 8.8-.3 13.1-.9" className="st5"/>
              <path id="XMLID_22_" d="M57.4 189.6s38.3 61.2 111 46.7 79.6-64.1 79.6-64.1" className="st3"/>
              <path id="XMLID_21_" d="M310 175.1s-22.5 83.8-121 111.5C63.5 322 1.5 218.8 1.5 218.8" className="st4"/>
            </svg>
            <div className='project'>
              <div className='project-image'>
                <p>Weather App</p>
                <img src={require('../images/mockups/weather-right.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>App that displays weather information from your current location. Type in another city to view that place's current weather information.</p>
                <ul>
                  <li><img src={require('../images/logos/jquery-logo.svg')}/></li>
                  <li><img className='css3-logo' src={require('../images/logos/css3-logo.svg')}/></li>
                  <li><img src={require('../images/logos/json-logo.svg')}/></li>
                  <li><img src={require('../images/logos/gmaps-logo.svg')}/></li>
                  <li><img className='gulp-logo' src={require('../images/logos/gulp-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://weatherapp.netlify.com/' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className={this.props.asd.titleClassName_Extras}>
            <h1><span className='span-container'><span className='span-text'>EXTRAs</span></span></h1>
            <p>Need more ? Then scroll below , hover over the image to have a better look and if
            something catches your eye click on the bottom icon for a brief description and
            a link to the live project.</p>
          </div>

          <div className='extra-projects-btn-wrapper'>
            <img className='direction-btns' src={require('../images/chevron-left.svg')} onClick={this.props.handleArrowClickLeft}/>
            <div className='extra-projects-row'>
              <div className='extra-projects-previews' style={{transform:'translateX('+distanceToMove+'px)',WebkitTransform:'translateX('+distanceToMove+'px)'}}>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===1 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://calculatorapp.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Javascript Calculator</p>
                      <p className='extra-project-info-description'>Javascript calculator with 2 displays, one returning the current operation and result and the other all your operations.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                        <img src={require('../images/logos/ai-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/calculator.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===2 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://alexanderv1.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Old personal website</p>
                      <p className='extra-project-info-description'>Previous version of my portfolio website. Uses made with react, react-motion, sass, webpack, and Illustrator for the backgrounds and prototype design.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/react-logo.svg')}/>
                        <img src={require('../images/logos/sass-logo.svg')}/>
                        <img src={require('../images/logos/webpack2-logo.svg')}/>
                        <img src={require('../images/logos/ai-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/oldsite.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===3 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://b3landingpage.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Bootstrap 3 app landing page</p>
                      <p className='extra-project-info-description'>One of my very first projects. A simple landing page for general app using bootstrap 3.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                        <img src={require('../images/logos/bootstrap3-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/bootstrap3_A.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===4 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://b3landingpage2.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>bootstrap 3 page</p>
                      <p className='extra-project-info-description'>Another of my very first projects. A simple landing page for general app using bootstrap 3.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                        <img src={require('../images/logos/bootstrap3-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/bootstrap3_B.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===5 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://reactclock.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>React clock</p>
                      <p className='extra-project-info-description'>React app that shows the current date and time, with changing backgrounds depending if it's morning afternoon evening or night.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/react-logo.svg')}/>
                        <img src={require('../images/logos/sass-logo.svg')}/>
                        <img src={require('../images/logos/webpack2-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/react_clock.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===6 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://wikipediaapp.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Wikipedia app</p>
                      <p className='extra-project-info-description'>App using the Wikiepdia API that returns 10 Wikipedia articles matching your input as you type, and a button that returns a random article.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/json-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/wiki.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===7 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://tictactoeapp.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Tic tac toe game</p>
                      <p className='extra-project-info-description'>Chose your sign and start playing a game of tic tac toe against an easy AI.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/tictactoe.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===8 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://simongameapp.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Simon game</p>
                      <p className='extra-project-info-description'> A JS replica of the Simon Game. Flip the switch to power on and then press the red button to start. For a bigger challange press the yellow button; this makes it so it starts a new sequence from 0 at every mistake. Match 20 sequences to win.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/simon.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===9 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://mathgame.netlify.com/' target='_blank'>Go</a></p>
                      <p className='extra-project-info-title'>Math game</p>
                      <p className='extra-project-info-description'>Elementary math game for kids where the users have 1 minute to get as many answers right as they can. Restart the game after 1 min to try to get a better score.</p>
                      <span className='extra-projects-info-tools'>
                        <img src={require('../images/logos/jquery-logo.svg')}/>
                        <img src={require('../images/logos/css3-logo.svg')}/>
                        <img src={require('../images/logos/gulp-logo.svg')}/>
                      </span>
                    </span>
                  </div>
                  <img src={require('../images/extras/mathgame.jpg')} style={{width:images_width}} onLoad={this.props.checkLargeImages}/>
                </div>
              </div>
            </div>
            <img className='direction-btns' src={require('../images/chevron-right.svg')} onClick={this.props.handleArrowClickRight} />
            <span className='image-counter'>{this.props.displayedProject}/9</span>
          </div>

          <div className={this.props.asd.titleClassName_Contacts}>
            <h1><span className='span-container'><span className='span-text'>CONTACT</span></span></h1>
            <p>
              If you want to talk about a project, long-term collaboration
              or simply want to say "Hi" feel free to use the contact form or social media links
              below. Looking forward to your message.
              <br/>
              <span className='ending'>Thanks for stopping by, have a nice day !</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
