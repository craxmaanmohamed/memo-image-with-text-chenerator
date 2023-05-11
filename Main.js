import {useState} from "react";
import "./Main.css"
import Alldata from "../Alldata";


export default function Main(){
    const [mema,setmema]=useState({
        toptext:"",
        bottomtext:"",
        randomImage:"http://i.imgflip.com/1bij.jpg" 
    })
    // const [imaggs,setImag]=useState(Alldata)
    const imaggs=Alldata
    const clickedMe=function(){
        const ArreyData=imaggs.data.memes
        const RandomDta=Math.floor(Math.random()*ArreyData.length)
        const URL=ArreyData[RandomDta].url
        //  setImag()
        setmema(prev => (
            {
                ...prev,
                randomImage:URL
            }
         ))
      
    }
    function textchange(event){
        setmema(prev => {
            return {
                ...prev ,
                [event.target.name]:event.target.value
            }
        })
    }
  
    return (
        <div  className="main-class">
          <div className="text-block">
          <input
           className="text"
            type="text" 
            name="toptext"
            placeholder="top text"
            onChange={textchange}
            value={mema.toptext}
            />
         
           <input 
           className="text" 
           type="text" 
           name="bottomtext"
           value={mema.bottomtext}
           placeholder="bottom text"
           onChange={textchange}
           />
           
          </div>
          <button onClick={clickedMe}> Get a new meme image 🖼</button>
          <div className="imageANDtext">
          <img className="img" src={mema.randomImage}/>
          <h2 className="h2 toptext">{mema.toptext}</h2>
          <h2 className="h2 bottomtext">{mema.bottomtext}</h2>

          </div>
        
        </div>
     
        
       
    )
}