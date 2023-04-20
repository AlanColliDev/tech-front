
const BASE_URL = 'https://techtest-production-6c97.up.railway.app';
export const getAllAlumno = async () => {
	const response = await fetch(`${BASE_URL}/alumno`, {
		method: 'GET',
		headers: {
			Accept: 'application.json',
			'Content-Type': 'application/json'
		}
	});
	return await response.json();
}

export const AddNewAlumno = async(formData) => {
	const response = await fetch(`${BASE_URL}/alumno`, {
		method: 'POST',
		headers: {
			Accept: 'application.json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});
	return await response.json();
};

export const getAlumnoByMatricula = async(matricula) => {
	if(!matricula) return;
	const {data} = await getAllAlumno();
	const [alumno] = data.filter(alumno => String(alumno.matricula).trim() === matricula)
	return alumno
};

export const EditStoreAlumno = async(formData) => {
	const response = await fetch(`${BASE_URL}/alumno`, {
		method: 'PUT',
		headers: {
			Accept: 'application.json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});
	return await response.json();
}

export const DeleteStoreAlumno = async(formData) => {
	const response = await fetch(`${BASE_URL}/alumno`, {
		method: 'DELETE',
		headers: {
			Accept: 'application.json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});
	return await response.json();
}