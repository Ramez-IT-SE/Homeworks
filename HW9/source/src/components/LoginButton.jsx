function LoginButton({ isLoggedIn }) {
  return <button>{isLoggedIn ? 'Logout' : 'Login'}</button>
}

export default LoginButton
