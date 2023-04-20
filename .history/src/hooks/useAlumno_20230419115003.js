import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer.js';
import { getAllAlumno } from '../services/alumno.js';

const initialState = null;
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

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
