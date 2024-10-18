import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useState } from 'react';

const Flipcartlogo = "https://banner2.cleanpng.com/20180711/xqq/aawoyegun.webp"
type ItemProps = PropsWithChildren<{
    productName: string;
    price:string;
    discoubt:string;
    origin:string;
    ororiginUrl:string;
}>

const ProductCard = (props:ItemProps):JSX.Element =>{
//  const Bannerimg =() =>{
//   if (props.origin === 'Flipkart'){
//     return Flipcartlogo
//   }
//  }
 function openurl (link:string) {
    Linking.openURL(link)
 }
  return(
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <View style={styles.bannerContainer}>
            
              <Image source={{uri:Flipcartlogo}} 
              style={styles.bannerimg}/>
            
          </View>
          <View style = {styles.imgContainer}>
            <Image source={{
            uri:'data:image/webp;base64,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',
            }}
            style ={styles.cardimage}
            />
          </View>
          <View style = {styles.textContainer}>
            <Text style ={[styles.text1]}>{props.productName.slice(0,40)} ...</Text>
            <View style={styles.priceContainer}>
              <Text style ={styles.text2}>{props.price}</Text>
              <Text style ={styles.text4}>{props.discoubt}</Text>
            </View>
            
            <TouchableOpacity style ={styles.buybtn}
              onPress={()=>openurl(props.ororiginUrl)}>
              <Text style ={styles.text3}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  ) 
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:5,
      justifyContent:'space-around'
    },
    
    cardimage:{
        height:140,
        width:190,
    },
    text1:{
     margin:5,
     color:"black",
    },
    text2:{
      color:'black'
    },
    text4:{
      color:'black',
    },
    text3:{
      color:"black",
      fontWeight:'500',
    },
    productContainer:{
      height:255,
      width:200,
      paddingHorizontal:5,
      backgroundColor:"white",
      borderRadius:6,
      elevation:3
    },
    imgContainer:{
      elevation:5,
      borderRadius:10,
    },
    textContainer:{
      paddingVertical:5,
      rowGap:3,
    },
    buybtn:{
      borderColor:"skyblue",
      borderWidth:1,
      marginHorizontal:"auto",
      padding:3,
      marginBottom:5,
      borderRadius:5,

    },
    bannerContainer:{
      position:'absolute',
      zIndex:1,
      top:5,
      right:15,
      borderRadius:8,
    },
    bannerText:{
      fontWeight:'600',
      color:'grey',
    },
    priceContainer:{
      paddingLeft:5,
      marginBottom:5,
      flexDirection:'row',
      columnGap:15,
    },
    bannerimg:{
      height:20,
      width:55,
      borderRadius:8,
    },
})
export default ProductCard