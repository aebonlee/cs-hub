# Biz Hub 관리자 패널

> 작성일: 2026-04-07

## 개요
ai-hub과 동일한 5개 메뉴 구성의 관리자 패널.
`/admin` 경로에서 접근하며, `AdminGuard` 컴포넌트로 관리자 권한을 체크한다.

## 메뉴 구성

| 메뉴 | 경로 | 아이콘 | 설명 |
|------|------|--------|------|
| 대시보드 | /admin | fa-chart-pie | 통계 카드 (주문/매출/회원/상품) |
| 주문 관리 | /admin/orders | fa-receipt | 주문 목록 + 상태 필터 + 상세 펼치기 |
| 회원 관리 | /admin/members | fa-users | 회원 검색/조회 + 기간종료 |
| 상품 관리 | /admin/products | fa-box | 상품 CRUD + 품절/비활성 토글 |
| 쿠폰 관리 | /admin/coupons | fa-ticket | 쿠폰 발행/관리 |

## 파일 구조

### 레이아웃 & 가드
- `src/layouts/AdminLayout.tsx` — 사이드바 + 라우트 (lazy loading)
- `src/components/AdminGuard.tsx` — isAdmin 체크 (AuthContext 사용)
- `src/styles/admin.css` — 관리자 전용 스타일

### 페이지
- `src/pages/admin/Dashboard.tsx` — 대시보드
- `src/pages/admin/Orders.tsx` — 주문 관리
- `src/pages/admin/Members.tsx` — 회원 관리
- `src/pages/admin/Products.tsx` — 상품 목록
- `src/pages/admin/ProductForm.tsx` — 상품 등록/수정 폼
- `src/pages/admin/CouponAdmin.tsx` — 쿠폰 관리

### API
- `src/utils/adminApi.ts` — 대시보드 통계, 주문/회원 CRUD
- `src/utils/couponApi.ts` — 쿠폰 API

## 테이블 매핑
- 주문: `biz_orders`, `biz_order_items` (TABLES 상수 사용)
- 상품: `products` (접두사 없음, productStorage.ts와 동일)
- 회원: `user_profiles` (공용 테이블)

## 회원 관리 상태
| DB 값 | 표시 라벨 | 설명 |
|--------|----------|------|
| active | 비활성 | 기본 상태 (쿠폰 미등록) |
| expired | 기간종료 | 이용기간 만료 |
| suspended | 정지 | 관리자 정지 |
| banned | 차단 | 관리자 차단 |
| deleted | 탈퇴 | 탈퇴 |

## 변경 이력
- 2026-04-07: 관리자 패널 전체 구축 (ai-hub 기준 5개 메뉴)
- 2026-04-07: Navbar 관리자 링크 외부→내부 수정
- 2026-04-07: 회원관리 "상태 변경" → "기간종료" 버튼, 모달 제거
