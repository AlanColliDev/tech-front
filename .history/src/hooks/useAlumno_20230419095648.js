import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';

const initialState = [];
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	useEffect(() => {
		const action = {
			type: '@get-all',
			payload: null
		};
		dispatch();
	}, []);

	return {
		alumno
	}
}
