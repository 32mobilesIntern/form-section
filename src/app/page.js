import Image from "next/image";
import FormSection from "@/components/forms/formSections";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-10">
      <Link href="/forms">Forms</Link>
      <Link href="/chart">Chart</Link>
    </main>
  );
}
