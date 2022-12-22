import React, { useState } from 'react'
import minions from '../images/minions.gif';
import lovebg from '../images/lovebg.gif';
import { Counter } from '../features/counter/Counter';
import { FormControl, InputLabel, Input, Button, IconButton  } from '@mui/material';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons/faRotateRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [message, setMessage] = useState("Best wishes for a joyous Christmas filled with love, happiness and prosperity!");
    const [yourName, setYourName] = useState("");
    const [theirName, setTheirName] = useState("");
    const [id, setId] = useState(6);

    const getNewMessage = () => {
      async function getMessages() {
        let response = await fetch("https://raw.githubusercontent.com/aeskay/aeskay/main/messages.json");
        let results = await response.json();
  
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const randomInt = getRandomInt(0, results.messages.length-1);
        setId(randomInt +1);
        const newMsg = results.messages[randomInt].message;
        setMessage(newMsg);
      }
      getMessages()
    }
    const changeMyName = (e) => {
      setYourName(e.target.value)
    }
    const changeTheirName = (e) => {
      setTheirName(e.target.value)
    }

    const getLink = () => {
      if(yourName && theirName && id){
        const link = `${window.location.href}message/?name=${yourName}&rname=${theirName}&id=${id}`;
        const shareData = {
          title: 'Christmas Message',
          text: `Hi ${theirName}, ${yourName} sent you a message! Click the link to view it. `,
          url: link
        }
        navigator.share(shareData)
      } else {
        alert("Please fill the details")
      }
      
    }

  return (
    <div className="App-outer" >
      <img src={lovebg} alt="" className="demo-bg"/>
      <div className='App' style={{}}>
        <div className="header">
          <img src={minions} alt="Minions" className="minions"/>
        </div>
        <div className='main-body'>
          <span className='headText'>Send a Christmas Message<br/> to Your Loved One</span>
          <div className='form-div'>
            <FormControl>
              <InputLabel htmlFor="your-name">Your Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={yourName} onChange={changeMyName}/>
            </FormControl><br/><br/>
            <FormControl>
              <InputLabel htmlFor="rec-name">Reciepient's Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={theirName} onChange={changeTheirName}/>
            </FormControl>
            <div className="msg"><span>Your Message:</span></div>
            <div className='msg-box'>
              <div className='rainbow'>
                <span> " {message} "</span>
              </div>
                
            </div>
            <div className='buttons'>
            <i className="fa-sharp fa-solid fa-rotate-right" style={{fontSize: "10px"}}></i>
              <Button variant="outlined" color="error" style={{marginRight: "5px"}} startIcon={<FontAwesomeIcon icon={faRotateRight} />} onClick={getNewMessage}>
                New Messsage</Button>

              <Button variant="outlined" color="success" style={{marginLeft: "5px"}} startIcon={<FontAwesomeIcon icon={faShareNodes} />} onClick ={getLink}>
              
                Send</Button>
              
            </div>
            <div className="footer">By <a href="https://github.com/aeskay" target="_blank">aeskay</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home