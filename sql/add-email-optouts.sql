-- Ejecuta esto una vez en el SQL Editor de Supabase. Idempotente.
-- Correos que pidieron no recibir el recordatorio de carrito abandonado
-- (enlace "no más recordatorios" del correo). Sin esta tabla el código
-- funciona igual, solo que la baja no se recuerda para pedidos futuros.
CREATE TABLE IF NOT EXISTS email_optouts (
  email       TEXT PRIMARY KEY,           -- siempre en minúsculas
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE email_optouts ENABLE ROW LEVEL SECURITY;  -- sin policies: solo el backend (service_role)
