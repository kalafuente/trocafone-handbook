import styled from 'styled-components'

export const MenuContainer = styled.nav`
    width: 100%;
    display:flex;
    padding-bottom: 30px;
    @media (max-width: 768px) {
    flex-direction: column;
    }

`

export const SubItem = styled.div`
`

export const MenuItem = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
    flex-direction: column;
    }

`

export const Image = styled.div`
    width: 250px;
`


