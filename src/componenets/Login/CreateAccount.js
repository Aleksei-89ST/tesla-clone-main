import React from "react";
import { useForm } from "react-hook-form";
import { FormWrapper, Wrapper, Form, Input, ButtonPrimary, Label, Header, Error, Divider, ButtonSecondary, Footer } from "./Login.styles";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { login } from "../../store/userSlise";
import { useDispatch } from "react-redux";
import { app } from "../../firebase";
import LanguageIcon from '@mui/icons-material/Language';



export const CreateAccount = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()


    const auth = getAuth()
    const onSubmit = ({ firstName, lastName, email, password }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                user.displayName = firstName + ' ' + lastName
                dispatch(login(user))
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }




    return (
        <Wrapper>
            <Header>
                <Link to="/">
                    <img src="/images/logo.svg" alt="logo" />
                </Link>
                <span><LanguageIcon sx={{ marginRight: "5px" }} />en-Us</span>
            </Header>
            <FormWrapper>
                <h1>Sign In</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>First Name</Label>
                    <Input {...register("firstName", { required: true })} />
                    {errors.firstName && <Error>First Name is required</Error>}
                    <Label>Last Name</Label>
                    <Input {...register("lastName", { required: true })} />
                    {errors.lastName && <Error>Last Name is required</Error>}
                    <Label>Email Address</Label>
                    <Input type="email" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: <Error>Invalid email address</Error>
                        }
                    })} />
                    {(errors.email?.type === "required" && <Error>Email is required</Error>) || errors.email?.message}
                    <Label>Password</Label>
                    <Input type="password" {...register("password", { required: true })} />
                    {errors.password && <Error>Password is required</Error>}
                    <ButtonPrimary type="submit">Create Account</ButtonPrimary>
                </Form>
                <Divider>OR</Divider>
                <ButtonSecondary to="/login">Sign In</ButtonSecondary>
            </FormWrapper>
            <footer>
                <Footer>
                    <li>Tesla © 2022</li>
                    <li>Privacy & Legal</li>
                    <li>Contact</li>
                </Footer>
            </footer>
        </Wrapper>
    )
}