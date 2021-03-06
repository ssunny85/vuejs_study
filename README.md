# Vue.js study
- Vue.js 개인학습 저장소입니다.

## Vue.js 입문
- 2018.03.27 Chapter03 인스턴스 & 컴포넌트 (데이터 전달하기)
- 2018.03.28 Chapter04 라우터 & HTTP통신
- 2018.03.29 Chapter05-1 뷰 템플릿
- 2018.03.29 Chapter06 TODO APP만들기
- 2018.03.30 Chapter06 TODO APP 고도화
- 2018.04.02 Chapter07 Vue.js 고급 개발자 되기
- 2018.04.02 타 사이트를 Vue.js이용하여 만들어보기
- 2018.04.03 vue router사용하여 상세화면으로 이동

### Chapter01. Vue.js
- 웹 페이지 화면 개발을 위한 프레임워크
- 점진적인 프레임워크 (라이브러리 역할 뿐만 아니라 프레임워크 역할도 할 수 있음)
- MVVM패턴 (모델-뷰-뷰모델)
- 컴포넌트 기반의 프레임워크
- 뷰모델에 자바스크립트 객체와 돔을 연결해주면 뷰모델은 이 둘간의 동기화를 자동으로 처리 ← Vue.js 역할

### Chapter03. 데이터 전달하기
- 컴포넌트 단위로 화면을 구성하기 때문에 같은 페이지라도 데이터를 공유할 수 없음
- 컴포넌트마다 고유한 유효범위를 가지기 때문에 직접 컴포넌트의 데이터를 참조 못함
- 데이터 참조 방법
    - 부모에서 자식 컴포넌트로 데이터 전달
    - 자식컴포넌트에서 부모 컴포넌트로 이벤트 전달
    - 이벤트 버스

### Chapter04. 뷰 라우터
- 라우팅: 웹 페이지간의 이동 방법
```
<router-link to:'url'></router-link>
<router-view></router-view>
```

#### Chapter04-1. 뷰 라우터
- Nested Router
    - 상위 컴포넌트 1개에 하위 컴포넌트 1개를 포함하는 구조
    - 최상위 컴포넌트에 <router-view>포함
- Named View Router
    - 같은 레벨에서 여러개의 컴포넌트를 한번에 표시할 수 있음
    - name속성 지정. name속성은 component와 연결하기 위함
    - name속성이 없는 경우 default

#### Chapter04-2. HTTP통신
- 뷰 리소스
- 엑시오스(Axios)
    - 현재 뷰 커뮤니티에서 가장 많이 사용하는 HTTP 통신 라이브러리
    - Promise기반의 API형식이 다양하게 제공

    ```
    axios.get('url주소').then().catch();
    axios.post('url주소').then().catch();
    axios({
        method: 'get',

        url: 'url주소',
        ....
    });
    ```

*Promise기반의 API형식
: 데이터를 요청하고 받아올 때까지 기다렸다가 화면에 나타내는 로직을 실행할 때 주로 Promise 활용

### Chapter05. 뷰 프로젝트
#### Chapter05-1. 뷰 템플릿
- HTML, CSS등 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결해서 사용자가 화면에서 볼 수있는 형태의 HTML로 변환하는 속성
- 디렉티브
    - v-if : 참/거짓에 따라 태그 자체를 화면에 표시하거나 표시하지 않는다
    - v-for : 뷰 데이터의 갯수만큼 태그 반복 출력
    - v-bind : HTML태그 기본 속성과 데이터 속성 연결
    - v-show : v-if와 유사(css효과의 display:none/block)
    - v-on : 이벤트를 감지하여 특정 메소드 실행
    - v-model : form에서 사용. 데이터 값을 동기화 (양방향 데이터 바인딩)
- computed vs methods
    - computed: 대상 데이터 값이 변경되면 자동으로 수행(캐싱하고있음)
    - methods: 호출할 때만 실행

#### Chapter05-2. 뷰 프로젝트 구성방법
1. 뷰 CLI 설치 : npm install vue-cli -g
2. 프로젝트 생성
    1. 프로젝트 폴더 생성
    2. 생성한 폴더에서 실행 : vue init webpack-simple
3. 관련 라이브러리 설치 : npm install
4. 실행 : npm run dev

### Chapter06. 실전 어플리케이션 만들기
- TODO 목록만들기 : /vue_todo/
- 고도화
    - 할 일 목록 애니메이션 추가 : &lt;transition-group&gt; 태그 사용
    - &lt;transition-group&gt; 사용 시 하위 태그에 **v-bind:key 필수!! key값으로는 유일하게 구분되는 값 주기**

### Chapter07. Vue.js 고급 개발자 되기
#### Chapter07-1.중/고급 레벨로 올라가기 위한 지식
- Vuex (상태관리 라이브러리)
    - 어플리케이션에서 사용하는 데이터를 중앙에서 관리하여 어플리케이션의 크기에 상관없이 데이터관리를 효율적으로 하는것

- 뷰의 반응성 (Vue Reactivity): 데이터 변화를 감지해서 화면을 자동으로 갱신하는 특성

- Server side Rendering vs Client side Rendering
    - Client side Rendering
        - 화면을 그릴때 client 단에서 자바스크립트 등으로 이벤트, 데이터를 계산하여 화면을 구성
        - 장점 : 매끄러운 화면 전환, 사용자의 경험 향상
    - Server side Rendering
        - 화면에 html 노출할 때 이미 서버에서 구성 완료된 채로 화면에 뿌려줌
        - 장점 : 검색엔진 최적화, 렌더링속도
