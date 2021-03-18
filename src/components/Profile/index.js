import React, {useState, useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import axios from 'axios';
import {AuthConsumer} from '@contexts/auth';

const ProfileComponent = (props) => {
    const [user, setUser] = useState([]);
    const {id} = AuthConsumer();
    const {action} = props;

    console.log(id);

    const getUserData = async () => {
        let all_user_data;
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                all_user_data = response.data;
                const u = all_user_data.map(d => {
                    if(d.id == id) {
                        setUser(d);
                        console.log(d);
                    }
                });
            });
    };

    useEffect(() => {
        getUserData();
    }, []);

    function actionSubmit() {
        action();
    }

    return(
        <>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.btnlogout}>
                    <Text style={styles.label}>Logout</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
                <Image style={styles.img} source={require('../../images/profile.png')} />
            </View>
            <View style={styles.body}>
                <Text style={styles.info}>Name: {user.name}</Text>
                <Text style={styles.info}>Username: {user.username}</Text>
                <Text style={styles.info}>E-mail: {user.email}</Text>
                {/*<Text style={styles.info}>Street Address: {JSON.stringify(user.address.street).replace(/\"/g,"")}</Text>*/}
                <Text style={styles.info}>Phone: {user.phone}</Text>
                <Text style={styles.info}>Website: {user.website}</Text>
                {/*<Text style={styles.info}>Company Name: {JSON.stringify(user.company.name).replace(/\"/g, "")}</Text>*/}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => actionSubmit()}>
                    <Text style={styles.label}>See Posts</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#5db075',
        alignItems: 'center',
    },

    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    btnlogout: {
        width: '30%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginLeft: '70%',
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },

    btn: {
        width: '30%',
        height: 50,
        borderRadius: 50,
        marginTop: '10%',
        backgroundColor: '#5db075',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    info: {
        fontSize: 18,
    },
});

export default ProfileComponent;