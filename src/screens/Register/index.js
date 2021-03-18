import React, {useEffect} from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import {TitleComponent, RegisterComponent} from '@components';

const RegisterScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    function register(Name, Email, Password) {
        const user = {name: Name, email: Email, password: Password};
        Alert.alert('Info', 'Register Berhasil');
    }

    return(
        <View style={styles.body}>
            <TitleComponent title="Register" />
            <RegisterComponent action={(name, email, password) => register(name, email, password)} />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;