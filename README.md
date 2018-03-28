# Vue.js study
- Vue.js 개인학습 저장소입니다.

## Vue.js 입문
- 2018.03.27 Chapter03 인스턴스 & 컴포넌트 (데이터 전달하기)

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

- Nested Router
    - 상위 컴포넌트 1개에 하위 컴포넌트 1개를 포함하는 구조
    - 최상위 컴포넌트에 <router-view>포함
- Named View Rputer
    - 같은 레베에서 여러개의 컴포넌트를 한번에 표시할 수 있음
    - name속성 지정. name속성은 component와 연결하기 위함
    - name속성이 없는 경우 default

