import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../responsive';
import { slide as Menu } from 'react-burger-menu';
import menuStyle from './menuStyle';


const ListConatainer = styled.ul`
${tw`
  flex
  list-none
`};

`;

const NavItem = styled.li<{ menu?: any }>`
${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700

`};

${ ({ menu }) => 
menu && css`
${tw`
text-white
text-xl
mb-3
focus:text-white

`};

`};
`;

export function Navitems(){
   const isMobile = useMediaQuery({ maxWidth: SCREENS.sm }); 
   if(isMobile){

    return (
    <Menu right style={menuStyle}>
    <ListConatainer>
        <NavItem menu>
            <a href="#">Home</a>
        </NavItem>
    
        <NavItem menu>  
            <a href="#">Cars</a>
        </NavItem>
    
        <NavItem menu>
            <a href="#">Services</a>
        </NavItem>
    
        <NavItem menu>
            <a href="#">Contact us</a>
        </NavItem>
    
    </ListConatainer>
    </Menu>
    );

   }


return (<ListConatainer>
    <NavItem>
        <a href="#">Home</a>
    </NavItem>

    <NavItem>
        <a href="#">Cars</a>
    </NavItem>

    <NavItem>
        <a href="#">Services</a>
    </NavItem>

    <NavItem>
        <a href="#">Contact us</a>
    </NavItem>

</ListConatainer>);

}