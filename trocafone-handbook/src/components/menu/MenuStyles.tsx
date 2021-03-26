import styled from 'styled-components'

export const MenuContainer = styled.nav`
    width: 100%;
    display:flex;
    margin-bottom: 100px;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;
    }

`
export const SubItem = styled.div`

`

export const LinkStyle = styled.a`
    color:#404040 !important;
    text-decoration: none !important;
    font-weight: 600;
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


