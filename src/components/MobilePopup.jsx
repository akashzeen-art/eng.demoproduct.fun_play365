import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiLocationArrow } from "react-icons/ti";

const VALID = atob("MTExMTExMTExMA==");

const MobilePopup = ({ onConfirm, onClose }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim() === VALID) {
      setError("");
      onConfirm();
    } else {
      setError("Invalid mobile number. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-violet-300/40 bg-black shadow-[0_0_60px_rgba(87,36,255,0.4)]">
        <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-yellow-300/15 blur-3xl" />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-1.5 text-white transition-colors hover:bg-white/20"
        >
          <IoMdClose className="text-lg" />
        </button>

        <div className="relative p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-violet-300/20 border border-violet-300/40">
              <span className="text-3xl">🎮</span>
            </div>
            <h2 className="font-zentry text-2xl font-black uppercase text-white">
              Enter your Mobile Number
            </h2>
            <p className="mt-2 font-general text-sm text-white/60">
              To start playing, confirm your number
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex overflow-hidden rounded-2xl border border-white/20 bg-white/5 focus-within:border-violet-300 transition-colors">
              <div className="flex items-center gap-2 border-r border-white/20 bg-white/5 px-4 py-3">
                <span className="text-lg">🇮🇳</span>
                <span className="font-general text-sm font-bold text-white">+91</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => { setPhone(e.target.value.replace(/\D/g, "")); setError(""); }}
                placeholder="10 digit mobile number"
                maxLength={11}
                className="flex-1 bg-transparent px-4 py-3 font-general text-sm text-white placeholder-white/30 outline-none"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-center font-general text-xs text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={phone.trim().length < 8}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-300 py-3.5 font-general text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Play Now
              <TiLocationArrow className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobilePopup;
