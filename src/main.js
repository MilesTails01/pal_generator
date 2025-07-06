import './style.css'
const canvas	= document.getElementById('previewCanvas');
const ctx		= canvas.getContext('2d');

function cosPalette(t, a, b, c, d)
{
	return a + b * Math.cos(6.28318 * (c * t + d));
}

function getValues()
{
	return {
		a	: [
			parseFloat(document.getElementById('aR').value)
		,	parseFloat(document.getElementById('aG').value)
		,	parseFloat(document.getElementById('aB').value)
		]
	,	b	: [
			parseFloat(document.getElementById('bR').value)
		,	parseFloat(document.getElementById('bG').value)
		,	parseFloat(document.getElementById('bB').value)
		]
	,	c	: [
			parseFloat(document.getElementById('cR').value)
		,	parseFloat(document.getElementById('cG').value)
		,	parseFloat(document.getElementById('cB').value)
		]
	,	d	: [
			parseFloat(document.getElementById('dR').value)
		,	parseFloat(document.getElementById('dG').value)
		,	parseFloat(document.getElementById('dB').value)
		]
	};
}

function syncInputs(sliderId, numberId) 
{
	const slider		= document.getElementById(sliderId);
	const numberInput	= document.getElementById(numberId);

	slider.addEventListener('input', function() 
	{
		numberInput.value = parseFloat(this.value).toFixed(2);
		updatePreview();
		updateCode();
	});
	
	numberInput.addEventListener('input', function() 
	{
		slider.value = this.value;
		updatePreview();
		updateCode();
	});
}

function updatePreview()
{
	const values	= getValues();
	const rect		= canvas.getBoundingClientRect();
	ctx.clearRect(0, 0, rect.width, rect.height);
	for (let x = 0; x < rect.width; x++)
	{
		const t		= x / rect.width;
		const r		= cosPalette(t, values.a[0], values.b[0], values.c[0], values.d[0]);
		const g		= cosPalette(t, values.a[1], values.b[1], values.c[1], values.d[1]);
		const b		= cosPalette(t, values.a[2], values.b[2], values.c[2], values.d[2]);
		ctx.fillStyle	= `rgb(${Math.floor(r * 255)}, ${Math.floor(g * 255)}, ${Math.floor(b * 255)})`;
		ctx.fillRect(x, 0, 1, rect.height);
	}
}

function updateCode()
{
	const values		= getValues();
	const codeOutput	= document.getElementById('codeOutput');
	
	function formatNumber(num, decimals = 2) {
		const formatted = num.toFixed(decimals);
		return formatted.endsWith('.00') ? formatted.slice(0, -3) : 
			   formatted.endsWith('0') ? formatted.slice(0, -1) : formatted;
	}
	
	const code			= 
`vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) 
{
	return a + b*cos( 6.28318*(c*t+d) );
}

vec3 myPalette = pal(t, vec3(${formatNumber(values.a[0])}, ${formatNumber(values.a[1])}, ${formatNumber(values.a[2])}), vec3(${formatNumber(values.b[0])}, ${formatNumber(values.b[1])}, ${formatNumber(values.b[2])}), vec3(${formatNumber(values.c[0], 1)}, ${formatNumber(values.c[1], 1)}, ${formatNumber(values.c[2], 1)}), vec3(${formatNumber(values.d[0])}, ${formatNumber(values.d[1])}, ${formatNumber(values.d[2])}));`;
	
	const button			= codeOutput.querySelector('.copy-btn');
	codeOutput.innerHTML	= code;
	codeOutput.appendChild(button);
}

function copy()
{
	const code			= document.getElementById('codeOutput').textContent;
	const codeOutput	= document.getElementById('codeOutput');
	navigator.clipboard.writeText(code).then(() =>
	{
		codeOutput.classList.add('copied');
		setTimeout(() => { codeOutput.classList.remove('copied'); }, 600);
	});
};

function resizeCanvas()
{
	const rect		= canvas.getBoundingClientRect();
	const width		= rect.width;
	const height	= rect.height;
	
	if (width > 0 && height > 0)
	{
		canvas.width	= width * window.devicePixelRatio;
		canvas.height	= height * window.devicePixelRatio;
		ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		updatePreview();
	}
}

syncInputs('aR', 'aRVal');
syncInputs('aG', 'aGVal');
syncInputs('aB', 'aBVal');
syncInputs('bR', 'bRVal');
syncInputs('bG', 'bGVal');
syncInputs('bB', 'bBVal');
syncInputs('cR', 'cRVal');
syncInputs('cG', 'cGVal');
syncInputs('cB', 'cBVal');
syncInputs('dR', 'dRVal');
syncInputs('dG', 'dGVal');
syncInputs('dB', 'dBVal');

function toggleTheme()
{
	const html		= document.documentElement;
	const themeBtn	= document.getElementById('themeToggle');
	const isLight	= html.getAttribute('data-theme') === 'light';
	
	if (isLight)
	{
		html.removeAttribute('data-theme');
		themeBtn.textContent	= '🌙';
		themeBtn.title		= 'Switch to light theme';
	}
	else
	{
		html.setAttribute('data-theme', 'light');
		themeBtn.textContent	= '☀️';
		themeBtn.title		= 'Switch to dark theme';
	}
}

resizeCanvas();
updatePreview();
updateCode();
let resizeTimeout;
window.addEventListener('resize', () => {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(resizeCanvas, 100);
});
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.querySelector('.copy-btn').addEventListener('click', copy);