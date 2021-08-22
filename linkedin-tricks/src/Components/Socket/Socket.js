import React, { useState } from "react";
import { io } from "socket.io-client";
// const socket = io()

export const Socket = () => {
    const [value, setValue] = useState("hello world!");
    const [message, setMessage] = useState('')

    // const connect = () => socket.emit("message", value);

    // socket.on('message', (msg) => {
    //     setMessage(msg)
    // })

    return (
        <React.Fragment>
            <p>Socket IO</p>
            <hr />
            <p className="text-danger">all codes commented !!</p>
            <input
                className="me-2"
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            {/* <button onClick={connect}>connect</button> */}
            <br />
            <code >
                and output is : {message}
            </code>
        </React.Fragment>
    );
};
