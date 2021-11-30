import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";


import { Grid, Card, CardContent, Button } from '@material-ui/core';

const Statics = () => {
    const [loginName, setLoginName] = useState();
    const [count, setCount] = useState();
    useEffect(() => {
        fetch("https://api.thingspeak.com/channels/1512249/feeds.json?results=2")
            .then(response => {
                if (!response.ok) {
                    throw Error("Error fetch");
                }
                return response.json()
                    .then(allData => {
                        setCount({ count: allData });
                    })
            });

        // console.log("api data", count);

        const name = localStorage.getItem('nameData');
        setLoginName(name);

    });


    return (
        <div className="bg-grey h-screen">
            <div className="p-10">
                <h className="text-black font-bold text-2xl">{loginName}
                    <p className="text-black font-normal inline text-1xl">,welcome back</p></h>
            </div>
            <Grid container>
                <Grid item lg={2} md={2} xs={0}></Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Card className="modalPosition mt-10 md:mt-0">
                        <CardContent>
                            <div className="flex justify-center">
                                <h className="font-bold text-3xl text-lightBlue ">Water Statics</h>
                            </div>
                            {/* {count.map(index =>
                                <div>
                                    <h>{index}</h>
                                </div>)} */}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={2} md={2} xs={0}></Grid>
            </Grid>
        </div>
    );
}

export default withRouter(Statics);