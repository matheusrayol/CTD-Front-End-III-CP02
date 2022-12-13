import { createContext, useMemo, useReducer } from 'react';

export const initialState = { theme: "light", login: !!localStorage.getItem("token") };

export const actions = {
    TOGGLE_DARK_THEME: "TOGGLE_DARK_THEME",
    TOGGLE_LIGHT_THEME: "TOGGLE_LIGHT_THEME",
    DO_LOGIN: "DO_LOGIN",
    DO_LOGOUT: "DO_LOGOUT"
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actions.TOGGLE_DARK_THEME:
            return ({...state, theme: "dark"})
        case actions.TOGGLE_LIGHT_THEME:
            return  ({...state, theme: "light"})
        case actions.DO_LOGIN:
            return  ({...state, login: true})
        case actions.DO_LOGOUT:
            return  ({...state, login: false})
        default: {
            return state}
    }
}

export const GlobalContext = createContext(undefined);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const providerState = useMemo(
        () => ({
            theme: state.theme,
            login: state.login,
            toggleDarkTheme: () => dispatch({ type: 'TOGGLE_DARK_THEME' }),
            toggleLightTheme: () => dispatch({ type: 'TOGGLE_LIGHT_THEME' }),
            doLogin: () => dispatch({ type: 'DO_LOGIN' }),
            doLogout: () => dispatch({ type: 'DO_LOGOUT' }),
        }),
        [state.login, state.theme]
    );

    return (
        <GlobalContext.Provider value={providerState}>
            {children}
        </GlobalContext.Provider>
    );

};