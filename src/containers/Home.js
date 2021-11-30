import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { Grid } from '@material-ui/core';

import { firebase } from './firebase';
// import { getAuth, GoogleAuthProvider } from "@firebase/auth";

import logo from '../assets/images/login_screen_logo.png';

const Home = () => {
    const [login, setLogin] = useState(false);

    const SignInWithFirebase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then((re) => {
                localStorage.setItem('Email', JSON.stringify(re.user.email));
                localStorage.setItem('PhoneNumber', JSON.stringify(re.user.phoneNumber));
                localStorage.setItem('photoData', JSON.stringify(re.user.photoURL));
                localStorage.setItem('nameData', JSON.stringify(re.user.displayName));
                console.log(re);
                setLogin(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="h-screen overflow-hidden">
            <Grid container >
                <Grid item lg={8} md={8} xs={12}>
                    <img className="mt-10 lg:mt-0" src={logo} alt="logo" />
                </Grid>
                <Grid item lg={3} md={3} xs={12}>
                    <div className="flex justify-center p-5">
                        <h className="mt-0 lg:mt-smm text-3xl ">Welcome! We help you in monitoring your water usage.</h>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-brown text-white font-bold mt-10 lg:mt-custom pl-10 pr-10 pt-3 pb-3 rounded-lg" onClick={SignInWithFirebase}>Log In</button>
                        {login ? (<Redirect push to="/choice" />) : null}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(Home);