import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Item, SubItem } from './HomeStyles';

const Home: React.FunctionComponent<{}> = ({ }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Item>Te damos la bienvenida a trocafone- intro</Item>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubItem>Que es T</SubItem>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubItem >VyC</SubItem>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubItem >Estructura y equipo</SubItem>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubItem>Primeros pasos</SubItem>
            </Grid>
        </Grid>
    )
}

export default Home