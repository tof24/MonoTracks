import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';


 export const Nav = styled.nav`
 background: #000;
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 0.5rem calc((100vw - 1000px) / 2)
`;

 export const NavLink = styled(Link)`
 color: #ffffff;
 display: flex;
 align-items: center;
 text-decoration:none;
 height: 100%;
 cursor: pointer;
 padding-left: 10px;
 padding-right: 20px;
 
  &:hover {
 transition: all 0.2s ease-in-out;
 color: steelblue;
 }
 
  &.active {
  color: steelblue;
}
 `;


 export const NavBtnLink = styled(Link)`
 
 border-radius: 20px;
 background: #256ce1;
 padding: 10px 22px;
 color: #ffffff;
 border: none;
 outline: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 

 &:hover {
 transition: all 0.2s ease-in-out;
 background: #fff;
 color: #010606;
 }

 `;

 export const NavBtn = styled.nav`
 
 display: flex;
 align-items: center;
 margin-right: 24px;
 
 @media screen and (max-width: 768px) {
 display: none;
 }
 
 `;

 export const NavMenu = styled.div`
 
 display: flex;
 align-items: center;
 margin-right: -24px;
 
 @media screen and (max-width: 768px) {
  display: none;
 }
 
 `;


