import { useContext, useEffect } from 'react';
import { initAlumnos } from '../reducer/AlumnoReducer.js';
import { AlumnoContext } from '../context/AlumnoContext.js';
import { getAllAlumno, AddNewAlumno, EditStoreAlumno, DeleteStoreAlumno } from '../services/alumno.js';
import { useNavigate } from 'react-router-dom';

const initialState = null;
export const useAlumno = () => {

	const { alumnos, dispatch } = useContext(AlumnoContext);
	const navigate = useNavigate();

	useEffect(() => {
		getAllAlumno().then(alumnos => {
			dispatch(initAlumnos(alumnos))
		});
	}, []);
	
	const onSaveForm = (formState) => {
		try {
			AddNewAlumno(formState).then(({data}) => {
				const action = {
					type: '@add-new',
					payload: data
				}
				dispatch(action);
				navigate('/');
			});

		} catch (error) {
			console.warn(error)
		}
	}

	const onEditSaveForm = (formState) => {
		try {
			EditStoreAlumno(formState).then(({data}) => {
				const action = {
					type: '@edit-store',
					payload: data
				}
				dispatch(action);
				navigate('/');

			});

		} catch (error) {
			console.warn(error)
		}
	};
	const DeleteResource = (matricula) => {
		try {
			DeleteStoreAlumno({matricula}).then((response) => {
				const action = {
					type: '@delete-store',
					payload: response
				}
				dispatch(action);
			});

		} catch (error) {
			console.warn(error)
		}

	}

	const eventManager  = {
		'@add-new': (formData) => onSaveForm(formData),
		'@edit-store': (formData) => onEditSaveForm(formData) 
	}
	return {
		alumnos,
		eventManager,
		DeleteResource
	}
}
