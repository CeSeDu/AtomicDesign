"use client";
import React from 'react';
import Logo from '../atoms/Logo';
import NavLink from '../atoms/NavLink';
import Form from '../molecules/Form';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from '../atoms/LanguageSwitcher';
import { usePathname, useSearchParams } from 'next/navigation'; // useRouter yerine

const Header = () => {
  const locale = useLocale();
  const t = useTranslations('Header');
  const pathname = usePathname(); 

  const handleLanguageChange = (newLocale) => {
    const newPathname = pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}${pathname}`;

    window.location.href = newPathname;
  };

  return (
    <header className='flex justify-between items-center p-2 rounded-lg bg-gray-800'>
      <Logo />
      <nav className='flex gap-12'>
        <NavLink label={t('home')} href="/" />
        <NavLink label={t('about')} href="/about" />
        <NavLink label={t('contact')} href="/contact" />
      </nav>
      <Form />
      <LanguageSwitcher currentLocale={locale} onChange={handleLanguageChange} />
    </header>
  );
};

export default Header;
