import React, {useEffect} from 'react';
import {
    View,
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';

const HomeScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    
    useEffect(() => {
        navigation.openDrawer();
    }, []);

    return(
        <View style={styles.body}>
            <Image style={styles.img} source={require('../../images/logo.jpg')} />
            <Text style={styles.title}>PT. Ubilembut</Text>
            <View style={styles.btngroup}>
                <TouchableOpacity
                    style={styles.btnlogin}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.txtbtn}>Login</Text>
                </TouchableOpacity>
                <Text>{" "}</Text>
                <TouchableOpacity
                    style={styles.btnregister}>
                    <Text style={styles.txtbtn}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#5db075',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#bdbdbd',
    },

    img: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    btngroup: {
        borderWidth: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    btnlogin: {
        marginTop: '70%',
    },

    btnregister: {
        marginLeft: '20%',
        marginTop: '70%',
    },

    txtbtn: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

export default HomeScreen;