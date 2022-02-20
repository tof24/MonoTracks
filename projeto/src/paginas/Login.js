import {React, useState, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'reactstrap';
import {firebase, logout, useAuth, login} from "./../firebase";


function Login() {


    //******************************FIREBASE SIGNUP LOGIN ************************************************
    //*********************************+++
    //***********************************


    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passRef = useRef();

    async function handleSignup() {

        setLoading(true);
        try {

            await firebase(emailRef.current.value, passRef.current.value);
        } catch (e) {
            alert("Error!")
        }
        setLoading(false);

    }

    async function handleLogin() {

        setLoading(true);
        try {

            await login(emailRef.current.value, passRef.current.value);
        } catch (e) {
            alert("Error!")
        }
        setLoading(false);

    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch (e) {
            alert("Error!")
        }
        setLoading(false);

    }


    return (
        <div className={"d-flex align-content-center flex-wrap"}>

            <Container>


                <div className={"text-center"}>
                    <h1 className={"pt-5 justi"}>

                        Sign Up or Log in to your MonoTracks account!

                    </h1>
                </div>




                <div className={"text-center"}>
                    <input ref={emailRef} className={"mt-5 mr-3 mb-5"} placeholder="Email"/>


                    <input ref={passRef} className={"mt-5 ml-3 mb-5"} type={"password"} placeholder="Password"/>


                    <div className={"d-block text-center"}>
                        <button disabled={loading || currentUser} onClick={handleSignup} className={"botaosignup"}>Sign
                            Up
                        </button>

                        <button disabled={loading || currentUser} onClick={handleLogin} className={"botaosignup"}>Log In
                        </button>

                        <button disabled={loading || !currentUser} className={"botaosignup"} onClick={handleLogout}>Log
                            Out
                        </button>
                    </div>

                </div>

                <div className={"pt-5 text-center"}>
                    You are logged in as: {currentUser?.email}
                </div>
            </Container>







        </div>
    )

}


export default Login

