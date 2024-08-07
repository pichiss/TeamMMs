# 캐치! 수학 몬스터즈
초등 수학 학습 플랫폼 사이트 입니다. 반응형 구현도 완료되었습니다.

# 📈개발기간
2024.07.08 - 08.09
<br/><br/>notion : https://hickory-rise-dcc.notion.site/M-ms-f15088a98d7a4877ae928b365a5686ae?pvs=74

# 📈Stacks
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)

and fiber & kakao & swiper & react-js-pagination & bizcharts & recharts & react-calendar


# 📈Team M&M's_JURAMII

#### 푸터
사이트 로고를 filter의 grayscale 100%를 적용하여 흑백으로 만들어 사용

#### 학습하기 - 학습영상
비디오링크와 썸네일을 담은 더미데이터를 만들어서 map 함수를 통해 단원 선택 페이지를 구현.
<br/>링크에 id를 담아 useParams를 사용하여 각각의 강의영상 페이지로 이동.
<br/>비디오태그에 autoplay와 controls를 추가하여 자동재생과 사용자가 직접 동영상을 조절할 수 있도록 함.

#### 학습하기 - 질문하기
useState와 삼항연산자로 구현. 모달창 형식.
<br/>textarea에 useRef와 if문을 사용하여 질문 내용을 작성하지 않거나 10글자 미만일 경우에는 경고창을 띄우도록 함.

#### 학습하기 - 힌트보기
useState와 삼항연산자로 구현. 
<br/>힌트 내용을 변수로 받아서 각각의 문제에 맞는 힌트가 나오도록 구현.

#### 알림나무 - 공지사항&이벤트 게시판
더미데이터를 만들고, CRUD 및 검색기능에 대한 switch문을 Reducer에 담아 각각의 기능들에 대한 함수를 만듦. 
<br/>useContext를 통해 데이터와 함수를 리스트페이지, 상세 페이지에 전달하여 CRUD 및 검색 기능을 구현. 
<br/>작성 페이지는 커스텀 훅을 만들어 onChange이벤트에 활용.
<br/>페이지네이션은 react-js-pagination 라이브러리를 사용.
<br/>검색 기능은 게시글 제목을 기준으로 filter 작동. 사용자의 편의성을 위해 onKeyDown 이벤트를 추가하여 검색 버튼 대신 엔터키로도 검색이 가능하게 구현.

#### 학부모코너 - 학습현황
도넛 차트는 알리바바의 bizcharts, 바 차트는 recharts 라이브러리 사용.
<br/>단원 별 점수 부분은 테이블 태그로 구현.
<br/>출석체크의 달력은 react-calendar 라이브러리 사용. Random 함수를 사용하여 새로고침 할 때마다 도장의 캐릭터가 바뀌도록 구현.


# 📈기획 ppt
![슬라이드1](https://github.com/user-attachments/assets/eeabe1cd-c2ad-47f2-b58c-6a50811317d2)
![슬라이드2](https://github.com/user-attachments/assets/18f41891-dc3d-4f12-89af-413e2c73ba0e)
![슬라이드3](https://github.com/user-attachments/assets/36d37202-d544-4019-9186-fd3477276d65)
![슬라이드4](https://github.com/user-attachments/assets/0e264b3a-c135-4f02-ae4a-30a5976d7751)
![슬라이드5](https://github.com/user-attachments/assets/cd6ab584-59b5-4574-97d6-4b1bbb810b4b)
![슬라이드6](https://github.com/user-attachments/assets/25e77d8b-f121-43eb-9239-5d009a826b65)
![슬라이드7](https://github.com/user-attachments/assets/6cb76b16-6326-4ac7-a420-b4a9902d1ee8)
![슬라이드8](https://github.com/user-attachments/assets/bc01792a-0cec-4273-8c64-0d478c2097f2)
![슬라이드9](https://github.com/user-attachments/assets/44631515-f1b4-4875-a92c-e58536980975)
![슬라이드10](https://github.com/user-attachments/assets/d01617a0-4959-4a50-a3d8-c961753ed4f9)
![슬라이드11](https://github.com/user-attachments/assets/10f459c8-b238-4c42-9702-91132b09fad3)
![슬라이드12](https://github.com/user-attachments/assets/2117c5f6-7392-4883-af86-ec7846516222)
![슬라이드13](https://github.com/user-attachments/assets/c75a5adf-113d-4d99-b397-5b7e0e4f4001)
![슬라이드14](https://github.com/user-attachments/assets/3a58fd73-2f61-4ec2-843e-40ab8137831f)
![슬라이드15](https://github.com/user-attachments/assets/3d354f07-8f2c-4a75-abc0-533414662380)
![슬라이드16](https://github.com/user-attachments/assets/56eba997-b84f-4777-9895-ff888af9f5a5)
![슬라이드17](https://github.com/user-attachments/assets/7bac1771-6901-497b-82e2-6d2250eb0dc9)
![슬라이드18](https://github.com/user-attachments/assets/2b4769a3-482e-4b35-a01f-64fe1550b3fb)
![슬라이드19](https://github.com/user-attachments/assets/46d775d1-03f4-4e50-b6dd-4c5f07138b16)
![슬라이드20](https://github.com/user-attachments/assets/7c0a1a1b-1570-4a79-a131-e07bf82f5285)
![슬라이드25](https://github.com/user-attachments/assets/db0cdec7-0bcd-4620-857b-3318ad71b8ff)
![슬라이드31](https://github.com/user-attachments/assets/93a54023-c341-40c8-86ba-d555a657a75c)
