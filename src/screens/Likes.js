import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base';
class Likes extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='ios-heart-outline' style={{color: tintColor}} />
  }
  render() {
    return (
      <View>
        <Text> Likes </Text>
      </View>
    )
  }
}

export default Likes