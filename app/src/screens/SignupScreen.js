import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import pineapple from '../../assets/pineapple.png';
import { connect } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage';
import { NavigationEvents } from 'react-navigation';
import { clearError } from '../actions/auth';


const SignupScreen = ({ navigation, error, clearError }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <View style={styles.container}>
            
            {/* Clear error between screens */}
            <NavigationEvents onWillFocus={clearError} />

            {/* Pineapple and header */}
            <Image style={styles.pineapple} source={pineapple} />
            <Text style={styles.title} >Create a new account</Text>

            {/* Error message */}
            { error ? <ErrorMessage message={error} /> : null}

            {/* Username input */}
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                placeholder="Username"
                selectionColor={'#f3c74f'}
                value={username}
                onChangeText={newInput => setUsername(newInput)}
            />

            {/* Password input */}
            <TextInput secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} placeholder="Password"
                selectionColor={'#f3c74f'}
                value={password}
                onChangeText={newInput => setPassword(newInput)}
            />

            {/* Password confirm */}
            <TextInput secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} placeholder="Confirm Password"
                selectionColor={'#f3c74f'}
                value={password2}
                onChangeText={newInput => setPassword2(newInput)}
            />

            {/* Signup button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            {/* Link to signup */}
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Already have an account? Sign in!</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => ({
    error: state.auth.error
})

export default connect(mapStateToProps, { clearError })(SignupScreen)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80,
        marginHorizontal: 35,
        alignItems: 'center'
    },

    pineapple: {
        resizeMode: 'contain',
        height: 100,
        marginBottom: 30
    },

    title: {
        fontFamily: 'lato-bold',
        fontSize: 16,
        marginBottom: 25
    },


    input: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 12,
        borderRadius: 7,
        marginVertical: 8,
        width: '100%'
    },

    button: {
        width: '100%',
        backgroundColor: '#f3c74f',
        color: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 25
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'lato-black'
    },

    link: {
        width: '100%',
        paddingVertical: 15,
        marginTop: 5
    },

    linkText: {
        color: '#f3c74f',
        fontFamily: 'lato-bold',
    }
})
