import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { categoriesData } from '../Json/categories'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation=useNavigation();

    const [wallpaper,setWallpapers]=useState([]);
    const [searchQuery,setSearchQuery]=useState([]);

    const fetchData=async()=>{
        const accessKey="2qbDEIyiybcJllgUmBkvsMrot5HTD3GOPAiXYdAzJAg";
        const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=50`;
        const data=await axios.get(url);
        setWallpapers(data.data);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const search=()=>{
        if(searchQuery.length>2){
            navigation.navigate('ShowResult',{category:searchQuery});
            setSearchQuery('');
        }else{
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TextInput style={styles.textInput} placeholder='Search for wallpapers...' placeholderTextColor={'white'}
                value={searchQuery} 
                onChangeText={(text)=>setSearchQuery(text)}
                onSubmitEditing={search}/>

                <View style={styles.brandBarCover}>
                    <Image style={styles.brandbarImage} source={require('../assets/branding/brand.png')} />
                </View>

                <View style={styles.categoryBar}>
                    <Text style={styles.catHead}>Popular Categories</Text>
                    <Text style={styles.catBtn} onPress={()=>navigation.navigate('Categories')} >See more</Text>
                </View>

                <View style={styles.categoriesCover}>
                    <ScrollView horizontal={true} >
                        {
                            categoriesData?
                            categoriesData.map((category)=>(
<View style={styles.category} key={category.id}>


<ImageBackground source={category.image} style={styles.catBgImg}>
    <Text onPress={()=>navigation.navigate('ShowResult',{category:category})} style={styles.catTitle}>{category.name}</Text>
</ImageBackground>
</View>
                            )): null
                        }

                    </ScrollView>
                </View>

                <View style={styles.imageContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={true} >
                        {
                            wallpaper?
                            wallpaper.map((image)=>(
                                <TouchableOpacity onPress={()=>navigation.navigate('ShowImage',{image:image})} style={styles.imageBox} key={image.id}>
                            <Image source={{uri:image.urls?.small_s3}} alt={image.alt_description} style={styles.wallpaper}/>
                        </TouchableOpacity>
                            ))
                            
                        : null
                        }
                        

                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default Home

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
        borderRadius: 10,
        padding: 10,
        color: 'white',
        fontSize: 13,
        backgroundColor: '#343434',
    },
    brandBarCover: {
        marginTop: 15,
        width: '100%',
        height: '20%',
    },
    brandbarImage: {
        width: '100%',
        height: '100%',
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
        paddingVertical:5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingRight:5,
    },
    scrollStyle:{
        marginLeft:5,
    },
    category:{
        width:120,
        height:70,
        marginLeft:5,
        backgroundColor:'pink',
    },
    catBgImg: {
        width:'100%',
        height:'100%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    catTitle: {
        color: 'white',
    },
    imageContainer:{
        width:'100%',
        height:'70%',
        paddingBottom:100,
    },
    imageBox:{
        width:80,
        height:180,
    },
    wallpaper:{
        width:'100%',
        height:'100%',
    },
    scrollViewContent: {
        padding:5,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10,
    },

})

