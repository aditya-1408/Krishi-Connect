import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useLanguage } from "@/contexts/Language";

export default function Customer() {
  const { t } = useLanguage();
  const listings = useMemo(
    () => [
      {
        id: "f1",
        crop: "Tomatoes",
        qtyKg: 1200,
        pricePerKg: 18,
        address: "Village Rampur, Taluka Shahpur, Indore 452001",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F4a63720a3f4b470d96d361a43d4ed521",
        farmer: "Ravi Patel",
      },
      {
        id: "f2",
        crop: "Onions",
        qtyKg: 800,
        pricePerKg: 22,
        address: "Near Mandi Road, Nashik 422001",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2Fb077b8f121d94dc292a5b45f80daa086",
        farmer: "Meera Joshi",
      },
      {
        id: "f3",
        crop: "Wheat",
        qtyKg: 5000,
        pricePerKg: 24,
        address: "Khet No. 12, Barabanki 225001",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F6b6725bf612d49669b37cb8ef37c337b",
        farmer: "Suresh Kumar",
      },
      {
        id: "f4",
        crop: "Potatoes",
        qtyKg: 3000,
        pricePerKg: 16,
        address: "Village Kanjhawala, Delhi 110081",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F40640363f3b145e9a3032e8efce8037f%2F56ca960207054996acd00153d335654f",
        farmer: "Asha Devi",
      },
    ],
    [],
  );

  return (
    <section className="container py-10 md:py-12">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{t("nearby_farmers_title")}</h1>
          <p className="text-muted-foreground">{t("browse_produce")}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((l) => (
          <Card key={l.id} className="overflow-hidden">
            <img src={l.image} alt={l.crop} className="h-40 w-full object-cover" />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{l.crop}</span>
                <span className="text-base font-semibold">₹{l.pricePerKg}/kg</span>
              </CardTitle>
              <CardDescription>
                Qty: {l.qtyKg.toLocaleString()} kg • Seller: {l.farmer}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <div className="font-medium">{t("address_of_sell")}</div>
                <div className="text-muted-foreground">{l.address}</div>
              </div>
              <div className="mt-4">
                <ContactDialog crop={l.crop} farmer={l.farmer} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactDialog({ crop, farmer }: { crop: string; farmer: string }) {
  const { t } = useLanguage();
  const [qty, setQty] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [note, setNote] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{t("contact_farmer")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("contact_farmer")}: {farmer} — {crop}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="qty">{t("quantity_kg")}</Label>
              <Input id="qty" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="e.g., 200" />
            </div>
            <div>
              <Label htmlFor="date">{t("purchase_date")}</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="price">{t("negotiable_price")}</Label>
            <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g., 20" />
          </div>
          <div>
            <Label htmlFor="note">{t("message")}</Label>
            <Textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Additional details" />
          </div>
          <Button className="justify-self-start">{t("send_inquiry")}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
