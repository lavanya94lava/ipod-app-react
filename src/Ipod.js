import React from 'react';
import './ipod.css';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{

    constructor(){
        super();
        this.state = {
            "display":["Settings","Games","Music","Cover-Flow"],

        }
    }
    handleScroll = () =>{
        let angle = 0;
        const myElement = document.getElementById('menu');
        const region = new ZingTouch.Region(myElement);
        region.bind(myElement,'rotate',function(e){
            angle += e.detail.distanceFromLast;

            if(Math.abs(angle)>0 && Math.abs(angle)<15){
                let element = document.getElementById("Settings");
                element.style.background = "blue";
                element.style.color = "white";
            }
            if(Math.abs(angle)>15 && Math.abs(angle)<30){
                let element = document.getElementById("Games");
                element.style.background = "blue";
                element.style.color = "white";
            }
            if(Math.abs(angle)>30 && Math.abs(angle)<45){
                let element = document.getElementById("Music");
                element.style.background = "blue";
                element.style.color = "white";
            }
            if(Math.abs(angle)>45 && Math.abs(angle)<60){
                let element = document.getElementById("Cover-Flow");
                element.style.background = "blue";
                element.style.color = "white";
            }
        });
    }

    mainMenu = ()=>{
        let allScreens = document.getElementById("show");
        let currentScreen = "";

        for(currentScreen of allScreens){
            if(currentScreen.style.visibilty ==="visible"){
                break;
            }
        }
        currentScreen.style.visibilty = "hidden";
        currentScreen.style.height="0";
        currentScreen.style.width="0";

    }
    render(){
        const items = this.state.display;
        return(
            <div className = "main">
                <div className="active-screen">
                    {
                        items.map((item,index)=>(
                            <div className = "display-items" id = {item} key = {index}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div id = "coverflow-display" className = "show">

                </div>
                <div id = "coverflow-display" className = "show">

                </div>
                <div id = "coverflow-display" className = "show">

                </div>
                <div id = "coverflow-display" className = "show">

                </div>
                <div className="menu">

                </div>
            </div>
        ); 
        
    }
}

export default Ipod;