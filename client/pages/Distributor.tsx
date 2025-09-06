import { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/Language";

export default function Distributor() {
  const { t } = useLanguage();
  const items = useMemo(
    () => [
      {
        id: "eq1",
        category: "Farming Equipment",
        name: "Power Tiller",
        type: "7 HP Diesel",
        price: 68000,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F9505088dab9e4109bd88bb6519ca95b2",
      },
      {
        id: "eq2",
        category: "Farming Equipment",
        name: "Mini Tractor",
        type: "45 HP",
        price: 385000,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F8514b84c55b54415a66c97bb224ad2e9",
      },
      {
        id: "fer1",
        category: "Fertiliser",
        name: "Urea",
        type: "1 kg bag",
        price: 1266,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2Fd9ba42be00554f33a7d1ac922bc41f8d",
      },
      {
        id: "fer2",
        category: "Fertiliser",
        name: "DAP",
        type: "1kg bag",
        price: 1350,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2Ff9bc7f3f0f0841e9909475fbdf1d6fb5",
      },
      {
        id: "man1",
        category: "Manure",
        name: "Vermicompost",
        type: "1kg",
        price: 900,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F3cbb2f76889e4f0890433e0d7e174a8a",
      },
      {
        id: "seed1",
        category: "HYV Seeds",
        name: "Wheat HD2967",
        type: "10 kg pack",
        price: 4000,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F5ce25540dc594b7a9eed7f84eb8c22e9",
      },
      {
        id: "seed2",
        category: "HYV Seeds",
        name: "Rice Pusa Basmati",
        type: "1 kg pack",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "seed3",
        category: "HYV Seeds",
        name: "Maize Hybrid 900M",
        type: "1 kg pack",
        price: 250,
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F5e20fb91dc0c43dbbef19b09b4422dbc",
      },
    ],
    [],
  );

  return (
    <section className="container py-10 md:py-12">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{t("dealers_catalog")}</h1>
          <p className="text-muted-foreground">{t("dealers_desc")}</p>
        </div>
        <Button>{t("add_new_product")}</Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{p.name}</span>
                <span className="text-base font-semibold">₹{p.price.toLocaleString()}</span>
              </CardTitle>
              <CardDescription>
                {p.category} • {p.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Button size="sm">{t("post_for_sale")}</Button>
                <Button size="sm" variant="secondary">{t("add_discount")}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
