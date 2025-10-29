# react-practice

# React 핵심 개념 연습 프로젝트

각 폴더별로 React의 핵심 개념 1개씩 실습합니다.

- ✅ useState
  - ✔️ 카운터 만들기
  - ✔️ 입력값 실시간 반영
  - ✔️ ToDo 리스트 추가/삭제
  - ✔️ 좋아요 버튼 토글
  - ✔️ 테마 전환 (light/black)
- ☑️ useEffect
  - ✔️ 컴포넌트 마운트 시 콘솔 출력
  - 입력값 변화 감지해서 콘솔에 출력하기
  - 타이머 만들기(setInterval 함수로 구현/cleanup 함수로 타이머 정리)
  - 언마운트 시 clearInterval 함수로 정리
  - API 요청 시 fetch 데이터 불러오기
  - 창 크기 감지 이벤트
- ☑️ props
  - 부모가 자식에게 이름 전달하기
  - 부모가 자식에게 함수 전달하기
  - 컴포넌트 재사용(props로 색/텍스트 다르게)
- ☑️ 조건부 렌더링
  - 로그인 여부에 따라 문구 다르게 표시
  - 로딩 중일 때 스피너 표시, 완료되면 데이터 표시
- ☑️ 리스트 렌더링
  - 간단한 문자열 리스트 출력
  - 객체 배열을 카드 형태로 렌더링
- ☑️ useRef
  - input 자동 포커싱
  - 렌더링 사이에서도 유지되는 값
- ☑️ useContext
  - ThemeContext 다크모드 상태를 전역 관리
  - UserContext 로그인 사용자 정보 전역 접근
- ☑️ useReducer
  - 카운터를 reducer로 구현
  - ToDo 리스트를 reducer로 구현
- ☑️ 커스텀 훅
  - useToggle -- boolean 토글 훅
  - useInput -- 입력값 관리 훅
  - useFetch -- API 요청용 훅
- ☑️ React Router
  - Home / About 페이지 전환
  - URL 파라미터 사용
  - 종합 라우팅 + 레이아웃
