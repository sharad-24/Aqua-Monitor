import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { Grid, Card, CardContent } from '@material-ui/core';

import tipimg2 from '../assets/images/tipimg2.png';
import tipimg3 from '../assets/images/tipimg3.png';
import tipimg4 from '../assets/images/tipimg4.png';

const Tips = () => {
    const [loginName, setLoginName] = useState();
    const [tip1, setTip1] = useState('');
    const [tip2, setTip2] = useState('');
    const [tip3, setTip3] = useState('');
    const [tip4, setTip4] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('nameData');
        setLoginName(name);

        const TipsData = localStorage.getItem('forTips');
        
        let Tips = []; 
        Tips = TipsData[0] + TipsData[1];
    
        console.log("Tips page", Tips)

        if(Tips >= 0 && Tips < 25){
            setTip1("Wash Your Clothes Less Often");
            setTip2("Always turn taps off tightly so they do not drip");
            setTip3("In case of water shortage, prefer using disposable utensils, so that water is not required for cleaning the dishes.");
            setTip4("Try avoiding baths, or prefer taking short showers, as most baths use 35-50 gallons of water, but showers can use only about 25, especially if you have a low-flow shower head");
        }
        else if(Tips >= 25 && Tips < 50){
            setTip1("Avoid washing your cars");
            setTip2("Take shorter showers");
            setTip3("Reuse kitchen water for other activities such as watering plants, washing cars and so on.");
            setTip4("Use a watering can to water gardens instead of a hose.");
        }
        else if(Tips >= 50 && Tips < 75){
            setTip1("Never pour water down the drain when there may be another use for it -such as watering a plant or garden");
            setTip2("Water your lawn only when it needs it.Watering on a regular schedule doesn't allow for cool spells or rainfall which reduce the need for watering. Step on some grass. If it springs back up when you move your foot, it doesn't need water.");
            setTip3("Nearly 22% of indoor home water use comes from doing laundry. So, make it a point to adjust the water level in your washing machine to match the amount needed for the load. If this is not an option, run only full laundry loads.");
            setTip4("Use biodegradable cleaners as disinfectants while mopping the house – this water can be used to water the plants instead of being poured into drains.");
        }
        else{
            setTip1("Wash the car with water from a bucket, or consider using a commercial car wash that recycles water.");
            setTip2("Consider purchasing a high efficiency washing machine which can save over 50% in water and energy use.");
            setTip3("Water your garden in the morning to prevent water loss due to evaporation. Also, don’t water your garden when it’s windy outside – the wind speeds up the process of evaporation.");
            setTip4("Do not throw away the excess water after boiling vegetables or chicken. Store the stock and use it later to make curries and delicious soups.");
        }

    },[]);


    return (
        <div className="bg-grey">
            <div className="p-10">
                <h className="text-black font-bold text-2xl">{loginName}
                    <p className="text-black font-normal inline text-1xl">,welcome back</p></h>
            </div>
            <Grid container className="pb-10">
                <Grid item lg={1} md={1} xs={0}></Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <img src={tipimg4} alt="img1" />
                            <div className="flex justify-center mt-5 mb-3 font-bold text-2xl text-tip1">
                                Tip 1
                            </div>
                            <div className="flex justify-center">
                                <h>{tip1}</h>
                            </div>
                        </CardContent>
                    </Card>
                    <br /><br />
                    <Card className="mb-10 md:mb-0">
                        <CardContent>
                            <img src={tipimg2} alt="img2" />
                            <div className="flex justify-center mt-5 font-bold text-2xl text-tip2">
                                Tip 3
                            </div>
                            <div className="flex justify-center">
                                <h>{tip3}</h>
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item lg={2} md={2} xs={0}></Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <img src={tipimg3} alt="img1" />
                            <div className="flex justify-center mt-5 font-bold text-2xl text-tip3">
                                Tip 2
                            </div>
                            <div className="flex justify-center">
                                <h>{tip2}</h>
                            </div>
                        </CardContent>
                    </Card>
                    <br /><br />
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <img src={tipimg4} alt="img1" />
                            <div className="flex justify-center mt-5 font-bold text-2xl text-tip4">
                                Tip 4
                            </div>
                            <div className="flex justify-center">
                                <h>{tip4}</h>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={1} md={1} xs={0}></Grid>
            </Grid>
        </div>
    );
}

export default withRouter(Tips);