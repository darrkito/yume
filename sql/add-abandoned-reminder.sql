-- Ejecuta esto una vez en el SQL Editor de Supabase (Dashboard -> tu
-- proyecto -> SQL Editor -> pega y corre). Idempotente, seguro de volver a
-- correr si ya existe.

-- Recordatorio de pedido no pagado: el cron diario (/api/cron/abandoned-checkout)
-- manda UN solo correo a los pedidos que siguen en "pending" entre 24 y 72 h
-- después de crearse. Esta columna guarda cuándo se mandó, para no repetirlo
-- nunca (y para poder auditar qué se envió).
ALTER TABLE orders ADD COLUMN IF NOT EXISTS abandoned_reminder_sent_at TIMESTAMPTZ;

-- Índice parcial: el cron solo mira pedidos pendientes sin recordatorio.
CREATE INDEX IF NOT EXISTS idx_orders_abandoned
  ON orders (created_at)
  WHERE status = 'pending' AND abandoned_reminder_sent_at IS NULL;
