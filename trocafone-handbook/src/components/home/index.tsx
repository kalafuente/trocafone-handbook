import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Item, SubItem } from './HomeStyles';
import { Title, Text, DescriptionContainer } from '../generic-page/GenericStyles';

const Home: React.FunctionComponent<{}> = ({ }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} style={{ background: "#6C8EDB", color: "white" }}>
                <Item>
                    <DescriptionContainer>

                        <Title>
                            ¡Te damos la bienvenida a Trocafone!
                    </Title>
                        <Text>
                            Preparamos este material con el objetivo de apoyarte en tus primeros pasos junto al equipo. Queremos que conozcas nuestra historia, nuestros valores y, especialmente, nuestra gente y hacerte sentir parte de este equipo desde tu primer día. Además de esta guía, podrás contar con el apoyo y amistad de todos, que (por ahora) están a un mensaje de distancia. 🥳
                    </Text>
                    </DescriptionContainer>

                </Item>
            </Grid>
            <Grid style={{ background: "#FFF" }} item xs={12} sm={6}>
                <SubItem>La Historia</SubItem>
            </Grid>
            <Grid style={{ background: "#F0F0F0" }} item xs={12} sm={6}>
                <SubItem >Los Valores</SubItem>
            </Grid>
            <Grid style={{ background: "#F0F0F0" }} item xs={12} sm={6}>
                <SubItem >La Gente</SubItem>
            </Grid>
            <Grid style={{ background: "#FCF1CD" }} item xs={12} sm={6}>
                <SubItem>Los Primeros Pasos</SubItem>
            </Grid>
        </Grid >
    )
}

export default Home