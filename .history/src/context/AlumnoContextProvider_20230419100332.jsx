import { useAlumno } from '../hooks/useAlumno'
import { AlumnoContext } from './AlumnoContext'

export const AlumnoContextProvider = ({ children }) => {

    const { alumno } = useAlumno();
    console.log('provider alumno', alumno)
    return (
        <>
            <AlumnoContext.Provider value={{alumno}}>
                { children }
            </AlumnoContext.Provider>
        </>
    )
}
