import React , {Component} from 'react';
import { hot } from 'react-hot-loader';
import Circle from './circle.js';

class C_c extends Component {
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
            <p>To make this website an array of modern frontend developing tools have been used such as javascript, react, 
              handmade javascript scrollspy and scroll based animations, sass, webpack, svg animations, 
              Illustrator and a bit of Photoshop. You can view the source code 
              <a href='https://github.com/Zerelt/MyWebsite' target='_blank'> here</a>. Below you'll find 
              projects made with different and similar tools, so you can rest assured that I do have experience with 
              all the tech that was mentioned earlier.
              All my projects are also available for review on <a href='https://www.github.com/zerelt' target='_blank'>Github</a>.
            </p>
          </div>

          <div className='project-row'>
            <Circle secondID={this.props.circle_data[0].secondID} 
            gradientIdOne={this.props.circle_data[0].gradientIdOne} 
            gradientIdTwo={this.props.circle_data[0].gradientIdTwo} 
            strokeUrlOne={this.props.circle_data[0].strokeUrlOne}
            strokeUrlTwo={this.props.circle_data[0].strokeUrlTwo}
            colorOne={this.props.circle_data[0].colorOne}
            colorTwo={this.props.circle_data[0].colorTwo}
            colorThree={this.props.circle_data[0].colorThree}
            colorFour={this.props.circle_data[0].colorFour}
            colorFive={this.props.circle_data[0].colorFive}
            colorSix={this.props.circle_data[0].colorSix}
            colorCenter={this.props.circle_data[0].colorCenter}/>
            <div className='project'>
              <div className='project-image'>
                <p>Pomodoro App</p>
                <img src={require('../images/mockups/pomodoro-left.png')} onLoad={this.props.checkLargeImages}/>
              </div>
              <div className='project-description'>
                <p className='project-description-text'>Javascript Pomodoro timer with clean UI, different audio & visual notifications and micro animations for each session and user interaction.</p>
                <ul>
                  <li><img src={require('../images/logos/jquery-logo.svg')}/></li>
                  <li><img className='css3-logo' src={require('../images/logos/css3-logo.svg')}/></li>
                  <li><img className='gulp-logo' src={require('../images/logos/gulp-logo.svg')}/></li>
                </ul>
                <div className='go-live'>
                  <span className='go-live-corner'></span>
                  <span className='go-live-circle'></span>
                  <a href='https://pomodoro.alexandercoding.com' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
          <Circle secondID={this.props.circle_data[1].secondID} 
            gradientIdOne={this.props.circle_data[1].gradientIdOne} 
            gradientIdTwo={this.props.circle_data[1].gradientIdTwo} 
            strokeUrlOne={this.props.circle_data[1].strokeUrlOne}
            strokeUrlTwo={this.props.circle_data[1].strokeUrlTwo}
            colorOne={this.props.circle_data[1].colorOne}
            colorTwo={this.props.circle_data[1].colorTwo}
            colorThree={this.props.circle_data[1].colorThree}
            colorFour={this.props.circle_data[1].colorFour}
            colorFive={this.props.circle_data[1].colorFive}
            colorSix={this.props.circle_data[1].colorSix}
            colorCenter={this.props.circle_data[1].colorCenter}/>
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
                  <a href='https://redux.alexandercoding.com' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
          <Circle secondID={this.props.circle_data[2].secondID} 
            gradientIdOne={this.props.circle_data[2].gradientIdOne} 
            gradientIdTwo={this.props.circle_data[2].gradientIdTwo} 
            strokeUrlOne={this.props.circle_data[2].strokeUrlOne}
            strokeUrlTwo={this.props.circle_data[2].strokeUrlTwo}
            colorOne={this.props.circle_data[2].colorOne}
            colorTwo={this.props.circle_data[2].colorTwo}
            colorThree={this.props.circle_data[2].colorThree}
            colorFour={this.props.circle_data[2].colorFour}
            colorFive={this.props.circle_data[2].colorFive}
            colorSix={this.props.circle_data[2].colorSix}
            colorCenter={this.props.circle_data[2].colorCenter}/>
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
                  <a href='https://filters.alexandercoding.com' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
          <Circle secondID={this.props.circle_data[3].secondID} 
            gradientIdOne={this.props.circle_data[3].gradientIdOne} 
            gradientIdTwo={this.props.circle_data[3].gradientIdTwo} 
            strokeUrlOne={this.props.circle_data[3].strokeUrlOne}
            strokeUrlTwo={this.props.circle_data[3].strokeUrlTwo}
            colorOne={this.props.circle_data[3].colorOne}
            colorTwo={this.props.circle_data[3].colorTwo}
            colorThree={this.props.circle_data[3].colorThree}
            colorFour={this.props.circle_data[3].colorFour}
            colorFive={this.props.circle_data[3].colorFive}
            colorSix={this.props.circle_data[3].colorSix}
            colorCenter={this.props.circle_data[3].colorCenter}/>
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
                  <a href='https://datecountdown.alexandercoding.com' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
          <Circle secondID={this.props.circle_data[4].secondID} 
            gradientIdOne={this.props.circle_data[4].gradientIdOne} 
            gradientIdTwo={this.props.circle_data[4].gradientIdTwo} 
            strokeUrlOne={this.props.circle_data[4].strokeUrlOne}
            strokeUrlTwo={this.props.circle_data[4].strokeUrlTwo}
            colorOne={this.props.circle_data[4].colorOne}
            colorTwo={this.props.circle_data[4].colorTwo}
            colorThree={this.props.circle_data[4].colorThree}
            colorFour={this.props.circle_data[4].colorFour}
            colorFive={this.props.circle_data[4].colorFive}
            colorSix={this.props.circle_data[4].colorSix}
            colorCenter={this.props.circle_data[4].colorCenter}/>
            <div className='project'>
              <div className='project-image'>
                <p>Weather App</p>
                <img src={require('../images/mockups/weather-left.png')} onLoad={this.props.checkLargeImages}/>
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
                  <a href='https://weather.alexandercoding.com' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-row'>
          <Circle secondID={this.props.circle_data[5].secondID} 
            gradientIdOne={this.props.circle_data[5].gradientIdOne} 
            gradientIdTwo={this.props.circle_data[5].gradientIdTwo} 
            strokeUrlOne={this.props.circle_data[5].strokeUrlOne}
            strokeUrlTwo={this.props.circle_data[5].strokeUrlTwo}
            colorOne={this.props.circle_data[5].colorOne}
            colorTwo={this.props.circle_data[5].colorTwo}
            colorThree={this.props.circle_data[5].colorThree}
            colorFour={this.props.circle_data[5].colorFour}
            colorFive={this.props.circle_data[5].colorFive}
            colorSix={this.props.circle_data[5].colorSix}
            colorCenter={this.props.circle_data[5].colorCenter}/>
            <div className='project'>
              <div className='project-image'>
                <p>TwitchTV App</p>
                <img src={require('../images/mockups/twitch-right.png')} onLoad={this.props.checkLargeImages}/>
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
                  <a href='https://twitchtv.alexandercoding.com' target='_blank'></a>
                  <p>Live</p>
                </div>
              </div>
            </div>
          </div>

          <div className={this.props.asd.titleClassName_Extras}>
            <h1><span className='span-container'><span className='span-text'>EXTRAs</span></span></h1>
            <p>If you're interested in seeing some of my older demo projects, or if you're curious what else I've 
              worked with, then scroll below , have a look and if something catches your eye hover over the image
              for a brief description and a link to 
              the live project.</p>
          </div>

          <div className='extra-projects-btn-wrapper'>
            <img className='direction-btns' src={require('../images/chevron-left.svg')} onClick={this.props.handleArrowClickLeft}/>
            <div className='extra-projects-row'>
              <div className='extra-projects-previews' style={{transform:'translateX('+distanceToMove+'px)',WebkitTransform:'translateX('+distanceToMove+'px)'}}>
                <div className={'extra-projects-shadow ' + (this.props.displayedProject===1 ? 'currently-displayed-project' : "") }>
                  <div className='extra-projects-info-container'>
                    <span className='extra-projects-info'>
                      <p className='extra-project-info-Go'><a href='https://calculator.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://oldsite.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://bootstrap1.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://bootstrap2.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://reactclock.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://wikipedia.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://tictactoe.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://simongame.alexandercoding.com' target='_blank'>Go</a></p>
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
                      <p className='extra-project-info-Go'><a href='https://mathgame.alexandercoding.com' target='_blank'>Go</a></p>
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
              Having reached this far you probably got an idea of what I can do, but just like resumes aren't a 
              perfect description of what someone is capable of right now, nor of their potential so is a landing page 
              that works on all major modern browsers with lots of elements and animations present in almost every web project. 
              So if you're a bit intrigued, you want to know more about me and if you want to talk about a project, long-term collaboration, 
              full-time work or simply want to say "Hi" feel free to use the contact form below or social media links to start a conversation.
              <br/>
              <span className='ending'>Looking forward to your message.</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(C_c);