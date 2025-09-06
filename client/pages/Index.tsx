import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/Language";

export default function Index() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Why />
      <Testimonials />
    </div>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499529112087-3cb3b73cec82?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black/40">
        <div className="container py-20 md:py-28 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl"><p>{t("hero_title")}</p></h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">{t("brand_tagline")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary">
              <Link to="/farmer">{t("hero_farmer_btn")}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/customer"><p>{t("hero_customer_btn")}</p></Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/distributor">{t("hero_dealer_btn")}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container -mt-10 md:-mt-12 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>{t("buy_title")}</CardTitle>
              <CardDescription>{t("buy_desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Nearby distributors</li>
                <li>Direct purchase or subsidy</li>
                <li>Govt procurement info</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>{t("sell_title")}</CardTitle>
              <CardDescription>{t("sell_desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>List crop type & quantity</li>
                <li>Set selling address</li>
                <li>Negotiate price per kg</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>{t("schemes_title")}</CardTitle>
              <CardDescription>{t("schemes_desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>PM-KISAN, PM-KMY</li>
                <li>PMFBY, Soil Health Card</li>
                <li>Natural Farming Mission</li>
              </ul>
              <Button asChild className="mt-3">
                <Link to="/farmer">{t("goto_dashboard")}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-extrabold tracking-tight">{t("how_title")}</h2>
      <p className="text-muted-foreground mt-2">{t("how_desc")}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: t("how_step1"),
            desc: t("how_step1_desc"),
            icon: "🌾",
          },
          {
            title: t("how_step2"),
            desc: t("how_step2_desc"),
            icon: "🛒",
          },
          {
            title: t("how_step3"),
            desc: t("how_step3_desc"),
            icon: "🤝",
          },
        ].map((i) => (
          <Card key={i.title}>
            <CardHeader>
              <div className="text-3xl">{i.icon}</div>
              <CardTitle>{i.title}</CardTitle>
              <CardDescription>{i.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const { t } = useLanguage();
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-extrabold tracking-tight">{t("why_title")}</h2>
      <p className="text-muted-foreground mt-2">{t("why_desc")}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: t("why_income"),
            desc: "Sell directly to buyers and distributors.",
          },
          { title: t("why_price"), desc: "Transparent pricing without middlemen." },
          { title: t("why_transparency"), desc: "Clear listings, offers, and deals." },
        ].map((c) => (
          <Card key={c.title}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-extrabold tracking-tight">{t("success_title")}</h2>
      <p className="text-muted-foreground mt-2">{t("success_desc")}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { quote: t("testimonial_1"), name: "Ravi, Nashik" },
          { quote: t("testimonial_2"), name: "Meera, Indore" },
          { quote: t("testimonial_3"), name: "Suresh, Patna" },
        ].map((q, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-lg">“{q.quote}”</CardTitle>
              <CardDescription>— {q.name}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
