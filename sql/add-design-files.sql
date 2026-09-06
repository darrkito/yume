-- Ejecuta esto una vez en el SQL Editor de Supabase (Dashboard -> tu
-- proyecto -> SQL Editor -> pega y corre). Idempotente, seguro de volver a
-- correr si ya existe.

-- Columna para guardar los archivos de diseño/logo que el cliente sube en
-- el checkout: array de { productName, fileName, url } (url = signed URL
-- de larga duración al archivo en Supabase Storage).
ALTER TABLE orders ADD COLUMN IF NOT EXISTS design_file_urls JSONB;

-- El bucket de Storage se crea aparte, desde el Dashboard (Storage -> New
-- bucket -> nombre "order-designs" -> Private). No hace falta ninguna
-- policy porque el backend sube y lee los archivos con la service_role
-- key (Supa_Store_Stor_SUPABASE_SERVICE_ROLE_KEY), que se salta RLS —
-- igual que la tabla orders, nada de esto es accesible desde el navegador
-- con la clave pública.
