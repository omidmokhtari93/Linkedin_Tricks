import React from "react";



export const UglyNumber = () => {
    const uglyNumber = 2000000
    const prettyNumber = 2_000_000

    return <React.Fragment>
        <p>Ugly number</p>
        <hr />
        <code>
            {'const uglyNumber = 2000000'}
            <br />
            {'const prettyNumber = 2_000_000'}
            <br />
            {'console.log(uglyNumber);'}
            <br />
            {'console.log(prettyNumber);'}
        </code>
        <br />
        <code>
            <span className="text-body">and output is : </span>
            <br />
            ugly number : {uglyNumber}
            <br />
            pretty number : {prettyNumber}
        </code>
    </React.Fragment>
}