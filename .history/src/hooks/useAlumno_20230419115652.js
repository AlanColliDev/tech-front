import { useEffect, useReducer, useState } from 'react';
import { AlumnoReducer } from '../reducer/AlumnoReducer.js';
import { getAllAlumno } from '../services/alumno.js';

const initialState = null;
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(AlumnoReducer, initialState);

	const getAll = () => {
		const action = {
			type: '@get-all',
			payload: null
		};
		dispatch(action);
	};
	
	useEffect(() => {
		getAll();
	}, []);
	
	return {
		alumno
	}
}
