import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const TitleComponent = (props) => {
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default TitleComponent;