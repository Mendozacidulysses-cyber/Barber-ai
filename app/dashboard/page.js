export default function Dashboard() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: 40
    }}>
      <h1>Dashboard Barber AI</h1>

      <p>Panel de administración de barbería</p>

      <div style={{marginTop:30}}>
        <ul>
          <li>Agenda de citas</li>
          <li>Clientes</li>
          <li>Barberos</li>
          <li>Ingresos</li>
        </ul>
      </div>
    </main>
  )
}
