/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function Btn({ children, onClick }) {
  return (
    <Button
        onClick={onClick}
    >
          <span>
            {children.toUpperCase()}
          </span>
    </Button>
  )
}

const Button = styled.button`
    padding: 1.2rem 1.2rem;
	background-color: #0079FF;
	border: none;
	border-radius: 2px;
	cursor: pointer;	
    transition: all .2s ease-in-out;
    @media (max-width: 479px) {
		
	}

    span {
        color: white;
		font-weight: bold;
		letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
		font-size: 1.5rem;
    }

`
