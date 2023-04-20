import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';
import { getAllAlumno } from '../services/alumno';

const initialState = [];
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	// const getAll = async() => {
	// 	await getAllAlumno().then((resolve) => {
			
	// 	});
	// };
	
	useEffect(() => {
		// getAll();
		const action = {
			type: '@get-all',
			payload: 10
		};
		dispatch(action);
	}, []);
	
	console.log('cargo el alumno', alumno)
	return {
		alumno
	}
}
