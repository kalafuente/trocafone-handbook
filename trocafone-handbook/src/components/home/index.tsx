import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Item, SubItem } from './HomeStyles';
import { Title, Text, DescriptionContainer } from '../generic-page/GenericStyles';

const Home: React.FunctionComponent<{}> = ({ }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} style={{ color: "white" }}>
                <Item>
                    <div style={{ display: "flex", width: "1440px", alignItems: "center", justifyContent: "center", marginTop: "50px", marginBottom: "50px", paddingBottom: "100px" }}>
                        <div>
                            <DescriptionContainer>
                                <Title style={{ fontSize: "40px", maxWidth: " 555px" }} >
                                    ¡Te damos la bienvenida a Trocafone!
                                </Title>
                                <Text style={{ color: "#404040", fontSize: "17px", maxWidth: " 555px" }} >
                                    Preparamos este material con el objetivo de apoyarte en tus primeros pasos junto al equipo. Queremos que conozcas nuestra historia, nuestros valores y, especialmente, nuestra gente y hacerte sentir parte de este equipo desde tu primer día. Además de esta guía, podrás contar con el apoyo y amistad de todos, que (por ahora) están a un mensaje de distancia.
                        </Text>
                            </DescriptionContainer>
                        </div>
                        <div><img style={{ width: "500px" }} src="https://kalafuente.github.io/trocafone-handbook/header.png" /></div>
                    </div>

                </Item>
            </Grid>
            <Grid style={{ background: "#FFF" }} item xs={12} sm={6}>
                <SubItem>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}>  La historia</h2>
                        <div style={{ display: "block" }}> Sobre Trocafone y nuestros productos.</div>
                    </div>
                </SubItem>
            </Grid>
            <Grid style={{ background: "#F0F0F0" }} item xs={12} sm={6}>
                <SubItem >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}> Los valores</h2>
                        <div style={{ display: "block" }}> Por qué hacemos lo que hacemos.</div>
                    </div>
                </SubItem>

            </Grid>
            <Grid style={{ background: "#F0F0F0" }} item xs={12} sm={6}>
                <SubItem >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}>  La gente</h2>
                        <div style={{ display: "block" }}> Conocé la estructura de nuestro equipo. </div>
                    </div>
                </SubItem>

            </Grid>
            <Grid style={{ background: "#FFF" }} item xs={12} sm={6}>
                <SubItem>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}> Los primeros pasos</h2>
                        <div style={{ display: "block" }}> Todo lo que necesitás para tu primer día. </div>
                    </div>
                </SubItem>

            </Grid>
        </Grid >
    )
}

export default Home