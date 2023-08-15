# Installation
1. Clone repository:
`git clone https://github.com/Color-Kat/laravel-react-ts-template.git .`

2. Change remote origin:
`git remote set-url origin https://git-repo/new-repository.git`

3. Install dependencies:
`composer install`, `npm install`

4. Generate storage link: `php artisan storage:link`

5. Run project by `vite` or `npm run dev`

6. Build project by `vite build` or `npm run build`

#### Optional:
1. Create symlink for Http/Controllers folder (cmd as administrator):
`mklink /D C:\OpenServer\domains\laravel-template.local\app\Controllers C:\OpenServer\domains\laravel-template.local\app\Http\Controllers`

2. Bundle analyze:
`npx vite-bundle-visualizer`

#### Tailwind color combinations
1. bg-gray-900 + text-white + text-gray-300 text-indigo-400 

#### Tailwind tricks
`bg-gdray-900` + `<div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>`
