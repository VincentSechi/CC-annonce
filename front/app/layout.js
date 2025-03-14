import ClientSessionProvider from "./clientSessionProvider";
import MainLayout from "./layouts/mainLayout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <MainLayout>
      <ClientSessionProvider>
        <Header />
        {children}
        <Footer />
      </ClientSessionProvider>
    </MainLayout>
  );
}
