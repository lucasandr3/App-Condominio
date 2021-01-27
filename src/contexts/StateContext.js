import React, { createContext, useContext, useReducer } from 'react';
import { ThemeProvider } from 'styled-components/native';
import {light, dark} from '../themes';

import ThemeReducer from '../reducers/ThemeReducer';
import UserReducer from '../reducers/UserReducer';

const initialState = {
    theme: ThemeReducer(),
    user: UserReducer()
}

const MainReducer = (state, action) => ({
    theme: ThemeReducer(state.theme, action),
    user: UserReducer(state.user, action)
});

export const StateContext = createContext();

export const StateProvider = ({children}) => {

    const [state, dispatch] = useReducer(MainReducer, initialState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            <ThemeProvider theme={state.theme === 'light' ? light : dark}>
                {children}
            </ThemeProvider>
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);
