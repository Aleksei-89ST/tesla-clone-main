import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${({ image }) => `url("/images/${image}")`};
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 6rem;
    color: white;

    h1 {
        font-size: 45px;
        font-weight: 500;
        opacity: 0.8;
    }
`

export const TextItem = styled.div`
    color: black;
    text-align: center;

    h1 {
        margin-bottom: 0;
        font-weight: 600;
    }

    p {
        font-weight: 500;
    }
`

export const Specifications = styled.div`
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(3, 140px);
    justify-items: center;

    @media (max-width: 1000px) {
        margin-bottom: 20px;
    }

    @media (max-width: 600px) {
        margin-bottom: 20px;
        grid-gap: 10px;
    }
`

export const SpecificationsItem = styled.div`
    text-align: center;
    opacity: 0.9;

    h2 {
        font-size: 28px;
        white-space: nowrap;
        margin-bottom: 12px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-top: 0;
    }

    @media (max-width: 600px) {
        justify-self: start;

        h2 {
            font-size: 20px;
            font-weight: 500;
        }

        p {
            font-size: 10px;
        }
    }
`

export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
    padding: 10px 70px;
    border: 2px solid white;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    transition: background-color .33s ease, color .33s ease;
    margin-left: 40px;
    color: white;

    &:hover {
        background-color: white;
        color: black;
    }

    @media (max-width: 1000px) {
        align-self: stretch;
        margin-left: 0;
    }
`

export const BottomItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const BottomWrapper = styled.div`
    display: flex;
    align-items: baseline;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
