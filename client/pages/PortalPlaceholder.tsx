export default function PortalPlaceholder({ who, description }: { who: string; description: string }) {
  return (
    <div className="min-h-[70vh]">
      <section className="container py-16">
        <h1 className="text-3xl font-extrabold tracking-tight">{who} Portal</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="h-36 w-full rounded-md bg-muted/50 grid place-items-center text-sm text-muted-foreground">
                Coming Soon
              </div>
              <div className="mt-3 font-medium">Sample Card {i}</div>
              <p className="text-sm text-muted-foreground">We can expand this page next.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
