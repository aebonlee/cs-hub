-- ============================================================
-- biz-hub Supabase 테이블 스키마
-- 생성일: 2026-04-07
-- 프로젝트: biz-hub (경영전공학습 허브)
-- 접두어: biz_
-- ============================================================

-- 1) 주문 테이블
CREATE TABLE IF NOT EXISTS biz_orders (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  total       integer NOT NULL DEFAULT 0,
  status      text NOT NULL DEFAULT 'pending',
  payment_key text,
  order_name  text,
  buyer_name  text,
  buyer_email text,
  buyer_tel   text,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

-- 2) 주문 상세 테이블
CREATE TABLE IF NOT EXISTS biz_order_items (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id   uuid REFERENCES biz_orders(id) ON DELETE CASCADE,
  product_id integer NOT NULL,
  name       text NOT NULL,
  price      integer NOT NULL DEFAULT 0,
  quantity   integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- 3) 가맹/제휴 신청 테이블
CREATE TABLE IF NOT EXISTS biz_franchise_applications (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name            text NOT NULL,
  email           text NOT NULL,
  phone           text,
  organization    text,
  message         text,
  franchise_type  text DEFAULT 'general',
  status          text DEFAULT 'pending',
  created_at      timestamptz DEFAULT now()
);

-- 4) 사용자 프로필 (공용 테이블 – 이미 존재하면 SKIP)
CREATE TABLE IF NOT EXISTS user_profiles (
  id          uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email       text,
  name        text,
  phone       text,
  avatar_url  text,
  role        text DEFAULT 'user',
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

-- ============================================================
-- RLS 정책
-- ============================================================

-- biz_orders RLS
ALTER TABLE biz_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON biz_orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders"
  ON biz_orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders"
  ON biz_orders FOR UPDATE
  USING (auth.uid() = user_id);

-- biz_order_items RLS
ALTER TABLE biz_order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own order items"
  ON biz_order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM biz_orders
      WHERE biz_orders.id = biz_order_items.order_id
        AND biz_orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own order items"
  ON biz_order_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM biz_orders
      WHERE biz_orders.id = biz_order_items.order_id
        AND biz_orders.user_id = auth.uid()
    )
  );

-- biz_franchise_applications RLS
ALTER TABLE biz_franchise_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert franchise application"
  ON biz_franchise_applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can view franchise applications"
  ON biz_franchise_applications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
        AND user_profiles.role = 'admin'
    )
  );

-- user_profiles RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ============================================================
-- 인덱스
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_biz_orders_user     ON biz_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_biz_orders_status   ON biz_orders(status);
CREATE INDEX IF NOT EXISTS idx_biz_order_items_order ON biz_order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_biz_franchise_status ON biz_franchise_applications(status);
