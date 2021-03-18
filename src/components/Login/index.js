import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import {useForm} from '@libs';

const LoginComponent = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {action} = props;

    function emailHandler(text) {
        console.log("Login Component Email Handler : " + text);
        setEmail(text);
    }

    let {Email, verifEmail} = useForm();
    function validateEmail(email) {
        let verifiedEmail = verifEmail(email);
        return verifiedEmail;
    }

    function passwordHandler(text) {
        console.log("Login Component Password Handler : " + text);
        setPassword(text);
    }

    let { Password, verifPassword } = useForm();
    function validatePassword(password) {
        let verifiedPassword = verifPassword(password);
        return verifiedPassword;
    }

    function actionSubmit() {
        if(validateEmail(email) && validatePassword(password)) {
            action(email, password);
            setEmail('');
            setPassword('');            
        }
        else {
            Alert.alert("Warning", "Pastikan E-mail benar dan Password setidaknya memiliki 6 karakter!");
        }
    };

    return(
        <View>
            <TextInput
                value={ email }
                placeholder="Email"
                style={ styles.input }
                onChangeText={(text) => {
                    emailHandler(text);
                }}
            />
            <TextInput
                value={ password }
                placeholder="Password"
                secureTextEntry={true}
                style={ styles.input }
                onChangeText={(text) => {
                    passwordHandler(text);
                }}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => actionSubmit()}>
                <Text style={styles.label}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.link}>
                <Text style={styles.linklabel}>Forgot your password?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        backgroundColor: '#e8e8e8',
        alignSelf: 'center',
    },

    btn: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginTop: '30%',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    link: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'white',
    },

    linklabel: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#5db075',
    },
});

export default LoginComponent;