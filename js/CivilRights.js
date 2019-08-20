'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import {
  ViroButton,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroBox,
  ViroARTrackingTargets,
  ViroARPlaneSelector,
  ViroVideo,
  ViroNode,
  ViroAnimations
} from 'react-viro';


export default class CivilRights extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Hold Up",
      text2: "Hold Up",
      text3: "Hold Up",
      text4: "Hold Up",
      tapButton: false,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onAnchorFound = this._onAnchorFound.bind(this);
    this._onClickState = this._onClickState.bind(this);
    this._animateFinished = this._animateFinished.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} anchorDetectionTypes={"Vertical"}>         
        <ViroARImageMarker target={"targetOne"} onAnchorFound={this._onAnchorFound} >
          <ViroNode>
            <ViroButton
              source={require("./res/download.jpeg")}
              tapSource={require("./res/IMG_0485.jpeg")}
              position={[0, 0, 0]}
              rotation={[-90, 90, 0]}
              height={0.5}
              width={0.5}
              onClickState={this._onClickState}
              transformBehaviors={["billboard"]}
              visible={true}
              />
          </ViroNode>
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetTwo"} >
        <ViroText
            text={this.state.text3}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 90, 0]}
            style={styles.helloWorldTextStyle}
            transformBehaviors={["billboard"]}
          />
          <ViroText
            text={this.state.text2}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 90, 0]}
            style={styles.helloWorldTextStyle}
            transformBehaviors={["billboard"]}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetThree"} >
          <ViroText
            text={this.state.text3}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 90, 0]}
            style={styles.helloWorldTextStyle}
            transformBehaviors={["billboard"]}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetFour"} >
          <ViroText
            text={this.state.text4}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 90, 0]}
            style={styles.helloWorldTextStyle}
            transformBehaviors={["billboard"]}
          />
        </ViroARImageMarker>
      </ViroARScene>

    );
  }

  _onAnchorFound(state) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        visible: true,
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      this.setState({
        visible: false,
      });      
    }
  }

  _onClickState(stateValue, position, source)  {
    if(stateValue == 1) {
      this.setState({
        tapButton: true,
        animation: {name:'tapAnimationUp'},
        position: [[0,0,0]]
      });
    } else if(stateValue == 2) {
      this.setState({
        tapButton: false,
        animation: {name:'tapAnimationDown'},
        position: [[0,0,0]]
      });
    }
}

  _animateFinished(){
    this.setState({
      tapButton: false
    })
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Welcome to the Innovate Depot Tour! Head through the double doors and walk straight.",
        text2: "Keep on truckin. If you'd like to see some info on the CEO hover over his placard. When you make it to the large room, hover camera with steps in the center",
        text3: "This is our CEO's office. Do not disturb. Lots of innovation in progress.",
        text4: "Welcome to the Atrium :D! Hungry or lonely? You can solve both here. Hover over the Crestline doors for more info otherwise check out the board of pictures to the right of the steps.",
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
    }
  }

}

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./res/IMG_0485.jpeg'),
    orientation: "Up",
    physicalWidth: 0.75 // real world width in meters
  },
  "targetTwo": {
    source: require('./res/IMG_0486.jpeg'),
    orientation: "Up",
    physicalWidth: 0.75
  },
  "targetThree": {
    source: require('./res/IMG_0487.jpeg'),
    orientation: "Up",
    physicalWidth: 0.75
  },
  "targetFour": {
    source: require('./res/IMG_0488.jpeg'),
    orientation: "Up",
    physicalWidth: 0.75
  }
});



var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

var localStyles = StyleSheet.create({
    viroContainer :{
      flex : 1,
      backgroundColor: "black",
    },
    outer : {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: "black",
    },
    inner: {
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
      backgroundColor: "black",
    },
    titleText: {
      paddingTop: 30,
      paddingBottom: 20,
      color:'#fff',
      textAlign:'center',
      fontSize : 25
    },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    buttons : {
      height: 80,
      width: 175,
      paddingTop:20,
      paddingBottom:20,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });

ViroAnimations.registerAnimations({
  scaleButtonUp:{
    properties: {
      scaleX: 2,
      scaleY: 2,
      scaleZ: 2
    },
    easing: "easeineaseout",
    duration: 2000    
  },
  scaleButtonDown:{
    properties: {
      scaleX: .75,
      scaleY: .75,
      scaleZ: .75
    },
    easing: "easeineaseout",
    duration: 2000    
  },
  tapAnimationUp: [["scaleButtonUp"]],
  tapAnimationDown: [["scaleButtonDown"]]
});

module.exports = CivilRights;