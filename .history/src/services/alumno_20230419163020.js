
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
		body: formData
	});
	return await response.json();
};