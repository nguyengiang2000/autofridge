import React from "react";
import Svg, { Path } from "react-native-svg";

export default function GroceryListIcon({ width = 50, height = 50, color = "#1E1E1E" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
      <Path
        d="M2.08333 2.08334H10.4167L16 29.9792C16.1905 30.9383 16.7123 31.7999 17.4741 32.4131C18.2358 33.0263 19.189 33.3521 20.1667 33.3333H40.4167C41.3944 33.3521 42.3475 33.0263 43.1093 32.4131C43.871 31.7999 44.3928 30.9383 44.5833 29.9792L47.9167 12.5H12.5M20.8333 43.75C20.8333 44.9006 19.9006 45.8333 18.75 45.8333C17.5994 45.8333 16.6667 44.9006 16.6667 43.75C16.6667 42.5994 17.5994 41.6667 18.75 41.6667C19.9006 41.6667 20.8333 42.5994 20.8333 43.75ZM43.75 43.75C43.75 44.9006 42.8173 45.8333 41.6667 45.8333C40.5161 45.8333 39.5833 44.9006 39.5833 43.75C39.5833 42.5994 40.5161 41.6667 41.6667 41.6667C42.8173 41.6667 43.75 42.5994 43.75 43.75Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
