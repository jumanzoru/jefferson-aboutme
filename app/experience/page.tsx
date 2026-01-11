"use client";

import { useEffect, useState } from "react";

type Experience = {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

type ApiResponse<T> = { data: T };

const formatDate = (value?: string | null) => {
  if (!value) return "Present";
  const date = new Date(value);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function ExperiencePage() {
  const [items, setItems] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/experience");
        if (!res.ok) throw new Error("Failed to fetch experience");
        const json = (await res.json()) as ApiResponse<Experience[]>;
        setItems(json.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
      <div className="mb-8 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Experience</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Roles & Highlights</h1>
        <p className="text-sm text-muted-foreground">Pulled live from /api/experience using client-side fetch.</p>
      </div>

      {loading && <p className="text-muted-foreground">Loading experience...</p>}
      {error && <p className="text-destructive">Error: {error}</p>}
      {!loading && !error && items.length === 0 && <p className="text-muted-foreground">No experience added yet.</p>}

      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/10 bg-card/70 p-5 shadow-md shadow-primary/10">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-black">{item.company}</h2>
                <p className="text-sm text-muted-foreground">
                  {item.title} · {item.location}
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {formatDate(item.startDate)} – {formatDate(item.endDate)}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
