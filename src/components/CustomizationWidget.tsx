import { useState } from "react";
import invertHexColor from "../lib/invertHexColor";

export default function CustomizationWidget({
  color,
  setColor,
  background,
  setBackground,
  intensity,
  setIntensity,
  setStarProps,
  starProps,
}: {
  color: string;
  setColor: (color: string) => void;
  background: string;
  setBackground: (background: string) => void;
  intensity: number;
  setIntensity: (intensity: number) => void;
  setStarProps: (starProps: {
    radius: number;
    depth: number;
    count: number;
    factor: number;
    speed: number;
    fade: boolean;
  }) => void;
  starProps: {
    radius: number;
    depth: number;
    count: number;
    factor: number;
    speed: number;
    fade: boolean;
  };
}) {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button
        onClick={() => setIsWidgetVisible(!isWidgetVisible)}
        style={{
          marginBottom: "10px",
          borderRadius: 20,
          width: 60,
          height: 30,
          cursor: "pointer",
          transition: "background 0.3s",
          background: isWidgetVisible
            ? "transparent"
            : invertHexColor(background),
          color: isWidgetVisible ? invertHexColor(background) : background,
          border: isWidgetVisible
            ? `1px solid ${invertHexColor(background)}`
            : "none",
          outline: "none",
        }}
      >
        {isWidgetVisible ? "Close" : "Open"}
      </button>

      {isWidgetVisible && (
        <div
          style={{
            background: "rgba(0,0,10, 0.9)",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ margin: 0 }}>Customization Options</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Color:</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Background:</label>
              <input
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pointerEvents: "auto",
              }}
            >
              <label style={{ flex: "1" }}>Intensity:</label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={intensity}
                onChange={(e) => setIntensity(parseFloat(e.target.value))}
                onMouseDown={(e) => e.stopPropagation()}
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Stars Radius:</label>
              <input
                type="number"
                value={starProps.radius}
                onChange={(e) =>
                  setStarProps({
                    ...starProps,
                    radius: parseFloat(e.target.value),
                  })
                }
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Stars Depth:</label>
              <input
                type="number"
                value={starProps.depth}
                onChange={(e) =>
                  setStarProps({
                    ...starProps,
                    depth: parseFloat(e.target.value),
                  })
                }
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Stars Count:</label>
              <input
                type="number"
                value={starProps.count}
                onChange={(e) =>
                  setStarProps({
                    ...starProps,
                    count: parseFloat(e.target.value),
                  })
                }
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Stars Factor:</label>
              <input
                type="number"
                value={starProps.factor}
                onChange={(e) =>
                  setStarProps({
                    ...starProps,
                    factor: parseFloat(e.target.value),
                  })
                }
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ flex: "1" }}>Stars Speed:</label>
              <input
                type="number"
                value={starProps.speed}
                onChange={(e) =>
                  setStarProps({
                    ...starProps,
                    speed: parseFloat(e.target.value),
                  })
                }
                style={{ flex: "1", marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
