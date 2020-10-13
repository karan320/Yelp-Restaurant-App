import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        searchApi('dosa');
    },[]);

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setRestaurants(response.data.businesses);
        }catch(err){
            setErrMessage('Something went wrong!!');
        }
    }

    return [searchApi, errMessage, restaurants];
}