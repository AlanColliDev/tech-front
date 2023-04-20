import { useAlumno } from '../hooks/useAlumno'
import { AlumnoContext } from './AlumnoContext'

export const AlumnoContextProvider = ({ children }) => {

    cosnt {testrequest} = useAlumno();

    return (
        <>
            <AlumnoContext.Provider>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
