import styled from "styled-components";

export const StyledMenu = styled.nav`
         display: flex;
         flex-direction: column;
         justify-content: center;
         background: white;
         height: 100vh;
         text-align: left;
         padding: 2rem;
         position: absolute;
         top: 0;
         left: 0;
         transition: transform 0.3s ease-in-out;

         a {
           font-size: 2rem;
           text-transform: uppercase;
           padding: 2rem 0;
           font-weight: bold;
           letter-spacing: 0.5rem;
           color: ;
           text-decoration: none;
           transition: color 0.3s linear;

           &:hover {
             color: ${({ theme }) => theme.primaryHover};
           }
         }

         transform: translateX(-100%);
         transform: ${({ open }) =>
           open ? "translateX(0)" : "translateX(-100%)"};
       `;