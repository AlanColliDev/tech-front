import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';
import { getAllAlumno } from '../services/alumno';

const initialState = [];
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	const getAll = async() => {
		await getAllAlumno((resolve) => {
			console.log('here...',{resolve})
			const action = {
				type: '@get-all',
				payload: resolve
			};
			dispatch(action);
		});
	};

	useEffect(() => {
		getAll();
	}, []);

	return {
		alumno
	}
}
