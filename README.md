<h1 align="">Catlendar</h1>


### 배포 링크
👉 [Catlendar 바로가기](https://catlendar.netlify.app/)
</br>


### 테스트 계정
```
ID: catlendar@admin.com
PW: qwer1234!
```
## 1. 서비스 소개
캣린더(Catlendar)는 고양이를 테마로 한 투두 리스트 및 일정 관리 앱으로,<br> 사용자들에게 <b>운세를 통한 영감</b>과 <b>긍정적인 목표 설정</b>을 돕는 데 중점을 둔 서비스입니다.

https://github.com/sorikikikim
https://github.com/kmryuuu
## 2. 팀원 소개
| [🔗 최지완](https://github.com/jiwanchoi) | [🔗 김소리](https://github.com/sorikikikim) | [🔗 류경민](https://github.com/kmryuuu) | [🔗 장성우](https://github.com/swJaNG12) | [🔗 한동수](https://github.com/handongsu) |
| :---: | :---: | :---: | :---: | :---: |
| <img src="https://avatars.githubusercontent.com/u/54405518?v=4" /> | <img src="https://avatars.githubusercontent.com/u/73383923?v=4" /> | <img src="https://avatars.githubusercontent.com/u/138556024?s=400&u=c59a7dfd776d2944acc017d76dcbeed71d1174bf&v=4" /> | <img src="https://avatars.githubusercontent.com/u/123090529?v=4" /> | <img src="https://avatars.githubusercontent.com/u/105100402?v=4" /> |
<br/>



## 3. 역할 분담

<br/>
## 4. 개발 기간 (23.11.27 ~ 23.12.17)

| 주차  |                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------- |
| 1-2주차 | - 주제 선정, 기술 스택 및 협업툴 선정, 컨벤션 정리 </br> - Figma UI 디자인 작업, 기능 요구사항 명세 |
| 3-4주차 | - 페이지별 UI, 컴포넌트 기능 구현    </br> - API 연동 구현                                 |
| 5-6주차 | - 기능별 테스트 후 테스트 케이스 작성 및 보완  </br> - 에러 공유 및 해결                                               |
| 7-8주차 | - 성능 개선 리팩토링 및 반응형 구현      </br> - 웹접근성 문제 해결       |

</br>



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
  라이브러리: React.js, Styled-component, Tanstack-Query(React-Query),chart.js, react-calendar, react-router-dom, axios
  상태관리: Recoil
  IDE: VScode
```

## 2. 규칙

- 브랜치 네이밍 규칙 준수 및 Pull Request 커밋 목적 설명을 위한 이모지 사용
- Styled-components 컨벤션 준수, 컴포넌트 및 스타일 네이밍 규칙 지정
- 구현한 기능에 대해서는 주석 작성

### 컨벤션

eslint

```
extends:
- 'airbnb': Airbnb의 JavaScript 스타일 가이드 적용
- 'airbnb/hooks': React Hooks에 대한 Airbnb 규칙을 적용
- 'plugin:@typescript-eslint/recommended': TypeScript ESLint 플러그인 권장 규칙
- 'plugin:prettier/recommended': Prettier와 ESLint를 함께 사용할 때 충돌을 방지하고 통합을 용이하게 하는 권장 설정

rules:
- 'react/jsx-filename-extension': JSX 문법을 사용하는 파일의 확장자로 .jsx 또는 .tsx만을 허용
- 'react/react-in-jsx-scope': React17 이상에서 JSX를 사용할 때 React를 스코프에 포함할 필요가 없으므로 이 규칙을 비활성화
- 'import/extensions': 모듈을 임포트할 때 확장자를 생략할 수 있도록 설정합니다.
- '@typescript-eslint/no-inferrable-types': 타입 추론이 가능한 경우 명시적인 타입 선언을 금지
- '@typescript-eslint/no-explicit-any': any 타입 사용을 금지
- '@typescript-eslint/no-unused-vars': 사용되지 않는 변수가 있을 경우 경고 발생
- 'prefer-const': 재할당되지 않는 변수에 대해 const 사용을 권장
- 'import/prefer-default-export': 단일 내보내기를 할 때 기본 내보내기를 사용하도록 강제하는 규칙 비활성화

settings:
- 'import/resolver': 모듈 해석 방법을 정의. 여기서는 TypeScript 설정을 추가하여 ESLint가 TypeScript의 경로 및 별칭을 올바르게 해석할 수 있도록 설정
- react: ESLint 플러그인 리액트가 사용할 리액트 버전을 자동으로 감지하도록 설정합니다.
```

prettier

```
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "all",
  "jsxBracketSameLine": false
}
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
