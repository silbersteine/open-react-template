import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
const t = useTranslations("../components/ui");

  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt={t('cruip-logo')} width={32} height={32} />
    </Link>
  );
}
