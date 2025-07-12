import { ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>EasyJobSearch - Job Search</title>
        <meta name="description" content="Find jobs in Ethiopia with EasyJobSearch" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="bg-blue-50 min-h-screen">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">EasyJobSearch</h1>
            <nav>
              <a href="/" className="px-2 hover:underline">Home</a>
              <a href="/sources" className="px-2 hover:underline">Sources</a>
            </nav>
          </div>
        </header>
        <main className="py-8">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>&copy; 2025 EasyJobSearch. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;