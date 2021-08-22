import React from "react";


export const PreventRightClick = () => {
    return <React.Fragment>
        <p>Prevent Right Click</p>
        <hr />
        <code className="text-body">
            {'<div onContextMenu={e => e.preventDefault()}></div>'}
        </code>
        <br />
        <code>
            right click on below box to see the result :
        </code>
        <div
            className="mt-3"
            onContextMenu={e => e.preventDefault()}
            style={{
                height: '100px',
                width: '100%',
                border: '1px dotted darkgray'
            }}>
        </div>
    </React.Fragment>
}