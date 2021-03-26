import React from 'react'
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem, SubItem, Image } from './MenuStyles';

const Navigation: React.FunctionComponent<{}> = ({ }) => {
    return (
        <header className="App-header">
            <MenuContainer>
                <MenuItem>
                    <Image><Link to="/trocafone-handbook"><img src="https://www.trocafone.com/assets/img/global/common/trocafone.svg" alt="Logo" /></Link></Image>
                </MenuItem>
                <MenuItem>
                    <SubItem><Link to="/trocafone-handbook/about">Que es T?</Link></SubItem>
                    <SubItem><Link to="/trocafone-handbook/values">VyC</Link></SubItem>
                    <SubItem><Link to="/trocafone-handbook/values">Estructura y equipo</Link></SubItem>
                    <SubItem><Link to="/trocafone-handbook/values">Vida</Link></SubItem>
                </MenuItem>
            </MenuContainer>
        </header>
    )
}

export default Navigation