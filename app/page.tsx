import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0a0f1f] text-foreground">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-12 md:gap-16 lg:px-10">
                <header className="flex items-center justify-between rounded-xl border border-[#1f2a44] bg-[#0f1629] px-5 py-3 shadow-[0_10px_40px_-20px_rgba(89,248,232,0.4)]">
                    <div className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#59f8e8] shadow-[0_0_12px_2px_rgba(89,248,232,0.7)]" aria-hidden />
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8aa0ff]">
                            Jefferson Umanzor
                        </span>
                    </div>
                    <nav className="text-sm text-[#9bb4ff]">
                        <span className="rounded-full border border-transparent px-4 py-2">Navbar TBD</span>
                    </nav>
                </header>

                <main className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-6">
                        <p className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/60 bg-[#1a1230] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c084fc]">
                            About me
                        </p>
                        <div className="space-y-4">
                            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                                Hi! I'm Jeff,
                            </h1>
                            <p className="text-lg leading-relaxed text-[#c0ccff] sm:text-xl">
                                a third-year Computer Science major double minoring in Data
                                Science & Mathematics! I'm really interested in trying new foods this year!
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-[#9bb4ff]">
                            <span className="rounded-full border border-[#26365a] bg-[#121a2f] px-4 py-2">
                                CS Major
                            </span>
                            <span className="rounded-full border border-[#26365a] bg-[#121a2f] px-4 py-2">
                                Data Science & Mathematics Minors
                            </span>
                            <span className="rounded-full border border-[#26365a] bg-[#121a2f] px-4 py-2">
                                Food Explorer
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full max-w-[340px] rounded-2xl border border-[#1f2a44] bg-[#0f1629] p-5 shadow-[0_15px_60px_-25px_rgba(124,58,237,0.5)]">
                            <div className="relative aspect-square overflow-hidden rounded-xl border border-[#26365a] bg-[#0c1326]">
                                <Image
                                    src="/profile-placeholder.svg"
                                    alt="Jefferson Umanzor portrait placeholder"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
