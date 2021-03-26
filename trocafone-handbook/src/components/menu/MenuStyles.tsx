import styled from 'styled-components'

export const MenuContainer = styled.nav`
    width: 100%;
    display:flex;
    margin-bottom: 30px;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;
    }

`
export const SubItem = styled.div`

`

export const LinkStyle = styled.a`
    color:#6C8EDB !important;
    text-decoration: none !important;
`
export const MenuItem = styled.div`
    display:flex;
    width: 100%;
    @media (max-width: 768px) {
    flex-direction: column;
    }

`
export const Image = styled.div`
    width: 250px;
`


