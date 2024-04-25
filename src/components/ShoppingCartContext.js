import { createContext, useContext } from "react"
import { useReducer } from "react";

//The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
//The useReducer Hook returns the current stateand a dispatchmethod.

const ShoppingCartContext = createContext();


export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    ADD:'add',
    DELETE:'delete'
}


export const ShoppingCartProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, {count: 0, cart:[]})
    
    function reducer(state, action){
        switch (action.type){
            case ACTIONS.INCREMENT:
                return{...state, count: state.count +1};
            case ACTIONS.DECREMENT:
                return{...state, count: state.count -1};
            case ACTIONS.ADD:
                return {...state, cart: [...state.cart , action.payload] };
            case ACTIONS.DELETE:
               const newCart = state.cart.filter(
                    (animal) => animal.id !== action.payload.id
                  );

                return {...state, cart: newCart};
            default:
                return state;
        }
        
    }

    
    return (
        <ShoppingCartContext.Provider value={[state, dispatch]}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCart = () => useContext(ShoppingCartContext);

export default ShoppingCartContext