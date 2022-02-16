import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Box = styled.div`

width: 150px;
height: 150px;
border-radius: 50px;
margin: 20px;
background-color: grey;
background-blend-mode: multiply;
display: flex;
justify-content: center;


`;

export const GenreLink = styled(Link)`


 color: #ffffff;
 display: flex;
 align-items: center;
 text-decoration:none;
 font-weight: bold;
 cursor: pointer;

 
  &:hover {
 transition: all 0.2s ease-in-out;
  text-decoration: underline;
 }
 

`;