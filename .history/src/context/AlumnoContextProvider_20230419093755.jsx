import { useAlumno } from '../hooks/useAlumno'
import { AlumnoContext } from './AlumnoContext'

export const AlumnoContextProvider = ({ children }) => {

    const {testrequest} = useAlumno();

    return (
        <>
            <AlumnoContext.Provider>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
