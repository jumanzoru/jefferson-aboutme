"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  startDate: string;
  endDate: string | null;
  description: string;
  deploymentLink: string | null;
  githubLink: string | null;
};

type ApiResponse<T> = { data: T };

const formatDate = (value?: string | null) => {
  if (!value) return "Present";
  const date = new Date(value);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function ProjectPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/project");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const json = (await res.json()) as ApiResponse<Project[]>;
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
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Projects</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Builds & Links</h1>
        <p className="text-sm text-muted-foreground">Pulled live from /api/project using client-side fetch.</p>
      </div>

      {loading && <p className="text-muted-foreground">Loading projects...</p>}
      {error && <p className="text-destructive">Error: {error}</p>}
      {!loading && !error && items.length === 0 && <p className="text-muted-foreground">No projects added yet.</p>}

      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/10 bg-card/70 p-5 shadow-md shadow-primary/10">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-black">{item.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {formatDate(item.startDate)} – {formatDate(item.endDate)}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {item.deploymentLink && (
                <a
                  className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-primary transition hover:border-primary/70 hover:bg-primary/20"
                  href={item.deploymentLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View deployment
                </a>
              )}
              {item.githubLink && (
                <a
                  className="rounded-full border border-white/15 px-4 py-2 text-muted-foreground transition hover:border-white/30 hover:text-white"
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
