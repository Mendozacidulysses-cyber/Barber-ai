export default function Register() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Registrar Barbería</h1>

      <p>Crea tu cuenta en Barber AI</p>

      <form style={{ marginTop: 20 }}>
        <input
          placeholder="Nombre de la barbería"
          style={{ display: "block", marginBottom: 10, padding: 10 }}
        />
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
          Crear cuenta
        </button>
      </form>
    </main>
  );
}
