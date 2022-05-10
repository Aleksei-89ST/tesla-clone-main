import React from 'react';
import { SideBarList, SideBarListItem, SignOutButton } from "./TeslaAccout.styles";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import ProfileIcon from '@mui/icons-material/PermIdentityOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChargingIcon from '@mui/icons-material/EvStationOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlise"
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";



export const Sidebar = ({ closeMenu }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signOutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(logout())
            navigate("/")
        }).catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <SideBarList>
            <SideBarListItem onClick={closeMenu}><HomeIcon sx={{ marginRight: "20px" }} />Dashboard</SideBarListItem>
            <SideBarListItem><ProfileIcon sx={{ marginRight: "20px" }} />Profile Settings</SideBarListItem>
            <SideBarListItem><CreditCardIcon sx={{ marginRight: "20px" }} />Payment Method</SideBarListItem>
            <SideBarListItem><ChargingIcon sx={{ marginRight: "20px" }} />Charging</SideBarListItem>
            <SideBarListItem><ShoppingCartIcon sx={{ marginRight: "20px" }} />Order History</SideBarListItem>
            <SignOutButton onClick={signOutHandler}><LogoutIcon sx={{ marginRight: "20px" }} />Sign Out</SignOutButton>
        </SideBarList>
    )
}
