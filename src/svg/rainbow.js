const rainbow = ({text1, height = 400, width = 800}) => `
<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
                :root {
                --color-background: #31037D;
                --axis-x: 1px;
                --axis-y: 1rem;
                --delay: 10;
                --color-black: #000;
                --color-white: #fff;
                --color-orange: #D49C3D;
                --color-red: #D14B3D;
                --color-violet: #CF52EB;
                --color-blue: #44A3F7;
                --color-green: #5ACB3C;
                --color-yellow: #DEBF40;
                --color-foreground: var(--color-white);
                }
                .container {
                font-family:
						system-ui,
						-apple-system,
						'Segoe UI',
						Roboto,
						Helvetica,
						Arial,
						sans-serif,
						'Apple Color Emoji',
						'Segoe UI Emoji';
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0;
                width: 100%;
                height: ${height}px;
                background-color: var(--color-background);
                background-size: 600% 400%;
                border-radius: 10px;
                color: rgba(255,255,255,.75);
                text-align: center;
                font-size: 24px;
                }
                .c-rainbow {
                counter-reset: rainbow;
                position: relative;
                display: block;
                list-style: none;
                padding: 0;
                margin: 0;
                line-height: 2px;
                }
                .c-rainbow__layer {
                --text-color: var(--color-foreground);
                counter-increment: rainbow;
                font-size: 3rem;
                font-weight: 600;
                color: var(--text-color);
                text-shadow: -1px -1px 0 var(--color-black), 1px -1px 0 var(--color-black), -1px 1px 0 var(--color-black), 1px 1px 0 var(--color-black), 4px 4px 0 rgba(0, 0, 0, 0.2);
                animation: rainbow 1.5s ease-in-out infinite;
                }
                .c-rainbow__layer:nth-child(1) {
                animation-delay: calc( 1 / var(--delay) * 1s);
                margin-left: 36px;
                /* z-index: -10; */
                }
                .c-rainbow__layer:nth-child(2) {
                animation-delay: calc( 2 / var(--delay) * 1s);
                margin-left: 30px;
                /* z-index: -20; */
                }
                .c-rainbow__layer:nth-child(3) {
                animation-delay: calc( 3 / var(--delay) * 1s);
                margin-left: 24px;
                /* z-index: -30; */
                }
                .c-rainbow__layer:nth-child(4) {
                animation-delay: calc( 4 / var(--delay) * 1s);
                margin-left: 18px;
                /* z-index: -40; */
                }
                .c-rainbow__layer:nth-child(5) {
                animation-delay: calc( 5 / var(--delay) * 1s);
                margin-left: 12px;
                /* z-index: -50; */
                }
                .c-rainbow__layer:nth-child(6) {
                animation-delay: calc( 6 / var(--delay) * 1s);
                margin-left: 6px;
                /* z-index: -60; */
                }
                .c-rainbow__layer:nth-child(7) {
                animation-delay: calc( 7 / var(--delay) * 1s);
                /* margin-left: 1em; */
                /* z-index: -70; */
                }
                /* .c-rainbow__layer:not(:first-child) {
                position: absolute;
                top: 0;
                } */
                .c-rainbow__layer--white {
                --text-color: var(--color-white);
                }
                .c-rainbow__layer--orange {
                --text-color: var(--color-orange);
                }
                .c-rainbow__layer--red {
                --text-color: var(--color-red);
                }
                .c-rainbow__layer--violet {
                --text-color: var(--color-violet);
                }
                .c-rainbow__layer--blue {
                --text-color: var(--color-blue);
                }
                .c-rainbow__layer--green {
                --text-color: var(--color-green);
                }
                .c-rainbow__layer--yellow {
                --text-color: var(--color-yellow);
                }

                @keyframes rainbow {
                0%, 100% {
                    transform: translatey(var(--axis-y));
                }
                50% {
                    transform: translatey(calc(var(--axis-y) * -1));
                }
                }

			</style>
			<div class="container">
                <ul class="c-rainbow">
                    <li class="c-rainbow__layer c-rainbow__layer--yellow">${text1}</li>
                    <li class="c-rainbow__layer c-rainbow__layer--green">${text1}</li>
                    <li class="c-rainbow__layer c-rainbow__layer--blue">${text1}</li>
                    <li class="c-rainbow__layer c-rainbow__layer--violet">${text1}</li>
                    <li class="c-rainbow__layer c-rainbow__layer--red">${text1}</li>
                    <li class="c-rainbow__layer c-rainbow__layer--orange">${text1}</li>
                    <li class="c-rainbow__layer c-rainbow__layer--white">${text1}</li>
                </ul>
            </div>
        </div>
	</foreignObject>
</svg>

`;

module.exports = rainbow;
