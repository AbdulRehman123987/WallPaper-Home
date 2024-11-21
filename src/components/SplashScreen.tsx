import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.ImageStyle} source={require('../assets/Screen/logoPNG.png')} />
                <Text style={styles.heading}>Wallpaper House</Text>
                <Text style={styles.slogon}>All type of wallpaper is here...</Text>
            </View>
        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(10, 21, 31, 1)',
    },
    ImageStyle: {
        width: 150,
        height: 150,
    },
    heading:{
        fontSize:18,
        color:'white',
    },
    slogon:{
        marginTop:10,
        fontSize:12,
        color:'white',
    }
})