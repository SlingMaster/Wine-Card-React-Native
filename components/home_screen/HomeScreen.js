import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, Button, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';

let bg_img = require('./img/menuv_bg.jpg');

const wine_categories = require('./constants').constants.wine_categories;
const wine_categories_select = require('./constants').constants.wine_categories_select;

// =============================================
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all',
            select: false,
            navigation: null
        };
    }

    componentDidMount() {
        this.setState({
            category: this.props.category,
            navigation: this.props.navigation
        });
        // console.info("------- Home Screen componentDidMount | props", this.navigation);
    }

    nextScreen() {
        // console.info('spalsh | nextScreen');
        this.setState({ select: false });
        const navigateAction = NavigationActions.navigate({
            routeName: 'WineList',
            params: { category: this.props.category },
            // action: NavigationActions.navigate({ routeName: 'SubProfileRoute' })
            action: NavigationActions.navigate()
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        const img = this.state.select
            ? wine_categories_select[this.props.category]
            : wine_categories[this.props.category];
        console.info("[] ============= Props.navigation", this.props.navigation);
        return (
            < TouchableNativeFeedback

                onPress={() => {
                    this.setState({
                        select: true,
                        category: this.props.category,
                        navigation: this.props.navigation
                    });
                    setTimeout(() => {
                        this.nextScreen();
                    }, 250);
                }}

                onPressOut={() => this.setState({ select: false })}
            >

                <View style={styles.menu_item}>
                    <Image source={img} style={{ width: 320, height: 30 }} />
                </View>
            </ TouchableNativeFeedback  >
        )
    }
}

// =============================================
class HomeScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    // static navigationOptions = ({ navigation }) => ({
    //     title: `Wine Card`,
    // });

    render() {
        // console.info("++++ props.navigation:", this.props.navigation);
        return (

            <View style={styles.container}>
                <View style={styles.menu_container}>
                    <Image source={bg_img} style={{ width: 340, height: 470, resizeMode: 'contain', justifyContent: 'center' }}>

                        <MenuItem category='red' select={true} navigation={this.props.navigation} />
                        <MenuItem category='rose' select={false} navigation={this.props.navigation} />
                        <MenuItem category='white' select={false} navigation={this.props.navigation} />
                        <MenuItem category='champagne' select={false} navigation={this.props.navigation} />
                        <MenuItem category='all' select={false} navigation={this.props.navigation} />

                    </Image>
                </View>

                <Text style={styles.copyrigth}> © 2017 Jeneral Samopal Company</Text>
            </View>
        );
    }
}

// =============================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        flexDirection: 'column',
    },
    menu_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
    },

    menu_item: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        height: 30,
        marginVertical: 4,
    },
    copyrigth: {
        flex: 0,
        bottom: 0,
        fontSize: 10,
        textAlign: 'center',
        color: '#7C6F10',
        height: 20,
    },
});

module.exports = HomeScreen;
