import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 30px;
    background-color: transparent;
    transition: background-color ease .33s;
    span {
        display: flex;
        align-items: center;
        font-weight: 600;
        cursor: pointer;
        padding: 10px;
        border-radius: 12px;
        &:hover {
            background-color: hsla(0,0%,0%,.05);
        }
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    margin-bottom: 5rem;
    h1 {
        font-weight: 600;
        font-size: 35px;
        opacity: 0.9;
        margin-bottom: 30px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Label = styled.label`
    font-weight: 600;
    font-size: 15px;
    opacity: 0.75;
    margin: 10px 20px;
`

export const Input = styled.input`
    height: 40px;
    border-radius: 32px;
    border: none;
    background-color: #f5f5f5;
    width: 100%;
    padding-left: 20px;
    
    &:focus {
        outline: lightgrey solid 1px;
    }
`

export const ButtonPrimary = styled(Button)`
    height: 40px;
    border-radius: 32px;
    margin-top: 20px;
    background-color: #3d69e1;
    color: white;
    cursor: pointer;
    border: none;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    transition: background-color .33s ease, color .33s ease;
    &:hover {
        background-color: #3457b2;
    }
`

export const ButtonSecondary = styled(ButtonPrimary)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 40px;
    border-radius: 32px;
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    transition: background-color .33s ease, color .33s ease;  */
    background-color: white;
    color: black;
    border: 3px solid black;
    &:hover {
        background-color: black;
        color: white;
    }
`

export const Error = styled.span`
    color: #b74134;
    font-weight: 600;
    margin-top: 10px;
`

export const NeedHelp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    span {
        margin: 0 8px;
    }
    p {
        text-decoration: underline;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        color: #393c41;
        &:hover {
            color: #181b21
        }
    }
`

export const Divider  = styled.span`
    display: flex;
    align-items: center;
    margin: 40px 0;
    &::before {
    content: "";
    display: inline-block;
    width: 40%;
    height: 1px;
    margin: 0 8px;
    background-color: lightgrey;
}
    &::after {
    content: "";
    display: inline-block;
    width: 40%;
    height: 1px;
    margin: 0 8px;
    background-color: lightgrey;
}
`

export const Footer = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    li {
        color: #5c5d61;
        cursor: pointer;
        font-weight: 600;
        font-size: 12px;
        margin-left: 15px;
        &:hover {
            color: black;
            text-decoration: underline;
        }
    }
`