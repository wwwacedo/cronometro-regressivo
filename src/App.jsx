import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css'
import Input from './components/Input';
import Btn from './components/Btn';
import Display from './components/Display';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;
	padding-top: 3rem;
	
`
const Label = styled.h1`
	font-size: 2rem;
	padding-bottom: 2rem;
	margin: 0 auto;
	text-align: center;  
	@media (max-width: 497px) {
		width: 80%;
	}
`

function App() {
	const [contador, setContador] = useState(0);
	const [regressivo, setRegressivo] = useState();
	const [segundosIniciais, setSegundosIniciais] = useState(0);
	const [intervalo, setIntervalo] = useState(60);
	const ativo = useRef(false);

	const getAllSeconds = () => new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();

	useEffect(() => {
		if (ativo.current === true) {
			ativo.current = false;
			setRegressivo(
				setInterval(() => {
					const segundosAtuais = getAllSeconds();
					setContador(intervalo - (segundosAtuais - segundosIniciais))
				}, 1000)
			)
		}
	}, [ativo.current]);

	useEffect(() => {
		if (contador <= 0) {
			clearInterval(regressivo);
			ativo.current = false;
		}
	}, [contador]);

	function handleClick() {
		setSegundosIniciais(getAllSeconds())
		clearInterval(regressivo);
		ativo.current = true;
		setContador(intervalo);
	}

	return (
		<Wrapper>
			<Label>Cronômetro Regressivo</Label>
			<Input
				label='intervalo (seg):'
				value={intervalo}
				handleOnChangeInput={(value) => setIntervalo(value)}
			/>

			<Display valor={contador}/>

			<Btn onClick={handleClick}>Iniciar</Btn>

		</Wrapper>
	)
}

export default App
