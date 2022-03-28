import React, { Component } from 'react';

class Botones extends Component {
	render() {
		return (
			<div className="opciones">
				<div className="opcion">
					<button id="A" className="botones" onClick={this.props.opcionClick}>
						A
					</button>
					<h2>{this.props.datosA}</h2>
				</div>
				<div className="opcion">
					<button id="B" className="botones" onClick={this.props.opcionClick}>
						B
					</button>
					<h2>{this.props.datosB}</h2>
				</div>
			</div>
		);
	}
}

export default Botones;
