import Image from "next/image";
import FormSection from "@/components/forms/formSections";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <FormSection/>
      <Link href="/chart">Chart</Link>
    </main>
  );
}
