import UserGreeting from "./UserGreeting"

function App() {
  return (
      <>
        <UserGreeting isLoggedIn = {true} userName = 'Ahammed Zulaikh'></UserGreeting>
        <UserGreeting isLoggedIn = {false}></UserGreeting>
      </>
  )
}

export default App
