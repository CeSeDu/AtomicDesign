
import Head from "next/head";
import { useTranslations } from "next-intl"; // Eğer "link" bir hata veriyorsa, bu satırı kaldırın
import MainTemplate from "../../components/templates/MainTemplate";
import { routing } from '../../i18n/routing';
import '../globals.css';


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}


export default function Home() {
  const t = useTranslations('HomePage');

console.log(t('title'));
  return (
    <div>
      <Head>
        <title>Atomic Design Example</title>
      </Head>
      <MainTemplate>
      </MainTemplate>
    </div>
  );
}
