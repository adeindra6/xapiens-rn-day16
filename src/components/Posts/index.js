import React, {useState, useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    FlatList,
} from 'react-native';
import axios from 'axios';
import {AuthConsumer} from '@contexts/auth';

const PostsComponent = (props) => {
    const [post, setPost] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const {id} = AuthConsumer();
    const {action} = props;

    const getPostData = async () => {
        let all_post_data;
        let tmp = [];
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                all_post_data = response.data;
                const p = all_post_data.map(p => {
                    if(p.userId == id) {
                        tmp.push(p);
                        console.log(p);
                        setPost(tmp);
                    }
                });
            });
    };

    useEffect(() => {
        getPostData();
    }, []);

    const Item = ({item}) => (
        <TouchableOpacity
            style={styles.btn}>
            <Text style={styles.label}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({item}) => {
        return(
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                }}
            />
        );
    };

    return(
        <View>
            <ScrollView>
                <SafeAreaView>
                    <FlatList
                        data={post}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#5db075',
        width: '80%',
        alignSelf: 'center',
    },

    label: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default PostsComponent;