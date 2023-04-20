import { useState } from 'react';
import { getAllAlumno } from '../services/alumno';

export const useAlumno = () => {

	const [alumno, setAalumno] = useState();

	const testrequest = async() => {
		const data = await getAllAlumno();
		console.log('SE HACE EL RQUEST BRO', data)
	}
	return {
		testrequest
	}
}
