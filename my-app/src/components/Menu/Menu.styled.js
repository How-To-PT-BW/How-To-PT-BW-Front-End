import styled from "styled-components";
import {colors} from '../../styledComponents/variables';
export const StyledMenu = styled.nav`
         display: flex;
         flex-direction: column;
         
         background: white;
         height: 100vh;
         text-align: left;
         padding: 2rem;
         padding-top: 10%;
         position: absolute;
         top: 0;
         left: 0;
         transition: transform 0.3s ease-in-out;
         z-index: 100;

         a {
           font-size: 2rem;
           text-transform: uppercase;
           padding: 2rem 0;
           font-family: "Martel";
           font-weight: 700;
           letter-spacing: 0.5rem;
           color: ${colors.text4};
           text-decoration: none;
           transition: color 0.3s linear;

           &:hover {
             color: ${colors.text5};
           }
         }

         transform: translateX(-100%);
         transform: ${({ open }) =>
           open ? "translateX(0)" : "translateX(-100%)"};
       `;
