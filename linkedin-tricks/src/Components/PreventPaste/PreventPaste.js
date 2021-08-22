import React, { useState } from "react";



export const PreventPaste = () => {
    const [value, setValue] = useState('')

    return <React.Fragment>
        <p>Prevent user to paste from clipboard</p>
        <hr />
        <code className="text-body">
            {'<input'}
            <div className="ms-4">
                {'type="email"'}
                <br />
                {'value={value}'}
                <br />
                {'onPaste={(e) => e.preventDefault()}'}
            </div>
            {'/>'}
        </code>
        <br />
        <code>copy and paste text to input to see result : </code>
        <br />
        <input
            type="email"
            value={value}
            onPaste={(e) => e.preventDefault()}
            onChange={e => setValue(e.target.value)}
        />
    </React.Fragment>
}