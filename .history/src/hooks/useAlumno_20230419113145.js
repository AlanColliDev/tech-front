import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';
import { getAllAlumno } from '../services/alumno';

const initialState = null;
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	const getAll = async() => {
		const action = {
			type: '@get-all',
			payload: resolve
		};
		await dispatch(action);
	};
	
	useEffect(() => {
		getAll();
	}, []);
	
	return {
		alumno
	}
}
