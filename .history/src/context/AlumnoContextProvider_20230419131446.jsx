import { useEffect, useReducer } from 'react';
import { AlumnoContext } from './AlumnoContext.js'
import { AlumnoReducer } from '../reducer/AlumnoReducer.js';

const initialState = [];
export const AlumnoContextProvider = ({ children }) => {

	const [alumnos, dispatch] = useReducer(AlumnoReducer, initialState);

    useEffect(() => {
        console.log('state chaning..', alumnos)
    }, [alumnos]);

    return (
        <>
            <AlumnoContext.Provider value={{alumnos, dispatch}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
