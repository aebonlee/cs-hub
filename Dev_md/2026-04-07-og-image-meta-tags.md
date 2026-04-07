# OG 이미지 생성 및 메타 태그 개선

- **날짜**: 2026-04-07
- **사이트**: biz-hub (https://biz-hub.dreamitbiz.com)
- **작업자**: Claude Code (Opus 4.6)

---

## 작업 배경

카카오톡 등 SNS 공유 시 미리보기 이미지(Open Graph)가 템플릿 기본값("Template Ref / 템플릿 레퍼런스")으로 표시되는 문제 해결.

## 변경 파일

| 파일 | 변경 내용 |
|------|-----------|
| `public/og-image.png` | OG 이미지 신규 생성 (1200x630) |
| `index.html` | OG 메타 태그 개선 |

---

## 1. OG 이미지 생성 (`public/og-image.png`)

### 이전
- "Template Ref / 템플릿 레퍼런스" 갈색 그라데이션 (templete-ref 기본값 그대로)

### 변경
- sharp 패키지 임시 설치 → SVG → PNG 변환 방식으로 생성
- 생성 후 sharp 제거, 생성 스크립트(generate-og.mjs) 삭제

### 디자인 사양
- **크기**: 1200 x 630px (OG 표준)
- **배경**: 블루 그라데이션 (#001A4D → #0046C8 → #0066FF)
- **브랜드**: DREAMIT BIZ (상단)
- **메인 타이틀**: Biz Hub
- **서브타이틀**: 경영전공 학습사이트 허브
- **설명**: 회계, 재무, 마케팅, 디지털경영까지 — 경영전공 8개 학습사이트를 하나의 허브에서
- **카테고리 태그**: 경영기초 / 마케팅 / 디지털경영
- **과목 그리드 (2행×4열)**:
  - 회계학 원리, 경영전략론, 재무관리, 마케팅개론
  - 셀프 브랜딩, CX디자인, 디지털비즈, 전략적 기획
- **하단**: biz-hub.dreamitbiz.com / 8 Courses 배지

---

## 2. OG 메타 태그 개선 (`index.html`)

### 변경 사항

| 항목 | 이전 | 변경 |
|------|------|------|
| `meta description` | `DreamIT Biz Hub - 경영전공 학습사이트 허브` | `회계, 재무, 마케팅, 디지털경영까지 — 경영전공 8개 학습사이트를 하나의 허브에서 만나보세요. 경영기초·마케팅·디지털경영 3개 트랙 제공.` |
| `meta keywords` | (없음) | `경영학,경영전공,회계학,재무관리,마케팅,디지털경영,경영전략,CX디자인,셀프브랜딩,기획,온라인학습,LMS` |
| `og:url` | 슬래시 없음 | canonical과 일치하도록 trailing slash 추가 |
| `og:title` | `DreamIT Biz Hub - 경영전공학습사이트` | `DreamIT Biz Hub — 경영전공 학습사이트 허브` |
| `og:description` | 기존 설명 | 3개 트랙 정보 추가 |
| `og:image:alt` | (없음) | `DreamIT Biz Hub - 경영전공 8개 학습사이트 허브` |
| `og:site_name` | `DreamIT Biz` | `DreamIT Biz Hub` |
| `og:locale` | (없음) | `ko_KR` |
| `twitter:title/description` | og와 동일하게 개선 | — |

---

## 배포 후 확인

- 카카오 디버거: https://developers.kakao.com/tool/debugger/sharing
- Facebook 디버거: https://developers.facebook.com/tools/debug/
- URL 입력 후 캐시 초기화하면 새 OG 이미지 반영됨
