# AstroLite
[![Status: Work In Progress](https://img.shields.io/badge/Status-Work%20In%20Progress-yellow.svg)](https://github.com/Ho11ow1/AstroLite)
[![Version: 1.2.0](https://img.shields.io/badge/Version-1.2.0-blue.svg)](https://github.com/Ho11ow1/AstroLite)<br/>
**A lightweight and easy to use Astro site template.**<br/>
Provides a simple, expandable file structure with pre-made code as an example

## Installation
### Option 1: Astro CLI
| PackageManager | Command                             | Location                          |
| :------------- | :---------------------------------- | :-------------------------------- |
| `npm`          | `create astro@latest -- --template` | `<github-username>/<github-repo>` |
| `pnpm`         | `create astro@latest --template`    | `<github-username>/<github-repo>` |
| `yarn`         | `create astro --template`           | `<github-username>/<github-repo>` |

### Option 2: Git
| Git command    | Location       |
| :------------- | :------------- |
| `git clone`    | `<repo-url>`   |

<br/>

| Property            | Literal                                               |
| :------------------ | :---------------------------------------------------- |
| `github-username`   | `Ho11ow1`                                             |
| `github-repo`       | `AstroLite`                                           |
| `repo-url`          | `https://github.com/Ho11ow1/AstroLite`                |

## Post install steps
### If you used the Astro CLI
```bash
# Astro should automatically download all dependencies
cd <your-project>
npm run dev | pnpm run dev | yarn dev
```
### If you used Git clone
```bash
cd AstroLite
npm install | pnpm install | yarn install
npm run dev | pnpm run dev | yarn dev
```

## Requirements
- Node.js v18.20.8+ (v19 & v21 are not supported due to astro compatibility)
- Package manager of your choosing 

## License
MIT License - see [LICENSE](LICENSE) 
