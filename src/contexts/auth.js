import React, {createContext, PureComponent, useContext} from 'react';

const AuthContext = createContext();

class AuthProvider extends PureComponent {
    state = {
        id: 0,
        isLogin: false,
    };

    setUserId(UserId) {
        this.setState({id: UserId, isLogin: true});
    }    

    render() {
        const {children} = this.props;
        const {id, isLogin} = this.state;

        const data = {
            id,
            isLogin,
            setUserId: (id) => this.setUserId(id),
        };
        return(
            <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
        );
    }
}

const AuthConsumer = () => useContext(AuthContext);

export {AuthContext, AuthConsumer};
export default AuthProvider;