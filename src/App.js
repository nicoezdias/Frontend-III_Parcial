import data from './api/data';
import React from 'react';
import Swal from 'sweetalert2';
import Botones from './components/Botones';
import Historial from './components/Historial';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			historial: [],
			contador: 0,
			seleccionAnterior: '',
			fin: false,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.contador !== 7 &&
			prevState.contador !== this.state.contador
		) {
			this.state.historial.push(this.state.seleccionAnterior);
		}
	}

	opcionClick = (event) => {
		const id = event.target.id;
		if (this.state.contador >= 7) {
			Swal.fire({
				position: 'top',
				title: 'Historia finalizada.',
			});
			this.setState({
				fin: true,
				seleccionAnterior: 'Fin',
			});
		} else if (id === 'A' && this.state.seleccionAnterior !== 'A') {
			this.setState({
				contador: this.state.contador + 1,
				seleccionAnterior: 'A',
			});
		} else if (id === 'A' && this.state.seleccionAnterior === 'A') {
			this.setState({
				contador: this.state.contador + 2,
			});
		} else if (id === 'B' && this.state.seleccionAnterior === 'A') {
			this.setState({
				contador: this.state.contador + 3,
				seleccionAnterior: 'B',
			});
		} else if (id === 'B') {
			this.setState({
				contador: this.state.contador + 2,
				seleccionAnterior: 'B',
			});
		}
	};

	resetClick = () => {
		this.setState({
			historial: [],
			contador: 0,
			seleccionAnterior: '',
			fin: false,
		});
	};
	render() {
		return (
			<div className="layout">
				<h1 className="historia">{data[this.state.contador].historia}</h1>
				{!this.state.fin && (
					<Botones
						opcionClick={this.opcionClick}
						datosA={data[this.state.contador].opciones.a}
						datosB={data[this.state.contador].opciones.b}
					/>
				)}
				{this.state.fin && (
					<button id="fin" className="botones" onClick={this.resetClick}>
						Jugar otra vez
					</button>
				)}

				<Historial seleccionPrevia={this.state.seleccionAnterior}>
					{this.state.historial.map((opcion, index) => (
						<li key={index}>{opcion}</li>
					))}
				</Historial>
			</div>
		);
	}
}
