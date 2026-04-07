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
  description: 'DreamIT CS Hub - CS전공 학습사이트 허브. 프로그래밍, 알고리즘, 자료구조 등 13개 CS 학습 플랫폼',
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
    { id: 'programming', name: '프로그래밍', nameEn: 'Programming', icon: 'fa-solid fa-code', path: '/courses/programming' },
    { id: 'cs-theory', name: 'CS이론', nameEn: 'CS Theory', icon: 'fa-solid fa-microchip', path: '/courses/cs-theory' },
    { id: 'infra', name: '인프라', nameEn: 'Infrastructure', icon: 'fa-solid fa-server', path: '/courses/infra' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.programming', path: '/courses/programming', activePath: '/courses/programming',
      dropdown: [
        { path: '/courses/coding', labelKey: 'site.nav.coding' },
        { path: '/courses/c-study', labelKey: 'site.nav.cStudy' },
        { path: '/courses/python-study', labelKey: 'site.nav.pythonStudy' },
        { path: '/courses/java-study', labelKey: 'site.nav.javaStudy' },
        { path: '/courses/reactstudy', labelKey: 'site.nav.reactStudy' },
        { path: '/courses/html', labelKey: 'site.nav.html' },
      ]
    },
    {
      labelKey: 'site.nav.csTheory', path: '/courses/cs-theory', activePath: '/courses/cs-theory',
      dropdown: [
        { path: '/courses/algorithm', labelKey: 'site.nav.algorithm' },
        { path: '/courses/data-structure', labelKey: 'site.nav.dataStructure' },
        { path: '/courses/software', labelKey: 'site.nav.software' },
        { path: '/courses/webstudy', labelKey: 'site.nav.webStudy' },
      ]
    },
    {
      labelKey: 'site.nav.infra', path: '/courses/infra', activePath: '/courses/infra',
      dropdown: [
        { path: '/courses/linux-study', labelKey: 'site.nav.linuxStudy' },
        { path: '/courses/db-study', labelKey: 'site.nav.dbStudy' },
        { path: '/courses/koreatech', labelKey: 'site.nav.koreatech' },
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
    { path: '/courses/programming', labelKey: 'site.nav.programming' },
    { path: '/courses/cs-theory', labelKey: 'site.nav.csTheory' },
    { path: '/courses/infra', labelKey: 'site.nav.infra' },
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
    // ── 프로그래밍 (programming) ──
    {
      id: 'coding', name: '코딩 기초', nameEn: 'Coding Basics', url: 'https://coding.dreamitbiz.com',
      icon: 'fa-solid fa-laptop-code', color: '#2563EB', category: 'programming',
      description: '프로그래밍의 기본 개념과 코딩 실습을 통해 개발 역량을 키웁니다.',
      descriptionEn: 'Build development skills through basic programming concepts and coding practice.',
      techStack: ['Python', 'JavaScript', '알고리즘기초', '문제해결'], difficulty: 'beginner',
      curriculum: ['프로그래밍 개념 이해', '변수와 자료형', '조건문과 반복문', '함수와 모듈', '기초 프로젝트 실습'],
      curriculumEn: ['Understanding programming concepts', 'Variables and data types', 'Conditionals and loops', 'Functions and modules', 'Basic project practice'],
      features: ['실습 중심 학습', '코드 리뷰', '프로젝트 기반'],
      featuresEn: ['Practice-centered learning', 'Code review', 'Project-based'],
      target: '프로그래밍 입문자, 비전공자', targetEn: 'Programming beginners, non-CS majors',
    },
    {
      id: 'c-study', name: 'C언어', nameEn: 'C Programming', url: 'https://c-study.dreamitbiz.com',
      icon: 'fa-solid fa-c', color: '#6366F1', category: 'programming',
      description: 'C언어의 기초부터 포인터, 메모리 관리까지 시스템 프로그래밍을 학습합니다.',
      descriptionEn: 'Learn system programming from C basics to pointers and memory management.',
      techStack: ['C언어', '포인터', '메모리관리', '시스템프로그래밍'], difficulty: 'intermediate',
      curriculum: ['C언어 기본 문법', '포인터와 배열', '구조체와 공용체', '파일 입출력', '동적 메모리 할당'],
      curriculumEn: ['C language basics', 'Pointers and arrays', 'Structs and unions', 'File I/O', 'Dynamic memory allocation'],
      features: ['시스템 프로그래밍', '메모리 관리 실습', '코딩 테스트 대비'],
      featuresEn: ['System programming', 'Memory management practice', 'Coding test prep'],
      target: 'CS전공자, 시스템 개발자 지망생', targetEn: 'CS majors, aspiring system developers',
    },
    {
      id: 'python-study', name: 'Python', nameEn: 'Python Programming', url: 'https://python-study.dreamitbiz.com',
      icon: 'fa-brands fa-python', color: '#3776AB', category: 'programming',
      description: 'Python 프로그래밍의 기초부터 데이터 분석, 자동화까지 폭넓게 학습합니다.',
      descriptionEn: 'Learn Python programming from basics to data analysis and automation.',
      techStack: ['Python', '데이터분석', '자동화', '웹크롤링'], difficulty: 'beginner',
      curriculum: ['Python 기본 문법', '자료구조 활용', '파일 처리와 예외', '라이브러리 활용', '미니 프로젝트'],
      curriculumEn: ['Python basics', 'Data structure usage', 'File handling and exceptions', 'Library usage', 'Mini projects'],
      features: ['실습 프로젝트', '자동화 스크립트', '데이터 분석 입문'],
      featuresEn: ['Practice projects', 'Automation scripts', 'Data analysis intro'],
      target: '프로그래밍 입문자, 데이터 분석 관심자', targetEn: 'Programming beginners, data analysis enthusiasts',
    },
    {
      id: 'java-study', name: 'Java', nameEn: 'Java Programming', url: 'https://java-study.dreamitbiz.com',
      icon: 'fa-brands fa-java', color: '#F89820', category: 'programming',
      description: 'Java 객체지향 프로그래밍과 엔터프라이즈 개발 기초를 학습합니다.',
      descriptionEn: 'Learn Java OOP and enterprise development fundamentals.',
      techStack: ['Java', 'OOP', '컬렉션', '스레드'], difficulty: 'intermediate',
      curriculum: ['Java 기본 문법', '객체지향 프로그래밍', '컬렉션 프레임워크', '예외 처리와 I/O', '멀티스레드 프로그래밍'],
      curriculumEn: ['Java basics', 'Object-oriented programming', 'Collection framework', 'Exception handling and I/O', 'Multi-thread programming'],
      features: ['OOP 설계 패턴', '실전 프로젝트', '코딩 테스트 대비'],
      featuresEn: ['OOP design patterns', 'Real-world projects', 'Coding test prep'],
      target: 'CS전공자, 백엔드 개발자 지망생', targetEn: 'CS majors, aspiring backend developers',
    },
    {
      id: 'reactstudy', name: 'React', nameEn: 'React Development', url: 'https://reactstudy.dreamitbiz.com',
      icon: 'fa-brands fa-react', color: '#61DAFB', category: 'programming',
      description: 'React를 활용한 모던 프론트엔드 개발을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn modern frontend development with React.',
      techStack: ['React', 'TypeScript', 'Hooks', '상태관리'], difficulty: 'intermediate',
      curriculum: ['React 기본 개념', 'JSX와 컴포넌트', 'Hooks와 상태 관리', '라우팅과 API 연동', 'React 프로젝트 실습'],
      curriculumEn: ['React fundamentals', 'JSX and components', 'Hooks and state management', 'Routing and API integration', 'React project practice'],
      features: ['컴포넌트 설계', 'TypeScript 적용', '실전 프로젝트'],
      featuresEn: ['Component design', 'TypeScript integration', 'Real-world projects'],
      target: '프론트엔드 개발자 지망생', targetEn: 'Aspiring frontend developers',
    },
    {
      id: 'html', name: 'HTML/CSS', nameEn: 'HTML & CSS', url: 'https://html.dreamitbiz.com',
      icon: 'fa-brands fa-html5', color: '#E34F26', category: 'programming',
      description: '웹의 기초인 HTML과 CSS를 배우고 반응형 웹 페이지를 만듭니다.',
      descriptionEn: 'Learn web fundamentals HTML/CSS and build responsive web pages.',
      techStack: ['HTML5', 'CSS3', '반응형', 'Flexbox'], difficulty: 'beginner',
      curriculum: ['HTML 기본 태그', 'CSS 스타일링', 'Flexbox와 Grid', '반응형 디자인', '웹 페이지 프로젝트'],
      curriculumEn: ['HTML basic tags', 'CSS styling', 'Flexbox and Grid', 'Responsive design', 'Web page project'],
      features: ['실습 중심', '반응형 웹', '포트폴리오 제작'],
      featuresEn: ['Practice-centered', 'Responsive web', 'Portfolio creation'],
      target: '웹 개발 입문자', targetEn: 'Web development beginners',
    },
    // ── CS이론 (cs-theory) ──
    {
      id: 'algorithm', name: '알고리즘', nameEn: 'Algorithms', url: 'https://algorithm.dreamitbiz.com',
      icon: 'fa-solid fa-diagram-project', color: '#DC2626', category: 'cs-theory',
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
      icon: 'fa-solid fa-layer-group', color: '#7C3AED', category: 'cs-theory',
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
      id: 'software', name: '소프트웨어공학', nameEn: 'Software Engineering', url: 'https://software.dreamitbiz.com',
      icon: 'fa-solid fa-gears', color: '#059669', category: 'cs-theory',
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
      id: 'webstudy', name: '웹 개발', nameEn: 'Web Development', url: 'https://webstudy.dreamitbiz.com',
      icon: 'fa-solid fa-globe', color: '#0891B2', category: 'cs-theory',
      description: '웹 개발 전반의 이론과 실습을 통해 풀스택 역량을 키웁니다.',
      descriptionEn: 'Build full-stack skills through web development theory and practice.',
      techStack: ['프론트엔드', '백엔드', 'API', '배포'], difficulty: 'intermediate',
      curriculum: ['웹 아키텍처 이해', '프론트엔드 기술', '백엔드와 API', '데이터베이스 연동', '배포와 DevOps 기초'],
      curriculumEn: ['Web architecture', 'Frontend technologies', 'Backend and API', 'Database integration', 'Deployment and DevOps basics'],
      features: ['풀스택 프로젝트', '실전 배포', 'API 설계'],
      featuresEn: ['Full-stack projects', 'Real deployment', 'API design'],
      target: '웹 개발자 지망생', targetEn: 'Aspiring web developers',
    },
    // ── 인프라 (infra) ──
    {
      id: 'linux-study', name: '리눅스', nameEn: 'Linux', url: 'https://linux-study.dreamitbiz.com',
      icon: 'fa-brands fa-linux', color: '#FCC624', category: 'infra',
      description: '리눅스 운영체제의 기초부터 서버 관리까지 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn Linux from basics to server administration.',
      techStack: ['리눅스', '셸스크립트', '서버관리', '네트워크'], difficulty: 'intermediate',
      curriculum: ['리눅스 기본 명령어', '파일 시스템과 권한', '셸 스크립트', '프로세스와 서비스 관리', '네트워크 설정'],
      curriculumEn: ['Linux basic commands', 'File system and permissions', 'Shell scripting', 'Process and service management', 'Network configuration'],
      features: ['실습 환경 제공', '서버 구축', '자격증 대비'],
      featuresEn: ['Practice environment', 'Server setup', 'Certification prep'],
      target: 'CS전공자, 시스템 관리자 지망생', targetEn: 'CS majors, aspiring system administrators',
    },
    {
      id: 'db-study', name: '데이터베이스', nameEn: 'Database', url: 'https://db-study.dreamitbiz.com',
      icon: 'fa-solid fa-database', color: '#0E7490', category: 'infra',
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
      id: 'koreatech', name: '한국IT', nameEn: 'Korea IT', url: 'https://koreatech.dreamitbiz.com',
      icon: 'fa-solid fa-building-columns', color: '#6D28D9', category: 'infra',
      description: '한국 IT 산업의 이해와 기술 트렌드, 실무 역량을 학습합니다.',
      descriptionEn: 'Learn about Korean IT industry, technology trends, and practical skills.',
      techStack: ['IT산업', '기술트렌드', 'ICT정책', '실무역량'], difficulty: 'beginner',
      curriculum: ['한국 IT 산업 현황', 'ICT 기술 트렌드', '디지털 정부와 공공 IT', 'IT 자격증 로드맵', '실무 역량 강화'],
      curriculumEn: ['Korean IT industry overview', 'ICT technology trends', 'Digital government and public IT', 'IT certification roadmap', 'Practical skill building'],
      features: ['산업 분석', '트렌드 리포트', '자격증 가이드'],
      featuresEn: ['Industry analysis', 'Trend reports', 'Certification guide'],
      target: 'IT 입문자, 취업 준비생', targetEn: 'IT beginners, job seekers',
    },
  ],
};

export default site;
