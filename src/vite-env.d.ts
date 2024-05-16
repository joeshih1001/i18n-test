/// <reference types="vite/client" />
// 這此檔案定義後 ,會自動跳出變數選項
interface ImportMetaEnv {
    readonly VITE_BITMEX_API_URL : string
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }