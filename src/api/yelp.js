import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer Z1zcmbAVQYroCd2iz_bBWf8JWomJ3wdL8FMQj5xavMAljM7MatY_i4l50FX-X1oDL3X9zOBk9q6w9ZRb-GVIywIJStejdGB3x2xlxapaOk5qP8mrZnkuOV2R1ot8X3Yx'
    }
});