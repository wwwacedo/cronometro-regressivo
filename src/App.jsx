import { useEffect, useState } from 'react';
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
	place-items: center;
	width: 100vw;
	height: 100vh;
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
	const [intervalo, setIntervalo] = useState(60);
	const [contador, setContador] = useState(0);
	const [ativo, setAtivo] = useState(false);
	const [regressivo, setRegressivo] = useState();
	const [segundosIniciais, setSegundosIniciais] = useState(0);

	const getHour = () => new Date().getHours();
	const getMinute = () => new Date().getMinutes();
	const getSecond = () => new Date().getSeconds();
	const getAllSeconds = () => getHour() * 3600 + getMinute() * 60 + getSecond();

	// useEffect(() => {
	// 	console.log('intervalo', intervalo, 'contador', contador, 'ativo', ativo)
	// }, [intervalo, contador, ativo]);

	useEffect(() => {
		if (ativo) {
			setAtivo(false)
			setRegressivo(
				setInterval(() => {
					const segundosAtuais = getAllSeconds();
					setContador(intervalo - (segundosAtuais - segundosIniciais))
				}, 1000)
			)
		}
	}, [ativo]);

	useEffect(() => {
		if (contador === 0) {
			clearInterval(regressivo);
			setAtivo(false);
		}
	}, [contador]);

	function handleClick() {
		setSegundosIniciais(getAllSeconds())
		clearInterval(regressivo);
		setAtivo(true);
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
