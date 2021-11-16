import React from 'react'
import Image from 'react-bootstrap/Image'

const Rigthside = () => {
    return (
        <div style={{position: "absolute", backgroundColor: '#6DA3F1', width: "50%", height: "100%", left: "50%", top: "0px", "border-radius": "80px 0px 0px 80px" }}>
           
            <div style={{ position: "relative", left: "7.31%", top: "13.66%",}}>
            <Image src={require("./images/LOGO.svg").default} width= "23.16%" height="10%"/>
            </div>
           
            <div style={{position: "absolute", width: " 3.125%", height: "2.11%", left: "87.1%", top: "15.88%", color: "#FFFFFF", "font-family": "Asap", "font-style": "normal", "font-weight": "600", "font-size": "17px", "line-height": "80%", "display": "flex", "align-items": "center",  "letter-spacing": "0.15px", "text-decoration-line": "underline"}}>
            Ajuda
            </div>
           
           <div style={{ position: "absolute", left: "15%", top: "31.889%"}}>
            <Image src={require("./images/empty.png").default} height= "auto"   />
           </div>

            <div>
                <div style={{position: "absolute", width: "116px", height: "16px", left: "14.72%", top: "92.44%", color: "#FFFFFF", "font-family": "Asap", "font-style": "normal", "font-weight": "normal", "font-size": "14px", "line-height": "16px", }}>
                © 2021, Projetolist
                </div>
                <div style={{position: "absolute", width: " 199px", height: "1.77%", left: "59.58%", top: "92.44%", color: "#FFFFFF", "font-family": "Asap", "font-style": "normal", "font-weight": "normal", "font-size": "14px", "line-height": "16px", }} >
                UI/UX Design and Front-end by:
                </div>
                <div style={{ position: "absolute", left: "1350px", top: "824px"}}>
            <Image src={require("./images/2.svg").default} width= "12.2px" height="18.26px"  />
            <Image src={require("./images/3.svg").default} width= "14.06px" height="18.26px" />
           </div>
            <div style={{ position: "absolute", left: "1369px", top: "835px"}}>
            <Image src={require("./images/4.svg").default} width= "13.74px" height="2.1px"  />
            </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Rigthside
