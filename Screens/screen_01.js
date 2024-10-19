import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screen_01 = () => {
    const navigation = useNavigation();
    
    // Mảng chứa email và password
    const users = [
      { email: 'conghuy1', password: 'password1' },
      { email: 'conghuy2', password: 'password2' },
      { email: 'conghuy3', password: 'password3' },
      { email: 'conghuy4', password: 'password4' },
      { email: 'conghuy5', password: 'password5' },
    ];
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
     
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            navigation.navigate('screen_02');
        } else {
            Alert.alert('Login failed', 'Invalid email or password');
        }
    };

    return (
        <View style={{flex:1}}>
            <View style={{alignItems:'center', marginTop:130}}>
                <Image source={require('../assets/Data/Image_19.png')} style={styles.img}/>
                <Text style={{marginBottom:6, fontSize:35, fontWeight:510}}>Hello Again!</Text>
                <Text>Log into your account</Text>
            </View>  

            <View style={{ marginBottom: 15, borderWidth: 1, borderRadius: 13, padding: 10, marginTop:30, width:'85%', marginLeft:30}}>
                <TextInput
                    value={email}
                    placeholder='Enter your email address'
                    onChangeText={setEmail} 
                    keyboardType="email-address"
                />
            </View>

            <View style={{ marginBottom: 15, borderWidth: 1, borderRadius: 13, padding: 10, marginTop:10, width:'85%', marginLeft:30}}>
                <TextInput
                    value={password}
                    placeholder='Enter your password'
                    onChangeText={setPassword}  
                    secureTextEntry={true}
                />
            </View>

            <View>
                <Text style={{textAlign:'right', marginRight:23, color:'blue'}}>Forgot password?</Text>
            </View>

            <View>
                <TouchableOpacity style={{ width: '85%', marginLeft: 30, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 13 }} onPress={handleLogin} >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Continue
                    </Text>
                </TouchableOpacity>

                <View style={styles.container}>
                    <View style={styles.line} />
                    <Text style={styles.text}>or</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.container1}>
                    <TouchableOpacity style={styles.circle}>
                        <Icon name="google" size={30} color="#DB4437"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.circle}>
                        <Icon name="facebook" size={30} color="#1877F2" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.circle}>
                        <Icon name="apple" size={30} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default screen_01;

const styles = StyleSheet.create({
    img: {
        marginBottom: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#000', // Màu của đường kẻ
        width: '10%',
    },
    text: {
        marginHorizontal: 10,  // Khoảng cách giữa chữ và đường kẻ
        fontSize: 15,
        fontWeight: 'bold',
    },
    container1: {
        flexDirection: 'row',
        marginLeft: 125,
        paddingRight: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 35, // Làm tròn viền thành hình tròn
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
});
