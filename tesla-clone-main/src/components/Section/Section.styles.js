import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ image }) => `url("/images/${image}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TextItem = styled.div`
    padding-top: 15vh;
    text-align: center;
    opacity: 0.75;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 45px;
    font-weight: 500;

    @media (max-width: 600px) {
        font-size: 35px
    }
`

export const Subtitle = styled.p`
    margin: 8px 0;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    backdrop-filter: blur(8px);
    color: #fff;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ opacity = 0.8 }) => `${opacity}`};
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 500;
`

export const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;
    opacity: 0.65;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`