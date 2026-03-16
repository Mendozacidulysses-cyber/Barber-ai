export const metadata = {
  title: "Barber AI",
  description: "Sistema para barberías"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
