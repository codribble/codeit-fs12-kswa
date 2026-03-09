# 나만의 일기장 - 배열/객체 CRUD + DOM 연습

배열과 객체의 CRUD(추가, 조회, 수정, 삭제)를 배우면서,
DOM API로 화면까지 직접 그려보는 실습입니다.

## 실행 방법

`diary.html`을 브라우저에서 열면 됩니다.

개발자 도구(F12)의 Console 탭에서 에러를 확인하면서 진행하세요.

---

## 진행 순서

Part 1부터 순서대로 TODO를 채워나가세요.
각 Part를 완성할 때마다 브라우저를 새로고침해서 결과를 확인합니다.

### Part 1: DOM 요소 선택하기
- □ `document.querySelector()`로 8개 요소 선택하기
- 이 파트를 완성해야 나머지 파트가 동작합니다!

### Part 2: 데이터 구조
- □ 빈 일기장 배열 선언하기

### Part 3: 일기 추가 (Create)
- □ `addEntry` - 새 일기 객체를 만들어 배열에 push

### Part 4: 일기 그리기 (Read + DOM)
- □ `renderEntry` - 일기 하나를 DOM 요소로 만들기 (createElement, appendChild)
- □ `renderAllEntries` - 전체 목록을 화면에 그리기

### Part 5: 일기 수정 (Update)
- □ `updateEntry` - 배열에서 데이터 수정 (find, Object.assign)
- □ `fillFormForEdit` - 폼에 기존 값 채우기 (DOM .value 설정)

### Part 6: 일기 삭제 (Delete)
- □ `deleteEntry` - 배열에서 삭제 후 화면 갱신 (findIndex, splice)

### Part 7: 이벤트 연결
- □ `clearForm` - 폼 초기화
- □ `handleSubmit` - 폼 제출 처리 (preventDefault, 입력값 읽기)
- □ `addEventListener`로 이벤트 등록

### Part 8: 통계 (심화)
- □ `getDiaryStats` - 기분별 개수 집계
- □ `renderStats` - 통계를 DOM에 표시

### 도전 과제
- □ 키워드 검색 기능
- □ 기분별 필터링 기능
- □ 일기 개수 실시간 표시

---

## 유용한 메서드 힌트

### 배열 메서드
| 메서드 | 용도 |
|--------|------|
| `push()` | 배열 끝에 요소 추가 |
| `find()` | 조건에 맞는 첫 번째 요소 반환 |
| `findIndex()` | 조건에 맞는 첫 번째 요소의 인덱스 반환 |
| `filter()` | 조건에 맞는 모든 요소를 새 배열로 반환 |
| `splice()` | 특정 위치의 요소를 제거 |
| `forEach()` | 배열의 각 요소에 대해 함수 실행 |

### DOM 메서드
| 메서드 | 용도 |
|--------|------|
| `document.querySelector()` | CSS 선택자로 요소 찾기 |
| `document.createElement()` | 새 HTML 요소 만들기 |
| `element.appendChild()` | 자식 요소 추가 |
| `element.addEventListener()` | 이벤트 등록 |
| `element.textContent` | 텍스트 내용 설정 |
| `element.className` | CSS 클래스 설정 |
| `element.value` | input/select의 값 읽기/쓰기 |
| `element.innerHTML` | HTML 내용 설정 (비울 때 유용) |
| `element.style.display` | 요소 보이기/숨기기 |

### 객체 메서드
| 메서드 | 용도 |
|--------|------|
| `Object.assign()` | 객체의 속성을 다른 객체에 복사 |
| `Object.entries()` | 객체를 [키, 값] 쌍 배열로 변환 |
