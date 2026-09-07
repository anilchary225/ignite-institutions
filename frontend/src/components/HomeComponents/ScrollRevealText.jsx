import { useEffect, useMemo, useRef, useState } from "react";

function splitText(text) {
  return String(text || "")
    .split(/(\s+)/)
    .filter((part) => part.length > 0);
}

export default function ScrollRevealText({
  as: Tag = "span",
  text,
  className = "",
  wordClassName = "",
  delayStep = 0.045,
  threshold = 0.35,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const tokens = useMemo(() => splitText(text), [text]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={className}>
      {tokens.map((token, index) => {
        const isWhitespace = /^\s+$/.test(token);
        if (isWhitespace) {
          return <span key={`${token}-${index}`}>{token}</span>;
        }

        return (
          <span
            key={`${token}-${index}`}
            className={`inline-block transform-gpu transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-sm"
            } ${wordClassName}`}
            style={{ transitionDelay: `${index * delayStep}s` }}
          >
            {token}
          </span>
        );
      })}
    </Tag>
  );
}
