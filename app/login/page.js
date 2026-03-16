export default function Login() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Iniciar sesión</h1>

      <p>Accede a tu barbería en Barber AI</p>

      <form style={{ marginTop: 20 }}>
        <input
          placeholder="Email"
          style={{ display: "block", marginBottom: 10, padding: 10 }}
        />

        <input
          placeholder="Contraseña"
          type="password"
          style={{ display: "block", marginBottom: 10, padding: 10 }}
        />

        <button
          style={{ padding: "10px 20px", background: "black", color: "white" }}
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
