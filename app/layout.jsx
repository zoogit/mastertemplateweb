import "./globals.css";

export const metadata = {
  title: "Master Template | Presentation Design Software",
  description:
    "Premium software tools for presentation design departments that need faster conversion and sharper quality control."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
