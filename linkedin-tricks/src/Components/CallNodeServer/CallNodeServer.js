import React, { useEffect, useState } from "react";


export const CallNodeServer = () => {
    const [result, setResult] = useState(null)
    const [country, setCountry] = useState('united')
    const [loading, setLoading] = useState(false)
    const loadingElement = <div className="spinner-border spinner-border-sm">
        <span className="sr-only"></span>
    </div>
    useEffect(() => {
        fetchCountries()
    }, [])

    const fetchCountries = () => {
        setLoading(true)
        fetch('/countries', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                country: country
            })
        })
            .then(x => x.json())
            .then(x => {
                setLoading(false)
                setResult(x)
            })
            .catch(e => {
                setResult({ message: 'Not found' })
                setLoading(false)
            })
    }

    return <React.Fragment>
        <p>Call Nodejs Server</p>
        <hr />
        <code className="text-body">
            {"fetch('/backend')"}
            {".then(x => x.json())"}
            {".then(x => console.log(x))"}
        </code>
        <br />
        <br />
        <code className="text-body">
            pass your country name to filter :
        </code>
        <br />
        <input type="text" value={country} onChange={e => setCountry(e.target.value)} />
        <button className="ms-2" onClick={() => fetchCountries()}>Submit</button>
        <br />
        <code>
            {'and the result is : '}
        </code>
        <br />
        <ul>
            {loading
                ? loadingElement
                : Array.isArray(result) ? result.map(x => <li key={x.name}>
                    <img src={x.flag} style={{ width: '25px', height: 'auto' }} /> {x.name}
                </li>) : <code>{JSON.stringify(result && result.message)}</code>}
        </ul>
    </React.Fragment>
}