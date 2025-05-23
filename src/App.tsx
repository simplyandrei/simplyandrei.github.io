import FuzzyText from "./components/bits/Fuzzy"

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold font-mono">Hi, I'm Andrei 👋</h1>
        <div className="card flex flex-col items-center">
          <p className="text-gray-600 font-mono text-xl text-center">this website is currently under development!</p>

 <FuzzyText 
          baseIntensity={0.2} 
          hoverIntensity={0.5} 
          enableHover={true}
          color="#000000"
          fontSize={"2rem"}
        >
          ERROR
        </FuzzyText>
        <FuzzyText 
          baseIntensity={0.2} 
          hoverIntensity={0.5} 
          enableHover={true}
          color="#000000"
          fontSize={"2rem"}
        >
          404
        </FuzzyText>

          <p className="text-gray-600 font-mono text-xl sm:text-m">please come again soon!</p>
          <a className="text-gray-600 underline font-mono text-sm py-4 sm:text-xs" href="https://www.instagram.com/and.rei_only/">@and.rei_only</a>
        </div>
      </div>
    </>
  )
}

export default App
