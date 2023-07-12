/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: .5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
`
const Label = styled.label`
	font-size: 1.5rem;
	color: #0079FF;
`

const InputWrapper = styled.input`
	padding: .5rem 1rem;
	font-size: 1.8rem;
	text-align: center;
	border: none;
	border-radius: 2px;
	background-color: rgba(255, 255, 255, 0.87);;
	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
 			-webkit-appearance: none;
  			margin: 0;
		}
	/* Firefox */
	&[type=number] {
		-moz-appearance: textfield;
	}
	
`

export default function Input({ label, value, handleOnChangeInput }) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputWrapper 
                type='number'
                min={0}
				max={60}
				value={value}
                onChange={(e) => {handleOnChangeInput(e.target.value)}}
            />
        </Wrapper>
    )
}

