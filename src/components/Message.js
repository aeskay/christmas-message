import React, { useState } from 'react'
import confetti from '../images/confetti-4.gif';
import minions from '../images/minions.gif';
import { Button  } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { Link } from "react-router-dom";

function Message() {
  const [message, setmessage] = useState('Best wishes for a joyous Christmas filled with love, happiness and prosperity! ');
  const [first, setfirst] = useState('Friend');
  const [second, setsecond] = useState('Your Friend');

  const url = window.location.href;
  let yourName = url.indexOf("name=") + "name=".length;
  let endIndex = url.indexOf("&", yourName);
  let result = url.substring(yourName, endIndex);
  result = result.replace(/%20/g, ' ');

  let theirName = url.indexOf("rname=") + "rname=".length;
  let endIndex2 = url.indexOf("&", theirName);
  let result2 = url.substring(theirName, endIndex2);
  result2 = result2.replace(/%20/g, ' ');

  let id = url.indexOf("id=") + "id=".length;
  let result3 = url.substring(id);

  if(result && result2 && result3){
    (async function getMessages() {
      let response = await fetch("https://raw.githubusercontent.com/aeskay/aeskay/main/messages.json");
      let results = await response.json();
      setfirst(result2)
      setsecond(result)
      setmessage(results.messages[result3-1].message);
  })();
  } 

return (
    <div className="message-outer" >
      <img src={confetti} alt="" className="demo-bg2"/>
      <div className='App-2' style={{}}>
        <div className="header">
          <img src={minions} alt="Minions" className="minions"/>
        </div>
        <div style={{justifyContent: "center", display: "flex"}}>
          <div className='rainbow2'>
            <span className='sender'>Dear {first},</span>
            <p className='message'>{message}</p>
            <span className='sender'>- {second}</span>
          </div>
        </div>
        <p>Send a message to your loved ones too!</p>
        <Link to="/" style={{textDecoration: "none"}}>
          <Button variant="contained" color="success" style={{marginLeft: "5px"}} startIcon={<FontAwesomeIcon icon={faPencil} />}>
            CLICK HERE</Button>
        </Link>
        <div className="footer">By <a href="https://github.com/aeskay" target="_blank">aeskay</a></div>
      </div>
    </div>
  )
}

export default Message