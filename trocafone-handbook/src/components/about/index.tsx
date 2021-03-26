import React from 'react'
import { Title, Text, Item, DescriptionContainer, ItemContainer, Subtitle } from '../generic-page/GenericStyles';

const About: React.FunctionComponent<{}> = ({ }) => {
    return (
        <ItemContainer>
            <Item style={{ marginTop: "-68px", height: "400px", backgroundImage: "url(https://d27i7n2isjbnbi.cloudfront.net/careers/photos/103552/normal_photo_1551986818.jpg)" }}></Item>
            <Item style={{ background: "#F6F5F5" }}>
                <DescriptionContainer>
                    <Title>
                        Sobre Trocafone
                    </Title>
                    <Text>
                        Trocafone se fundó en 2014 y trae un modelo de negocio conocido como Recommerce, que plantea la compra, reacondicionamiento y venta de productos previamente usados. Somos una empresa argentina/ brasilera que busca solucionar la problemática de confianza entre personas al momento de realizar una transacción por un producto electrónico usado en un marketplace tradicional.

                        Esta confianza se logra siendo Trocafone un broker entre compradores y vendedores, sumando valor al producto a partir de un proceso de re-acondicionamiento (refurbishing) y brindando una garantía sobre los productos que comercializamos.

                        Como consecuencia de nuestro trabajo, cuidamos al medio ambiente al brindar una nueva vida útil a productos usados y, de esa manera, reducir la basura electrónica.

                        En Argentina tenemos nuestro equipo de tecnología y marketing, y en Brasil está nuestro centro de distribución, laboratorio de reparación, logística, finanzas y atención al cliente.

                        Hasta el día de hoy ya hemos comprado y vendido en nuestros canales más de 1 millón de celulares, lo que representa una reducción de más de 170 toneladas de basura electrónica.
                    </Text>
                </DescriptionContainer>
            </Item>
            <Item style={{ background: "#FFF" }}>
                <DescriptionContainer>
                    <Title>
                        Nuestros productos
                      </Title>
                    <Text>
                        Nuestros productos acompañan el ciclo de vida de un dispositivo:
                        <img style={{ width: "900px" }} src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fec491909-779a-44c6-ae37-595b4285d386%2Fimage_(2).png?table=block&id=98b16ea8-7d83-4a02-972b-2485f8af2182&width=3390&userId=&cache=v2" alt="" />
                    </Text>
                </DescriptionContainer>
            </Item>

            <Item style={{ background: "#F6F5F5" }}>
                <DescriptionContainer>
                    <Title>
                        Compra
                     </Title>
                    <Text>
                        <Subtitle>Trade-in</Subtitle>
                        A través de nuestra redes de partners adquirimos los celulares entregados en el programa de trade-in.
                        Originalmente este proceso se realizaba únicamente en tiendas físicas pero debido al COVID salieron programas de Trade-in Online

                    <Subtitle>C2B</Subtitle>
                        Los usuarios finales tienen la opción de vender su celular directamente a trocafone a traves del sitio: https://www.trocafone.com/vender
                        También contamos con un programa de trade-in asincrónico para aquellas personas que compran un celular a Trocafone puedan vendernos su celular
                        </Text>
                </DescriptionContainer>
            </Item>
            <Item style={{ background: "#FFF" }}>
                <DescriptionContainer>
                    <Title>
                        Revisión
                     </Title>
                    <Text>
                        Todos los teléfonos comprados al llegar al centro de distribución pasan por un proceso de revisión donde se compara si el teléfono declarado es efectivamente el teléfono que llegó y se hace una revisión general de las funcionalidades y su correcto funcionamiento.

                       <Subtitle>Reparación/ Mantenimiento</Subtitle>

                        Reparo interno: Internamente reparamos el teléfono (Incluye el flujo de reparar con piezas).

                        Reparo externo: Enviamos el teléfono a un proveedor para ser reparado.

                        Una vez finalizada la reparación, en caso de que la hubiere, antes de ingresar el teléfono a stock se pasa por el flujo de CQS ( Control de calidad)

                       <Subtitle>Stock y Sucata</Subtitle>

                        Finalizado el proceso de reparación en caso de que sea exitoso, los teléfonos son colocados en Stock fisico (Distribuidos a las Tiendas) o Stock web (Ecommerce, Marketplace y Televentas), con su correspondiente condición de venta.

                        Aquellos teléfonos que no valgan la pena ser reparados o que de la reparación no resulte un teléfono disponible para la venta el mismo es catalogado como Sucata
                        </Text>
                </DescriptionContainer>
            </Item>

            <Item style={{ background: "#F6F5F5" }} >
                <DescriptionContainer>
                    <Title>
                        Venta
                     </Title>
                    <Text>
                        <Subtitle>Ecommerce</Subtitle>

                        Es el principal canal de ventas, donde contamos con un promedio de 65 mil usuarios activos por día.

                        Dentro de la web tenemos 2 tipos de ventas:

                        Venta web con delivery

                        Store Pick Up: El usuario tiene la posibilidad de retirar el teléfono por una tienda física

                       <Subtitle>Ecommerce - Televentas</Subtitle>

                        Si bien es considerado un canal independiente, es un canal que busca concluir aquellas transacciones que no se concretaron a través del sitio.

                       <Subtitle>Marketplace</Subtitle>

                        La venta a través de marketplace si bien representa un costo mayor, nos permite alcanzar un volumen mayor de usuarios formando parte de los principales MKP de Brasil como: Mercado Livre, Amazon, B2W

                       <Subtitle>Quiosques</Subtitle>

                        Este es el único canal de venta física que tenemos en Trocafone, actualmente consta de 19 (proximamente mas) tiendas físicas distribuidas en los estados de São Paulo, Rio de Janeiro y Bahia.
                        </Text>
                </DescriptionContainer>
            </Item>
        </ItemContainer >
    )
}

export default About