import React from 'react'
import { Title, Item, Text, DescriptionContainer, ItemContainer, Subtitle } from '../generic-page/GenericStyles';


const Values: React.FunctionComponent<{}> = ({ }) => {
    return (
        <ItemContainer>
            <Item style={{ height: "400px", backgroundImage: "url(https://d27i7n2isjbnbi.cloudfront.net/careers/photos/103552/normal_photo_1551986818.jpg)" }}></Item>
            <Item style={{ background: "#F6F5F5" }}>
                <DescriptionContainer>
                    <Title>
                        Los Valores
                     </Title>
                    <Text>
                        <Subtitle>Confiamos uno en el otro</Subtitle>
                        Somos transparentes y actuamos con honestidad, buscando generar confianza en nuestras relaciones internas y externas. Respetamos y aceptamos las diferencias
                        <Subtitle>Amamos lo que hacemos</Subtitle>Nos apasiona lo que hacemos, queremos ir más allá y hacerlo aún mejor. Pensamos en grande y a largo plazo
                        <Subtitle>Todos somos dueños del negocio</Subtitle>
                        Somos emprendedores y responsables de nuestras acciones. Trabajamos con un gran equipo para lograr resultados y nunca nos damos por vencidos
                        <Subtitle>Rompemos paradigmas</Subtitle>
                        No nos conformamos con el status quo. Somos curiosos, buscamos oportunidades y desarrollamos productos y servicios innovadores
                        <Subtitle>Somos generadores de impacto</Subtitle>
                        Buscamos mejorar la calidad de vida de las personas, promoviendo el consumo responsable y generando oportunidades para la sociedad.
                    </Text>
                </DescriptionContainer>
            </Item>

        </ItemContainer>
    )
}

export default Values