import { useReducer } from 'react';
import { AlumnoContext } from './AlumnoContext.js'
import { AlumnoReducer } from '../reducer/AlumnoReducer.js';

const initialState = [];
export const AlumnoContextProvider = ({ children }) => {

	const [alumnos, dispatch] = useReducer(AlumnoReducer, initialState);

    return (
        <>
            <AlumnoContext.Provider value={{alumnos, dispatch}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
