import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-[#fdfcf9] text-[#333] font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}