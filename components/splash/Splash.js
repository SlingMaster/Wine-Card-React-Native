import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, Button, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
// import TimerMixin from 'react-timer-mixin';
// addNavigationHelpers, 
// let splash_img = require('./img/splash.png');
let splash_img = require('../utils/img/splash.png');
let clearID = 0;
var reactMixin = require('../utils/set-timeout-mixin');
// =============================================
// const Splash = ({ navigation }) => (
class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigator: 'all',
        };
    }

    componentDidMount() {
        console.info("------- componentDidMount");
        var navigator = this.props.navigator;
        console.info("------- Splash componentWillMount | navigator", this.props.navigator);
        setTimeout(() => {
            this.nextScreen();
            console.info("======= Timeout | clearID:", this.clearID);
        }, 2000);
        // mixins: [TimerMixin],
        // this.clearID = setTimeout(() => {
        //     this.nextScreen();
        //     console.info("======= Timeout | clearID:", this.clearID);
        // }, 2000);
    }
    componentWillMount() {
        console.info("======= componentWillMount");
        console.info("------- Splash componentWillMount | navigator", this.props.navigator);
    }

    nextScreen() {
        console.info('spalsh | nextScreen');
        //this.clearTimeout(this.state.clearId);
        const navigateAction = NavigationActions.navigate({
            //routeName: 'HomeScreen',
            routeName: 'WineList',
            // params: {},
            // action: NavigationActions.navigate({ routeName: 'SubProfileRoute' })
            action: NavigationActions.navigate()
        })

        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            < TouchableNativeFeedback onPress={() => {
                clearTimeout(this.clearId);
                this.nextScreen();
            }
            }>
                <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={splash_img} style={{ width: 96, height: 96 }}></Image>
                </View>
            </ TouchableNativeFeedback  >
        );
    }
}

// reactMixin(Splash.prototype, require('../utils/set-timeout-mixin'));
module.exports = Splash;
