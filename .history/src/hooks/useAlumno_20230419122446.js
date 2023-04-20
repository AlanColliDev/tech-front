import { useEffect, useReducer, useState } from 'react';
import { AlumnoReducer, initAlumnos } from '../reducer/AlumnoReducer.js';
import { getAllAlumno } from '../services/alumno.js';

const initialState = null;
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(AlumnoReducer, initialState);

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
