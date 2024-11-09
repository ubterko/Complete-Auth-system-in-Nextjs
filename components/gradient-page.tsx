export function SignIn() {
    return (
      <main className="flex h-full flex-col items-center justify-center
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
          from-sky-400 to-blue-800">
            <div className="space-y-6 text-center">
              <h1 className="text-6xl font-semibold text-white drop-shadow-md">
                Auth
              </h1>
              <p className="text-white text-lg">
                A simple authentication service</p>
            </div>
            {/* <Button>
              Sign-in
            </Button> */}
          </main>
    )
  }
  
  export default SignIn;