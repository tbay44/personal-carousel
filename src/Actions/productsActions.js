import {ADD_PRODUCT} from './types';
    export function addPersonal(inputId, currentState = []){ 
        return function (dispatch){
            return fetch('http://personal-carousel.us-east-2.elasticbeanstalk.com/api/add?id='+inputId)
            .then(res => {
            return res.json()})
            .then(products =>{
                currentState = currentState.concat(products)
                let uniqueProducts = {};
                let pageOne = [];
                let pageTwo = [];
                let pageThree = [];

                
                for(var i = currentState.length-1; i > 0 ; i--){
                    if(i > currentState.length - 6){
                        if(!uniqueProducts.hasOwnProperty(currentState[i].id)){;
                            uniqueProducts[currentState[i].id] = currentState[i].id;
                            pageOne = pageOne.concat(currentState[i]);
                        }
                    }else if(i > currentState.length - 11){
                        if(!uniqueProducts.hasOwnProperty(currentState[i].id)){;
                            uniqueProducts[currentState[i].id] = currentState[i].id;
                            pageTwo = pageTwo.concat(currentState[i]);
                        }
                    }else if(i > currentState.length - 16){
                        if(!uniqueProducts.hasOwnProperty(currentState[i].id)){;
                            uniqueProducts[currentState[i].id] = currentState[i].id;
                            pageThree = pageThree.concat(currentState[i]);
                        }
                    }else{
                        i = 0;
                    }
                }

                currentState = pageOne.concat(pageTwo.concat(pageThree))

                dispatch({
                    type: ADD_PRODUCT,
                    payload: currentState,
                    pageOne: pageOne,
                    pageTwo: pageTwo,
                    pageThree: pageThree
                })
            });
        }
    };