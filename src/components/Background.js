import React, {Component} from 'react';

import bg1 from '../background1.jpg'
import bg2 from '../background2.jpg'
import bg3 from '../background3.jpg'
import bg4 from '../background4.jpg'
import bg5 from '../background5.jpg'

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {src: bg4, posX: 0, posY: 100},
        {src: bg5, posX: 52, posY: 0},
        {src: bg1, posX: 73, posY: 100},
        {src: bg3, posX: 74, posY: 100},
        {src: bg2, posX: 8, posY: 100},
      ],
      bgTop: {src: bg4, posX: 0, posY: 100},
      bgBottom: {src: bg5, posX: 52, posY: 0},
      opacityTop: 1,
      transition: "opacity 20s",
      cycleNumber: 1
    }
    this.animateBackground = this.animateBackground.bind(this);
  }

  animateBackground() {
    let { bgBottom, images, cycleNumber} = this.state;
    // let futureOpacity = opacityTop - 1;
    let futureCycleNumber = cycleNumber + 1;
    if (futureCycleNumber === 5) {futureCycleNumber = 0}

    this.setState({
      bgTop: bgBottom,
      transition: "none",
      opacityTop: 1,
      bgBottom: images[futureCycleNumber],
      cycleNumber: futureCycleNumber,
    }, () => setTimeout(() => {
      this.setState({
        transition: "opacity 20s",
        opacityTop: 0
      })
      }, 50)
    )
      
    
  }

  componentDidMount() {
    let {bgTop, bgBottom} = this.state;
    let counter = 0;

    let upCounter = () => {
      counter += 1;
      if (counter === 2) {
        this.props.setBgHasLoaded(true);
        setTimeout(() => {
            this.setState({
            opacityTop: 0
          })
          let interval = setInterval(this.animateBackground, 20000)
        }, 2000)
      }
    };

    let backgroundTop = new Image();
    backgroundTop.src = bgTop.src;
    backgroundTop.onload = upCounter;

    let backgroundBottom = new Image();
    backgroundBottom.src = bgBottom.src;
    backgroundBottom.onload = upCounter;

    let back3 = new Image();
    back3.src = bg3;
    let back4 = new Image();
    back4.src = bg4;
    let back5 = new Image();
    back5.src = bg5;
  }


  render() {
    let {bgTop, bgBottom, opacityTop, transition} = this.state;
    let {pathname} = this.props;

    return (
      <div>
        <div className={pathname === "/" ? "bg-img" : "bg-img blur"} style={{backgroundImage: `url(${bgTop.src})`, backgroundPosition: bgTop.posX + "% " + bgTop.posY + "%", opacity: opacityTop, transition: transition }}>
        </div>
        <div className={pathname === "/" ? "bg-img bg-under" : "bg-img bg-under blur"} style={{backgroundImage: `url(${bgBottom.src})`, backgroundPosition: bgBottom.posX + "% " + bgBottom.posY + "%" }}>
        </div>
      </div>
    )
  }
}

export default Background;