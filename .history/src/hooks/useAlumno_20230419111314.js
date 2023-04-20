import { useEffect, useReducer, useState } from 'react';
import { alumnoReducer } from '../reducer/alumnoReducer';
import { getAllAlumno } from '../services/alumno';

const initialState = [];
export const useAlumno = () => {

	const [alumno, dispatch] = useReducer(alumnoReducer, initialState);

	const getAll = async() => {
		
	};

	console.log('cargo el alumno', alumno)

	useEffect(() => {
		async function getAll () {
			await getAllAlumno().then((resolve) => {
				const action = {
					type: '@get-all',
					payload: 10
				};
				dispatch(action);
			});
		}
		getAll();
	}, []);

	return {
		alumno
	}
}
