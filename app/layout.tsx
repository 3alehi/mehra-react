"use client";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
// import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context";
import { UserProvider } from "./UserContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const pathname = usePathname();

 


  return (
    <html lang="en" dir="rtl">
      <body>
            <UserProvider>
        {pathname !== "/login" && <Navbar />}
        <div className="container mx-auto font-vazirmatn max-md:">
          {/* <div className="mt-5"> */}
            {/* {pathname !== "/login" && <BreadcrumbWithCustomSeparator />} */}
          {/* </div> */}
          <QueryClientProvider client={queryClient}>
              <AppProvider>
             {children}
              </AppProvider>
          </QueryClientProvider>
          <Toaster position="bottom-left" />
        </div>
            </UserProvider>
      </body>
    </html>
  );
}
