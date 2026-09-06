"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

// In-memory only, deliberately not persisted to localStorage like the cart
// — File objects can't be serialized to JSON, and there's no need for them
// to survive a hard refresh (a customer re-picking the file after a reload
// is normal file-input behavior everywhere). Keyed by product slug so a
// future second requiresImage product doesn't collide with this one.
interface DesignFileContextValue {
  getDesignFile: (slug: string) => File | undefined;
  setDesignFile: (slug: string, file: File) => void;
  clearDesignFile: (slug: string) => void;
}

const DesignFileContext = createContext<DesignFileContextValue | null>(null);

export function DesignFileProvider({ children }: { children: React.ReactNode }) {
  const [files, setFiles] = useState<Record<string, File>>({});

  const getDesignFile = useCallback((slug: string) => files[slug], [files]);

  const setDesignFile = useCallback((slug: string, file: File) => {
    setFiles((prev) => ({ ...prev, [slug]: file }));
  }, []);

  const clearDesignFile = useCallback((slug: string) => {
    setFiles((prev) => {
      const next = { ...prev };
      delete next[slug];
      return next;
    });
  }, []);

  const value = useMemo(() => ({ getDesignFile, setDesignFile, clearDesignFile }), [getDesignFile, setDesignFile, clearDesignFile]);

  return <DesignFileContext.Provider value={value}>{children}</DesignFileContext.Provider>;
}

export function useDesignFiles() {
  const ctx = useContext(DesignFileContext);
  if (!ctx) throw new Error("useDesignFiles must be used within a DesignFileProvider");
  return ctx;
}
