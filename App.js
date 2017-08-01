import React from 'react';
import {
  Platform,
  AppRegistry,
  View,
  Button,
  Text,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import { NavigationActions } from 'react-navigation';

var Splash = require('./components/splash/Splash');
var HomeScreen = require('./components/home_screen/HomeScreen');
var WineList = require('./components/wine_list/WineList');

// const WineCard = NavigationActions.setParams({
//   params: { title: 'Hello' },
//   key: 'Splash',
// })
// this.props.navigation.dispatch(WineCard)


// class RecentChatsScreen extends React.Component {
//   render() {
//     return <Text>List of recent chats</Text>
//   }
// }

// class AllContactsScreen extends React.Component {
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }

// class redWineList extends React.Component {
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }

// const WineCard = TabNavigator({
//   Splash: { screen: Splash },
//   HomeScreen: { screen: HomeScreen },
//   WineList: { screen: WineList },
// });

// const WineCard = StackNavigator({
//   Splash: { screen: Splash },
//   WineList: { screen: WineList },  
//   HomeScreen: { screen: HomeScreen },

// });



// =======================================================

const ExampleRoutes = {
  Splash: {
    name: 'Stack Example',
    description: 'A card stack',
    screen: Splash,
  },
  HomeScreen: {
    name: 'Tabs Example',
    description: 'Tabs following platform conventions',
    screen: HomeScreen,
  },
  WineList: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen:  WineList,
  },
}

const WineCard = StackNavigator (
  {
    ...ExampleRoutes,
    Index: {
      screen: Splash,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  },
);

AppRegistry.registerComponent('WineCard', () => WineCard);
