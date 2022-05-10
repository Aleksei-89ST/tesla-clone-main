import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 6rem;
`

export const SidebarContainer = styled.div`
    margin-right: 60px;

    @media (max-width: 1200px) {
            display: none;
        }
`

export const SideBarList = styled.ul``

export const SideBarListItem = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    font-weight: 600;
    font-size: 16px;
    color: #5c5d61;
    margin: 40px;
    cursor: pointer;

    &:hover {
        color: #212121;
    }
`

export const SignOutButton = styled(SideBarListItem)``

export const CardWrapper = styled.div`
    margin-left: 25px;

    h1 {
        font-size: 35px;
        font-weight: 600;
        color: #181b21;

        @media (max-width: 1200px) {
            font-size: 20px;
        }
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;

    @media (max-width: 1200px) {
        margin-bottom: 20px;
        cursor: pointer;
        }
`

export const Card = styled.div`
    width: 318px;
    min-height: 210px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    font-size: 12px;
    font-weight: 500;
    color: #5c5d61;
    margin-bottom: 20px;

    div {
        display: flex;
        flex-direction: ${({ direction }) => `${direction}`};
        justify-content: space-between;
        padding: 0 20px;

        h4 {
            margin-bottom: 0;
        }
        
        p {
            margin-top: 5px;
        }
    }

    img {
        width: 100%;
        border-radius: 20px 20px 0 0;
    }
`


export const SlideMenuContainer = styled.div`
    visibility: ${({ isMenuOpen }) => isMenuOpen ? `visible` : `hidden`};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: transparent;
    backdrop-filter: blur(15px);

    ul {
        max-height: 550px;
        box-shadow: 0 0 10px 10px #fff;
        background: #fff;
        padding: 0 10px;
        margin-left: -10px;
        top: 43px;
        position: absolute;
        width: inherit;

        li {
            font-size: 20px;
        }
    }
`