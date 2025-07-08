import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export const metadata = {
  title: "Phone number validator",
  description: "Questa web app permette di verificare se un numero di telefono italiano è valido oppure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
