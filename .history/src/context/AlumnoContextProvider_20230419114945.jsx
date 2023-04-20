import { useAlumno } from '../hooks/useAlumno.js'
import { AlumnoContext } from './AlumnoContext.js'

export const AlumnoContextProvider = ({ children }) => {

    const { alumno } = useAlumno();
    return (
        <>
            <AlumnoContext.Provider value={{alumno}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
