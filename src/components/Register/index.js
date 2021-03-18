import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import { useForm } from '@libs';

const RegisterComponent = (props) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {action} = props;

    function nameHandler(text) {
        console.log("Register Component Name Handler : " + text);
        setName(text);
    }

    let { Name, verifName } = useForm();
    function validateName(name) {
        let verifiedName = verifName(name);
        return verifiedName;
    }

    function emailHandler(text) {
        console.log("Register Component Email Handler : " + text);
        setEmail(text);
    }

    let { Email, verifEmail } = useForm();
    function validateEmail(email) {
        let verifiedEmail = verifEmail(email);
        return verifiedEmail;
    }

    function passwordHandler(text) {
        console.log("Register Component Password Handler : " + text);
        setPassword(text);
    }

    let { Password, verifPassword } = useForm();
    function validatePassword(password) {
        let verifiedPassword = verifPassword(password);
        return verifiedPassword;
    }

    function actionSubmit() {
        if(validateName(name) && validateEmail(email) && validatePassword(password)) {
            action(name, email, password);
            setName('');
            setEmail('');
            setPassword('');
        }
        else {
            Alert.alert("Warning", 
            "Please fill the form with these rules : \n" +
            "1. Name (required) \n" +
            "2. Email (example@mail.com) \n" +
            "3. Password (min. 6 characters)"
            );
        }
    }

    return(
        <View>
            <TextInput
                value={ name }
                style={ styles.input }
                placeholder="Name"
                onChangeText={(text) => {
                    nameHandler(text);
                }}
            />
            <TextInput
                value={ email }
                style={ styles.input }
                placeholder="Email"
                onChangeText={(text) => {
                    emailHandler(text);
                }}
            />
            <TextInput
                value={ password }
                style={ styles.input }
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                    passwordHandler(text);
                }}
            />
            <TouchableOpacity
                style={ styles.btn }
                onPress={() => actionSubmit()}>
                <Text style={ styles.label }>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ styles.link }>
                <Text style={ styles.linklabel }>Forgot your password?</Text>
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

export default RegisterComponent;