import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {TitleComponent, PostsComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const PostsScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const {isLogin} = AuthConsumer();

    return(
        <>
            {isLogin ? (
                <View>
                    <TitleComponent title="Data Posts" />
                    <PostsComponent />
                </View>
            ) : (
                <Text>403 Forbidden</Text>
            )}
        </>
    );
};

export default PostsScreen;