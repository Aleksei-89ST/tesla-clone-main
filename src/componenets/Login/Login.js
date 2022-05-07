import React from "react";
import { useForm } from "react-hook-form";
import { FormWrapper, Wrapper, Form, Input, ButtonPrimary, Label, Header, Error, NeedHelp, Divider, ButtonSecondary, Footer } from "./Login.styles";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { login, errorHandler, selectError } from "../../store/userSlise";
import { useDispatch, useSelector } from "react-redux";
import LanguageIcon from '@mui/icons-material/Language';



export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const authError = useSelector(selectError)


    const auth = getAuth()
    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                dispatch(login(user))
            })
            .catch((error) => {
                dispatch(errorHandler(error.message))
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
                    <Label>Email Address</Label>
                    <Input type="email" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: <Error>Invalid email address</Error>
                        }
                    })} />
                    {errors.email?.type === "required" && <Error>Email is required</Error> || errors.email?.message}
                    <Label>Password</Label>
                    <Input type="password" {...register("password", { required: true })} />
                    {errors.password && <Error>Password is required</Error>}
                    {authError && <Error>User with same email or password doesn't exist</Error>}
                    <ButtonPrimary type="submit">Sign In</ButtonPrimary>
                    <NeedHelp>
                        <p>Forgot email?</p>
                        <span>|</span>
                        <p>Forgot password?</p>
                    </NeedHelp>
                </Form>
                <Divider>OR</Divider>
                <ButtonSecondary as={Link} to="/createaccount">Create Account</ButtonSecondary>
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