import type { Metadata } from "next";
import localFont from "next/font/local";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";
import { SignedIn, SignedOut } from "@clerk/nextjs"; // Removed RedirectToSignIn
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import LandingPage from "@/components/LandingPage"; // Import the new component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TestX",
  description: "Create technical interview experiences with TestX.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* IF SIGNED IN: Show the Dashboard (Navbar + Children) */}
            <SignedIn>
              <div className="min-h-screen">
                <Navbar />
                <main className="px-4 sm:px-6 lg:px-8">{children}</main>
              </div>
            </SignedIn>

            {/* IF SIGNED OUT: Show the Landing Page */}
            <SignedOut>
              <LandingPage />
            </SignedOut>
            
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}