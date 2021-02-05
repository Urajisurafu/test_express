import React from "react";

import { useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";


export default function Login() {

    const history = useHistory();

    async function regLogin() {

        const provider = new firebase.auth.GoogleAuthProvider();

        await auth.signInWithPopup(provider).then(

            async (result) => {

                history.push("/user-list");

                const user = result.user;
                console.log(typeof user)

                const sendData = async(url, data) => {

                    const response = await fetch(url,{
                      method: 'POST',
                      body: data,
                    });

                    return await response.json();
                };

                const sendCart = () => {

                    const data = user;
                    const cartList = JSON.stringify(data);

                    console.log(data);
                    sendData('http://localhost:4000/user', data);
                    console.log(cartList);
                };

                sendCart();
                console.log(user);
            },
            function (error) {
                console.log(error);
            }
        );
    }
    return (
        <div>
            <button onClick={regLogin} className="login-button">
                Registration
            </button>
        </div>
    );
}