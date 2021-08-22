import React, { useEffect, useState } from "react";



export const AbortFetchRequest = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const controller = new AbortController()
    const signal = controller.signal

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
            .then(response => response.json())
            .then(json => setData(json))
            .catch(x => {
                setError(x)
            })
        controller.abort()
    }, [])

    return <React.Fragment>
        <p>Abort Fetch Request</p>
        <hr />
        <code className="text-body">
            {'const controller = new AbortController()'}
            <br />
            {'const signal = controller.signal'}
            <br />
            {"fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })"}
            <br />
            <span className="ms-4">{'.then(response => response.json())'}</span>
            <br />
            <span className="ms-4">{'.then(json => console.log(json))'}</span>
            <br />
            <span className="ms-4">{'.catch(x => {'}</span>
            <br />
            <span className="ms-5">{'console.log(x)'}</span>
            <br />
            <span className="ms-4">{'})'}</span>
            <br />
            {'controller.abort()'}
        </code>
        <br />
        <code>{'result is =>'} {error.toString()}</code>
    </React.Fragment>
}