import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	/* Font */

	/* @font-face {
  font-family: 'omyu_pretty';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2')
    format('woff2');
  font-weight: normal;
  font-style: normal;
	} */

	@font-face {
    font-family: 'SOYOMapleBoldTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleBoldTTF.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'SOYOMapleRegularTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleRegularTTF.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Happiness';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Bold.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

	body {
    font-family: 'SOYOMapleRegularTTF';
		/* background-color: #bdbdbd; */
	} 

	input, input::placeholder, button {
		font:inherit;
	}

	button {
		cursor: pointer;
		border: none;
		background: none;
		padding: 0;
	}

	/*   .5rem = 5px | 1rem = 10px   */
	html {
    font-size: 62.5%;
	}

	/*=============== VARIABLES CSS ===============*/
	:root {
		/*========== Font size ==========*/
		--h1-font-size: 3.6rem;
		--h2-font-size: 2.7rem;
		--h3-font-size: 2.2rem;
		--large-font-size: 2rem;
		--regular-font-size: 1.8rem;
		--small-font-size: 1.6rem;
		--xsmall-font-size: 1.4rem;
		--tiny-font-size: 1rem;

		/*========== Color ==========*/
		/* 투명도 가지는 색상 사용 예시 */
		/* 색상: #000, 투명도: 80% 사용하고 싶다면, 80%를 16진수로 바꿔서 */
		/* #000000CC */

		/* Normal Color */
		--color-black: #000;
		--color-white: #fff;

		/* Background */
		--bg-color-main: #7E7DFD;
		--bg-color-gray: #F7F7F7;

		/* blur, modal background */
		--bg-blur: rgba(0, 0, 0, .4); 

		/* Text */
		--text-color-main: #8B8B8B;
		--text-color-desc: #767676;
		--text-color-theme: #7E7DFD;
		--text-color-find: #A5A5A5;
		--text-color-warning: #F85B5B;
		--text-color-placeholder: #DBDBDB;
		
		/* Button */
		--button-color-enable: #7E7DFD;
		--button-color-disabled: #D3D3D3;
		--button-color-favorite: #FFD233;
		--button-color-warning: #F85B5B;
		--button-color-modal: #F1F1F1;
		--button-color-landing: #5F5ED5;

		/* Input Border */
		--input-bb: #D9D9D9;

		/* CheckBox */
		--checkbox-color:#D7D7FD;

		/* Calendar */
		--color-gray: #8B8B8B;
    --color-lightgray: #bdbdbd;
    --color-primary: #7E7DFD;
    --color-lightPrimary: #E5E5FE;
    --color-subPrimary: #FD7CE3;
    --color-lightSubPrimary: #FEE4F9;
    --color-todoCircle: #F4F4F4;
	}
	/*=============== Responsive ===============*/
	body {
		margin: 0 auto;
		background-color: #bdbdbd;
	}

	/* Mobile */
		@media screen and (min-width:390px){
			#root {
				min-height: 100vh;
				height: 100%;
				width:390px;
				margin: 0 auto;
				background-color: #ffffff;
			}
		}

	/* Mobile 작업 완료후, width값 %로 변경 예정 */
	 /* @media screen and (max-width: 767px) {
	 	#root {
	 		height:100vh;
	 		width: 100%;
	 		margin: 0 auto;
	 		background-color: skyblue;
	 	}
	 } */

	/* 할 예정 */
	/* Tablet */
	 /* @media screen and (min-width: 768px) {
	 	#root {
	 		height:100vh;
	 		max-width:768px;
	 		margin: 0 auto;
	 		background-color: skyblue;
	 	}
	 } */
	/* 할 예정 */
	/* Pc */
	 /* @media screen and (min-width: 992px) {
	 	#root {
	 		height: auto;
	 		width:100%;
	 		margin: 0 auto;
	 		background-color: #fff;
	 	}
  } */

	// @media screen and (min-width: 1024px) {
	// 	#root {
	// 		height:100vh;
	// 		max-width:1024px;
	// 		margin: 0 auto;
	// 		background-color: skyblue;
	// 	}
  /* } */
`;

export default GlobalStyle;
