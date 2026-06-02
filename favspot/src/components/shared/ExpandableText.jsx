import React, { useMemo, useState } from "react";

function ExpandableText({
  text,
  lines = 3,
  className = "",
  moreLabel = "Show more",
  lessLabel = "Show less",
}) {
  const [expanded, setExpanded] = useState(false);

  const lineClampStyle = useMemo(() => {
    if (expanded) return {};
    return {
      display: "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };
  }, [expanded, lines]);

  const shouldOfferToggle = typeof text === "string" && text.length > 180;

  if (!text) return null;

  return (
    <div className={className}>
      <div style={lineClampStyle}>{text}</div>
      {shouldOfferToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm font-medium text-[#223441]  underline underline-offset-4"
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      ) : null}
    </div>
  );
}

export default ExpandableText;

