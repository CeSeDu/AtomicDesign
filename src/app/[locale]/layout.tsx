import { routing } from '../../i18n/routing';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
export default async function LocaleLayout({children, params: {locale}}) {
  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages(locale);
 
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}