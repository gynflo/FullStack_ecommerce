import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div className="w-full text-center">
          <button className="bg-white p-2 px-4 rounded-lg" onClick={() =>  signIn('google')}>Login with Google</button>
        </div>
      </div>
    )
  }

  return (
    <div>Logged in {session.user.email}</div>
  )


}
