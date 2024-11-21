import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';

const ShowImage = ({route}) => {
    const navigation=useNavigation();
    const {image}=route.params;

    const downloadImage = async (imageSource) => {
        const { config, fs } = RNFetchBlob;
        const PictureDir = fs.dirs.PictureDir;
        const imageUrl =imageSource;

        console.log(imageUrl)

        const options = {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: `${PictureDir}/your-image.jpg`,
            description: 'Downloading image.',
          },
        };
    
        try {
          const res = await config(options).fetch('GET', imageUrl);
          console.log('Success', 'Image downloaded to: ' + res.path());
        } catch (error) {
          console.log('Error', 'Failed to download image.');
        }
      };    


  return (
    <>
    <View style={styles.imageContainer}>
        <View style={styles.imageSubContainer}>
            <View style={styles.imageCover}>
                <Image style={styles.imageStyle} source={{uri: image.urls?.small_s3 }} />
            </View>
            <View style={styles.downloadBtn}>
                <Button title='Download' onPress={()=>downloadImage(image.urls.small_s3)} />
            </View>
        </View>
    </View>
    </>
  )
}

// onPress={()=>downloadImage(image.urls?.small_s3)}

export default ShowImage;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10, 21, 31, 1)',
    },
    imageSubContainer:{
        width:'85%',
        height:'90%',
        margin:'auto',
        // backgroundColor:'red',
    },
    imageCover:{
        width:'100%',
        height:'85%',
        // backgroundColor:'purple',
    },
    imageStyle:{
        width:'100%',
        height:'100%',
    },
    downloadBtn:{
        marginTop:10,
    }
})