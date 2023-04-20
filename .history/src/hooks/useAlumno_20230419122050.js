import { useEffect, useReducer, useState } from 'react';
import { AlumnoReducer, initAlumnos } from '../reducer/AlumnoReducer.js';
import { getAllAlumno } from '../services/alumno.js';

export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(AlumnoReducer);

	getAllAlumno().then(alumnos => {
		dispatch(initAlumnos(alumnos))
	});
	// useEffect(() => {
		
	// }, []);

	return {
		alumno
	}
}
