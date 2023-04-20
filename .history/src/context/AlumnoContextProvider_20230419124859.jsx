import { useState } from 'react';
import { useAlumno } from '../hooks/useAlumno.js'
import { AlumnoContext } from './AlumnoContext.js'

export const AlumnoContextProvider = ({ children }) => {


    [ alumno, setAlumno ] = useState([]);

    return (
        <>
            <AlumnoContext.Provider value={{alumno}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
