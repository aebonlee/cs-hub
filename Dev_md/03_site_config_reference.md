# biz-hub 사이트 설정 참조 (site.ts)

## 개요
`src/config/site.ts` 파일 하나로 사이트 전체 설정을 관리합니다.
이 파일만 수정하면 Navbar, Footer, Home, Courses 등 모든 컴포넌트에 자동 반영됩니다.

## SiteConfig 인터페이스 (`src/types/index.ts`)

| 필드 | 타입 | 설명 |
|------|------|------|
| `id` | `string` | 사이트 식별자 (storage key, DB prefix 등) |
| `name` | `string` | 영문 사이트명 |
| `nameKo` | `string` | 한국어 사이트명 |
| `description` | `string` | SEO용 사이트 설명 |
| `url` | `string` | 사이트 URL |
| `dbPrefix` | `string` | Supabase 테이블 접두어 (예: `biz_`) |
| `parentSite` | `{ name, url }` | 상위 사이트 링크 |
| `brand` | `{ parts: BrandPart[] }` | 브랜드 로고 텍스트 구성 |
| `themeColor` | `string` | 메인 테마 색상 (hex) |
| `company` | `CompanyInfo` | 회사 정보 (Footer에 표시) |
| `features` | `SiteFeatures` | 기능 토글 (shop, auth, search 등) |
| `colors` | `ColorOption[]` | 테마 색상 선택지 |
| `categories` | `Category[]` | 코스 카테고리 목록 |
| `learningSites` | `LearningSite[]` | 연결된 학습사이트 목록 |
| `menuItems` | `MenuItem[]` | 네비게이션 메뉴 구성 |
| `footerLinks` | `{ path, labelKey }[]` | 푸터 링크 목록 |
| `familySites` | `FamilySite[]` | 패밀리 사이트 목록 |

## biz-hub 현재 설정값

```typescript
id: 'biz-hub'
name: 'DreamIT Biz Hub'
nameKo: '드림아이티 경영전공학습사이트'
url: 'https://biz-hub.dreamitbiz.com'
dbPrefix: 'biz_'
themeColor: '#0046C8'

// 기능 토글
features: {
  shop: true,        // 쇼핑몰 (Cart, Checkout, OrderHistory)
  community: true,   // 커뮤니티 (Notice, QnA)
  search: true,      // 검색 기능
  auth: true,        // 로그인/회원가입 (Login, Register, MyPage)
  license: true      // 라이선스 관련
}

// 회사 정보
company: {
  name: '드림아이티비즈(DreamIT Biz)',
  ceo: '이애본',
  bizNumber: '601-45-20154',
  salesNumber: '제2024-수원팔달-0584호',
  address: '경기도 수원시 팔달구 매산로 45, 419호',
  email: 'aebon@dreamitbiz.com',
  phone: '010-3700-0629',
  kakao: 'aebon',
  businessHours: '평일: 09:00 ~ 18:00'
}
```

## 카테고리 (3개)

| ID | 한국어 | 영어 | 아이콘 |
|----|--------|------|--------|
| `fundamentals` | 경영기초 | Management Fundamentals | `fa-solid fa-building` |
| `marketing` | 마케팅 | Marketing | `fa-solid fa-chart-line` |
| `digital` | 디지털경영 | Digital Management | `fa-solid fa-rocket` |

## 학습사이트 (8개)

| ID | 사이트명 | URL | 카테고리 | 난이도 |
|----|----------|-----|----------|--------|
| `accounting` | 회계학 원리 | # (준비중) | fundamentals | intermediate |
| `management` | 경영전략론 | # (준비중) | fundamentals | advanced |
| `finance` | 재무관리 | # (준비중) | fundamentals | advanced |
| `marketing-intro` | 마케팅개론 | marketing.dreamitbiz.com | marketing | beginner |
| `self-branding` | 셀프 브랜딩 마케팅 | self-branding.dreamitbiz.com | marketing | beginner |
| `ux-design` | 고객경험디자인 | uxdesign.dreamitbiz.com | digital | intermediate |
| `digital-biz` | 디지털비즈니스전략세미나 | digitalbiz.dreamitbiz.com | digital | advanced |
| `planning` | 전략적 기획 | planning.dreamitbiz.com | digital | intermediate |

## 메뉴 구성 (5개 탑메뉴)

```
경영기초 ─┬─ 회계학 원리
          ├─ 경영전략론
          └─ 재무관리

마케팅 ───┬─ 마케팅개론
          └─ 셀프 브랜딩

디지털경영 ┬─ 고객경험디자인
           ├─ 디지털비즈니스전략세미나
           └─ 전략적 기획

제휴/가맹 ┬─ 요금제
          ├─ 가맹 문의
          └─ 스토어

커뮤니티 ─┬─ 회사소개
          ├─ 공지사항
          └─ Q&A
```

## 패밀리 사이트

| 사이트 | URL |
|--------|-----|
| DreamIT Edu Hub | edu-hub.dreamitbiz.com |
| DreamIT AI Hub | ai-hub.dreamitbiz.com |
| DreamIT Biz | www.dreamitbiz.com |

## 기능 토글 동작

| feature | true일 때 | false일 때 |
|---------|-----------|------------|
| `shop` | CartProvider 활성, Cart/Checkout/OrderHistory 라우트 등록 | CartProvider 미적용, Shop 관련 라우트 제거 |
| `auth` | Login/Register/ForgotPassword/MyPage 라우트 등록 | Auth 라우트 제거 |
| `search` | Navbar 검색 아이콘 표시 | 검색 숨김 |
| `community` | Notice/QnA 활성 | (현재 미구현) |
| `license` | 라이선스 기능 활성 | (현재 미구현) |
