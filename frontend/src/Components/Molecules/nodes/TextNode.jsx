import React, { useState, useEffect, useRef, useMemo } from "react";
import { BaseNode } from "../base/BaseNode";
import { NodeContainer } from "../../Atoms/Styles/NodeStyles";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [size, setSize] = useState({ width: 200, height: 80 });
  const textareaRef = useRef(null);

  const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

  const variableHandles = useMemo(() => {
    const vars = new Set();
    let match;
    while ((match = variableRegex.exec(currText)) !== null) {
      vars.add(match[1]);
    }
    return Array.from(vars).map((v) => ({
      id: `${id}-input-${v}`,
      name: v,
    }));
  }, [currText, id]);

  // 🔥 AUTO RESIZE TEXTAREA + NODE
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    // Reset height so it shrinks when text is removed
    el.style.height = "auto";

    const newHeight = el.scrollHeight;

    el.style.height = `${newHeight}px`;

    setSize({
      width: Math.max(285, el.scrollWidth + 24),
      height: Math.max(80, newHeight + 60), // extra space for header + padding
    });
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      width={size.width}
      height={size.height}
      inputs={variableHandles}
      iconName={"text_ad"}
      outputs={[{ id: `${id}-output` }]}
      contents={
        <NodeContainer>
          <label>
            Text:
            <textarea
              ref={textareaRef}
              value={currText}
              onChange={(e) => setCurrText(e.target.value)}
              style={{
                width: "100%",
                resize: "none",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            />
          </label>
        </NodeContainer>
      }
    />
  );
};
