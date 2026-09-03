/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HomePage } from './pages/home';
import { LaunchingSoon } from './pages/coming-soon';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';

export default function App() {
  const isPath = (target: string) => {
    if (typeof window === 'undefined') return false;
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return pathname === target || pathname === target + '/' || hash === `#${target}` || hash.startsWith(`#${target}/`);
  };

  const [currentRoute, setCurrentRoute] = useState<'home' | 'launching-soon' | 'about' | 'contact'>(() => {
    if (isPath('/home')) return 'home';
    if (isPath('/about')) return 'about';
    if (isPath('/contact')) return 'contact';
    return 'launching-soon';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      if (isPath('/home')) {
        setCurrentRoute('home');
      } else if (isPath('/about')) {
        setCurrentRoute('about');
      } else if (isPath('/contact')) {
        setCurrentRoute('contact');
      } else {
        setCurrentRoute('launching-soon');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      if (path === '/home' || path === '/home/' || path === '#/home') {
        setCurrentRoute('home');
      } else if (path === '/about' || path === '/about/' || path === '#/about') {
        setCurrentRoute('about');
      } else if (path === '/contact' || path === '/contact/' || path === '#/contact') {
        setCurrentRoute('contact');
      } else {
        setCurrentRoute('launching-soon');
      }
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentRoute !== 'home') {
      navigateTo('/home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigatePage = (page: 'about' | 'contact') => {
    navigateTo(`/${page}`);
  };

  if (currentRoute === 'launching-soon') {
    return <LaunchingSoon />;
  }

  if (currentRoute === 'about') {
    return <AboutPage />;
  }

  if (currentRoute === 'contact') {
    return <ContactPage />;
  }

  return (
    <HomePage
      onNavigateSection={handleNavigateSection}
      onNavigatePage={handleNavigatePage}
      currentRoute={currentRoute}
    />
  );
}
