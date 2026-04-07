# biz-hub 환경 설정 가이드

## 필수 환경

- **Node.js**: v18+
- **패키지 매니저**: npm
- **프레임워크**: React 19 + Vite 7 + TypeScript 5.8

## 의존성 설치

```bash
cd D:/dreamit-web/biz-hub
npm install
```

## 환경 변수 (.env)

```env
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...  (Supabase anon key)
VITE_SITE_URL=https://biz-hub.dreamitbiz.com
```

> `.env` 파일은 gitignore에 포함됩니다. 새 환경에서는 수동 생성 필요.

## 개발 서버

```bash
npm run dev
# → http://localhost:5180
```

## 빌드 & 타입체크

```bash
npm run typecheck   # tsc -b (TypeScript 검증)
npm run build       # tsc -b && vite build → dist/
```

## 배포 (GitHub Pages)

```bash
npx gh-pages -d dist
# → https://biz-hub.dreamitbiz.com 에 배포
```

### CNAME 설정
- `public/CNAME` 파일에 `biz-hub.dreamitbiz.com` 기재
- GitHub 리포지토리 Settings → Pages → Custom domain 설정

### DNS 설정
- `biz-hub.dreamitbiz.com` → CNAME → `aebonlee.github.io`

## Vite 설정 (vite.config.ts)

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist', assetsDir: 'assets', emptyOutDir: true },
  server: { host: true, port: 5180 }
})
```

## Supabase 설정

### 프로젝트 정보
- **URL**: hcmgdztsgjvzcyxyayaj.supabase.co
- **테이블 접두어**: `biz_`

### 테이블 목록
| 테이블 | 용도 |
|--------|------|
| `biz_orders` | 주문 |
| `biz_order_items` | 주문 상세 |
| `biz_franchise_applications` | 가맹 신청 |
| `user_profiles` | 사용자 프로필 (공용) |

### SQL 스크립트
- 테이블 생성: `Dev_md/01_supabase_schema.sql`
- Supabase Dashboard → SQL Editor에서 실행

## package.json 주요 의존성

| 패키지 | 버전 | 용도 |
|--------|------|------|
| `react` | ^19.2.0 | UI 프레임워크 |
| `react-router-dom` | ^7.13.0 | 라우팅 |
| `@supabase/supabase-js` | ^2.96.0 | Supabase 클라이언트 |
| `@portone/browser-sdk` | ^0.1.3 | 결제 (PortOne) |
| `vite` | ^7.3.1 | 빌드 도구 |
| `typescript` | ~5.8.3 | 타입 체크 |

## Git 워크플로우

```bash
# 1. 변경 작업
# 2. 타입체크
npm run typecheck

# 3. 빌드
npm run build

# 4. 커밋 & 푸시
git add <files>
git commit -m "feat: 설명"
git push origin main

# 5. 배포
npx gh-pages -d dist
```
