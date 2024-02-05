import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	// Font
	@font-face {
  font-family: 'omyu_pretty';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2')
    format('woff2');
  font-weight: normal;
  font-style: normal;
	}
	body {
		font-family: 'omyu_pretty';
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
		--tiny-font-size: 1rem;

		/*========== Color ==========*/
		/* 투명도 가지는 색상 사용 예시 */
		/* 색상: #000, 투명도: 80% 사용하고 싶다면 */
		/* #00000080 */

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

		/* Input Border */
		--input-bb: #D9D9D9;
	}

	/*=============== Responsive ===============*/
	/* Mobile */
	@media screen and (min-width: 390px) {
		body {
			margin: 0 auto;
			background-color: red;
		}
	}

	/* 할 예정 */
	/* Tablet */
	@media screen and (min-width: 768px) {
		body {
			margin: 0 auto;
			background-color: yellow;
		}
	}

	/* 할 예정 */
	/* Pc */
	@media screen and (min-width: 1024px) {
		body {
			margin: 0 auto;
			background-color: blue;
		}
	}
`;

export default GlobalStyle;