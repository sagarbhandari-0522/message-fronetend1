import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";

function Chatroom(props) {
    const [Chatrooms, setChatrooms] = useState([])
    useEffect(() => {
        let config = {
              method: 'get',
              maxBodyLength: Infinity,
              url: BaseUrl+'/chat/chatrooms/',
              headers: { }
            };

            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              setChatrooms(response.data)
            })
            .catch((error) => {
              console.log(error);
            });

    }, []);
    return (
        <div>
            <h1>Chat Room</h1>
            <h1>Test CI</h1>
            <ul>
                {Chatrooms.map((chatroom)=>{
                    return <li key={chatroom.id}>{chatroom.name}</li>
                })}

            </ul>
        </div>
    );
}

export default Chatroom;