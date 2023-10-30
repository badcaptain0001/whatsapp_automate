// create a login for superadmin
const express = require("express");
const router = express.Router();
const superadmin = require("../models/superadmin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");

router.get("/send", (req, res) => {
    const mode = req.query["hub.mode"];
    const challenge = req.query["hub.challenge"];
    const verify_token = req.query["hub.verify_token"];
    const token = "EAAMlx3uZA8gUBO9aWLyw1qfF8Wey98ZAZA3KZArSncw3GMazB1YzuCII4azZAdQ5GmyAYj8kUlSKvF9NBmofLNZBjRjOF6ZC4vfwwb1560Vblq8co7PAg9eLxP3B0deviOnQeCkrQvgsncZAZBmZCOJyvwIVK3FjjwJ4iPWTir9oS0sapSrR1GTkHZCYsKa3GdQ1k5ldVS9wwVZAht99CLCqwkYZD"
    try{

        console.log(mode,challenge,verify_token);
        if(mode === "subscribe" && verify_token === token){
            console.log("WEBHOOK_VERIFIED");
            res.send(challenge);
        }
        else{
            console.log("WEBHOOK_NOT_VERIFIED");
            res.sendStatus(403);
        }
    }
    catch(err){
        console.log(err,"error");
    } 
});


router.post("/send", async (req, res) => {
    const {phoneNumber,text} = req.body;
    const token = "EAAMlx3uZA8gUBO9aWLyw1qfF8Wey98ZAZA3KZArSncw3GMazB1YzuCII4azZAdQ5GmyAYj8kUlSKvF9NBmofLNZBjRjOF6ZC4vfwwb1560Vblq8co7PAg9eLxP3B0deviOnQeCkrQvgsncZAZBmZCOJyvwIVK3FjjwJ4iPWTir9oS0sapSrR1GTkHZCYsKa3GdQ1k5ldVS9wwVZAht99CLCqwkYZD"

    const url = "https://graph.facebook.com/v17.0/146456311889637/messages"

    const headers = {
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : "application/json"
    }

    const data = {
        "messaging_product": "whatsapp",
        "to": phoneNumber,
        "text": {
            "body": text
        }
    } 
    try{
        axios.post(url,data,{headers})
        .then((response)=>{
            console.log(response);
            res.send(response.data);
        })
        .catch((err)=>{
            console.log(err);
            res.send(err.response.data);
        })
    }
    catch(err){
        console.log(err);
        res.send(err);
    }

});

module.exports = router;