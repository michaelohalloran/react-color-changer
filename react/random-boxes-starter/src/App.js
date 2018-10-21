import React, { Component } from 'react';
// import './App.css';
import Box from './Box';

const NUM_BOXES = 32;

class App extends Component {
  
  constructor(props) {
    super(props);
    //this makes an array of 32 color strings:
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    // console.log(boxes);
    this.state = {boxes}
    setInterval(()=> {
      //make a copy of the boxes
      const boxCopy = this.state.boxes.slice();
      //pick a random box, change its color
      const randomBox = Math.floor(Math.random()*boxCopy.length);
      boxCopy[randomBox] = this.getRandomColor();
      this.setState({boxes: boxCopy});
    },300);
  }

  getRandomColor() {
    //this pulls from defaultProps below
    let colorIdx = Math.floor(Math.random()*this.props.allColors.length);
    //returns random color string from colors array
    return this.props.allColors[colorIdx];
  }
  
  

  render() {

    //take 32 colors and make boxes from them
    // const boxes = App.defaultProps.allColors.map(color=> {
    //   return <Box key={color} color={color}/>;
    // });
    
    const boxes = this.state.boxes.map((color, idx)=> (
      <Box key={idx} color={color}/>
    ));

    
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
