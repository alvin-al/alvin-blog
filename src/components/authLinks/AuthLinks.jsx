import React from "react";
import Link from 'next/link'

const AuthLinks = () => {
    //temporary

    const status = "notauthenticated";

    return <>
        {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
        ) : (
            <>
                <Link href="/write">Write</Link>
                <span>Logout</span>
            </>
        )

        }

    </>



};

export default AuthLinks;