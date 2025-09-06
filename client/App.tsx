import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/Language";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Farmer from "./pages/Farmer";
import PortalPlaceholder from "./pages/PortalPlaceholder";
import Customer from "./pages/Customer";
import Distributor from "./pages/Distributor";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const [authOpen, setAuthOpen] = useState(false);
  const [role, setRole] = useState<"Farmer" | "Customer" | "Agro-Dealer">("Farmer");
  const rolePath: Record<typeof role, string> = {
    Farmer: "/farmer",
    Customer: "/customer",
    "Agro-Dealer": "/distributor",
  } as const;

  function openAuth(who: typeof role) {
    setRole(who);
    setAuthOpen(true);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAuthOpen(false);
    navigate(rolePath[role]);
  }

  return (
    <div className="min-h-screen flex flex-col agri-bg text-foreground">
      <header className="relative z-10">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop')",
          }}
        >
          <div className="backdrop-brightness-75">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/90 grid place-items-center text-white font-bold">
                  KC
                </div>
                <div className="">
                  <div className="text-xl font-extrabold tracking-tight text-white">
                    KrishiConnect
                  </div>
                  <div className="text-xs text-white/80">{t("brand_tagline")}</div>
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-3 text-white/90">
                <Button size="sm" variant="secondary" onClick={() => openAuth("Farmer")}>{t("nav_farmer")}</Button>
                <Button size="sm" variant="secondary" onClick={() => openAuth("Customer")}>{t("nav_customer")}</Button>
                <Button size="sm" variant="secondary" onClick={() => openAuth("Agro-Dealer")}>{t("nav_dealer")}</Button>
                <div className="ml-4 flex items-center gap-2">
                  <Button size="sm" variant={lang === "en" ? "default" : "secondary"} onClick={() => setLang("en")}>EN</Button>
                  <Button size="sm" variant={lang === "hi" ? "default" : "secondary"} onClick={() => setLang("hi")}>हिं</Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Dialog open={authOpen} onOpenChange={setAuthOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("auth_title")}{role}</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="signin">{t("auth_signin")}</TabsTrigger>
              <TabsTrigger value="signup">{t("auth_signup")}</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="mt-4">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email">{t("auth_email")}</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">{t("auth_password")}</Label>
                  <Input id="password" type="password" required placeholder="••••••••" />
                </div>
                <Button type="submit">{t("auth_continue")} {role}</Button>
              </form>
            </TabsContent>
            <TabsContent value="signup" className="mt-4">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t("auth_fullname")}</Label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t("auth_phone")}</Label>
                    <Input id="phone" type="tel" placeholder="98765 43210" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="semail">{t("auth_email")}</Label>
                  <Input id="semail" type="email" required placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="spassword">{t("auth_password")}</Label>
                  <Input id="spassword" type="password" required placeholder="Create a password" />
                </div>
                <Button type="submit">{t("auth_create")} {role}</Button>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <main className="flex-1">{children}</main>
      <footer className="bg-foreground text-background/90">
        <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-4">
          <div>
            <div className="text-lg font-bold">{t("footer_about")}</div>
            <p className="mt-2 text-sm opacity-80">
              KrishiConnect bridges farmers, distributors, and customers for direct, fair trade.
            </p>
          </div>
          <div>
            <div className="text-lg font-bold">{t("footer_contact")}</div>
            <p className="mt-2 text-sm opacity-80">Email: support@krishiconnect.in</p>
            <p className="text-sm opacity-80">Phone: +91 98765 43210</p>
          </div>
          <div>
            <div className="text-lg font-bold">{t("footer_social")}</div>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  X/Twitter
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold">{t("footer_quick")}</div>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>
                <Link to="/farmer">{t("ql_farmer")}</Link>
              </li>
              <li>
                <Link to="/customer">{t("ql_customer")}</Link>
              </li>
              <li>
                <Link to="/distributor">{t("ql_dealer")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} KrishiConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/farmer" element={<Layout><Farmer /></Layout>} />
            <Route path="/customer" element={<Layout><Customer /></Layout>} />
            <Route path="/distributor" element={<Layout><Distributor /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
