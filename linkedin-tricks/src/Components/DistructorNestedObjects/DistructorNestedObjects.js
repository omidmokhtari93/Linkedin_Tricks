import React from "react";

export const DistructorNestedObjects = () => {
    const nestedObject = {
        student: {
            name: 'omid',
            address: {
                postalCode: '123456789'
            }
        }
    }
    const { student: { address, ...rest } } = nestedObject

    const { student: studentName } = nestedObject

    // console.log(studentName);

    const { student: newName = 'saeed' } = {}

    // console.log(newName);

    const { student: { address: { postalCode } } } = nestedObject

    return <React.Fragment>
        <p>Distructor Nested Objects</p>
        <hr />
        <code className="text-body">
            {'const nestedObject = {'}
            <br />
            <span className="ms-2">{'student: {'}</span>
            <br />
            <span className="ms-3">{'name: "omid",'}</span>
            <br />
            <span className="ms-3">{'address: {'}</span>
            <br />
            <span className="ms-4">{'postalCode: "123456789"'}</span>
            <br />
            <span className="ms-3">{'}'}</span>
            <br />
            <span className="ms-2">{'}'}</span>
            <br />
            <span className="">{'}'}</span>
            <br />
            {'const { student: { address: { postalCode } } } = nestedObject'}
        </code>
        <br />
        <code>
            and postalCode is : {postalCode}
        </code>
    </React.Fragment>
}