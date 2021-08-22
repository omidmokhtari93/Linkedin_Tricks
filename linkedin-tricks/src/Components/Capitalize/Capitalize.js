import React from "react";



export const Capitalize = () => {
    const str = "hello"

    const capitalize = ([first, ...str]) => {
        return [first?.toUpperCase(), ...str].join('')
    }

    return <React.Fragment>
        <p>Capitalize</p>
        <hr />
        <code className="text-body">
            const str = "hello"
        </code>
        <br />
        <code className="text-body">
            {'const capitalize = ([first, ...str]) => {'}
            <br />
            <span className="ms-4">{"return [first?.toUpperCase(), ...str].join('')"}</span>
            <br />
            {'}'}
            <br />
            capitalize(str)
        </code>
        <br />
        <code >
            and the output is : {capitalize(str)}
        </code>
    </React.Fragment>
}