# Pricing 페이지 상세 스펙

## 개요
- **파일**: `src/pages/Pricing.tsx`
- **CSS**: `src/styles/site.css` (`.pricing-*` 클래스)
- **라우트**: `/pricing`
- **참조 원본**: `ahp_basic/src/pages/PricingPage.tsx` (CSS Modules → 일반 CSS 변환)

## 4개 요금제

| 플랜 | 가격 | 추천 | CTA 동작 |
|------|------|------|----------|
| Free | 무료 | - | `/register`로 이동 |
| Basic | ₩29,000/월 | - | 로그인 확인 → `/shop`으로 이동 |
| Pro | ₩49,000/월 | 추천 | 로그인 확인 → `/shop`으로 이동 |
| Enterprise | 별도 문의 | - | `/franchise`로 이동 |

## 페이지 구성 (4섹션)

### 1. Hero 섹션
- `PRICING` 태그 + 제목 + 부제목
- `page-header` 클래스 사용

### 2. 요금 카드 (pricing-grid)
- 4열 그리드 (반응형: 1024px → 2열, 640px → 1열)
- Pro 카드에 `pricing-card-popular` 클래스 + "추천" 뱃지
- 각 카드: 플랜명 → 가격 → 설명 → 기능 목록 → CTA 버튼
- AOS 애니메이션 (fade-up, delay 100ms씩)

### 3. 비교 테이블 (pricing-compare-table)
- 7개 비교 항목:
  - 가격, 이용 가능 사이트, 이용 기간, 수료증, 전문 컨설팅, 자료 다운로드, 고객 지원

### 4. FAQ 아코디언 (pricing-faq-list)
- 5개 FAQ (faq1~faq5)
- 클릭 시 열림/닫힘 토글 (useState)
- Chevron 아이콘 회전 애니메이션

### 5. Bottom CTA
- 가입 유도 문구 + 버튼 → `/register`

## 번역 키 (translations.ts)

### 한국어 (site.pricing.*)
```
title: '요금제'
subtitle: '목적에 맞는 요금제를 선택하세요'
recommended: '추천'
loginRequired: '로그인이 필요합니다'
addedToCart: '장바구니에 추가되었습니다'

// 플랜별 (free/basic/pro/enterprise)
freeName, freeDesc, freeFeatures, freeBtn
basicName, basicDesc, basicFeatures, basicBtn
proName, proDesc, proFeatures, proBtn
enterpriseName, enterpriseDesc, enterpriseFeatures, enterpriseBtn

// 비교 테이블
compareTitle, compareDesc, compareItem
compare.{price|sites|duration|certificate|consulting|download|support}.{label|free|basic|pro|enterprise}

// FAQ
faq1.q, faq1.a ... faq5.q, faq5.a

// CTA
ctaTitle, ctaDesc, ctaBtn
```

## CSS 클래스 구조

```
.pricing-section
  .pricing-grid
    .pricing-card (.pricing-card-popular)
      .pricing-popular-badge
      .pricing-plan-name
      .pricing-price
        .pricing-amount
        .pricing-period
      .pricing-desc
      .pricing-features
      .pricing-btn

.pricing-compare-section
  .pricing-table-wrap
    .pricing-compare-table
      .pricing-popular-col

.pricing-faq-section
  .pricing-faq-inner
    .pricing-faq-list
      .pricing-faq-item (.pricing-faq-open)
        .pricing-faq-question
          .pricing-faq-chevron
        .pricing-faq-answer

.cta-section
  .cta-content
```

## 반응형 브레이크포인트

| 화면 | 카드 레이아웃 | 테이블 |
|------|--------------|--------|
| 1200px+ | 4열 | 전체 표시 |
| 1024px | 2열 | 스크롤 |
| 640px | 1열 | 스크롤 |

## 다크모드 지원
- 카드 배경: `#1e293b`
- Popular 카드: `#1e3a5f` 배경 + `#60a5fa` 보더
- 테이블: `#334155` 헤더, `#1e293b` 행
- FAQ: `#1e293b` 배경, `#334155` 보더

## handlePlanClick 로직

```typescript
(plan) => {
  if (plan.key === 'free')       → navigate('/register')
  if (plan.key === 'enterprise') → navigate('/franchise')
  if (!isLoggedIn)               → toast warning + navigate('/login')
  else                           → toast success + navigate('/shop')
}
```
