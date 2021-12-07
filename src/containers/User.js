import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { Grid, Card, CardContent } from '@material-ui/core';

import './index.css';


const User = () => {
    const [loginName, setLoginName] = useState();
    const [loginPhoto, setLoginPhoto] = useState();
    const [loginEmail, setLoginEamil] = useState();
    const [loginPhoneNumber, setLoginPhoneNumber] = useState();
    useEffect(() => {
        const email = localStorage.getItem('Email');
        const phoneNumber = localStorage.getItem('PhoneNumber');
        const profilePhoto = localStorage.getItem('photoData');
        const name = localStorage.getItem('nameData');
        setLoginName(name);
        setLoginPhoto(profilePhoto);
        setLoginEamil(email);
        setLoginPhoneNumber(phoneNumber);
        console.log("photo", loginPhoto );
    });


    return (
        <div className="bg-grey h-screen">
            <Grid container className="pt-10">
                <Grid item lg={2} md={2} xs={0}></Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Card className="modalPosition">
                        <CardContent>
                            <div className="flex justify-between mt-5">
                                <h className="text-3xl font-bold text-lightBlue pt-5">User Details</h>
                                <img className="rounded-full" src={loginPhoto} alt="login" />
                            </div>
                            <br /><br /><br />
                            <div>
                                <h><p className="inline font-bold">User Name :</p> {loginName}</h>
                                <br /><br />
                                <h><p className="inline font-bold">Email Address :</p> {loginEmail}</h>
                                <br /><br />
                                <h><p className="inline font-bold">Phone Number :</p> {loginPhoneNumber}</h>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={2} md={2} xs={0}></Grid>
            </Grid>

        </div>
    );
}

export default withRouter(User);