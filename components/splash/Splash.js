import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, Button, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
// addNavigationHelpers, 
let splash_img = require('./img/splash.png');

// =============================================
// const Splash = ({ navigation }) => (
class Splash extends React.Component {

    componentWillMount() {
        // var navigator = this.props.navigator;
        // console.info("------- Splash componentWillMount | navigator", this.props.navigator);

        setTimeout(() => {
            this.nextScreen();
        }, 2000);
    }

    nextScreen() {
        console.info('spalsh | nextScreen');
        const navigateAction = NavigationActions.navigate({
            routeName: 'HomeScreen',
            // params: {},
            // action: NavigationActions.navigate({ routeName: 'SubProfileRoute' })
            action: NavigationActions.navigate()
        })

        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            < TouchableNativeFeedback onPress={() => this.nextScreen()}>
                <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={splash_img} style={{ width: 96, height: 96 }}></Image>
                </View>
            </ TouchableNativeFeedback  >
        );
    }
}

module.exports = Splash;
