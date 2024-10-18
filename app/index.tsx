import { StyleSheet ,ScrollView, FlatList,Image} from 'react-native'
import React from 'react'
import ProductCard from '@/components/ProductCard'
import productlist from '@/app/constans'
// import { ScrollView } from 'react-native-gesture-handler'
export default function index() {
  
  return (
    <ScrollView>
      <FlatList 
      numColumns={2}
      data={productlist}
      keyExtractor={item => item.productName}
      renderItem={({item}) => ( <ProductCard {...item}/> )}
      />  

    </ScrollView>
  )
}

const styles = StyleSheet.create({

})
