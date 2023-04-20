import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';
import { getAllAlumno } from '../services/alumno';

const initialState = [];
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	const getAll = async() => {
		const data = await getAllAlumno();
		console.log('data obtenida', data)
		const action = {
			type: '@get-all',
			payload: data
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
