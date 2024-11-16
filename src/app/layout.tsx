import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import '../app/globals.css';

export const metadata = {
  title: 'Align Care Home | Senior Living',
  description: 'Exceptional care and comfort for seniors in a loving environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
