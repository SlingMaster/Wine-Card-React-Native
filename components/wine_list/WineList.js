import React from 'react';
import {
    AppRegistry,
    TouchableNativeFeedback,
    View,
    Image,
    Text,
    StyleSheet,
    Animated,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const wine_categories = require('./constants').constants.wine_categories;
var ActionBar = require('./ActionBar');
// let splash_img = require('./img/splash.png');

// =============================================
class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* Используем анимацию появления столбцов, задаем начальное значение позиции */
            animatedTop: new Animated.Value(-150),
            /* Получаем отношение текучего значения к максимальному */

        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `Wine List ${navigation.state.params.category}`,
    });

    componentDidMount() {
        // var navigator = this.props.navigator;
        console.info("------- WineList componentDidMount | navigator", this.props.navigator);
        animatedTop: new Animated.Value(-150)
    }

    nextScreen() {
        const { navigate } = this.props.navigation;
        navigate('HomeScreen', {});
        // navigate('WineList', {});
    }


    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;

        var img = wine_categories[params.category];
        console.info("-------------- WineList render | params", params, " | img:", img);
        Animated.timing(this.state.animatedTop, { toValue: -20, timing: 1000 }).start();
        return (
            <View style={styles.container}>
                <View style={styles.container_tiles}>

                    <View style={styles.header}>
                        <Image source={img} style={[styles.title_tiles, styles.border_style]} />
                        <Text style={styles.filter}> WineList • {params.category}</Text>
                        <Text style={styles.filter_desc}> WineList • {params.category}</Text>

                    </View>
                </View>
                <Animated.Image source={require('../../img/bookmark.png')}
                    style={[styles.animatedElement, { top: this.state.animatedTop }]}>
                </Animated.Image>
                <ActionBar />
            </View>
        );
    }
}
//style={styles.bookmark}>
// =============================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingLeft: 10,
        paddingTop: 0,
        paddingBottom: 10,
    },
    container_tiles: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFF0',
        flexDirection: 'column',
        width: 340,
        paddingTop: 35,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    header: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        width: 340,
        height: 70,

        borderWidth: 0.5,
        borderColor: '#FF0000',

    },
    title_tiles: {
        flex: 0,
        width: 300,
        height: 24,
        alignContent: 'flex-start',
        resizeMode: 'contain',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },

    filter: {
        flex: 0,
        width: 260,
        height: 24,
        alignContent: 'flex-start',
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

    },
    bookmark: {
        position: 'absolute',
        top: -20,
        width: 56,
        height: 160,
        right: 9,
        resizeMode: 'contain',

    },
    animatedElement: {
        position: 'absolute',
        top: -20,
        width: 56,
        height: 160,
        right: 9,
        resizeMode: 'contain',
    },
    border_style: {
        borderColor: '#00FF00',
        borderWidth: 0.5,
    }
});

module.exports = WineList;