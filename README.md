# Palette Generator

Interactive tool for generating cosine-based color palettes. Perfect for shaders and creative coding.

## What it does

Creates smooth color gradients using this formula:
```glsl
vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) 
{
    return a + b*cos( 6.28318*(c*t+d) );
}
```

## Usage

**Install Node.js**

If Node.js is not already installed download and install it from the official Node.js website: https://nodejs.org/en/download/

**Install project dependencies**

navigate to the project folder in your terminal.
this project doesnt include external frameworks, npm is needed for certain dev dependencies like vite.

```bash
git clone https://github.com/MilesTails01/pal_generator.git
cd pal_generator
npm install
npm run dev

Open `http://localhost:5173`
```

# Commits

🐛 `:bug:` to indicate fixing a bug  
🔥 `:fire:` to indicate removing code or files  
🔧 `:fix:` mostly small little mistakes  
🧹 `:broom:` cleanup, or layouting the code  
✨ `:sparkles:` to indicate adding new features  
💄 `:lipstick:` to indicate improving the UI/UX  
🐎 `:racehorse:` to indicate improving performance  
🔒 `:lock:` to indicate dealing with security  
📝 `:memo:` to indicate writing documentation  
🚧 `:construction:` to indicate work in progress  

## References

- [Cosine Palette Example](https://www.shadertoy.com/view/ll2GD3)
- [Iquilezles Article](https://iquilezles.org/articles/palettes/)

## Screenshot
| Dark Mode | Light Mode |
| ---- | ---- |
| ![image](https://github.com/user-attachments/assets/7669a5e4-0481-4e91-9c76-7147a15e6400) | ![image](https://github.com/user-attachments/assets/45f0b0e7-e35b-4e1a-ab1f-6f00b1fe9a4e) |

⭐ Star this repo if you find it useful!  
🤝 Contributions welcome - feel free to submit PRs

Made by [Tommy](https://fenixfox-studios.com/) | [Twitter](https://twitter.com/mlsprwr) | [GitHub](https://github.com/MilesTails01/) 
