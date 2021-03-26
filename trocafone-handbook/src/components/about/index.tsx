import React from 'react'
import { Item, ItemContainer } from '../generic-page/GenericStyles';

const About: React.FunctionComponent<{}> = ({ }) => {
    return (
        <ItemContainer>
            <Item>La historia</Item>
            <Item>Historia</Item>
            <Item >productos</Item>
        </ItemContainer>
    )
}

export default About