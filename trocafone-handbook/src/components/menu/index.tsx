import React from 'react'
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem, SubItem, Image, LinkStyle } from './MenuStyles';

const Navigation: React.FunctionComponent<{}> = ({ }) => {
    return (
        <header>
            <MenuContainer>
                <MenuItem>
                    <Image style={{ marginLeft: "30px" }}><Link to="/trocafone-handbook"><img src="https://www.trocafone.com/assets/img/global/common/trocafone.svg" alt="Logo" /></Link></Image>
                </MenuItem>
                <MenuItem style={{ justifyContent: "space-between" }}>
                    <SubItem><Link to="/trocafone-handbook/about"><LinkStyle>La Historia</LinkStyle></Link></SubItem>
                    <SubItem  ><Link to="/trocafone-handbook/values"><LinkStyle>Los Valores</LinkStyle></Link></SubItem>
                    <SubItem ><Link to="/trocafone-handbook/values"><LinkStyle>La Gente</LinkStyle></Link></SubItem>
                    <SubItem style={{ marginRight: "60px" }}><Link to="/trocafone-handbook/first-steps"><LinkStyle>Los Primeros Pasos</LinkStyle></Link></SubItem>
                </MenuItem>
            </MenuContainer>
        </header>
    )
}

export default Navigation