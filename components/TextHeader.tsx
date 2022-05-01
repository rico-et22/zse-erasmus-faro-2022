import Link from "next/link";
import * as React from "react";

interface Props {
  left: string;
  right: string;
}

export default function TextHeader({ left, right }: Props) {
  return (
    <h1 className="text-center text-3xl font-semibold mb-10">
      <span className="text-portugal-green">{left} </span>
      <span className="text-portugal-red">{right}</span>
    </h1>
  );
}
