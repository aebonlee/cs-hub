# biz-hub 개발 이력

## 프로젝트 정보
- **사이트명**: DreamIT Biz Hub (경영전공학습 허브)
- **도메인**: https://biz-hub.dreamitbiz.com
- **GitHub**: https://github.com/aebonlee/biz-hub
- **기술스택**: React 19 + Vite 7 + TypeScript
- **백엔드**: Supabase (hcmgdztsgjvzcyxyayaj.supabase.co)
- **DB 접두어**: `biz_`
- **배포**: GitHub Pages (`npx gh-pages -d dist`)

---

## 2026-04-07 — 초기 구축

### 1. 사이트 생성 (templete-ref 기반)
- `templete-ref` 템플릿에서 복제하여 biz-hub 생성
- `ai-hub` 사이트 구조를 참고하여 Hub 스타일로 구성
- `config/site.ts` 하나로 사이트 전체 설정 관리 (SiteConfig 패턴)

### 2. site.ts 설정
```typescript
{
  id: 'biz-hub',
  name: 'DreamIT Biz Hub',
  dbPrefix: 'biz_',
  domain: 'biz-hub.dreamitbiz.com',
  categories: ['경영학', '마케팅', 'UX디자인', '셀프브랜딩', '디지털비즈', '기획', '취업'],
  features: { shop: true, community: true, search: true, auth: true, license: false }
}
```

### 3. 생성된 페이지 (8개)
| 페이지 | 파일 | 설명 |
|--------|------|------|
| Home | `pages/Home.tsx` | 히어로, 통계, 카테고리, 주요과정 소개 |
| Courses | `pages/Courses.tsx` | edu-hub의 경영 관련 8개 사이트 카드 |
| About | `pages/About.tsx` | 소개, 비전, 팀, 연혁 |
| Franchise | `pages/Franchise.tsx` | 가맹/제휴 신청 |
| Notice | `pages/Notice.tsx` | 공지사항 |
| QnA | `pages/QnA.tsx` | Q&A 게시판 |
| Shop | `pages/Shop.tsx` | 쇼핑몰 |
| Pricing | `pages/Pricing.tsx` | 요금제 페이지 (4개 플랜) |

### 4. 연결된 학습 사이트 (learningSites: 8개)
| 사이트 | 도메인 | 카테고리 |
|--------|--------|----------|
| digitalbiz | digitalbiz.dreamitbiz.com | 디지털비즈 |
| marketing | marketing.dreamitbiz.com | 마케팅 |
| uxdesign | uxdesign.dreamitbiz.com | UX디자인 |
| self-branding | self-branding.dreamitbiz.com | 셀프브랜딩 |
| planning | planning.dreamitbiz.com | 기획 |
| career | career.dreamitbiz.com | 취업 |
| competency | competency.dreamitbiz.com | 역량평가 |
| teaching | teaching.dreamitbiz.com | 교수법 |

### 5. Pricing 페이지 상세
- **참조**: ahp_basic의 PricingPage.tsx (CSS Modules → 일반 CSS 변환)
- **4개 요금제**:
  - Free (무료) — 회원가입 유도
  - Basic (₩29,000/월) — 기본 과정
  - Pro (₩49,000/월, 추천) — 전체 과정 + 수료증
  - Enterprise (별도 문의) — 기관/기업용
- **구성**: 요금 카드 → 비교 테이블 → FAQ 아코디언 → CTA
- **기능**: 한/영 다국어, 다크모드, 반응형

### 6. Supabase 테이블 (4개)
- `biz_orders` — 주문
- `biz_order_items` — 주문 상세
- `biz_franchise_applications` — 가맹 신청
- `user_profiles` — 사용자 프로필 (공용)
- 모든 테이블 RLS 정책 + 인덱스 설정 완료
- SQL 스크립트: `Dev_md/01_supabase_schema.sql`

### 7. 정적 파일
- `robots.txt` — biz-hub.dreamitbiz.com 설정
- `sitemap.xml` — 전체 URL 맵
- `404.html` — 커스텀 404 페이지
- `.env` — VITE_SITE_URL=biz-hub.dreamitbiz.com

### 8. 버그 수정
| 이슈 | 원인 | 해결 |
|------|------|------|
| useCountUp 4인자 에러 | Hook은 3인자(end, duration, startOnView)만 지원 | 4번째 delay 인자 제거 |
| RefObject 타입 불일치 | `RefObject<HTMLElement>` ≠ `Ref<HTMLDivElement>` | `as RefObject<HTMLDivElement>` 캐스팅 |
| toast.warning 없음 | ToastContext API는 `showToast(msg, type)` | `toast.showToast(msg, 'warning')` 사용 |
| cart item 타입 에러 | Product 인터페이스에 필수 필드 다수 | 장바구니 연동 제거, navigate로 대체 |

---

## Git 커밋 이력

| 커밋 | 메시지 |
|------|--------|
| `1a4c962` | Initial commit |
| `3269c2d` | Create CNAME |
| `343163a` | feat: 경영전공학습 허브 사이트 초기 구축 (biz-hub) |
| `a481c06` | feat: 요금제(Pricing) 페이지 추가 |

---

## 파일 구조
```
biz-hub/
├── public/
│   ├── 404.html
│   ├── CNAME
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/ (Navbar, Footer)
│   │   ├── AuthGuard.tsx
│   │   └── SEOHead.tsx
│   ├── config/
│   │   ├── site.ts          ← 중앙 설정
│   │   └── admin.ts
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── LanguageContext.tsx
│   │   └── ToastContext.tsx
│   ├── hooks/
│   │   ├── useAOS.ts
│   │   └── useCountUp.ts
│   ├── layouts/
│   │   └── PublicLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Courses.tsx
│   │   ├── About.tsx
│   │   ├── Franchise.tsx
│   │   ├── Notice.tsx
│   │   ├── QnA.tsx
│   │   ├── Shop.tsx
│   │   ├── Pricing.tsx      ← 요금제
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── ForgotPassword.tsx
│   │   ├── MyPage.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── OrderConfirmation.tsx
│   │   ├── OrderHistory.tsx
│   │   └── NotFound.tsx
│   ├── styles/
│   │   ├── site.css         ← 메인 CSS (pricing 포함)
│   │   └── auth.css
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── supabase.ts
│       └── translations.ts  ← 한/영 번역
├── Dev_md/                   ← 개발 문서
│   ├── 01_supabase_schema.sql
│   └── 02_development_history.md
├── .env
├── package.json
├── tsconfig.json
└── vite.config.ts
```
