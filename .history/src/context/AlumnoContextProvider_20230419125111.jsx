import { useState } from 'react';
import { useAlumno } from '../hooks/useAlumno.js'
import { AlumnoContext } from './AlumnoContext.js'

export const AlumnoContextProvider = ({ children }) => {


	const [alumno, dispatch] = useReducer(AlumnoReducer, initialState);

    return (
        <>
            <AlumnoContext.Provider value={{alumno, dispatch}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
