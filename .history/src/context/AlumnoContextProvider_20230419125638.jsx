import { useReducer } from 'react';
import { AlumnoContext } from './AlumnoContext.js'
import { AlumnoReducer } from '../reducer/AlumnoReducer.js';

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
