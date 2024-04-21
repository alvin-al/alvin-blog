import React from "react";
import Link from 'next/link'
import { signOut } from "../../../auth";
import { auth } from "/auth"

export default async function AuthLinks(){
    const session = await auth()

    return <>
        {!session ? (
            <Link href="/login">Login</Link>
        ) : (
            <>
                <Link href="/write">Write</Link>
                <form action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <button>Sign Out</button>
                </form>
            </>
        )
        }
    </>
}
