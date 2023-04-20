import { useNavigate } from "react-router-dom"
import { FormAlumno } from "./FormAlumno"
import { GridAlumno } from "./GridAlumno"

export default function App() {

	const navigate = useNavigate();
	return (<>

		{/* <FormAlumno /> */}

		<div className="m-5 border border-gray-200 py-3 px-4">
			<div className="grid grid-cols-2 gap-3">
				<div className="font-medium text-sky-900">
					Listado de Alumnos
				</div>
				<div className="grid justify-items-end">
					<button 
						className="bg-cyan-600 rounded-2xl py-2 px-3 text-sm font-medium text-white"
						type="button"
						onClick={() => { navigate('/store'); }}
					>Agregar Nuevo
					</button>
				</div>

			</div>
		</div>

		<GridAlumno />
	</>)
}