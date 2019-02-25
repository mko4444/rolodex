import React from 'react';
import { AppLoading, Asset } from 'expo';
import { View } from 'react-native';
import Index from './pages/index.js';

const cacheImages = (images) => images.map(image => {
  if (typeof image === 'string') { return Image.prefetch(image); }
  else { return Asset.fromModule(image).downloadAsync(); }
});

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false
    }
  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./assets/shared/Rolodex.png')]);
    await Promise.all([...imageAssets]);
  }
  render() {
    return this.state.isReady ?
    <Index /> :
    <AppLoading
      startAsync={this._loadAssetsAsync}
      onFinish={() => this.setState({ isReady: true })}
      onError={console.warn}
    />
  }
}
