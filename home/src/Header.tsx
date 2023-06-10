import React from "react";

export default function Header({ app } : { app: { name: string }}) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font bold">
      Finger Spinner World II | { app.name }
    </div>
  );
}
