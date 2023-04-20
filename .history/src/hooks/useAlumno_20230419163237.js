import { useContext, useEffect } from 'react';
import { initAlumnos } from '../reducer/AlumnoReducer.js';
import { AlumnoContext } from '../context/AlumnoContext.js';
import { getAllAlumno, AddNewAlumno } from '../services/alumno.js';

const initialState = null;
export const useAlumno = () => {

	const {alumnos, dispatch} = useContext(AlumnoContext);

	useEffect(() => {
		getAllAlumno().then(alumnos => {
			dispatch(initAlumnos(alumnos))
		});
	}, []);

	const onAddNew = (formState) => {
		try {
			
			const action = {
				type: '@add-new',
				payload: formState
			}

			AddNewAlumno(formState).then(response => {
				console.log(response)
			});
			
		} catch (error) {
			console.warn(error)
		}

		
	}
	

	return {
		alumnos,
		onAddNew
	}
}
