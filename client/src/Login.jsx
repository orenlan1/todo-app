

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
                <button type="submit">Register</button>
            </form>
        </div>
    )

    
}

export default Login;