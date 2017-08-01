import React from 'react';
import {
    AppRegistry,
    TouchableNativeFeedback,
    View,
    Image,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// let splash_img = require('./img/splash.png');

// =============================================
class WineList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Wine List ${navigation.state.params.category}`,
    });

    componentDidMount() {
        // var navigator = this.props.navigator;
        console.info("------- WineList componentDidMount | navigator", this.props.navigator);
    }

    nextScreen() {
        const { navigate } = this.props.navigation;
        navigate('HomeScreen', {});
        // navigate('WineList', {});
    }


    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        // console.info("------- WineList render | params", params);
        return (
            <View>
                <Text> WineList • {params.category}</Text>
            </View>
        );
    }
}

module.exports = WineList;