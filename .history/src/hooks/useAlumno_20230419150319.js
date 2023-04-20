import { useContext, useEffect } from 'react';
import { initAlumnos } from '../reducer/AlumnoReducer.js';
import { AlumnoContext } from '../context/AlumnoContext.js';
import { getAllAlumno } from '../services/alumno.js';

const initialState = null;
export const useAlumno = () => {

	const {alumnos, dispatch} = useContext(AlumnoContext);

	useEffect(() => {
		getAllAlumno().then(alumnos => {
			dispatch(initAlumnos(alumnos))
		});
	}, []);

	const HandleSendForm = (event) => {
		event.target.default();
	};

	return {
		alumnos,
		HandleSendForm
	}
}
