import { StyleSheet, ScrollView, Image, Text, View,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ShowResult = ({route}) => {

    const {category}=route.params;
    const navigation=useNavigation();

    const [wallpaper, setWallpapers] = useState([]);

    const fetchData = async () => {
        const accessKey = "2qbDEIyiybcJllgUmBkvsMrot5HTD3GOPAiXYdAzJAg";
        const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${category?.name?category.name:category}&per_page=30`;
    
        try {
            const response = await axios.get(url);
            setWallpapers(response.data.results);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <>
            <View style={styles.imageContainer}>

                <View style={styles.imageSubContainer}>
                    <Text style={styles.heading}>{category?.name?category.name:category}</Text>
                <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={true} >
                    {
                        wallpaper ?
                        wallpaper.map((image) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('ShowImage',{image:image})} style={styles.imageBox} key={image.id}>
                                    <Image source={{ uri: image.urls?.small_s3 }} alt={image.alt_description} style={styles.wallpaper} />
                                </TouchableOpacity>
                            ))
                            
                            : null
                        }


                </ScrollView>
            </View>
            </View>
        </>
    )
}

export default ShowResult

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10, 21, 31, 1)',
    },
    heading:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
        marginBottom:10,
    },
    imageSubContainer:{
        width:'85%',
        height:'90%',
        margin:'auto',
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
        justifyContent:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
})