# biz-hub 아키텍처 문서

## 전체 구조

```
┌─────────────────────────────────────────────────┐
│                   App.tsx                        │
│  ThemeProvider → LanguageProvider → AuthProvider  │
│  → ToastProvider → ShopWrapper → Router          │
└─────────────────────┬───────────────────────────┘
                      │
            ┌─────────▼─────────┐
            │   PublicLayout    │
            │  ┌─────────────┐  │
            │  │   Navbar    │  │
            │  ├─────────────┤  │
            │  │   <Routes>  │  │
            │  │  (lazy load)│  │
            │  ├─────────────┤  │
            │  │   Footer    │  │
            │  └─────────────┘  │
            └───────────────────┘
```

## Context 구조

| Context | 역할 | 전역 상태 |
|---------|------|-----------|
| `ThemeProvider` | 다크모드/라이트모드/테마색상 관리 | `mode`, `colorTheme` |
| `LanguageProvider` | 한/영 다국어 관리 | `language`, `t()` 함수 |
| `AuthProvider` | Supabase Auth 세션 관리 | `user`, `isLoggedIn` |
| `ToastProvider` | 토스트 알림 표시 | `showToast(msg, type)` |
| `CartProvider` | 장바구니 (shop=true 시) | `cartItems`, `addItem`, `removeItem` |

## 라우팅 구조 (PublicLayout.tsx)

```
/                    → Home
/courses             → Courses (전체)
/courses/:id         → Courses (카테고리별)
/franchise           → Franchise
/about               → About
/notice              → Notice
/qna                 → QnA
/shop                → Shop
/pricing             → Pricing

[features.auth = true]
/login               → Login
/register            → Register
/forgot-password     → ForgotPassword
/mypage              → MyPage (AuthGuard)
/mypage/orders       → OrderHistory (AuthGuard)

[features.shop = true]
/cart                → Cart
/checkout            → Checkout
/order-confirmation  → OrderConfirmation

/*                   → NotFound (404)
```

## 설정 중심 아키텍처 (SiteConfig 패턴)

```
config/site.ts (중앙 설정)
    ├── Navbar.tsx      → menuItems, brand, colors, features
    ├── Footer.tsx      → company, footerLinks, familySites
    ├── Home.tsx        → categories, learningSites, name
    ├── Courses.tsx     → categories, learningSites
    ├── CartContext.tsx  → id (storage key)
    ├── supabase.ts     → dbPrefix (테이블명)
    └── PublicLayout.tsx → features (조건부 라우트)
```

## Supabase 연동 (supabase.ts)

### 테이블명 관리
```typescript
export const TABLES = {
  orders: `${site.dbPrefix}orders`,       // → biz_orders
  order_items: `${site.dbPrefix}order_items`, // → biz_order_items
};
```

### API 함수
| 함수 | 용도 |
|------|------|
| `createOrder(data)` | 주문 생성 + 상세 항목 삽입 |
| `getOrderByNumber(num)` | 주문번호로 조회 |
| `updateOrderStatus(id, status)` | 결제 상태 업데이트 |
| `verifyPayment(paymentId, orderId)` | Edge Function으로 결제 검증 |
| `getOrdersByUser(userId)` | 사용자별 주문 목록 |

### Fallback
- Supabase 환경 변수 미설정 시 in-memory 저장소로 자동 전환
- 개발/데모 환경에서도 동작 보장

## 번역 시스템 (translations.ts)

### 구조
```typescript
translations = {
  ko: {
    nav: { ... },
    footer: { ... },
    shop: { ... },
    site: {
      nav: { ... },
      home: { ... },
      courses: { ... },
      pricing: { ... },
      // ...
    }
  },
  en: { ... }  // 동일 구조
}
```

### 사용법
```typescript
const { t, language } = useLanguage();
t('site.pricing.title')  // → 번역된 문자열
```

### 파이프 구분 배열
```typescript
// translations.ts
'site.pricing.freeFeatures': '기본 강좌 3개|학습 자료 다운로드|커뮤니티 접근'

// 사용 시
const features = t(key).split('|');
// → ['기본 강좌 3개', '학습 자료 다운로드', '커뮤니티 접근']
```

## 조건부 렌더링 패턴

### App.tsx — CartProvider 조건부 적용
```typescript
const ShopWrapper = ({ children }) =>
  site.features.shop ? <CartProvider>{children}</CartProvider> : <>{children}</>;
```

### PublicLayout.tsx — 라우트 조건부 등록
```typescript
{site.features.auth && (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    ...
  </>
)}
{site.features.shop && (
  <>
    <Route path="/cart" element={<Cart />} />
    ...
  </>
)}
```

## 빌드 결과 (2026-04-07)

| 파일 | 크기 | gzip |
|------|------|------|
| `index.js` (메인 번들) | 469.48 kB | 142.05 kB |
| `index.css` (전체 CSS) | 118.61 kB | 19.35 kB |
| `Pricing.js` | 5.48 kB | 1.58 kB |
| `Home.js` | 4.72 kB | 1.39 kB |
| `Franchise.js` | 4.79 kB | 1.38 kB |
| `Courses.js` | 3.70 kB | 1.34 kB |
| 총 22개 청크 | — | — |
