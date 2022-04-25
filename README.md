# wanted_pre_onboarding 선발 과제
[Test page](https://lisu215.github.io/wanted_pre_onboarding/)

## 1. Input
- useState를 사용해 Toggle 상태 관리
- false일 경우 기본 , true일 경우 상세
- props를 받아 해당 Toggle 일경우 `translatex()`, `color` 값을 변경
## 2. Tab
- useState를 사용해 Tab 상태 관리
- Tab의 객체는 배열로 관리
- props를 받아 해당 Tab 일경우 `translatex()`, `color` 값을 변경
## 3. Slider
- useState를 사용해 슬라이더 value 상태 관리
- `slider-thumb`, `slider-runnable-track` css로 구현 
- 각각의 `% Button`은 배열로 관리 `Array map()`메소드와 `onclick`이벤트를 사용해 픽셀 매칭
## 4. Input
- useState를 사용해 Email, Error, PassWord 상태 관리 
- const `emailRegex()`를 통해 이메일 유효성 체크
- `onblur()` 이벤트로 이메일 입력 후 유효성 확인, false시 에러 문구 출력 (아무것도 입력하지 않을 시 에러 출력)
- useEffect를 사용해 이메일의 값이 변경되면 유효성 확인, ture시 체크표시
- 패스워드 눈 모양 클릭시 `password`로 받는 type 값을 `text`로 변경 
## 5. Dropdown
- useState를 사용해 Dropdown, symbol 상태 관리
- &&연산자를 사용해 `isDropdownOpen` 값이 true일 경우 Dropdown 메뉴 노출
- useEffect를 사용. 검색시 `filter()` `includes()` `toLowerCase()`메소드를 활용해 해당하는 `searchValue`를 대소문자 구분없이 검색 
- Dropdown 메뉴에서 심볼 클릭시 `onclick()` 이벤트를 통해 데이터 상태 관리
