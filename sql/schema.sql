-- Ejecuta esto una vez en el SQL Editor de Supabase (Dashboard -> tu
-- proyecto -> SQL Editor -> pega y corre). Idempotente (IF NOT EXISTS),
-- seguro de volver a correr si ya existe.

CREATE TABLE IF NOT EXISTS orders (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name     TEXT NOT NULL,
  customer_email    TEXT NOT NULL,
  customer_phone    TEXT,
  shipping_address  JSONB NOT NULL,        -- { street, number, neighborhood, city, state, zip, references }
  items             JSONB NOT NULL,        -- [{ slug, name, price, qty }]
  total             NUMERIC(10,2) NOT NULL,
  status            TEXT NOT NULL DEFAULT 'pending', -- pending | paid | failed | cancelled
  mp_payment_id     TEXT,                  -- id del pago en Mercado Pago, se llena al confirmar
  emails_sent       BOOLEAN NOT NULL DEFAULT FALSE, -- evita mandar correos duplicados
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Row Level Security activada, sin ninguna policy a propósito: bloquea TODO
-- acceso vía la clave pública (anon key) desde el navegador. Solo el backend,
-- usando la service_role key (Supa_Store_Stor_SUPABASE_SERVICE_ROLE_KEY, que
-- se salta RLS), puede leer o escribir esta tabla.
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
