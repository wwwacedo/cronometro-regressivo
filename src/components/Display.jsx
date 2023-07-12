/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Display({ valor }) {

	const [color, setColor] = useState('')

	useEffect(() => {
		if (valor <= 9 && valor >= 5) {
			setColor('#F6FA70')
		} else if (valor < 5) {
			setColor('#FF0060')
		} else {
			setColor('#00DFA2')
		}
	}, [valor])

	return (
		<Wrapper color={color}>{valor}</Wrapper>
	)
}

const Wrapper = styled.h1`
	font-size: 8rem;
	padding: 1rem;
	color: ${(props) => props.color};
	letter-spacing: 4px;
	width: 80%;
	display: flex;
	justify-content: center;
`
