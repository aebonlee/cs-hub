-- =========================================
-- biz_products 테이블 생성 스크립트
-- biz-hub 전용 상품(학습사이트) 관리 테이블
-- 2026-04-07
-- =========================================

CREATE TABLE IF NOT EXISTS biz_products (
  id            serial PRIMARY KEY,
  slug          text NOT NULL UNIQUE,
  category      text NOT NULL DEFAULT 'course',
  title         text NOT NULL,
  title_en      text DEFAULT '',
  description   text DEFAULT '',
  description_en text DEFAULT '',
  price         integer NOT NULL DEFAULT 0,
  image_url     text DEFAULT '',
  is_sold_out   boolean DEFAULT false,
  is_active     boolean DEFAULT true,
  sort_order    integer DEFAULT 0,
  license_site_slug text DEFAULT '',
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_biz_products_active ON biz_products(is_active);
CREATE INDEX IF NOT EXISTS idx_biz_products_category ON biz_products(category);
CREATE INDEX IF NOT EXISTS idx_biz_products_slug ON biz_products(slug);
CREATE INDEX IF NOT EXISTS idx_biz_products_sort ON biz_products(sort_order);

-- RLS 활성화
ALTER TABLE biz_products ENABLE ROW LEVEL SECURITY;

-- 누구나 읽기 가능
CREATE POLICY "biz_products_select" ON biz_products
  FOR SELECT USING (true);

-- 인증 사용자만 INSERT/UPDATE/DELETE
CREATE POLICY "biz_products_insert" ON biz_products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "biz_products_update" ON biz_products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "biz_products_delete" ON biz_products
  FOR DELETE USING (auth.role() = 'authenticated');

-- =========================================
-- 초기 데이터: biz-hub 경영 학습사이트 8개
-- =========================================
INSERT INTO biz_products (slug, category, title, title_en, description, description_en, price, image_url, sort_order, license_site_slug) VALUES
('accounting', 'management-basic', '회계학원론', 'Accounting Principles', '회계의 기본 원리와 재무제표 작성 방법을 학습합니다', 'Learn basic accounting principles and financial statement preparation', 0, '', 1, 'accounting'),
('management', 'management-basic', '경영학원론', 'Management Principles', '경영학의 핵심 이론과 실무 적용 방법을 학습합니다', 'Learn core management theories and practical applications', 0, '', 2, 'management'),
('finance', 'management-basic', '재무관리', 'Financial Management', '기업의 재무 의사결정과 투자 분석 방법을 학습합니다', 'Learn corporate financial decision-making and investment analysis', 0, '', 3, 'finance'),
('marketing-intro', 'marketing', '마케팅원론', 'Marketing Principles', '마케팅의 기본 개념과 전략 수립 방법을 학습합니다', 'Learn basic marketing concepts and strategy development', 0, '', 4, 'marketing-intro'),
('self-branding', 'marketing', '셀프브랜딩', 'Self Branding', '개인 브랜드 구축과 효과적인 자기 마케팅 전략을 학습합니다', 'Learn personal brand building and effective self-marketing strategies', 0, '', 5, 'self-branding'),
('ux-design', 'marketing', 'CX/UX 디자인', 'CX/UX Design', '고객 경험과 사용자 경험 디자인의 원리와 실무를 학습합니다', 'Learn principles and practices of customer and user experience design', 0, '', 6, 'ux-design'),
('digital-biz', 'digital-management', '디지털경영', 'Digital Business', '디지털 시대의 경영 전략과 비즈니스 모델을 학습합니다', 'Learn management strategies and business models for the digital age', 0, '', 7, 'digital-biz'),
('planning', 'digital-management', '기획의정석', 'Business Planning', '비즈니스 기획의 체계적인 방법론과 실전 기법을 학습합니다', 'Learn systematic business planning methodologies and practical techniques', 0, '', 8, 'planning')
ON CONFLICT (slug) DO NOTHING;
