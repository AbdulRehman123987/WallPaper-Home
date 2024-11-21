import { StyleSheet, Text, ScrollView, ImageBackground, TextInput, View } from 'react-native'
import React from 'react'
import { categoriesData } from '../Json/categories'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {

    const navigation=useNavigation();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TextInput style={styles.textInput} placeholder='Search for wallpapers...' placeholderTextColor={'white'} />

                    <View style={styles.categoriesCover}>
                        <Text style={styles.catHead}>Browse by categories</Text>
                        <ScrollView contentContainerStyle={styles.scrollStyle} >
                            {
                                categoriesData ?
                                    categoriesData.map((category) => (
                                        <View  style={styles.category} key={category.id}>
                                            <ImageBackground  source={category.image} style={styles.catBgImg}>
                                                <Text onPress={()=>navigation.navigate('ShowResult',{
                                                        category:category,})} style={styles.catTitle}>{category.name}</Text>
                                            </ImageBackground>
                                        </View>
                                    ))
                                    : null
                            }
                        </ScrollView>
                    </View>

                </View>
            </View>
        </>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10, 21, 31, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        width: '85%',
        height: '95%',
    },
    textInput: {
        marginTop: 10,
        width: '100%',
        // borderWidth:2,
        borderRadius: 10,
        padding: 10,
        color: 'white',
        fontSize: 13,
        backgroundColor: '#343434',
    },
    categoryBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    catHead: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    catBtn: {
        fontSize: 12,
        color: 'white',
    },
    categoriesCover: {
        width: '100%',
    },
    scrollStyle: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 5,
    },
    category: {
        width: 80,
        height: 50,
        marginLeft: 5,
    },
    catBgImg: {
        width: 80,
        height: 50,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    catTitle: {
        color: 'white',
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        paddingBottom: 100,
    },
    imageBox: {
        width: 80,
        height: 180,
    },
    wallpaper: {
        width: '100%',
        height: '100%',
    },
    scrollViewContent: {
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
})