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
            navigator: 'all',
        };
    }

    goWineList() {
        this.setState({
            select: false,
            category: this.props.category,
            navigation: this.props.navigation
        });
        // this.setState({ select: false, navigator: this.props.navigation });
        // console.log("goWineList | category:", this.props.category);
        //const { navigate } = this.props.navigation;
        //navigate('WineList', {category: 'all'});
        const navigateAction = NavigationActions.navigate({
            //routeName: 'WineList',
            routeName: 'Splash',
            // params: { category: 'all' },
            // action: NavigationActions.navigate({ routeName: 'SubProfileRoute' })
            action: NavigationActions.navigate()
        })

        this.props.navigation.dispatch(navigateAction);
        // navigate('WineList', {category: this.props.category});
    }

    render() {

        const img = this.state.select
            ? wine_categories_select[this.props.category]
            : wine_categories[this.props.category];
        return (
            < TouchableNativeFeedback

                onPress={() => {
                    this.setState({
                        select: true,
                        category: this.props.category,
                        navigation: this.props.navigation
                    });
                    console.info("onPress:", this.props.category, " | select: ", this.state.select);
                    //console.info("wine_categories:", wine_categories[this.props.category]);
                    //console.info("====  this.props.navigation:", this.props.navigation);
                    setTimeout(() => {
                        this.goWineList();
                    }, 150);
                }}

                onPressOut={() => this.setState({ select: false })}>

                <View style={styles.menu_item}>
                    <Image
                        source={img}
                        style={{ width: 320, height: 30 }}
                    />

                </View>
            </ TouchableNativeFeedback  >
        )
    }
}


// =============================================
class HomeScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Wine Card`,
    });

    render() {
        console.info("======+====== wine_categories:", wine_categories);
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.menu_container}>
                    <Image source={bg_img} style={{ width: 340, height: 470, resizeMode: 'contain', justifyContent: 'center' }}>

                        <MenuItem category='red' select={true} />
                        <MenuItem category='rose' select={false} />
                        <MenuItem category='white' select={false} />
                        <MenuItem category='champagne' select={false} />
                        <MenuItem category='all' select={false} />

                    </Image>
                </View>

                <Text style={styles.copyrigth}>
                    © 2017 Jeneral Samopal Company
                </Text>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
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

{/* <View>
                <Text>HomeScreen</Text>
                <Button
                    onPress={() => navigate('WineList', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View> */}