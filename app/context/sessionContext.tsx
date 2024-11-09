'use client'
import { SessionProvider } from "next-auth/react";

type propType = {
    children: React.ReactNode
}

function Provider({children}: propType){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider;