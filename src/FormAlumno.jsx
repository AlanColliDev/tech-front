import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from './hooks';
import { useAlumno } from './hooks/useAlumno';
import { getAlumnoByMatricula } from './services/alumno';
import { useEffect} from 'react';

export const FormAlumno = () => {

	const { eventManager } = useAlumno();

	const navigate = useNavigate();
	const routeParams = useParams();

	const getDefaultValues = async (matriculaParam) => {
		if (!matriculaParam)
			return {
				nombre: '',
				matricula: '',
				apellidoPaterno: '',
				apellidoMaterno: '',
				genero: ''
			}
		const dfalumno = await getAlumnoByMatricula(matriculaParam);
		return {
			nombre: dfalumno.nombre,
			matricula: dfalumno.matricula,
			apellidoPaterno: dfalumno.apellido_paterno,
			apellidoMaterno: dfalumno.apellido_materno,
			genero: dfalumno.genero
		}

	}

	const METHOD = routeParams?.matricula && 'UPDATE' || 'NEW';

	const { HandleInputChange, setFormState, formstate } = useForm({
		nombre: '',
		matricula: '',
		apellidoPaterno: '',
		apellidoMaterno: '',
		genero: ''
	});

	const HandleSendForm = (event) => {
		event.preventDefault();
		const action = routeParams?.matricula?.length > 0 ? '@edit-store' : '@add-new';
		eventManager[action](formstate);
	};

	const { nombre,
		matricula,
		apellidoPaterno,
		apellidoMaterno,
		genero } = formstate;


	useEffect(() => {
		async function getDefault() {
			const data = await getDefaultValues(routeParams.matricula || null);
			setFormState(data);

		}
		getDefault();
	}, []);


	return (
		<>
			<div className="shadow-md m-5 py-4 px-6">
				<div className="py-4 grid grid-cols-2">
					<div>

						<h1 className="font-medium text-blue-950 text-lg">Captura de Datos del Alumno</h1>
					</div>
					<div>
						<button
							className="bg-cyan-900 rounded-2xl py-2 px-3 text-sm font-medium text-white"
							type="button"
							onClick={() => { navigate('/'); }}
						>Regresar
						</button>
					</div>
				</div>
				<form className="w-full" onSubmit={(e) => HandleSendForm(e)}>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<input type="text" className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" name="matricula" disabled={METHOD === 'UPDATE'} value={matricula} placeholder="Matrícula" onChange={(event) => HandleInputChange({ event })} />
						</div>
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<input type="text" className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" name="nombre" value={nombre} placeholder="Nombre del Alumno" onChange={(event) => HandleInputChange({ event })} />
						</div>
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<input type="text" className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" name="apellidoPaterno" value={apellidoPaterno} placeholder="Apellido Paterno" onChange={(event) => HandleInputChange({ event })} />
						</div>
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<input type="text" className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" name="apellidoMaterno" value={apellidoMaterno} placeholder="Apellido Materno" onChange={(event) => HandleInputChange({ event })} />
						</div>
						<div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
							<div className="p-4 w-full mx-auto max-w-2xl">
								<div>
									<label className="flex text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer ">
										<input type="radio" name="genero" checked={genero === 'm'} onChange={(event) => HandleInputChange({ event, customValue: 'm' })} />
										<span className="px-2">Masculino</span>
									</label>

									<label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
										<input type="radio" name="genero" checked={genero === 'f'} onChange={(event) => HandleInputChange({ event, customValue: 'f' })} />
										<span className="px-2">Femenino</span>

									</label>
								</div>
							</div>
						</div>

					</div>
					<button type="submit" className="bg-blue-600 text-sm text-white font-medium text-opacity-100 px-4 py-2 rounded-3xl">Guardar</button>
				</form>
			</div>
		</>
	)
}
