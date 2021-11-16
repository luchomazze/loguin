import React, { useState, useEffect } from 'react'
import {Form, Button, Modal} from "react-bootstrap"
import { BsFacebook, BsGoogle } from "react-icons/bs";
import axios from "axios";
var localStorage = require('localStorage')


function Leftside() {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let response=0
    async function post (body){
        try{
            var response= await axios.post("https://api-flordeemprendedora.start-7.com/api/auth/login/", body)
    if(response.status===200){
            if(response.data.token){
                localStorage.setItem("token", response.data.token);
                 handleShow()
            }
    }
        }catch (e) {console.log("error",e)}
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
    
        setValidated(true);
        console.log("event",event.target[0].value)
        console.log("event",event.target[1].value)
        let body= {
            "username": event.target[0].value.toString(),
            "password": event.target[1].value.toString()
        }
        post (body)
      };

    return (
        <div >
            <div style={{position: "absolute", width: "2.22%", height: "0.44%", left: "8.402777778%", top: "16%", background: "#5594EF"}}></div>
            <div style={{position: "absolute", width: "34,58333333%", height: "4,333333333%", left: "8.402777778%", top: "19.11111111%", color: "#5594EF", "font-family": "Asap", "font-style": "normal", "font-weight": "600", "font-size": "34px", "line-height": "39px",}}>Bem-vindo de volta! </div>
            
            <div style={{position: "absolute", width: " 25.06944444%", height: "5.777%", left: "8.402777778%", top: "26.11%", color: "#5594EF", "font-family": "Asap", "font-style": "normal", "font-weight": "normal", "font-size": "15px", "line-height": "26px",}}>Estamos felizes que esteja de volta para retomar seus projetos no Projetolist. </div>


            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Control controlId="formBasicEmail" type="text" placeholder="E-mail" style={{position: "absolute", width: " 34.58333333%", height: "6.222%", left: "8.333333333%", top: "36.33333333%", border: "1px solid #CEE0FA", "box-sizing": "border-box", "border-radius": "4px", "input-placeholder-color": "#9EC2F6", }} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" >
                    <Form.Control type="password" placeholder="Senha" style={{position: "absolute", width: " 34.58333333%", height: "6.222%", left: "8.333333333%", top: "44.77777778%", border: "1px solid #CEE0FA", "box-sizing": "border-box", "border-radius": "4px", color: "#9EC2F6" }}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <div style={{position: "absolute", width: " 9.236111111%", height: "1.777777778%", left: "33.68%", top: "53.66%", color: "#6DA3F1", "font-family": "Asap", "font-style": "normal", "font-weight": "normal", "font-size": "81%", "line-height": "16px", "display": "flex", "align-items": "center", "text-align": "right", "letter-spacing": "0.15px", "text-decoration-line": "underline", }}>Esqueceu sua senha? </div>

                <Button type="submit"  style={{position: "absolute", width: " 34.58%", height: "5.33%", left: "8.33%", rigth: "57.08%", top: "59.88%", bottom: "34.78%", "display": "flex", "flex-direction": "column", "align-items": "center","justify-content": "center", padding: "15px 54px", "border-radius": "100px" }}>Entrar</Button>

            </Form>

            <div style={{position: "absolute", width: "6.388%", height: "1.6667%", left: "22.43%", top: "68.77%", color: "#6DA3F1", "font-family": "Asap", "font-style": "normal", "font-weight": "normal", "font-size": "75%", "line-height": "15px", "display": "flex","align-items": "center", "text-align": "center",}}>OU ENTRE COM </div>

            <div>
                <div style={{position: "absolute", width: "3.61%", height: "5.33%", left: "21.38%", top: "73.11%", color: "#fff", background: "#1D69E5", "border-radius": "4px", "display": "flex", "flex-direction": "column", "align-items": "center","justify-content": "center"}}>
                    <BsFacebook/> 
                </div>
                <div style={{position: "absolute", width: "3.611%", height: "5.333%", left: "26.18%", top: "73.11%", color: "#1D69E5", background: "#fff", "border-radius": "4px", "display": "flex", "flex-direction": "column", "align-items": "center","justify-content": "center"}}>
                    <BsGoogle />
                </div>
            </div>

            <div style={{position: "absolute", width: "17.9861%", height: "1.889%", left: "16.597%", top: "82%", color: "#5594EF", "font-family": "Asap", "font-style": "normal", "font-weight": "normal", "font-size": "84.66%", "line-height": "17px", "display": "flex","align-items": "center", "text-align": "center",}}><div> Ainda não tem uma conta? </div> <div> </div> <div style={{"font-weight": "bold"}}> Cadastre-se</div> </div>


            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Welcome back</Modal.Title>
        </Modal.Header>
        <Modal.Body>We missed you</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default Leftside
