import React,{useState} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';

import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';


export default const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [searchApi, errMessage, restaurants] = useRestaurants();

    const filterRestaurantsByPrice = (price) => {
        // price === '$' or '$$' or '$$$'
        return restaurants.filter(restaurant => {
            return restaurant.price === price;
        })
    };

    return (
        <View style={styles.container}>
            
            {errMessage ? <Text style={styles.errMessage}>{errMessage}</Text> : null}
            
            <ScrollView>

                <SearchBar 
                    term= {term}
                    onTermChange= {(newTerm) => setTerm(newTerm)}
                    onTermSubmit= {() => {
                        if(term === '')
                            return searchApi('dosa');    
                        searchApi(term)
                    }} 
                />   

                <RestaurantList 
                    title='Cost Effective'
                    restaurants= {filterRestaurantsByPrice('$')}
                />
                
                <RestaurantList 
                    title= 'Bit Pricer'
                    restaurants= {filterRestaurantsByPrice('$$')}
                />

                <RestaurantList 
                    title= 'Big Spender'
                    restaurants= {filterRestaurantsByPrice('$$$')}
                />

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
   container:{
        flex:1,
        backgroundColor:'#fff'
   },
   errMessage:{
       fontSize:22,
       fontWeight:'bold',
       alignSelf:'center',
       color:'red',
   } 
});
