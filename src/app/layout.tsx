import "@/styles/globals.scss"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Список новостей",
  description: "Новости с других ресурсов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en,ru">
      <body className=''>{children}</body>
    </html>
  );
}
