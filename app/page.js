export default function Page() {
  return (
    <main
      style={{
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px 24px",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto", paddingTop: "40px" }}>
        <p
          style={{
            letterSpacing: "3px",
            fontSize: "12px",
            color: "#999",
            marginBottom: "16px",
          }}
        >
          ÜBERMENSCH BARBERÍA
        </p>

        <h1
          style={{
            fontSize: "44px",
            lineHeight: "1.1",
            marginBottom: "16px",
          }}
        >
          Precisión, identidad y presencia.
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#b3b3b3",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginBottom: "28px",
          }}
        >
          Una experiencia de barbería diseñada para quienes valoran el detalle,
          la estética y el carácter.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a
            href="https://wa.me/525635558056"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Agendar por WhatsApp
          </a>

          <a
            href="#servicios"
            style={{
              border: "1px solid #666",
              color: "#ffffff",
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: "8px",
            }}
          >
            Ver servicios
          </a>
        </div>

        <section id="servicios" style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "18px" }}>Servicios</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            <div style={{ padding: "16px", border: "1px solid #222", borderRadius: "10px" }}>Fade</div>
            <div style={{ padding: "16px", border: "1px solid #222", borderRadius: "10px" }}>Barba</div>
            <div style={{ padding: "16px", border: "1px solid #222", borderRadius: "10px" }}>Diseño / Grecas</div>
            <div style={{ padding: "16px", border: "1px solid #222", borderRadius: "10px" }}>Pigmento</div>
            <div style={{ padding: "16px", border: "1px solid #222", borderRadius: "10px" }}>Corte + barba</div>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "18px" }}>Nuestra filosofía</h2>
          <p style={{ color: "#b3b3b3", lineHeight: "1.8", maxWidth: "700px" }}>
            No se trata solo de cortar cabello. Se trata de construir imagen,
            intención y seguridad. Cada servicio debe sentirse preciso,
            limpio y con identidad propia.
          </p>
        </section>

        <section
          style={{
            border: "1px solid #222",
            borderRadius: "14px",
            padding: "24px",
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Reserva tu lugar</h2>
          <p style={{ color: "#b3b3b3", marginBottom: "18px" }}>
            Agenda tu cita directamente por WhatsApp.
          </p>

          <a
            href="https://wa.me/525635558056"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#000000",
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Abrir WhatsApp
          </a>
        </section>
      </section>
    </main>
  );
}
