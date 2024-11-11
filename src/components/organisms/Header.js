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
      <nav className='flex justify-between gap-12 w-full items-center'>
      <Logo />
        <div className='flex gap-12'>
        <NavLink label={t('homePage')} href="/" />
        <NavLink label={t('about')} href="/about" />
        <NavLink label={t('contact')} href="/contact" />
        </div>
        <div className='flex items-center'>
        <Form />
      <LanguageSwitcher currentLocale={locale} onChange={handleLanguageChange} />
      </div>
      </nav>


    </header>
  );
};

export default Header;
