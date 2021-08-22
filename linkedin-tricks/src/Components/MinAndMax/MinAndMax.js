import React from "react";



export const MinAndMax = () => {
    const nums = [1, 2, 3, 4, 5]
    return <React.Fragment>
        <p>Min And Max Using Apply and Spread</p>
        <hr />
        <code className="text-body">const nums = [1, 2, 3, 4, 5]</code>
        <br />
        <code>{'Math.min.apply(Math, nums) => '}{Math.min.apply(Math, nums)}</code>
        <br />
        <code>{'Math.max.apply(Math, nums) => '}{Math.max.apply(Math, nums)}</code>
        <br />
        <code>{'Math.min(...nums) => '}{Math.min(...nums)}</code>
        <br />
        <code>{'Math.max(...nums) => '}{Math.max(...nums)}</code>
    </React.Fragment>
}