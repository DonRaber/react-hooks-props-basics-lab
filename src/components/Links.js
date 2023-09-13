import React from "react";

const Links = ({link}) => (
        <>
            <h3>
                <a href={link.github}>Github</a>
                <a href={link.linkedin}>LinkedIn</a>
            </h3>
        </>
    )


export default Links