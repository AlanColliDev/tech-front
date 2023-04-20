import { useAlumno } from '../hooks/useAlumno'
import { AlumnoContext } from './AlumnoContext'

export const AlumnoContextProvider = ({ children }) => {

    const { testrequest } = useAlumno();
    testrequest();
    return (
        <>
            <AlumnoContext.Provider value={{data: null}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
