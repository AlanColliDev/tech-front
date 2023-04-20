import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';
import { getAllAlumno } from '../services/alumno';

const initialState = [];
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	useEffect(() => {
		// async function getAll () {
		// 	await getAllAlumno().then((resolve) => {
				
		// 	});
		// }
		// getAll();
		const action = {
			type: '@get-all',
			payload: 10
		};
		dispatch(action);
	}, []);

	return {
		alumno
	}
}
