'use client';

import { useRef } from 'react';
import { makeStore } from './store';
import { Provider } from 'react-redux';
import type { AppStore } from './store';

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}