# Biz Hub 쿠폰 시스템

> 작성일: 2026-04-07

## 개요
강의 수강생에게 1개월 무료 이용권을 제공하는 공유 쿠폰 시스템.
관리자가 강의일 기준으로 쿠폰 코드를 발행하면, 수강생 전원이 같은 코드를 입력하여 강의일+30일까지 서비스를 이용할 수 있다.

## 코드 형식
`BIZ-{YYYYMMDD}-{RANDOM4}` (예: `BIZ-20260407-K3M7`)

## Supabase 테이블

### biz_coupons
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| code | text (UNIQUE) | 쿠폰 코드 |
| label | text | 메모/설명 |
| lecture_date | date | 강의일 |
| expires_at | date | 만료일 (강의일+30) |
| is_active | boolean | 활성 여부 |
| created_by | uuid (FK) | 발행 관리자 |
| created_at | timestamptz | 생성일시 |

### biz_coupon_uses
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| coupon_id | uuid (FK) | 쿠폰 ID |
| user_id | uuid (FK) | 사용자 ID |
| redeemed_at | timestamptz | 등록일시 |
| UNIQUE(coupon_id, user_id) | | 중복 등록 방지 |

## 파일 구조

### 신규 생성
- `src/types/index.ts` — 하단에 Coupon, CouponUse, CouponWithStats, MyCoupon 인터페이스 추가
- `src/utils/couponApi.ts` — 쿠폰 API 6개 함수 (prefix: `biz_`, code: `BIZ`)
- `src/pages/admin/CouponAdmin.tsx` — 관리자 쿠폰 관리 페이지

### 수정
- `src/layouts/AdminLayout.tsx` — CouponAdmin 라우트 + 사이드바 NavLink 추가
- `src/pages/MyPage.tsx` — 쿠폰 등록 섹션 추가
