import React from 'react';
import { TouchableNativeFeedback, StyleSheet, Text, Image, ScrollView, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// let splash_img = require('./img/splash.png');
const wine_categories = require('./constants').constants.wine_categories;
// =============================================
class ActionBar extends React.Component {
    // static navigationOptions = ({ navigation }) => ({
    //     title: `Wine List ${navigation.state.params.category}`,
    // });

    componentDidMount() {
        // var navigator = this.props.navigator;
        // console.info("------- ActionBar componentDidMount | navigator", this.props.navigator);
    }

    nextScreen() {
        // const { navigate } = this.props.navigation;
        // navigate('HomeScreen', {});
        // navigate('ActionBar', {});
    }


    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        // const { params } = this.props.navigation.state;
        // console.info("------- ActionBar render | params", params);
        // let title_img = wine_categories[params.category] //require('./img/s_tt_shelf.png');
        let l_panel = require('./img/l_panel.png');
        let c_panel = require('./img/c_panel.png');
        let r_panel = require('./img/r_panel.png');
        let logo = require('./img/caption_logo.png');
        return (
            <View style={styles.container}>
                <View style={styles.action_bar}>
                    <View style={styles.header}>
                        <Image source={l_panel} style={{ resizeMode: 'contain', width: 48, height: 32 }}></Image>
                        <Image source={c_panel} style={{ resizeMode: 'stretch', width: 238, height: 32 }}>
                           </Image>
                        <Image source={r_panel} style={{ resizeMode: 'contain', width: 64, height: 32 }}></Image>
                        <Image source={logo} style={[styles.logo, { width: 160, height: 32 }]}></Image>
                    </View>
                    {/* <Image source={page_end_img} style={styles.page_end}></Image> */}
                </View>
                <View style={styles.action_bar}>

                </View>
            </View>
        );
    }
}

// =============================================
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 0,
        top: 0,
        width: 360,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingLeft: 10,
        paddingTop: 0,
        paddingBottom: 10,

    },
    action_bar: {
        position: 'absolute',
        flex: 0,
        top: 0,
        width: 350,
        height: 50,
        overflow: 'hidden',
    },
    logo: {
        position: 'absolute',
        flex: 0,
        top: 0, 
        width: 160,
        height: 20,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginHorizontal: 100,
    },
    container_tiles: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFF0',
        flexDirection: 'column',
        width: 340,
        paddingTop: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: 360,
        paddingRight: 10,

    },
    title_tiles: {
        width: 300,
        height: 24,
        alignContent: 'flex-start',
        resizeMode: 'contain',
        justifyContent: 'flex-start',

        borderWidth: 0.5,
        borderColor: '#FF0000', alignSelf: 'flex-start',
    },
    filter: {
        width: 260,
        height: 24,
        alignContent: 'flex-end',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        textAlign: 'right',
        fontFamily: 'notoserif',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#660033',
    },
    filter_desc: {
        width: 260,
        height: 24,
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        textAlign: 'right',
        fontFamily: 'notoserif',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#B00033',
        borderColor: '#00FF00',
        borderWidth: 0.5,
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

});
module.exports = ActionBar;