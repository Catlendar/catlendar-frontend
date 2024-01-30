# catlendar
프로젝트 개요 (2024.01.17~)
## 1. 개발 환경
```
  - Cloud
  서비스: AWS
  운영체제: Ubuntu
  인스턴스 유형: EC2 t2.micro
  스토리지: 30GB

  - BackEnd
  언어: Java
  DB: MariaDB 11.2.2
  JDK: 11
  프레임워크:
  Spring 5.3.23
  Spring Boot 2.7.5
  Mybatis 2.2.0
  빌드 도구: Gradle 8.5
  IDE: IntelliJ
  프로젝트 구성 도구: Lombok

  - FrontEnd
  언어: HTML, CSS, TypeScript
  프레임워크: React.js
  라이브러리: Styled-component
  상태관리: React-Query, Recoil
  IDE: VScode
```

## 2. 규칙
  - 브랜치 네이밍 규칙 준수 및 Pull Request 커밋 목적 설명을 위한 이모지 사용
  - Styled-components 컨벤션 준수, 컴포넌트 및 스타일 네이밍 규칙 지정
  - 구현한 기능에 대해서는 주석 작성

### 컨벤션
eslint
```
here
```
prettier
```
here
```
commit
```
    ✨ Feat: 기능 추가, 삭제, 변경
    🐛 Fix: 버그, 오류 수정
    📝 Docs: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)
    🎨 Style: CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)
    ♻️ Refactor: 코드 리팩토링
    ⚙️ Config: npm 모듈 설치 등
    🚚 Rename: 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    🚚 Remove: 파일을 삭제하는 작업만 수행한 경우
```
styled-component
```
Wrapper: ~Wrapper
예시: HeaderWrapper, NavbarWrapper

div 태그: ~Box
예시: InfoBox, ContentBox

section 태그: ~Section
  ex) InfoSection, ContentSection
ul 태그: ~List
  ex) InfoList, ContentList
li 태그: ~Item
  ex) InfoItem, ContentItem
중첩된 스타일링은 최대 2단계까지 허용됨
  ex) - list { li{ a{} } }는 허용됨

li 내에 스타일링할 요소가 3개 이상이면 li를 Item으로 추상화
```
file naming
```
기본 컴포넌트: NewsCard.tsx
스타일 컴포넌트: NewsCard.styled.tsx
  컴포넌트 명: PascalCase
  클래스 명: kebab-case
  변수명, 함수명: camelCase
```
