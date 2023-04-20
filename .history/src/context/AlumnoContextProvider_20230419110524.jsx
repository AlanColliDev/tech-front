import { useAlumno } from '../hooks/useAlumno'
import { AlumnoContext } from './AlumnoContext'

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
