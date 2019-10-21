import { combineReducers } from 'redux';
import carouselButton from './carouselButtonReducer';
import productReducer from './productReducer';
import personalCarousel from './personalCarouselReducer'


export default combineReducers({
    sponserCarouselPageNum: carouselButton,
    personalCarousel: personalCarousel,
    uniqueId: productReducer
})