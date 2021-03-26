import React from 'react'
import { ItemContainer, Title, Text, Item, DescriptionContainer, Subtitle } from '../generic-page/GenericStyles';

const People: React.FunctionComponent<{}> = ({ }) => {
    return (
        <ItemContainer>
            <Item style={{ height: "400px", backgroundImage: "url(https://d27i7n2isjbnbi.cloudfront.net/careers/photos/103552/normal_photo_1551986818.jpg)" }}></Item>
            <Item style={{ background: "#F6F5F5" }}>
                <DescriptionContainer>
                    <Title>
                        Áreas
                    </Title>
                    <Text>
                        <Subtitle>Argentina</Subtitle>
                        <ul>
                            <li>Marketing</li>
                            <li>Producto</li>
                            <li>Desarrollo
                                <ul>
                                    <li>Suricata / ecommerce</li>
                                    <li>Bacalao / pagos</li>
                                    <li>Esqüilax / Ventas, precios, inventario web e integraciones</li>
                                    <li>Kraken / Soporte de BO</li>
                                    <li>Fenix / Stock de aparatos, piezas y reparos</li>
                                    <li>Kaiju Operación / Logística, Pick & Pack</li>
                                    <li>Kaiju Adquisición / Plataforma de Trade in</li>
                                </ul>
                            </li>
                            <li>Product Design</li>
                            <li>Cloud</li>
                            <li>Data Science</li>
                        </ul>
                        <Subtitle>Brasil</Subtitle>
                        <ul>
                            <li>Finanzas<ul>
                                <li>Planeamiento estratégico</li>
                                <li>Pagos</li>
                                <li>Tesorería</li>
                            </ul>
                            </li>
                            <li>Operación <ul>
                                <li>Trasporte</li>
                                <li>Laboratorio</li>
                                <li>Devoluciones</li>
                            </ul>
                            </li>
                            <li>Trade in</li>
                            <li>SAC</li>
                        </ul>
                    </Text>
                </DescriptionContainer>
            </Item>
        </ItemContainer >
    )
}

export default People
