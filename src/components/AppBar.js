import { Route, Routes } from "react-router-dom";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";


export default function AppBar(){

    return(
        <header>
            <Navigation/>
            <AuthNav/>
            <UserMenu/>

        </header>
    )
}