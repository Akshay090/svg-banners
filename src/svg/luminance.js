const luminance = ({text1, height = 400, width = 800}) => `
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
                background: #333641;
                background-size: 600% 400%;
                border-radius: 10px;
                color: white;
                text-align: center;
                }
              
                .luminance {
                background: 50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom, #fff, transparent, transparent);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                font-size: 10vw;
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
                -webkit-animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;
                        animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;
                }
                @-webkit-keyframes reveal {
                80% {
                    letter-spacing: 8px;
                }
                100% {
                    background-size: 300% 300%;
                }
                }
                @keyframes reveal {
                80% {
                    letter-spacing: 8px;
                }
                100% {
                    background-size: 300% 300%;
                }
                }
                @-webkit-keyframes glow {
                40% {
                    text-shadow: 0 0 8px #fff;
                }
                }
                @keyframes glow {
                40% {
                    text-shadow: 0 0 8px #fff;
                }
                }
			</style>
			<div class="container">
                <div class="luminance">
                    ${text1}
                </div>
            </div>
        </div>
	</foreignObject>
</svg>

`
module.exports = luminance;