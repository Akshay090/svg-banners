const glitch = ({text1, height = 400, width = 800}) => `
<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
                .container {
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0;
                width: 100%;
                height: ${height}px;
                /* background: linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7); */
                background: #333;
                background-size: 600% 400%;
                border-radius: 10px;
                /* color: white; */
                text-align: center;
                }


                h1 {
                text-align: center;
                color: #fff;
                font-size: 5em;
                letter-spacing: 8px;
                font-family: "Lucida Console", Monaco, monospace;	
                font-weight: 400;
                /*Create overlap*/
                
                margin: 0;
                line-height: 0;
                /*Animation*/
                
                animation: glitch1 2.5s infinite;
                }

                h1:nth-child(2) {
                color: #67f3da;
                animation: glitch2 2.5s infinite;
                }

                h1:nth-child(3) {
                color: #f16f6f;
                animation: glitch3 2.5s infinite;
                }
                /*Keyframes*/

                @keyframes glitch1 {
                0% {
                    transform: none;
                    opacity: 1;
                }
                7% {
                    transform: skew(-0.5deg, -0.9deg);
                    opacity: 0.75;
                }
                10% {
                    transform: none;
                    opacity: 1;
                }
                27% {
                    transform: none;
                    opacity: 1;
                }
                30% {
                    transform: skew(0.8deg, -0.1deg);
                    opacity: 0.75;
                }
                35% {
                    transform: none;
                    opacity: 1;
                }
                52% {
                    transform: none;
                    opacity: 1;
                }
                55% {
                    transform: skew(-1deg, 0.2deg);
                    opacity: 0.75;
                }
                50% {
                    transform: none;
                    opacity: 1;
                }
                72% {
                    transform: none;
                    opacity: 1;
                }
                75% {
                    transform: skew(0.4deg, 1deg);
                    opacity: 0.75;
                }
                80% {
                    transform: none;
                    opacity: 1;
                }
                100% {
                    transform: none;
                    opacity: 1;
                }
                }

                @keyframes glitch2 {
                0% {
                    transform: none;
                    opacity: 0.25;
                }
                7% {
                    transform: translate(-2px, -3px);
                    opacity: 0.5;
                }
                10% {
                    transform: none;
                    opacity: 0.25;
                }
                27% {
                    transform: none;
                    opacity: 0.25;
                }
                30% {
                    transform: translate(-5px, -2px);
                    opacity: 0.5;
                }
                35% {
                    transform: none;
                    opacity: 0.25;
                }
                52% {
                    transform: none;
                    opacity: 0.25;
                }
                55% {
                    transform: translate(-5px, -1px);
                    opacity: 0.5;
                }
                50% {
                    transform: none;
                    opacity: 0.25;
                }
                72% {
                    transform: none;
                    opacity: 0.25;
                }
                75% {
                    transform: translate(-2px, -6px);
                    opacity: 0.5;
                }
                80% {
                    transform: none;
                    opacity: 0.25;
                }
                100% {
                    transform: none;
                    opacity: 0.25;
                }
                }

                @keyframes glitch3 {
                0% {
                    transform: none;
                    opacity: 0.25;
                }
                7% {
                    transform: translate(2px, 3px);
                    opacity: 0.5;
                }
                10% {
                    transform: none;
                    opacity: 0.25;
                }
                27% {
                    transform: none;
                    opacity: 0.25;
                }
                30% {
                    transform: translate(5px, 2px);
                    opacity: 0.5;
                }
                35% {
                    transform: none;
                    opacity: 0.25;
                }
                52% {
                    transform: none;
                    opacity: 0.25;
                }
                55% {
                    transform: translate(5px, 1px);
                    opacity: 0.5;
                }
                50% {
                    transform: none;
                    opacity: 0.25;
                }
                72% {
                    transform: none;
                    opacity: 0.25;
                }
                75% {
                    transform: translate(2px, 6px);
                    opacity: 0.5;
                }
                80% {
                    transform: none;
                    opacity: 0.25;
                }
                100% {
                    transform: none;
                    opacity: 0.25;
                }
                }
			</style>
			<div class="container">
                <h1>${text1}</h1>
                <h1>${text1}</h1>
                <h1>${text1}</h1>
            </div>
        </div>
	</foreignObject>
</svg>

`;

module.exports = glitch;