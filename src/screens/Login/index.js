import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import axios from 'axios';
import {TitleComponent, LoginComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const LoginScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [data, setData] = useState(null);
    const {setUserId} = AuthConsumer();

    const getData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => {
                    setData(response.data);
                }
            );
    };

    useEffect(() => {
        navigation.openDrawer();
        getData();
    }, []);

    function login(Email, Password) {
        let success = false;
        const u = data.map(d => {
            if(d.email.toLowerCase() == Email.toLowerCase() && Password !== '') {
                success = true;
                setUserId(d.id);
            }
        });
        if(success) {
            console.log("berhasil");
            navigation.navigate('Profile');
        }
        else {
            console.log("gagal");
        }
    }

    return(
        <View style={styles.body}>
            <TitleComponent title="Log In" />
            <LoginComponent action={(email, password) => login(email, password)} />
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

export default LoginScreen;