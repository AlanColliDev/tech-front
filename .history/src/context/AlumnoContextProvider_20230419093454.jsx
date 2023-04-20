import { AlumnoContext } from "./AlumnoContext"

export const AlumnoContextProvider = ({ children }) => {

    

    return (
        <>

            <AlumnoContext.Provider>
                { children }
            </AlumnoContext.Provider>


        </>
    )
}
