import React from 'react';
import { AppLoading, Asset } from 'expo';
import { View } from 'react-native';
import Index from './pages/index.js';

const cacheImages = (images) => images.map(image => {
  if (typeof image === 'string') { return Image.prefetch(image); }
  else { return Asset.fromModule(image).downloadAsync(); }
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false
    }
  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/shared/Rolodex.png'),
      require('./assets/shared/back.png'),
      require('./assets/shared/plus.png'),
      require('./assets/shared/new-note.png'),
      require("./assets/shared/tab_one.png"),
      require("./assets/shared/tab_one_gray.png"),
      require("./assets/shared/tab_two.png"),
      require("./assets/shared/tab_two_gray.png"),
      require("./assets/shared/tab_three.png"),
      require("./assets/shared/tab_three_gray.png")
    ]);
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
export default App;
