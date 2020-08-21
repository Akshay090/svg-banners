const typeWriter = ({text1, height = 400, width = 800}) => `
<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>

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
                background-color: rgb(25,25,25);  
                background-size: 600% 400%;
                border-radius: 10px;
                color: rgba(255,255,255,.75);
                text-align: center;
                }

                .type-writer{
                    display: inline-block;
                }

                .line-1{
                    width: 100%;
                    margin: 0 auto;
                    border-right: 2px solid rgba(255,255,255,.75);
                    font-size: 180%;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    transform: translateY(-50%);    
                }

                /* Animation */
                .anim-typewriter{
                animation: typewriter 4s steps(44) 1s 1 normal both,
                            blinkTextCursor 500ms steps(44) infinite normal;
                }
                @keyframes typewriter{
                from{width: 0;}
                to{width: 100%;}
                }
                @keyframes blinkTextCursor{
                from{border-right-color: rgba(255,255,255,.75);}
                to{border-right-color: transparent;}
                }
			</style>
			<div class="container">
                <div class="type-writer">
                    <p class="line-1 anim-typewriter">${text1}</p>
                </div>
            </div>
        </div>
	</foreignObject>
</svg>
`;

module.exports = typeWriter;
