import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { firebase } from './firebase';

import { LineGraph, BarGraph, TankGraph } from "../components";
import Tips from '../containers/Tips';
import { Grid, Card, CardContent, LinearProgress } from '@material-ui/core';

const Statics = () => {
    const [loginName, setLoginName] = useState();
    const [progres, setProgress] = useState();

    useEffect(() => {
        firebase.database().ref("Tank Level").on("value", snapshot => {
            let tankDataCurrent = [];
            snapshot.forEach(snap => {
                tankDataCurrent.push(snap.val());
            });
            localStorage.setItem('forTips', tankDataCurrent);
            console.log("firebase data", tankDataCurrent);
        });
        const name = localStorage.getItem('nameData');
        setLoginName(name);

        const progress = localStorage.getItem('circularProgress');
        setProgress(progress);

    }, []);


    return (
        <div>
            <div className="bg-grey h-test md:h-screen">
                <div className="p-10">
                    <h className="text-black font-bold text-2xl">{loginName}
                        <p className="text-black font-normal inline text-1xl">,welcome back</p></h>
                </div>
                <Grid container>
                    <Grid item lg={1} md={1} xs={1}></Grid>
                    <Grid item lg={10} md={10} xs={10}>
                        <Card className="mt-10 md:mt-0">
                            <CardContent>
                                <div className="flex justify-center">
                                    <h className="font-bold text-3xl text-lightBlue ">Water Statics</h>
                                </div>
                                <br /><br />
                                <Grid container>
                                    <Grid item lg={5} md={5} xs={12}>
                                        
                                    </Grid>
                                    <Grid item lg={2} md={2} xs={0}></Grid>
                                    <Grid item lg={5} md={5} xs={12}>
                                        <TankGraph />
                                        <div className="mt-0 md: mt-12">
                                            <LinearProgress variant="determinate" value={progres} />
                                            <LinearProgress variant="determinate" value={progres} />
                                            <LinearProgress variant="determinate" value={progres} />
                                            <LinearProgress variant="determinate" value={progres} />
                                            <LinearProgress variant="determinate" value={progres} />
                                        </div>
                                    </Grid>
                                </Grid>

                               



                                {/* {count.map(index =>
                                <div>
                                    <h>{index}</h>
                                </div>)} */}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={1} md={1} xs={1}></Grid>
                </Grid>
            </div>
            <div>
                <Tips />
            </div>
        </div>
    );
}

export default withRouter(Statics);