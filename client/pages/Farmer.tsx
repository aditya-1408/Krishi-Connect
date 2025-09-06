import { useMemo, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/Language";

export default function Farmer() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("add");

  const distributors = useMemo(
    () => [
      {
        id: "d1",
        name: "GreenGrow Agro",
        product: "Urea (45kg)",
        price: "₹266",
        distance: "1.2 km",
      },
      {
        id: "d2",
        name: "Harvest Hub",
        product: "High-Yield Wheat Seeds (10kg)",
        price: "₹1,250",
        distance: "3.4 km",
      },
      {
        id: "d3",
        name: "Kisan Tools Mart",
        product: "Power Tiller (7HP)",
        price: "₹68,000",
        distance: "5.0 km",
      },
    ],
    [],
  );

  const myListings = useMemo(
    () => [
      {
        title: "Tomatoes",
        qtyKg: 1500,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F6c124142f01d405196221274e3b24606",
        pricePerKg: 18,
      },
      {
        title: "Onions",
        qtyKg: 900,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F8b2ee70786264beeb19ef79ae813c0f5",
        pricePerKg: 22,
      },
      {
        title: "Rice",
        qtyKg: 2400,
        image:
          "https://cdn.builder.io/o/assets%2F40640363f3b145e9a3032e8efce8037f%2Fb1b1c11c20c444adb0ad9e2deaf795e0?alt=media&token=5efb2f89-797f-4afe-86e8-cbd6805f0f8f&apiKey=40640363f3b145e9a3032e8efce8037f",
        pricePerKg: 28,
      },
      {
        title: "Potatoes",
        qtyKg: 3000,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2Fbfa6994081e6419db8845592ce87f693",
        pricePerKg: 16,
      },
      {
        title: "Wheat",
        qtyKg: 5200,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F303e36e57ebd4a3e9e49de7bd08e6e14",
        pricePerKg: 24,
      },
      {
        title: "Green Chillies",
        qtyKg: 400,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2Fba56f9136d1e44c4ba5765e1906a524f",
        pricePerKg: 35,
      },
    ],
    [],
  );

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="px-3 py-2">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <span className="font-semibold">{t("farmer_dashboard")}</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{t("actions")}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "add"} onClick={() => setActive("add")}>{t("add_produce")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "listings"} onClick={() => setActive("listings")}>{t("my_listings")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "offers"} onClick={() => setActive("offers")}>{t("offers")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "deals"} onClick={() => setActive("deals")}>{t("deals")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarSeparator />
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "buy"} onClick={() => setActive("buy")}>{t("buy_inputs")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "sell"} onClick={() => setActive("sell")}>{t("sell_to_distributor")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "subsidy"} onClick={() => setActive("subsidy")}>{t("subsidies")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={active === "schemes"} onClick={() => setActive("schemes")}>{t("schemes")}</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-xs opacity-70">v1.0 • KrishiConnect</SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <section className="container py-8 md:py-10">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{t("welcome_farmer")}</h1>
              <p className="text-muted-foreground">Manage your produce, buy inputs, and access government support.</p>
            </div>
            <div className="hidden md:block">
              <Button className="bg-primary">{t("get_support")}</Button>
            </div>
          </div>

          <Tabs value={active} onValueChange={setActive}>
            <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex">
              <TabsTrigger value="add">Add Produce</TabsTrigger>
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
              <TabsTrigger value="deals">Deals</TabsTrigger>
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
              <TabsTrigger value="subsidy">Subsidies</TabsTrigger>
              <TabsTrigger value="schemes">Schemes</TabsTrigger>
            </TabsList>

            <TabsContent value="add" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("add_produce")}</CardTitle>
                  <CardDescription>Sell directly by listing your crop details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="crop">{t("crop_type")}</Label>
                      <Input id="crop" placeholder="e.g., Wheat" />
                    </div>
                    <div>
                      <Label htmlFor="qty">{t("quantity_kg")}</Label>
                      <Input id="qty" type="number" placeholder="1000" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="addr">{t("selling_address")}</Label>
                      <Textarea id="addr" placeholder="Village, Tehsil, District, Pincode" />
                    </div>
                    <div className="md:col-span-2 flex items-center gap-3">
                      <Button type="submit">{t("publish_listing")}</Button>
                      <span className="text-sm text-muted-foreground">Your listing will be visible to nearby customers and distributors.</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="listings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("my_listings")}</CardTitle>
                  <CardDescription>Track your active produce listings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {myListings.map((item, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <img
                          className="h-32 w-full object-cover rounded-md"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="mt-3 flex items-center justify-between">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm font-semibold">₹{item.pricePerKg}/kg</div>
                        </div>
                        <div className="text-sm text-muted-foreground">Qty: {item.qtyKg.toLocaleString()} kg</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Button size="sm">Edit</Button>
                          <Button size="sm" variant="secondary">Share</Button>
                          <Button size="sm" variant="outline">View Offers</Button>
                          <Button size="sm" variant="ghost">Mark as Sold</Button>
                          <Button size="sm" variant="destructive">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="offers" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("offers")}</CardTitle>
                  <CardDescription>Incoming offers from buyers and distributors.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">No offers yet. Share your listings to get offers.</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deals" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("deals")}</CardTitle>
                  <CardDescription>Secure deals in progress or completed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">No deals yet.</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="buy" className="mt-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>{t("buy_inputs")}</CardTitle>
                    <CardDescription>Direct purchase or opt for subsidy where applicable.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {distributors.map((d) => (
                        <div key={d.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-lg border p-4">
                          <div>
                            <div className="font-medium">{d.name}</div>
                            <div className="text-sm text-muted-foreground">{d.product} • {d.distance} away</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="font-semibold">{d.price}</div>
                            <Button size="sm">Purchase</Button>
                            <Button size="sm" variant="secondary">Apply Subsidy</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Government Procurement</CardTitle>
                    <CardDescription>Check MSP and procurement centers.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 text-sm space-y-2">
                      <li>Nearby Mandis & Govt. godowns</li>
                      <li>MSP rates for major crops</li>
                      <li>Registration and tokens</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sell" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("sell_to_distributor")}</CardTitle>
                  <CardDescription>Share crop type, quantity and selling address.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="scrop">Crop Type</Label>
                      <Input id="scrop" placeholder="Sugarcane" />
                    </div>
                    <div>
                      <Label htmlFor="sqty">Quantity (kg)</Label>
                      <Input id="sqty" type="number" placeholder="5000" />
                    </div>
                    <div>
                      <Label htmlFor="saddr">Selling Address</Label>
                      <Input id="saddr" placeholder="Village / Market" />
                    </div>
                    <div className="md:col-span-3">
                      <Label htmlFor="snotes">Notes</Label>
                      <Textarea id="snotes" placeholder="Harvest date, preferred pickup time, negotiable price per kg" />
                    </div>
                    <div className="md:col-span-3 flex items-center gap-3">
                      <Button type="submit">Send to Distributors</Button>
                      <span className="text-sm text-muted-foreground">We will notify nearby distributors instantly.</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subsidy" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("subsidies")}</CardTitle>
                  <CardDescription>Popular subsidy programs and portals.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <SubsidyItem title="Fertilizer Subsidy" linkText="Ministry of Chemicals & Fertilizers" href="https://fert.nic.in/">
                      Fertilizers like Urea are sold to farmers at a subsidized rate. Government bears the difference between market cost and farmer price.
                    </SubsidyItem>
                    <SubsidyItem title="Seed Subsidy" linkText="National Seed Corporation" href="https://www.indiaseeds.com/">
                      Certified seeds of cereals, pulses, oilseeds, and vegetables are provided at subsidized rates through government agencies.
                    </SubsidyItem>
                    <SubsidyItem title="Farm Mechanization Subsidy (SMAM)" linkText="SMAM Portal" href="https://agrimachinery.nic.in/">
                      40–80% subsidy on tractors, power tillers, harvesters, drones, and modern farm tools under Sub-Mission on Agricultural Mechanization.
                    </SubsidyItem>
                    <SubsidyItem title="Irrigation & Solar Pump Subsidy (PM-KUSUM)" linkText="PM-KUSUM (MNRE)" href="https://kusum.mnre.gov.in/">
                      Farmers get up to 70% subsidy for installing solar pumps and grid-connected solar power plants to reduce irrigation costs.
                    </SubsidyItem>
                    <SubsidyItem title="Crop Insurance Subsidy (PMFBY)" linkText="PMFBY Official Site" href="https://pmfby.gov.in/">
                      Farmers pay just 1.5–2% premium for Rabi/Kharif crops; remaining premium is subsidized by Government to protect from crop loss.
                    </SubsidyItem>
                    <SubsidyItem title="Credit/Loan Interest Subsidy" linkText="NABARD - Crop Loan" href="https://www.nabard.org/">
                      Short-term crop loans up to ₹3 lakh are available at 7% interest; if repaid on time, effective rate drops to 4%.
                    </SubsidyItem>
                    <SubsidyItem title="Soil Health Card Subsidy" linkText="Soil Health Card Portal" href="https://soilhealth.dac.gov.in/">
                      Free Soil Health Cards are issued with crop-specific fertilizer and nutrient recommendations.
                    </SubsidyItem>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schemes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("schemes")}</CardTitle>
                  <CardDescription>Official resources and summaries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <SchemeItem
                      title="Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)"
                      description="Provides ₹6,000/year in three equal installments directly into the bank accounts of landholding farmers to support their agricultural and household needs. Launched 24 February 2019."
                      sources={[
                        { label: "Press Information Bureau", href: "https://pib.gov.in/" },
                        { label: "Official Site (Major Schemes)", href: "https://agricoop.gov.in/en/Major" },
                      ]}
                    />
                    <SchemeItem
                      title="Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)"
                      description="A contributory pension scheme for small and marginal farmers aged 18–40. Both farmer and government contribute monthly; upon reaching 60, farmers receive ₹3,000/month pension."
                      sources={[
                        { label: "Press Information Bureau", href: "https://pib.gov.in/" },
                        { label: "Official Site (Major Schemes)", href: "https://agricoop.gov.in/en/Major" },
                      ]}
                    />
                    <SchemeItem
                      title="Pradhan Mantri Fasal Bima Yojana (PMFBY)"
                      description="A comprehensive crop insurance program launched in 2016 to protect farmers from losses due to natural calamities, pests, and post-harvest damage. Premium burden is reduced and claims are settled promptly."
                      sources={[
                        { label: "Press Information Bureau", href: "https://pib.gov.in/" },
                        { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Pradhan_Mantri_Fasal_Bima_Yojana" },
                        { label: "Official Site: pmfby.gov.in", href: "https://pmfby.gov.in/" },
                      ]}
                    />
                    <SchemeItem
                      title="Soil Health Card Scheme"
                      description="Launched in 2015, this scheme issues soil health cards with crop-wise nutrient and fertilizer recommendations based on laboratory analysis, helping farmers optimize soil use and improve productivity."
                      sources={[
                        { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Soil_Health_Card_Scheme" },
                        { label: "Official Site", href: "https://soilhealth.dac.gov.in/" },
                      ]}
                    />
                    <SchemeItem
                      title="National Mission on Natural Farming (NMNF)"
                      description="Approved in November 2024, this mission offers ₹4,000 per acre per year (for two years) to farmers adopting natural or sustainable farming—aiming to improve soil health, reduce input cost, and enhance climate resilience. Over 10 lakh farmers enrolled as of July 2025."
                      sources={[
                        { label: "Press Information Bureau", href: "https://pib.gov.in/" },
                        { label: "Official Portal", href: "https://agricoop.gov.in/" },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Separator className="my-10" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>Simple, transparent, secure.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>1. Farmers list crops</li>
                  <li>2. Buyers browse</li>
                  <li>3. Secure deal</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Why KrishiConnect?</CardTitle>
                <CardDescription>Benefits for Farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>Higher Income</li>
                  <li>Fair Price</li>
                  <li>Transparency</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>Help & Resources</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Reach out to our support for onboarding or assistance in listing and procurement.
              </CardContent>
            </Card>
          </div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}

function SubsidyItem({
  title,
  children,
  href,
  linkText,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
  linkText: string;
}) {
  return (
    <div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground mt-1">{children}</p>
      <a className="text-sm text-primary underline mt-1 inline-block" href={href} target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </div>
  );
}

function SchemeItem({
  title,
  description,
  sources,
}: {
  title: string;
  description: string;
  sources: { label: string; href: string }[];
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      <div className="flex flex-wrap gap-3 mt-2">
        {sources.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-primary underline">
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
