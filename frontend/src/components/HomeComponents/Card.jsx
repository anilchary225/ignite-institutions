import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Card({ eyebrow, title, description, image, dark = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full overflow-hidden rounded-3xl transition-all duration-500 ease-in-out ${
        dark
          ? "bg-[linear-gradient(180deg,#16094f_0%,#0b0830_42%,#09051f_100%)] text-white"
          : "bg-[#f4f2ee] text-neutral-950"
      }`}
      style={{
        minHeight: 552,
      }}
    >
      <div className="relative flex min-h-[552px] flex-col overflow-hidden">
        {image ? (
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: hovered ? 0.1 : 1 }}
          />
        ) : null}

        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-[linear-gradient(180deg,rgba(22,9,79,0.04)_0%,rgba(11,8,48,0.18)_42%,rgba(9,5,31,0.2)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(244,242,238,0.04)_0%,rgba(244,242,238,0.16)_100%)]"
          }`}
        />

        <div className="relative z-10 flex min-h-[552px] flex-col justify-between p-8 sm:p-9">
          <div>
            <p className="text-[15px] font-extrabold uppercase tracking-[0.08em]">
              {eyebrow}
            </p>

            <h3 className="mt-8 max-w-[340px] text-[28px] font-extrabold leading-[1.12] sm:text-[30px]">
              {title}
            </h3>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                hovered ? "mt-7 max-h-56 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`max-w-[360px] text-[20px] leading-[1.42] ${
                  dark ? "text-white" : "text-neutral-950"
                }`}
              >
                {description}
              </p>
            </div>
          </div>

          <button
            type="button"
            className={`ml-auto inline-flex items-center gap-4 text-[22px] font-extrabold transition-all duration-500 ease-out ${
              hovered
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-2 opacity-0"
            }`}
            aria-label={`Open ${title}`}
          >
            <span>Open</span>
            <ArrowRight size={28} />
          </button>
        </div>
      </div>
    </article>
  );
}
