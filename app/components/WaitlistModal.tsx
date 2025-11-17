"use client";

import { useState, useEffect, useCallback } from "react";

type WaitlistModalProps = {
    onClose: () => void;
};

function WaitlistModal({ onClose }: WaitlistModalProps) {
    const [email, setEmail] = useState("");
    const [discord, setDiscord] = useState("");
    const [serverSize, setServerSize] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const postWaitlistData = await fetch("/api", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, discord, serverSize })
            });
            const waitlistResponse: { status: number, msg: string } = await postWaitlistData.json();

            if (waitlistResponse.status !== 201) throw new Error(waitlistResponse.msg);

            setSubmitted(true);
        } catch(e) {
            console.error(e);
        }

    };

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md cursor-default overflow-hidden rounded-2xl border border-neon-cyan/50 bg-bg-alt/95 p-[1px] shadow-neon-soft"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative rounded-[1.1rem] bg-gradient-to-b from-bg-alt via-bg to-bg-alt p-5">
                    {/* glow */}
                    <div className="pointer-events-none absolute -inset-10 bg-radial-fade opacity-40 blur-3xl" />

                    {/* close button */}
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-3 rounded-full border border-slate-700 bg-bg px-2 py-0.5 text-[11px] font-mono text-slate-400 hover:border-neon-magenta hover:text-neon-magenta"
                        aria-label="Close waitlist modal"
                    >
                        ESC
                    </button>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="relative space-y-4">
                            <div>
                                <div
                                    id="waitlist-title"
                                    className="font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan"
                                >
                                    Early Access
                                </div>
                                <h2 className="mt-1 text-xl font-semibold text-slate-50">
                                    Join the GraphGhost waitlist
                                </h2>
                                <p className="mt-2 text-xs text-slate-400">
                                    Be the first to get access when the dashboard goes live. No
                                    spam, just launch updates and major milestones.
                                </p>
                            </div>

                            <div className="space-y-3 text-[12px]">
                                {/* Email */}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="email"
                                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full rounded-lg border border-slate-700 bg-bg/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-neon-cyan focus:shadow-neon-soft"
                                            placeholder="you@example.com"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] font-mono text-slate-500">
                                            REQUIRED
                                        </span>
                                    </div>
                                </div>

                                {/* Discord handle */}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="discord"
                                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300"
                                    >
                                        Discord Handle <span className="text-slate-500">(optional)</span>
                                    </label>
                                    <input
                                        id="discord"
                                        type="text"
                                        value={discord}
                                        onChange={(e) => setDiscord(e.target.value)}
                                        className="w-full rounded-lg border border-slate-700 bg-bg/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-neon-cyan focus:shadow-neon-soft"
                                        placeholder="@ghost-operator"
                                    />
                                </div>

                                {/* Server size */}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="serverSize"
                                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300"
                                    >
                                        Server Size <span className="text-slate-500">(optional)</span>
                                    </label>
                                    <select
                                        id="serverSize"
                                        value={serverSize}
                                        onChange={(e) => setServerSize(e.target.value)}
                                        className="w-full rounded-lg border border-slate-700 bg-bg/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-neon-cyan focus:shadow-neon-soft"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="small">&lt; 100 members</option>
                                        <option value="medium">100 – 1,000 members</option>
                                        <option value="large">1,000 – 10,000 members</option>
                                        <option value="xl">&gt; 10,000 members</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                                    <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-neon" />
                                    <span>We&apos;ll only email you about GraphGhost.</span>
                                </div>
                                <button
                                    type="submit"
                                    className="group relative overflow-hidden rounded-full border border-neon-cyan/80 bg-neon-cyan px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-bg shadow-neon transition hover:shadow-neon-soft"
                                >
                                    <span className="relative z-10">Join Waitlist</span>
                                    <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-green opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="relative space-y-4">
                            <div>
                                <div className="font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">
                                    You&apos;re In
                                </div>
                                <h2 className="mt-1 text-xl font-semibold text-slate-50">
                                    Welcome to the GraphGhost waitlist
                                </h2>
                                <p className="mt-2 text-xs text-slate-400">
                                    We&apos;ll send you an invite as soon as early access opens.
                                    Keep your server alive until then. 👻
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-bg/80 p-3 text-[11px] font-mono text-slate-300">
                                <div className="mb-1 flex items-center gap-2 text-[10px] text-slate-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-neon" />
                                    <span>graphghost://waitlist.log</span>
                                </div>
                                <div className="space-y-0.5">
                                    <div className="flex gap-1">
                                        <span className="text-neon-green">&gt;</span>
                                        <span>Email registered:</span>
                                        <span className="text-neon-cyan">{email}</span>
                                    </div>
                                    {discord && (
                                        <div className="flex gap-1">
                                            <span className="text-neon-green">&gt;</span>
                                            <span>Discord:</span>
                                            <span className="text-neon-cyan">{discord}</span>
                                        </div>
                                    )}
                                    <div className="flex gap-1">
                                        <span className="text-neon-green">&gt;</span>
                                        <span>Status:</span>
                                        <span className="text-neon-magenta">QUEUED FOR ACCESS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-1">
                                <button
                                    onClick={onClose}
                                    className="rounded-full border border-slate-700 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-200 hover:border-neon-cyan hover:text-neon-cyan"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function WaitlistModalTrigger({ className, innerText, gradient = true }: { className?: string, innerText?: string, gradient?: boolean }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={!className ? `group relative overflow-hidden rounded-full border border-neon-cyan/80 bg-neon-cyan px-6 py-2 text-xs font-mono uppercase tracking-[0.18em] text-bg shadow-neon transition hover:shadow-neon-soft` : className}
            >
                <span className="relative z-10">{ innerText ? innerText : "Join Waitlist"}</span>
                {
                    gradient ?
                        <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-green opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                        :
                        <></>
                }
            </button>

            {open && <WaitlistModal onClose={() => setOpen(false)} />}
        </>
    );
}
