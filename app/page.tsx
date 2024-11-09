import {getServerSession} from "next-auth"
import { authOptions } from "@api/auth/[...nextauth]/route"

function Page(){
  const session = getServerSession(authOptions)

  return(
    <div>
      <h1>Welcome, {JSON.stringify(session)}</h1>
    </div>
  )
}

export default Page;