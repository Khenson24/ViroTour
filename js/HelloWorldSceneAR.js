import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  ViroARScene,
  ViroConstants,
  Viro3DObject,
  ViroImage,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroDirectionalLight,
  ViroBox,
  ViroAmbientLight,
  ViroNode,
  ViroMaterials,
  ViroQuad
} from 'react-viro'

// import testObj from './test.obj'

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super()

    this.state = {

    }

    this.onInitialized = this.onInitialized.bind(this)
  }

  onInitialized(state, reason) {
    console.warn('onInit')
    if (state === ViroConstants.TRACKING_NORMAL) {

    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render = () => {
    ViroMaterials.createMaterials({
      green_plane: {
        lightingModel: "Constant",
        diffuseColor: "#00ff0050"
      },
    });
    return (
      

        <ViroARScene minHeight={.5} minWidth={.5}>
          <ViroARPlaneSelector onTrackingUpdated={this.onInitialized} >
          <ViroImage
            height={1}
            width={1}
            source={require("./res/icon_play_copy3.png")}
            position={[0, 0, -2]}
            rotation={[-90, 90, 0]}
          />
          <ViroImage
            height={2}
            width={2}
            source={require("./res/icon_play_copy.png")}
            position={[0, 0, -22]}
            rotation={[-90, 90, 0]}
          />
          <ViroImage
            height={2}
            width={2}
            source={require("./res/icon_play_copy.png")}
            position={[0, 0, -42]}
            rotation={[-90, 90, 0]}
          />
          </ViroARPlaneSelector>          
        </ViroARScene>
      
    )
  }
}
module.exports = HelloWorldSceneAR;