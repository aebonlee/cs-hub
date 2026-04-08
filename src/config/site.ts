/**
 * DreamIT CS Hub - 사이트 설정 파일
 * CS전공 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer/Home/Courses가 자동으로 반영됩니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'cs-hub',
  name: 'DreamIT CS Hub',
  nameKo: '드림아이티 CS전공학습사이트',
  description: 'DreamIT CS Hub - CS전공 학습사이트 허브. 알고리즘, 자료구조, 데이터베이스, 소프트웨어공학 등 5개 CS전공 학습 플랫폼',
  url: 'https://cs-hub.dreamitbiz.com',
  dbPrefix: 'csh_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'CS', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#0F766E',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: true, community: true, search: true, auth: true, license: true },

  colors: [
    { name: 'blue', color: '#0F766E' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  categories: [
    { id: 'cs-major', name: '컴퓨터전공', nameEn: 'CS Major', icon: 'fa-solid fa-microchip', path: '/courses/cs-major' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.csMajor', path: '/courses/cs-major', activePath: '/courses/cs-major',
      dropdown: [
        { path: '/courses/algorithm', labelKey: 'site.nav.algorithm' },
        { path: '/courses/data-structure', labelKey: 'site.nav.dataStructure' },
        { path: '/courses/db-study', labelKey: 'site.nav.dbStudy' },
        { path: '/courses/software', labelKey: 'site.nav.software' },
        { path: '/courses/info-comm', labelKey: 'site.nav.infoComm' },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/pricing', labelKey: 'site.nav.pricing' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/cs-major', labelKey: 'site.nav.csMajor' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz Hub', url: 'https://biz-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    // ── 컴퓨터전공 (cs-major) ──
    {
      id: 'algorithm', name: '알고리즘', nameEn: 'Algorithms', url: 'https://algorithm.dreamitbiz.com',
      icon: 'fa-solid fa-diagram-project', color: '#DC2626', category: 'cs-major',
      description: '정렬, 탐색, 그래프 등 핵심 알고리즘과 문제 해결 능력을 키웁니다.',
      descriptionEn: 'Build core algorithm skills including sorting, searching, and graph algorithms.',
      techStack: ['정렬', '탐색', '그래프', 'DP'], difficulty: 'intermediate',
      curriculum: ['시간/공간 복잡도', '정렬과 탐색 알고리즘', '그래프 알고리즘', '동적 프로그래밍', '코딩 테스트 실전'],
      curriculumEn: ['Time/space complexity', 'Sorting and searching algorithms', 'Graph algorithms', 'Dynamic programming', 'Coding test practice'],
      features: ['문제 풀이 실습', '코딩 테스트 대비', '알고리즘 시각화'],
      featuresEn: ['Problem solving practice', 'Coding test prep', 'Algorithm visualization'],
      target: 'CS전공자, 코딩 테스트 준비생', targetEn: 'CS majors, coding test candidates',
    },
    {
      id: 'data-structure', name: '자료구조', nameEn: 'Data Structures', url: 'https://data-structure.dreamitbiz.com',
      icon: 'fa-solid fa-layer-group', color: '#7C3AED', category: 'cs-major',
      description: '배열, 링크드리스트, 트리, 해시 등 핵심 자료구조를 학습합니다.',
      descriptionEn: 'Learn core data structures including arrays, linked lists, trees, and hash tables.',
      techStack: ['배열', '연결리스트', '트리', '해시'], difficulty: 'intermediate',
      curriculum: ['배열과 연결 리스트', '스택과 큐', '트리와 이진 탐색 트리', '해시 테이블', '그래프 자료구조'],
      curriculumEn: ['Arrays and linked lists', 'Stacks and queues', 'Trees and BST', 'Hash tables', 'Graph data structures'],
      features: ['자료구조 시각화', '구현 실습', '성능 분석'],
      featuresEn: ['Data structure visualization', 'Implementation practice', 'Performance analysis'],
      target: 'CS전공자, 개발자', targetEn: 'CS majors, developers',
    },
    {
      id: 'db-study', name: '데이터베이스', nameEn: 'Database', url: 'https://db-study.dreamitbiz.com',
      icon: 'fa-solid fa-database', color: '#0E7490', category: 'cs-major',
      description: '관계형 데이터베이스와 SQL의 기초부터 고급 쿼리까지 학습합니다.',
      descriptionEn: 'Learn relational databases and SQL from basics to advanced queries.',
      techStack: ['SQL', 'ERD', '정규화', '인덱싱'], difficulty: 'intermediate',
      curriculum: ['데이터베이스 개념', 'SQL 기본 쿼리', 'ERD와 정규화', '인덱스와 성능 최적화', '트랜잭션과 동시성'],
      curriculumEn: ['Database concepts', 'Basic SQL queries', 'ERD and normalization', 'Index and performance optimization', 'Transaction and concurrency'],
      features: ['SQL 실습', 'DB 설계', '성능 튜닝'],
      featuresEn: ['SQL practice', 'DB design', 'Performance tuning'],
      target: 'CS전공자, DB 엔지니어 지망생', targetEn: 'CS majors, aspiring DB engineers',
    },
    {
      id: 'software', name: '소프트웨어공학', nameEn: 'Software Engineering', url: 'https://software.dreamitbiz.com',
      icon: 'fa-solid fa-gears', color: '#059669', category: 'cs-major',
      description: '소프트웨어 개발 방법론, 설계 패턴, 프로젝트 관리를 학습합니다.',
      descriptionEn: 'Learn software development methodology, design patterns, and project management.',
      techStack: ['애자일', '디자인패턴', 'UML', '테스팅'], difficulty: 'advanced',
      curriculum: ['소프트웨어 개발 생명주기', '요구사항 분석', '설계 패턴', '테스트와 품질 보증', '프로젝트 관리'],
      curriculumEn: ['Software development lifecycle', 'Requirements analysis', 'Design patterns', 'Testing and QA', 'Project management'],
      features: ['팀 프로젝트', '코드 리뷰', '애자일 실습'],
      featuresEn: ['Team projects', 'Code review', 'Agile practice'],
      target: 'CS전공자, 소프트웨어 엔지니어', targetEn: 'CS majors, software engineers',
    },
    {
      id: 'info-comm', name: '정보통신', nameEn: 'Information & Communication', url: '#',
      icon: 'fa-solid fa-tower-cell', color: '#2563EB', category: 'cs-major',
      description: '정보통신의 기본 원리와 네트워크, 프로토콜, 보안 등을 학습합니다.',
      descriptionEn: 'Learn fundamentals of information & communication including networks, protocols, and security.',
      techStack: ['네트워크', '프로토콜', '정보보안', '통신이론'], difficulty: 'intermediate',
      curriculum: ['정보통신 개론', '네트워크 아키텍처', '프로토콜과 표준', '정보보안 기초', '무선통신과 IoT'],
      curriculumEn: ['Introduction to information & communication', 'Network architecture', 'Protocols and standards', 'Information security basics', 'Wireless communication and IoT'],
      features: ['네트워크 실습', '프로토콜 분석', '보안 실습'],
      featuresEn: ['Network practice', 'Protocol analysis', 'Security practice'],
      target: 'CS전공자, 네트워크 엔지니어 지망생', targetEn: 'CS majors, aspiring network engineers',
    },
  ],
};

export default site;
