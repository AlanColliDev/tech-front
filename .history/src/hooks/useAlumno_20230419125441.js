import { useContext, useEffect } from 'react';
import { initAlumnos } from '../reducer/AlumnoReducer.js';
import { AlumnoContext } from '../context/AlumnoContext.js';
import { getAllAlumno } from '../services/alumno.js';

const initialState = null;
export const useAlumno = () => {

	const {alumno, dispatch} = useContext(AlumnoContext);

	useEffect(() => {
		getAllAlumno().then(alumnos => {
			console.log('in effect', alumnos)
			dispatch(initAlumnos(alumnos))
		});
	}, []);

	return {
		alumno
	}
}
