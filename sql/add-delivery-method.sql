-- Ejecuta esto una vez en el SQL Editor de Supabase (Dashboard -> tu
-- proyecto -> SQL Editor -> pega y corre). Idempotente, seguro de volver a
-- correr si ya existe.

-- Soporte para el método de entrega: envío nacional (dirección completa,
-- como antes) o recolección local en una sucursal de Casa Blanca
-- (Guadalajara/ZMG, sin dirección de envío). `shipping_address` deja de
-- ser obligatorio porque un pedido de recolección no lo necesita.
ALTER TABLE orders ADD COLUMN IF NOT EXISTS delivery_method TEXT NOT NULL DEFAULT 'envio_nacional';
ALTER TABLE orders ADD COLUMN IF NOT EXISTS casablanca_branch TEXT;
ALTER TABLE orders ALTER COLUMN shipping_address DROP NOT NULL;
