"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SparklesIcon, WandSparklesIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DasboardBtn() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;

  return (
    <Link href="/dashboard">
  <Button
    size="sm"
    className="
      gap-2 font-medium
      text-gray-50
      bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900
      hover:opacity-90
      shadow-md shadow-emerald-900/20
      border-none
    "
  >
    <WandSparklesIcon className="w-4 h-4 text-white" />
    Dashboard
  </Button>
</Link>
  );
}
export default DasboardBtn;