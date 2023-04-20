import { useState } from 'react';
import { getAllAlumno } from '../services/alumno';

export const useAlumno = () => {

	const [alumno, setAalumno] = useState();

	const testrequest = () => {
		getAllAlumno();
	}
	testrequest();
	return {
		
	}
}
