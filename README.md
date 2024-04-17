<h1 align="">Catlendar</h1>

### 배포 링크

👉 [Catlendar 바로가기](https://catlendar.netlify.app/)
</br>

### 테스트 계정

```
ID: catlendar@admin.com
PW: qwer1234!
```

### 관련 문서

[회의록](https://catlendar.notion.site/9c311a56cd9c4911998d63b3364e3067?v=d9cdfad2f24840988f108c3006063698&p=58b77873274d48849d3adb80e257c04c&pm=s)
</br>
[디자인](https://www.figma.com/file/aEqxxbSZiceOx5h00rSM9X/%EC%BA%A3%EB%A6%B0%EB%8D%94-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&mode=design&t=h0EbNv1ftpS5VANZ-0)
</br>
[API명세서](https://www.notion.so/catlendar/API-dbfb31c8c5764a90bf1636d588ec77d2)
</br>
## 1. 서비스 소개

캣린더(Catlendar)는 고양이를 테마로 한 투두 리스트 및 일정 관리 앱으로,<br> 사용자들에게 <b>운세를 통한 영감</b>과 <b>긍정적인 목표 설정</b>을 돕는 데 중점을 둔 서비스입니다.

</br>

## 2. 팀 소개

|           [🔗 팀장 최지완](https://github.com/jiwanchoi)           |            [🔗 김소리](https://github.com/sorikikikim)             |                                       [🔗 류경민](https://github.com/kmryuuu)                                        |              [🔗 장성우](https://github.com/swJaNG12)               |              [🔗 한동수](https://github.com/handongsu)              |
| :----------------------------------------------------------------: | :----------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/54405518?v=4" /> | <img src="https://avatars.githubusercontent.com/u/73383923?v=4" /> | <img src="https://avatars.githubusercontent.com/u/138556024?s=400&u=c59a7dfd776d2944acc017d76dcbeed71d1174bf&v=4" /> | <img src="https://avatars.githubusercontent.com/u/123090529?v=4" /> | <img src="https://avatars.githubusercontent.com/u/105100402?v=4" /> |

<br/>

## 3. 역할 분담

| 이름 | 내용 |
|---|---|
| 공통 |  - 주제 선정, 기술 스택 및 협업툴 선정
| 최지완 | - AWS EC2서버 증설 및 운영체제 설정 </br> - 데이터베이스 설계 및 구축 </br> - RESTful API 설계 및 개발 </br>- spring security 인증 및 보안 기능 구현 </br> - Axios 라이브러리 설치, API 호출 및 로직 구성 </br> - Recoil 라이브러리 사용, 상태 관리 구현 </br> - API 문서화 작성</br> - 회의록 작성|
| 김소리 | - react-calendar 라이브러리와 연동하여 일정 관리 컴포넌트 및 기능 구현 </br> - Recoil atom을 통해 할 일 완료 여부 데이터 전역 관리 </br> - Recoil selector를 통해 할 일 목록 정렬 로직 구현 </br>  - Chart.js를 통한 일정 완료 시각화로 사용자 경험 개선 </br>  - 반응형 레이아웃(모바일, 데스크탑) 구현으로 서비스 리팩토링 </br> - 웹 접근성 및 SEO 개선    
| 류경민 | - Figma UI 디자인 및 이미지 작업  </br> - 운세 API 연동  </br> - Recoil을 사용하여 운세페이지 컴포넌트 구현  </br> - 운세 페이지 및 헤더 반응형 리팩토링|
| 장성우 | - eslint, tsconfig, prettier 설정  </br> - UI 개발 효율성을 위해 자주 사용되는 색상, 폰트 크기를 CSS 변수로 정의 </br> - profile 페이지 반응형 작업 </br> - 전역 상태 관리: Recoil을 사용해 탭, 할 일 목록, 모달 상태를 전역으로 관리 </br> - 서버 상태 관리: Reqct-Query를 사용하여 서버의 즐겨찾기 데이터 관리 | 
| 한동수 | - 프로필, 설정, 회원정보 수정 페이지 화면 구현 및 기능 작업 </br> - Chart.js 라이브러리로 주차별 완료율 확인 기능 구현 </br> - React-Query를 사용하여 서버와의 통신에서 사용자 경험을 높임 </br> - 성능 개선 리팩토링 및 반응형 구현 </br> - Recoil 전역 상태관리 사용   | 

<br/>

## 4. 개발 기간 (24.01.26 ~ 진행중)

| 주차    | FRONT                                                                                               | BACK                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1-2주차 | - 주제 선정, 기술 스택 및 협업툴 선정, 컨벤션 정리 </br> - Figma UI 디자인 작업, 기능 요구사항 명세 | - AWS EC2서버 증설 및 운영체제 설정 </br> - 데이터베이스 설계 및 구축 </br> - RESTful API 설계 및 개발 |
| 3-4주차 | - 페이지별 UI, 컴포넌트 기능 구현 </br> - API 연동 구현                                             | - 인증 및 보안 기능 구현 </br> - API 문서화 작성 </br> - 외부 서비스와의 통신을 위한 API 연동          |
| 5-6주차 | - 기능별 테스트 후 테스트 케이스 작성 및 보완 </br> - 에러 공유 및 해결                             | - 에러 핸들링 및 디버깅 </br> - 성능 최적화                                                            |
| 7-8주차 | - 성능 개선 리팩토링 및 반응형 구현 </br> - 웹접근성 문제 해결                                      |                                                                                                        |

</br>

## 5. 협업

  <div>
    <a href="https://github.com/Catlendar/catlendar-backend" ><img src="https://img.shields.io/badge/BACK-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
    <a href="https://github.com/Catlendar/catlendar-frontend" ><img src="https://img.shields.io/badge/FRONT-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
    <a href="https://catlendar.notion.site/dad671f7b5ba4914b93eb2b79c9e9954"><img src="https://img.shields.io/badge/notion-white?style=for-the-badge&logo=notion&logoColor=black"/></a>
    <a href="https://www.figma.com/file/aEqxxbSZiceOx5h00rSM9X/%EC%BA%A3%EB%A6%B0%EB%8D%94-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=11-3778&mode=design"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
  </div>

<em> 👉🏻 로고 클릭 시 해당 링크로 이동합니다! </em>
</br>
</br>

## 6. 개발 환경

### 🛠 기술 스택

<div>
  <img src="https://img.shields.io/badge/typescript-grey?style=for-the-badge&logo=typescript&logoColor=f7df1e" />
  <img src="https://img.shields.io/badge/React-grey?style=for-the-badge&logo=React&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/React Router-grey?style=for-the-badge&logo=React Router&logoColor=CA4245"/>
  <img src="https://img.shields.io/badge/Recoil-grey?style=for-the-badge&logo=Recoil&logoColor=3578E5"/>
  <img src="https://img.shields.io/badge/styled components-grey?style=for-the-badge&logo=styled-components&logoColor=DB7093"/>
  <img src="https://img.shields.io/badge/axios-grey?style=for-the-badge&logo=axios&logoColor=f7df1e"/>
  <img src="https://img.shields.io/badge/React Query-grey?style=for-the-badge&logo=react-query&logoColor=D1180B"/>
  <img src="https://img.shields.io/badge/netlify-grey?style=for-the-badge&logo=netlify&logoColor=00C7B7"/>
</div>

<div>
  <img src="https://img.shields.io/badge/JAVA-grey?style=for-the-badge&logo=openjdk&logoColor=f7df1e" />
  <img src="https://img.shields.io/badge/spring-grey?style=for-the-badge&logo=spring&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Spring Boot-grey?style=for-the-badge&logo=Spring Boot&logoColor=3578E5"/>
  <img src="https://img.shields.io/badge/mariaDB-grey?style=for-the-badge&logo=mariaDB&logoColor=CA4245"/>
  <img src="https://img.shields.io/badge/Gradle-grey?style=for-the-badge&logo=Gradle&logoColor=CA4245"/>
  <img src="https://img.shields.io/badge/Amazon AWS-grey?style=for-the-badge&logo=Amazon AWS&logoColor=DB7093"/>
</div>
</br>

기술 스택 상세 정보

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

### 📋 컨벤션

### 규칙

| 구분  | 내용                                                                                                                                                                                                                                                                                            |
| :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BACK  | - 데이터베이스 테이블과 컬럼명은 스네이크 케이스를 사용</br>- 클래스명, 메소드명은 카멜 케이스를 따르며, 변수명은 소문자로 시작하여 카멜 케이스를 사용</br>- 스네이크 케이스 작성의 번거로움을 방지하기 위해 mybatis mapUnderscoreToCamelCase 세팅 필요</br> - 구현한 기능에 대해서는 주석 작성 |
| FRONT | - 브랜치 네이밍 규칙 준수 및 Pull Request 커밋 목적 설명을 위한 이모지 사용</br>- Styled-components 컨벤션 준수, 컴포넌트 및 스타일 네이밍 규칙 지정</br>- 구현한 기능에 대해서는 주석 작성                                                                                                     |

</br>

### Commit

| 제목       | 설명                                                                          |
| :--------- | :---------------------------------------------------------------------------- |
| ✨feat     | 기능 추가, 삭제, 변경                                                         |
| 🐛fix      | 버그, 오류 수정                                                               |
| 📝docs     | readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)     |
| 🎨style    | CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경) |
| ♻️refactor | 코드 리팩토링                                                                 |
| ⚙️ Config  | npm 모듈 설치 등                                                              |
| 🚚rename   | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우                           |
| 🗑remove   | 파일을 삭제하는 작업만 수행한 경우                                            |
| ✅Check    | 작업이 완료된 dev브랜치의 코드를 main브랜치로 머지                            |
| 🔧perform  | 작업이 완료된 dev브랜치의 코드를 main브랜치로 머지                            |
| 🚑 Closed  | 닫힌 pull request                                                             |

</br>

### eslint

```
extends:
- 'airbnb': Airbnb의 JavaScript 스타일 가이드 적용
- 'airbnb/hooks': React Hooks에 대한 Airbnb 규칙을 적용
- 'plugin:@typescript-eslint/recommended': TypeScript ESLint 플러그인 권장 규칙
- 'plugin:prettier/recommended': Prettier와 ESLint를 함께 사용할 때 충돌을 방지하고 통합을 용이하게 하는 권장 설정

rules:
- 'react/jsx-filename-extension': JSX 문법을 사용하는 파일의 확장자로 .jsx 또는 .tsx만을 허용
- 'react/react-in-jsx-scope': React17 이상에서 JSX를 사용할 때 React를 스코프에 포함할 필요가 없으므로 이 규칙을 비활성화
- 'react/require-default-props': 컴포넌트의 defaultProps 정의를 강제하지 않습니다.
- 'import/extensions': import 문에서 파일 확장자를 명시하지 않아도 되도록 설정합니다. .js, .jsx, .ts, .tsx 확장자는 무시
- '@typescript-eslint/no-inferrable-types': 타입 추론이 가능한 경우 명시적인 타입 선언을 금지
- '@typescript-eslint/no-explicit-any': any 타입의 사용을 금지하지 않습니다.
- '@typescript-eslint/no-unused-vars': 사용되지 않는 변수가 있을 경우 경고 발생
- 'prefer-const': 재할당되지 않는 변수에 대해 const 사용을 권장
- 'import/prefer-default-export': 단일 내보내기를 할 때 기본 내보내기를 사용하도록 강제하는 규칙 비활성화
- 'import/no-unresolved': 해결되지 않는 import에 대한 경고를 비활성화

settings:
- 'import/resolver': 모듈 해석 방법을 정의. 여기서는 TypeScript 설정을 추가하여 ESLint가 TypeScript의 경로 및 별칭을 올바르게 해석할 수 있도록 설정
- react: ESLint 플러그인 리액트가 사용할 리액트 버전을 자동으로 감지하도록 설정합니다.
```

### prettier

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

### styled-component

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

### file naming

```
기본 컴포넌트: NewsCard.tsx
스타일 컴포넌트: NewsCard.styled.tsx
  컴포넌트 명: PascalCase
  클래스 명: kebab-case
  변수명, 함수명: camelCase
```

## 7. 트러블 슈팅

### 1. **Netlify와 AWS서버 간 HTTP와 HTTPS 통신 문제 해결**

Netlify는 기본적으로 HTTPS를 사용하지만, AWS서버는 SSL 인증을 받지 않아 HTTP를 사용했습니다. 

이는 배포 환경에서 프론트와 서버 간 통신을 금지하는 네트워크 정책으로 문제가 발생했습니다. 서버에 SSL 인증을 받아 HTTPS로 변경하는 해결책은 비용과 서버 간 통신 문제로 인해 어려웠고, Netlify에서 HTTPS를 HTTP로 변경하는 것도 불가능했습니다. 

이에, 로컬 환경에서는 기존 서버 URL을 사용하고, Netlify 배포 환경에서는 baseURL에 API를 지정하여 public/_redirects에서 **프록시를 통해 요청을 보내는 방식**으로 문제를 해결했습니다.

👉 [참고 사이트](https://velog.io/@jiheon788/Netlify%EC%97%90%EC%84%9C-HTTPS-HTTP-%ED%86%B5%EC%8B%A0-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95)

</br>

### 2. **모바일, 데스크탑에 따라 /calendar 페이지 유무가 결정되도록 디자인 되어 단순히 media query로 해결이 불가능**
기존의 모바일 중심 개발에서 반응형 레이아웃으로 개선하면서, 화면 크기에 따라 다른 라우터와 컴포넌트들을 표시해야 했습니다. 
이를 CSS의 media query만으로 처리할 수 없어서, 라우트 컴포넌트에서 렌더링 할 컴포넌트들을 초기 처리를 한 뒤 각 컴포넌트들의 스타일에 대해 반응형 작업이 필요하다고 생각했습니다. <br />
<br />
따라서 저는 라우트 컴포넌트 내에서 useEffect 훅을 사용하여 window.innerWidth로 화면 크기 변화를 감지했으며, 데스크탑 여부를 flag로 주어 업데이트 했습니다. 컴포넌트가 마운트 해제되거나 업데이트되기 전 useEffect의 클린업 함수가 실행될 때, 창 크기 조정 이벤트 리스너를 제거하여 메모리 누수를 방지하였습니다.
```
export default function Router() {
  // 내용에 해당하는 코드 외에는 생략하였습니다.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };
    // 창 크기에 따라 isDesktop 결정
    handleResize();
    // 창 크기 조정 이벤트 수신
    window.addEventListener('resize', handleResize);

    return () => {
      // 리턴되어 클린업 함수 호출 시(언마운트 혹은 업데이트 시), 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);
```

이 화면 크기 정보로 결정되는 isDesktop이라는 flag를 컴포넌트의 props로 전달하여 필요한 처리를 하였습니다. 이 값에 따라 컴포넌트 내에서 보여줄 컴포넌트 선별 및 스타일링을 했습니다.  
```
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Layout main={<LandingPage />} />} />
        {['/', '/home'].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                {isLoggedIn === '' ? (
                  <Layout main={<LandingPage />} />
                ) : isLoggedIn ? (
                  // 컴포넌트에 isDesktop을 props로 넘겨줌
                  <Layout
                    main={<HomePage isDesktop={isDesktop} />}
                    navbar={<NavBar isDesktop={isDesktop} />}
                  />
                ) : null}
              </>
            }
          />
        ))}
        <Route
          path="/calendar"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && !isDesktop ? (
                 // 컴포넌트에 isDesktop을 props로 넘겨줌
                <Layout main={<CalendarPage />} navbar={<NavBar isDesktop={isDesktop} />} />
              ) : isLoggedIn && isDesktop ? (
                 // 데스크탑 사이즈인 경우 /calendar에서 /home으로 리다이렉트 되도록 설정
                <Navigate to="/home" />
              ) : null}
            </>
          }
        />

```
 이러한 접근 방식을 통해 화면 크기에 따라 적절한 라우팅 및 UI를 제공할 수 있었습니다.

</br>

### 3. **Recoil 상태 초기화 문제 해결을 위한 recoil-persist 라이브러리 적용**

운세 페이지에서는 Recoil을 사용하여 운세 데이터와 선택된 탭의 정보를 전역적으로 관리하고 있습니다. 
그러나 Recoil을 적용한 후에 페이지를 새로고침할 때마다 운세 데이터가 초기화되는 문제가 발생했습니다. 
이 문제를 해결하기 위해 recoil-persist 라이브러리를 적용했습니다.
```
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
```
새로고침이 되어도 상태가 유지되도록 하기 위해, 해당 atom에 effects_UNSTABLE 속성을 추가하여 recoil-persist를 활성화하였습니다.
```
export const fortuneDataAtom = atom<fortuneDataAtom>({
  key: 'fortuneData',
  default: { fortuneTitle: '', fortuneDesc: [] },
  effects_UNSTABLE: [persistAtom],
});
```
이렇게 하면 Recoil이 페이지를 새로고침할 때 초기 상태를 가져와서 렌더링 하는 것이 아니라, 데이터를 Localstage에 저장하여 이전 상태를 복원합니다. 
이를 통해 사용자가 페이지를 새로고침해도 운세 데이터가 유지될 수 있습니다.

</br>

