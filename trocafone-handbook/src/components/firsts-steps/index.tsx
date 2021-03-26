import React from 'react'
import { ItemContainer, Title, Text, Item, DescriptionContainer, Subtitle } from '../generic-page/GenericStyles';

const FirstSteps: React.FunctionComponent<{}> = ({ }) => {
    return (
        <ItemContainer>
            <Item style={{ height: "400px", backgroundImage: "url(https://d27i7n2isjbnbi.cloudfront.net/careers/photos/103552/normal_photo_1551986818.jpg)" }}></Item>
            <Item style={{ background: "#F6F5F5" }}>
                <DescriptionContainer>
                    <Title>
                        Primeros días
                    </Title>
                    <Text>
                        <Subtitle>Herramientas de trabajo</Subtitle>
                        El primer día te va a llegar: Mac, el monitor, silla, adaptador, soporte de monitor. El equipo de Help Desk te va a ayudar a instalar todo y prepararte para la bienvenida y los primeros encuentros.
                        <Subtitle>Bienvenida y encuentros</Subtitle>
                        <ul>
                            <li>Reunión con RRHH (Maru)</li>
                            <li>Reunión con CTO</li>
                            <li>Almuerzo con tu equipo</li>
                            <li>Reunión con RRHH</li>
                            <li>Salario, pedido de días, prepaga, reintegros</li>
                            <li>Presentación con el resto de los equipos.</li>
                        </ul>
                        <Subtitle>Exploraciones</Subtitle>
                        Esta semana vas a tener la posibilidad de explorar los proyectos que estamos llevando adelante y compartir con cada participante del equipo.
                </Text>
                </DescriptionContainer>
            </Item>
            <Item>
                <DescriptionContainer>
                    <Title>
                        Tecnologías cotidianas
                    </Title>
                    <Text>
                        <Subtitle>
                            Listado de tecnologías y cómo acceder a ellas.
                        </Subtitle>
                        El equipo de helpdesk te dará acceso a las siguientes tecnologías:
                        Slack, discord, open vpn, tunnelblick, last pass, tu recibo, trello, backoffice, google meet. Imagen de los iconos.                </Text>
                </DescriptionContainer>
            </Item>
            <Item style={{ background: "#F6F5F5" }}>
                <DescriptionContainer>
                    <Title>
                        Beneficios
                    </Title>
                    <Text>
                        <ul>
                            <li>3 semanas de vacaciones + 1 día extra por año trabajado</li>
                            <li>Horario flexible</li>
                            <li>Home office.  / Pandemia: Full remoto</li>
                            <li>Charlas técnicas quincenales</li>
                            <li>Hackatones trimestrales</li>
                            <li>Acceso a safari books online</li>
                            <li>Mac personal</li>
                            <li>OSDE 310 (grupo familiar)</li>
                            <li>Reintegro en actividades vinculadas al bienestar. ( Actividades deportivas: gimnasio, club deportivo, clases de yoga, tenis, basquet, crossfit, etc. // Actividades artísticas: clases de música, guitarra, piano, pintura, teatro, baile, canto, etc.)</li>
                            <li>Frutas, bebidas y snacks todos los días. / Pandemia: cajas con comida 🥗🥙</li>
                            <li>Estacionamiento para bicicletas con acceso a duchas</li>
                            <li>Tarde de cumpleaños off</li>
                            <li>Clases de portugués</li>
                        </ul>
                    </Text>
                </DescriptionContainer>
            </Item>
            <Item>
                <DescriptionContainer>
                    <Title>
                        Dudas
                     </Title>
                    <Text>
                        <Subtitle>
                            Tu Recibo
                        </Subtitle>
                        RRHH te va a facilitar el ingreso a la plataforma. Qué es la plataforma y qué podés hacer desde ahí? Firmar contrato, recibos de sueldo; pedir días, vacaciones y licencias; ver próximos cumpleaños
                        <Subtitle>
                            Salarios
                        </Subtitle>
                        Dudas? Maru y Lipo
                        <Subtitle>
                            Oficina
                        </Subtitle>
                        Fotos, mapa
                        Protocolo actual ? Excel, anotarse.
                        <Subtitle>
                            Problemas con la compu
                        </Subtitle>
                        Si tenés inconvenientes técnicos con cualquiera de las herramientas de trabajo podés hablar con Help Desk a través de Slack o Discord o mandar un mail a helpdesk@trocafone.com
                        <Subtitle>
                            Reintegro
                        </Subtitle>
                        Para el reintegro de actividades vinculadas con el bienestar (actividades deportivas o artísticas), finanzas enviará un google form para cargar el reintegro correspondiente
                    </Text>
                </DescriptionContainer>
            </Item>
        </ItemContainer>
    )
}

export default FirstSteps
