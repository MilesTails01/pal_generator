# Code Formatting Guidelines

## Core Principles

1. **Indentation**
	- Always use tabs, NEVER spaces
	- One tab per indentation level

2. **Brackets (Allman Style)**
	- Opening brackets on new lines
	- Closing brackets on their own line

```javascript
function updatePreview()
{
	const values	= getValues();
	const rect		= canvas.getBoundingClientRect();
	ctx.clearRect(0, 0, rect.width, rect.height);
}
```

3. **Vertical Alignment**
	- Align property-value pairs vertically when it makes sense
	- Use tabs for alignment
	- Alphabetic sort order
	- = signs under = signs when possible
	- from under from in import lines

```javascript
const values		= getValues();
const codeOutput	= document.getElementById('codeOutput');
const code			= `vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )`;
```

4. **Leading Comma**
	- Always use leading comma in arrays and objects

5. **Avoid Orphans**

```javascript
const config	=
{
	height		: 200
,	padding		: 20
,	width		: 100
};
```

If it's visually appealing in a oneliner, do it like this:

```javascript
const config	= { backgroundColor: 'white', height: '200px' };
```

## JavaScript Specific Rules

1. **Function Declarations**
	- Opening bracket on new line
	- Align parameter declarations

```javascript
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
}
```

2. **Variable Declarations**
	- Align multiple related declarations
	- Group related variables together

```javascript
const canvas		= document.getElementById('previewCanvas');
const ctx			= canvas.getContext('2d');
const values		= getValues();
const codeOutput	= document.getElementById('codeOutput');
```

3. **Event Handlers**
	- Place brackets on new lines
	- Consistent spacing around arrow functions

```javascript
const handleClick = (e) =>
{
	e.preventDefault();
	doSomething();
};

window.addEventListener('resize', () =>
{
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(resizeCanvas, 100);
});
```

4. **Object Properties**
	- Align property names and values
	- Use leading commas

```javascript
const values	=
{
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
};
```

## CSS Formatting

1. **Property Alignment**
	- Align all properties with tabs
	- Alphabetic sort order
	- Colons aligned

```css
.container
{
	background		: var(--color-background-secondary);
	border-radius	: 10px;
	box-shadow		: var(--shadow-primary);
	display			: flex;
	flex-direction	: column;
	max-width		: 800px;
	padding			: 15px;
	width			: 100%;
}
```

2. **CSS Variables**
	- Group related variables together
	- Align variable names and values

```css
:root
{
	--color-background-primary		: #1a1a1a;
	--color-background-secondary	: #2a2a2a;
	--color-background-tertiary		: #333;
	--color-text-primary			: #ffffff;
	--color-text-secondary			: #ccc;
	--color-text-accent				: #4fc3f7;
}
```

3. **Media Queries**
	- Opening bracket on new line
	- Consistent indentation

```css
@media (max-width: 600px)
{
	body
	{
		justify-content: flex-start;
		padding			: 5px;
	}
	
	.container
	{
		padding			: 10px;
	}
}
```

## HTML Structure

1. **Element Attributes**
	- One attribute per line for multiple attributes
	- Align attribute names and values

```html
<input 
	type	= "range" 
	id		= "aR" 
	min		= "0" 
	max		= "1" 
	step	= "0.01" 
	value	= "0.5"
>
```

2. **Nested Elements**
	- Consistent indentation
	- Clear hierarchy

```html
<div class="slider-container">
	<label>Red</label>
	<div class="slider-row">
		<input type="range" id="aR" min="0" max="1" step="0.01" value="0.5">
		<input type="number" class="value-display" id="aRVal" min="0" max="1" step="0.01" value="0.50">
	</div>
</div>
```

## Array and Object Formatting

1. **Multi-line Arrays**

```javascript
const colors	=
[
	'#ff0000'
,	'#00ff00'
,	'#0000ff'
];
```

2. **Object Properties with Long Values**

```javascript
const config	=
{
	key1		: 'short value'
,	longKey		: 'this is a much longer value that needs more space'
,	anotherKey	: 'another value'
};
```

## Comments

- Try to avoid comments as clean code speaks for itself
- When needed, use single-line comments with proper spacing

```javascript
// Helper function to format numbers compactly
function formatNumber(num, decimals = 2)
{
	const formatted = num.toFixed(decimals);
	return formatted.endsWith('.00') ? formatted.slice(0, -3) : 
		   formatted.endsWith('0') ? formatted.slice(0, -1) : formatted;
}
```