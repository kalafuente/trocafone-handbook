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
                    <SubItem><Link to="/trocafone-handbook/history"><LinkStyle>La historia</LinkStyle></Link></SubItem>
                    <SubItem  ><Link to="/trocafone-handbook/values"><LinkStyle>Los valores</LinkStyle></Link></SubItem>
                    <SubItem ><Link to="/trocafone-handbook/people"><LinkStyle>La gente</LinkStyle></Link></SubItem>
                    <SubItem style={{ marginRight: "60px" }}><Link to="/trocafone-handbook/first-steps"><LinkStyle>Los primeros pasos</LinkStyle></Link></SubItem>
                </MenuItem>
            </MenuContainer>
        </header>
    )
}

export default Navigation