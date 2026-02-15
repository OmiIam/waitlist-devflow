/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WAITLIST_ENDPOINT?: string;
  readonly VITE_WAITLIST_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
