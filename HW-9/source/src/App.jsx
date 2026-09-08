import LoginButton from './components/LoginButton.jsx'

function WelcomeExample({ isLoggedIn }) {
  return (
    <section className="example">
      <h1>Welcome to the website</h1>
      <LoginButton isLoggedIn={isLoggedIn} />
    </section>
  )
}

function App() {
  return (
    <main>
      <WelcomeExample isLoggedIn={true} />
      <WelcomeExample isLoggedIn={false} />
    </main>
  )
}

export default App
