import React from "react";



export const ReplaceAll = () => {
    const value = 'x x x'
    return <React.Fragment>
        <p>Replace All</p>
        <hr />
        <code className="text-body">
            {"const value = 'x x x'"}
            <br />
            {"console.log(value.replaceAll(' ', '_'))"}
        </code>
        <br />
        <code>
            and output is : {value.replaceAll(' ', '_')}
        </code>
    </React.Fragment>
}