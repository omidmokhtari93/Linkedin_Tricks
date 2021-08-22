import React from "react";


export const RemoveObjectKey = () => {
    const object = { 'foo': 1, 'bar': 2, 'baz': 3 }

    const removeKey = (key, obj) => {
        const omit = Object.keys(obj)
            .filter(x => x != key)
            .map(a => ({ [a]: obj[a] }))
        return JSON.stringify(omit)
    }

    return <React.Fragment>
        <p>Remove Object Key</p>
        <hr />
        <code className="text-body">
            {'const object = {'}
            <br />
            <span className="ms-4">{"'foo': 1,"}</span>
            <br />
            <span className="ms-4">{"'bar': 2,"}</span>
            <br />
            <span className="ms-4">{"'baz': 3"}</span>
            <br />
            {"}"}
            <br />
            {`const omit = (obj ,key) => Object.keys(obj)`}
            <br />
            <span className="ms-4">{'.filter(x => x != key)'}</span>
            <br />
            <span className="ms-4">{'.map(a => ({ [a]: obj[a] }))'}</span>
            <br />
            <br />
            {`omit(object ,'bar')`}
        </code>
        <br />
        <br />
        <code>result is : {removeKey('bar', object)}</code>
    </React.Fragment>
}