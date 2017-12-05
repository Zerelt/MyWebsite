import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style/style.scss';
import {Scrollbars} from 'react-custom-scrollbars';
import {polyfill} from 'smoothscroll-polyfill';
import debounce from '../../node_modules/lodash.debounce/index.js';

//const css = require('../style.style.scss');
import C_a from './c_a';
import C_b from './c_b';
import C_c from './C_c';
import C_d from './C_d';
import Navigation from './navigation';
import Separator from './separator';
import Footer from './footer';
import LoadingScreen from './loading-screen';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      first:'',
      second:'',
      third:'',
      forth:'',

      height:window.innerHeight,
      width:window.innerWidth,

      bgPosition:'',
      x: 0,
      y: 0,

      imageLoadedCounter:0,
      display_Percentage:0,
      interval_Id:0,

      titleClassName_Work: 'projects-intro-initial',
      titleClassName_Extras: 'projects-intro-initial',
      titleClassName_Contacts: 'projects-intro-initial',

      displayedProject:2,
      eP_container:'',

      submit_name:'',
      submit_email:'',
      submit_message:'',

      footer_year:''
    };

    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handleMessageChange=this.handleMessageChange.bind(this);
    this.handleImagesResize=this.handleImagesResize.bind(this);
    this.handleArrowClickLeft=this.handleArrowClickLeft.bind(this);
    this.handleArrowClickRight=this.handleArrowClickRight.bind(this);
    this.handleTitles=this.handleTitles.bind(this);
    this.handleProjectsBg=this.handleProjectsBg.bind(this);
    //debounce the function so the corner doesn't cancel the translation to  0 0 0 if the user scrolls really fast down and up
    this.handleAbout=debounce(this.handleAbout.bind(this),50); //50
    this.handleNavClick=this.handleNavClick.bind(this);
    this.countPercentagePoints=this.countPercentagePoints.bind(this);
    this.checkLargeImages=this.checkLargeImages.bind(this);
    this.handleScroll=this.handleScroll.bind(this);
    this.getCoord=this.getCoord.bind(this);
    this.handleResize=this.handleResize.bind(this);

  }

  /*~~~~~~~~~~~~~~~~~~~~~
    lifecycle method in initial rendering
  ~~~~~~~~~~~~~~~~~~~~~*/
  componentDidMount() {
    let f_year = new Date().getFullYear();
    let eP_container_w = ReactDOM.findDOMNode(this.c).children[0].children[8].children[1].getBoundingClientRect().width;
    polyfill();             //run polyfill once to detect behaviour:'smooth'
    this.handleScroll();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('resize', this.handleImagesResize);
    /*
     setState of eP_container after 2 seconds, to get the width after components have mounted;
     if we just put it without the setTimeout, it returns the initial value of eP_container wich is '',
     which results in the images not being initially displayed, until a resize event occurs, or until
     the user presses the arrow buttons
    */
    let testWidth = setTimeout(()=>{ this.setState({eP_container:eP_container_w}); }, 2000);
    this.setState({footer_year:f_year});
    let interval_Id = setInterval(this.countPercentagePoints ,10);
    this.setState({interval_Id: interval_Id});
  }

  componentDidUpdate () {
    if (this.state.display_Percentage===100) {
      clearInterval(this.state.interval_Id);
    }
  }

  /*~~~~~~~~~~~~~~~~~~~~~
    lifecycle method
  ~~~~~~~~~~~~~~~~~~~~~*/
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('resize', this.handleImagesResize);
    clearInterval(this.state.interval_Id);
  }

  /*~~~~~~~~~~~~~~~~~~~~~
    keep track of height and width in state
  ~~~~~~~~~~~~~~~~~~~~~*/
  handleResize() {
    this.setState({
      height:window.innerHeight,
      width:window.innerWidth
    });
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~
    make a separate resize handler for the images in the carousel
    instead of putting it in the handleResize() function above,
    and put separate event listener in ComponentDidMount
    big performance difference
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleImagesResize() {
    this.setState({
      eP_container:ReactDOM.findDOMNode(this.c).children[0].children[8].children[1].getBoundingClientRect().width
    });
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~
    get and set X and Y coordinates
    to determine how much to move background in C_a
    ( currently unused; Had a paralax effect on mouse move in mind
    with a different background but went with a gradient
    background instead; leaving this here anyway for when
    I decide what kind of animation I want running in the
    background on mouse move, after the svg animations finish;
    considering removing it altogether for performance :thinking: )
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  getCoord(a , b ) {
    this.setState({
      x: a,
      y: b
    });

    let movementStrength = 25;
    let height = movementStrength / this.state.height;
    let width = movementStrength / this.state.width;

    let pageX = b - (this.state.width/2);
    let pageY = a - (this.state.height/2);

    let newvalX = width * pageX * -1 -25;
    let newvalY = height * pageY * -1 -50;

    let result = newvalY+'px '+newvalX+'px';

    this.setState({
      bgPosition: result
    });
  }

  /*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    get the current size values for each of the 4 sections and store them in setState
    this function is called on page load in componentDidMount and is also used to
    listen for changes on window resize via addEventListener in componentDidMount.
    From the a,b,c,d state the height of each sections are used in conjuction with
    the height and width state to determine which one of the bullet points in the Navigation
    gets the span-selected class mousewheel scrolling (in navigator.js).
    Also the handleAbout, handleProjectsBg and handleTitles are called here since they activate
    animations depending breakpoints,
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  */
  handleScroll() {
    let a = ReactDOM.findDOMNode(this.a).getBoundingClientRect();
    let b = ReactDOM.findDOMNode(this.b).getBoundingClientRect();
    let c = ReactDOM.findDOMNode(this.c).getBoundingClientRect();
    let d = ReactDOM.findDOMNode(this.d).getBoundingClientRect();
    this.setState({
      first: a,
      second: b,
      third: c,
      forth: d
    });

    this.handleAbout();
    this.handleProjectsBg();
    this.handleTitles();
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~
    check if big images have loaded
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  checkLargeImages(){
    this.setState({imageLoadedCounter: this.state.imageLoadedCounter + 6.66 });
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~
    counting when the page starts to load,
    stop after all the large images are loaded,
    (which will give you 99.9 for imageLoadedCounter state
    as a last number, making the display_Percentage stop at 100);
    the counting starts in componentDidMount
    and stops from componentDidUpdate
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  countPercentagePoints(){
    if(this.state.display_Percentage<this.state.imageLoadedCounter) {
      this.setState({display_Percentage:this.state.display_Percentage + 1});
    }
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~
    click handler for the 4 navigation buttons
  ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleNavClick(x) {
    if (x===1) {ReactDOM.findDOMNode(this.a).scrollIntoView({ block:'start', behavior: 'smooth'});}
    if (x===2) {ReactDOM.findDOMNode(this.b).scrollIntoView({ block:'start', behavior: 'smooth'});}
    if (x===3) {ReactDOM.findDOMNode(this.c).scrollIntoView({ block:'start', behavior: 'smooth'});}
    if (x===4) {ReactDOM.findDOMNode(this.d).scrollIntoView({ block:'end', behavior: 'smooth'});}
    //need to use ReactDOM.findDOMNode(this.x) instead of just this.x
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~
      scrolling animations for the paragraphs and keywords in C_b
    ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleAbout(){
    /*
      main elements from the virtual DOM used in this function:
      the 3 containers (a,b,c) that hold the paragraphs (a_p,b_p,c_p)
      their titles, the reference points used when this.state.width>768px (a_corner_fixed,b_corner_fixed,c_corner_fixed),
      which in the initial design were shaped like a triangle, thus the name, and the small
      circles with a white poin in the middle (a_corner,b_corner,c_corner) that get animated
      downward before the text starts showing, these too were shaped like a triangle in the inital design
    */
    let a = ReactDOM.findDOMNode(this.b).children[0].children[0];
    let a_p = ReactDOM.findDOMNode(this.b).children[0].children[0].children[1];
    let a_corner = ReactDOM.findDOMNode(this.b).children[0].children[0].children[2];
    let a_corner_fixed = ReactDOM.findDOMNode(this.b).children[0].children[0].children[3].getBoundingClientRect().top;

    let b = ReactDOM.findDOMNode(this.b).children[0].children[1];
    let b_p = ReactDOM.findDOMNode(this.b).children[0].children[1].children[1];
    let b_corner = ReactDOM.findDOMNode(this.b).children[0].children[1].children[2];
    let b_corner_fixed = ReactDOM.findDOMNode(this.b).children[0].children[1].children[3].getBoundingClientRect().top;

    let c = ReactDOM.findDOMNode(this.b).children[0].children[2];
    let c_p = ReactDOM.findDOMNode(this.b).children[0].children[2].children[1];
    let c_corner = ReactDOM.findDOMNode(this.b).children[0].children[2].children[2];
    let c_corner_fixed = ReactDOM.findDOMNode(this.b).children[0].children[2].children[3].getBoundingClientRect().top;

    /*
      variables used to determine when to open the box and start showing the text
      in paragraphs A B C, depending if the screen size is over 768px or under
      768px & orientation:portrait or under 768px & orientation: landscape
    */
    let measuring_point_a = this.state.width<768 ? a.getBoundingClientRect().top : a_corner_fixed+50;
    let measuring_point_b = this.state.width<768 ? b.getBoundingClientRect().top : b_corner_fixed+50;
    let measuring_point_c = this.state.width<768 ? c.getBoundingClientRect().top : c_corner_fixed+50;
    let measuring_breakPoint='';

    if(this.state.width<768 && this.state.width<this.state.height) {
      measuring_breakPoint = (this.state.height/4);
    } else if (this.state.width<768 && this.state.width>this.state.height) {
      measuring_breakPoint = 0;
    } else {
      measuring_breakPoint= this.state.height;
    }

    /*~~~~~~~~~~
    variables and function neded to make underline animations
    Note: there's also another variable declaration: i=0; just before for(i=0;i<=8:i++) ..., needed for the bold words animations;
          it's inside there because even though it wasn't giving an error, it wouldn't let you scroll
          if you opened the console, regardless if you declared it as a var or let. Declaring it there fixes it.
    ~~~~~~~~~~*/

    let y=0;
    let timers = ( parent_p, child_a, start, limit, baseInterval, addedInterval ) => {
      for( y=start;y<limit;y++) {
        (function(y){
          setTimeout(()=>{
            parent_p.children[child_a].children[y].children[0].style.width="100%";
          }, baseInterval * y + addedInterval );
        })(y);
      }
    };
    let interval_underscore = 70; //170

    // console.log(window.getComputedStyle(React.findDOMNode(this.refs.container)).getPropertyValue("opacity")) );
    // console.log(window.getComputedStyle(a_p).getPropertyValue("opacity")) ;


    /*~~~~~~~~~~
    set a/b/c_corner to overlap with the top of the title;
    ~~~~~~~~~~*/

    a_corner.style.transform='translate3d(0px,-'+a.getBoundingClientRect().height.toString()+'px,0px)';
    b_corner.style.transform='translate3d(0px,-'+b.getBoundingClientRect().height.toString()+'px,0px)';
    c_corner.style.transform='translate3d(0px,-'+c.getBoundingClientRect().height.toString()+'px,0px)';




    /*~~~~~~~~~~
    show and translate dialog title
    ~~~~~~~~~~*/
    if(a.getBoundingClientRect().top <= this.state.height-100) {
      a.children[0].style.opacity='1';
      a.children[0].style.transform='translateY(0)';

    }
    if(b.getBoundingClientRect().top <= this.state.height-100) {
      b.children[0].style.opacity='1';
      b.children[0].style.transform='translateY(0)';
    }
    if(c.getBoundingClientRect().top <= this.state.height-100) {
      c.children[0].style.opacity='1';
      c.children[0].style.transform='translateY(0)';
    }

    /*~~~~~~~~~~~~~~~~~~
    'open' the dialog box by showing the corner and translating it to 0 0 0,
     and try and force the corner to stay bottom  (with the else conditions) if the user scrolls back
     up really fast(as always IE/edge does what it wants and ignores this, so I had to put a css rule
     to transition only the opacity, without the transformY when it detects an Edge browser);
     display the <p> after 400ms
     animate the keywords children
    ~~~~~~~~~~~~~~~~~~~*/
    if(measuring_point_a <= measuring_breakPoint) {
      a_corner.style.transform='translate3d(0,0,0)';
      a_corner.style.opacity='1';
      setTimeout(()=> a_p.style.opacity='1',400);
      let i=1;
      for(i=1;i<=8;i++) {
        /*~~~~~~~~~~
        if it's i<=3 it works but gives and error in the console not recognizing a_p.children[i] after it finishes the animations
        and if it starts with 0 then the first element is already styled with the border and extra text-shadow;
        solution: start with i=1, and have and empty child at the start of the <p> so everything's animated without errors.
        ~~~~~~~~~~*/
        (function(i) {
          let interval_shadows = 300 * i; //800 * i
          setTimeout(()=>a_p.children[i].style.textShadow ='-0.5px -0.5px 0 #211f1f,0.5px -0.5px 0 #211f1f,-0.5px 0.5px 0 #211f1f,0.5px 0.5px 0 #211f1f',interval_shadows);
        })(i);

        timers(a_p,1,0,2,interval_underscore, 2600); //1000
        timers(a_p,2,0,5,interval_underscore, 2700); //1000*2  2700=100*1+2600
        timers(a_p,3,0,3,interval_underscore, 3200); //1000*3  3200=5*100+2700
        timers(a_p,4,0,3,interval_underscore, 3500); //1000*4  3500=3*100+3200
        timers(a_p,5,0,4,interval_underscore, 3800); //1000*5  3800=3*100+3500
        timers(a_p,6,0,3,interval_underscore, 4200); //1000*6  4200=4*100+3800
        timers(a_p,7,0,10,interval_underscore, 4500); //1000*7 4500=3*100+4200
        timers(a_p,8,0,7,interval_underscore, 5500); //1000*8+1000  5500=10*100+4500
        /*~~~~~
         basically each keyword had a text-shadow transition of 0.1s but that was too fast. Now it's
         0.24s which is fast enough and not too fast so as to give a pleasent visual effect without inducing
         a feeling of rush. Since there are 36 keywords here, the very first addedInterval should be 3600
         but the overlap between the last keyword group text-shadow transition and the start of the underlining
         of the word Alex isn't noticeable with 2600, and the entire animation ends faster. After the animation
         for the first group just add 100*number_of_underlines_in_Group to the addedInterval (100 because the
         transition for the underline is 0.1s). So, for example 2700=100*1+2600; 3200=5*100+2700; 3500=3*100+3200;
        ~~~~~*/

      }
    } else if(measuring_point_a > measuring_breakPoint && window.getComputedStyle(a_p).getPropertyValue("opacity")==='1') {
      a_corner.style.transform='translate3d(0,0,0)';
      setTimeout(()=>a_p.children[0].style.textShadow ='-1px -1px 0 #211f1f,1px -1px 0 #211f1f,-1px 1px 0 #211f1f,1px 1px 0 #211f1f',100);
    }
    if(measuring_point_b <= measuring_breakPoint) {
      b_corner.style.transform='translate3d(0,0,0)';
      b_corner.style.opacity='1';
      setTimeout(()=> b_p.style.opacity='1',400);
      let i=1;
      for(i=1;i<=7;i++) {
        /*~~~~~~~~~~
        same as the first for loop
        ~~~~~~~~~~*/
        (function(i) {
          let interval_shadows = 300 * i;
          setTimeout(()=>b_p.children[i].style.textShadow ='-0.5px -0.5px 0 #211f1f,0.5px -0.5px 0 #211f1f,-0.5px 0.5px 0 #211f1f,0.5px 0.5px 0 #211f1f',interval_shadows);
        })(i);

        timers(b_p,1,0,6,interval_underscore, 2300); //1000
        timers(b_p,2,0,11,interval_underscore, 2800); // 1000*2
        timers(b_p,3,0,4,interval_underscore, 3900); //1000*3+800
        timers(b_p,4,0,2,interval_underscore, 4300); //1000*4+800
        timers(b_p,5,0,1,interval_underscore, 4500); //1000*5+600
        timers(b_p,6,0,5,interval_underscore, 4600); //1000*6+200
        timers(b_p,7,0,5,interval_underscore, 5100); //1000*7+200
        /*~~~~~
         same explanation as in the animation for a_p above; this group has 33 keywords
         so we can start with 2300 base for addedInterval
        ~~~~~*/

      }
    } else if(measuring_point_b> measuring_breakPoint && window.getComputedStyle(b_p).getPropertyValue("opacity")==='1') {
      b_corner.style.transform='translate3d(0,0,0)';
    }
    if(measuring_point_c <= measuring_breakPoint) {
      c_corner.style.transform='translate3d(0,0,0)';
      c_corner.style.opacity='1';
      setTimeout(()=> c_p.style.opacity='1',400);

      let i=1;
      for(i=1;i<=8;i++) {
        /*~~~~~~~~~~
        same as the first for loop
        ~~~~~~~~~~*/
        (function(i) {
          let interval_shadows = 300 * i;
          setTimeout(()=>c_p.children[i].style.textShadow ='-0.5px -0.5px 0 #211f1f,0.5px -0.5px 0 #211f1f,-0.5px 0.5px 0 #211f1f,0.5px 0.5px 0 #211f1f',interval_shadows);
        })(i);

        timers(c_p,1,0,7,interval_underscore, 2300);//1000
        timers(c_p,2,0,1,interval_underscore, 2900);//1000*2+800
        timers(c_p,3,0,3,interval_underscore, 3000);//1000*3+800
        timers(c_p,4,0,8,interval_underscore, 3300);//1000*4+800
        timers(c_p,5,0,5,interval_underscore, 4000);//1000*5+1400
        timers(c_p,6,0,5,interval_underscore, 4500);//1000*6+1200
        timers(c_p,7,0,2,interval_underscore, 5000);//1000*7+1000
        timers(c_p,8,0,2,interval_underscore, 5200);//1000*8+400
        /*~~~~~
         same as the other 2 above; this one also has 33 keywords so we can start with 2300
         as the base addedInterval
        ~~~~~*/

      }

    } else if(measuring_point_c > measuring_breakPoint && window.getComputedStyle(c_p).getPropertyValue("opacity")==='1') {
      c_corner.style.transform='translate3d(0,0,0)';
    }

  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~
      scrolling animations for the first 6 projects in C_c
    ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleProjectsBg (){
    let c_container = ReactDOM.findDOMNode(this.c).children[0]; //project-container
    let c_BG_one = ReactDOM.findDOMNode(this.c).children[0].children[1]; // first .project-row
    let c_BG_two = ReactDOM.findDOMNode(this.c).children[0].children[2]; // second .project-row
    let c_BG_three = ReactDOM.findDOMNode(this.c).children[0].children[3]; // third .project-row
    let c_BG_four = ReactDOM.findDOMNode(this.c).children[0].children[4]; // fourth .project-row
    let c_BG_five = ReactDOM.findDOMNode(this.c).children[0].children[5]; // fifth .project-row
    let c_BG_six = ReactDOM.findDOMNode(this.c).children[0].children[6]; // sixth .project-row

    let svgBG_Control = (row_Number) =>{
      let p_row_Breakpoint = (this.state.height>=670 && this.state.height<=750) ? 120 :
                            ( (this.state.height>750 && this.state.width<655) ? 120 :
                            ( (this.state.height>750 && this.state.width>655) ? (this.state.height-row_Number.children[0].getBoundingClientRect().height) :
                            ( (this.state.height<670 && this.state.width<this.state.height) ? 30 : 120 ) ) ) ;

      if(row_Number.children[0].getBoundingClientRect().top <= p_row_Breakpoint) {
        let i=1;

        for( i=0;i<=5;i++){
          if (/Edge\/\d./i.test(navigator.userAgent)){
             // This is Microsoft Edge
          }
          if (!(/Edge\/\d./i.test(navigator.userAgent))){
            row_Number.children[0].children[i].style.WebkitAnimationName = "circles_bg_all"; // Code for Chrome, Safari, and Opera
            row_Number.children[0].children[i].style.animationName = "circles_bg_all"; // Standard syntax
             // This is NOT Edge
          }
        }
        //cricles-bg
        row_Number.children[0].style.opacity='1';
        //app Title
        row_Number.children[1].children[0].children[0].style.opacity='0.3';
        row_Number.children[1].children[0].children[0].style.transform='translateX(0px)';
        //app phone mockup
        row_Number.children[1].children[0].children[1].style.opacity='1';
        row_Number.children[1].children[0].children[1].style.transform='translateX(0px)';
        //description-text
        row_Number.children[1].children[1].children[0].style.opacity='1';
        row_Number.children[1].children[1].children[0].style.transform='translateX(0px)';
        //tools used --- the <ul> with the small svg icons
        row_Number.children[1].children[1].children[1].style.opacity='1';
        row_Number.children[1].children[1].children[1].style.transform='translateX(0px)';
        //go Live button
        row_Number.children[1].children[1].children[2].style.opacity='1';
        row_Number.children[1].children[1].children[2].style.transform='translateX(0px)';
      }
    }

    svgBG_Control(c_BG_one);
    svgBG_Control(c_BG_two);
    svgBG_Control(c_BG_three);
    svgBG_Control(c_BG_four);
    svgBG_Control(c_BG_five);
    svgBG_Control(c_BG_six);



  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~
    scrolling animations for the Titles and paragraphs in C_c
    ( Work, Extras and Contacts )
  ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleTitles(){
    let c_container = ReactDOM.findDOMNode(this.c).children[0]; //project-container
    let c_Title_Work = ReactDOM.findDOMNode(this.c).children[0].children[0]; // Work title and p
    let c_Title_Extras = ReactDOM.findDOMNode(this.c).children[0].children[7]; // Extras title and p
    let c_Carousel = ReactDOM.findDOMNode(this.c).children[0].children[8]; // Extras projects carousel
    let c_Title_Contacts = ReactDOM.findDOMNode(this.c).children[0].children[9]; // Contacts title and p

    let titleAnimation = (titleName) => {
      let titleBreakPoint = this.state.height>700 ? this.state.height/2 : 100;

      if (titleName.children[0].getBoundingClientRect().top<= titleBreakPoint) {
        titleName.children[0].style.opacity='1';
        titleName.children[0].style.WebkitAnimationName = "bounce";  // Code for Chrome, Safari, and Opera
        titleName.children[0].style.animationName = "bounce";   // Standard syntax
        setTimeout(()=>{ titleName.children[1].style.transform='translateY(0)'; titleName.children[1].style.opacity='1'; } , 2500);

        if(titleName===c_Title_Work) {
          setTimeout( function(){this.setState({  titleClassName_Work : 'projects-intro'});}.bind(this) , 1100  );
        } else if(titleName===c_Title_Extras) {
          setTimeout( function(){this.setState({  titleClassName_Extras : 'projects-intro'});}.bind(this) , 1100  );
          setTimeout( function(){c_Carousel.style.opacity='1'} , 2900  );
        } else {
          setTimeout( function(){this.setState({  titleClassName_Contacts : 'projects-intro'});}.bind(this) , 1100  );
        }
      }
    }

    titleAnimation(c_Title_Work);
    titleAnimation(c_Title_Extras);
    titleAnimation(c_Title_Contacts);
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~
    handler for Left arrow in the carousel in C_c
  ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleArrowClickLeft(){
    this.state.displayedProject > 1 ? this.setState({displayedProject:this.state.displayedProject-1}) : this.setState({displayedProject:1});
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~
    handler for right arrow in the carousel in C_c
  ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleArrowClickRight(){
    this.state.displayedProject < 9 ? this.setState({displayedProject:this.state.displayedProject+1}) : this.setState({displayedProject:9});
  }
  /*~~~~~~~~~~~~~~~~~~~~~~~~~
    keep values for input and textarea in state and if
    they are not empty apply styling classes to them in C_d
  ~~~~~~~~~~~~~~~~~~~~~~~~~*/
  handleNameChange(e){
    let name = e.target.value;
    this.setState({
      submit_name:name
    });
  }
  handleEmailChange(e){
    let email_address = e.target.value;
    this.setState({
      submit_email:email_address
    })
  }
  handleMessageChange(e){
    let contact_message = e.target.value;
    this.setState({
      submit_message:contact_message
    })
  }

  render() {
    const asd = {...this.state};

    return(
      <Scrollbars
        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
        style={{flex:1}}
        onScroll={this.handleScroll}
        ref={(aaa) => {this.aaa = aaa;}}
        >
          <LoadingScreen asd={asd}/>
          <C_a ref={(a) => {this.a = a;}}
            asd={asd}
            handleBackground={this.handleBackground}
            getCoord={this.getCoord}/>
          <Separator />
          <C_b ref={(b) => {this.b = b;}}
            handleAbout={this.handleAbout}/>
          <C_c ref={(c) => {this.c = c;}}
            asd={asd}
            displayedProject={this.state.displayedProject}
            handleArrowClickLeft={this.handleArrowClickLeft}
            handleArrowClickRight={this.handleArrowClickRight}
            checkLargeImages={this.checkLargeImages}/>
          <C_d  ref={(d) => {this.d = d;}}
            asd={asd}
            handleNameChange={this.handleNameChange}
            handleEmailChange={this.handleEmailChange}
            handleMessageChange={this.handleMessageChange}/>
          <Footer
            footer_year={this.state.footer_year}/>
          <Navigation
            asd = { asd }
            handleNavClick={ this.handleNavClick }
          />
      </Scrollbars>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
