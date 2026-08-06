# Архитектура

## Стек

| Слой | Что |
|---|---|
| Фреймворк | Next.js 14 (App Router), `output: 'export'` — чистая статика, сервера нет |
| UI | React 18, TypeScript 5.8 |
| Стили | Tailwind 3.4 + `tailwindcss-animate`, токены в CSS-переменных |
| Слайдеры | swiper 11 (подключён, но фактически не используется — см. ниже) |
| Хостинг | GitHub Pages, деплой через GitHub Actions |

Зависимости `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`
остались от шаблона shadcn/ui. Реально из них живёт только `cn()` в
`src/lib/utils.ts`; компонентов shadcn в проекте нет.

## Структура

```
src/
├── app/                    # App Router, каждая папка = маршрут
│   ├── layout.tsx          # <html>, метаданные, шрифты, GA, AnimationObserver
│   ├── page.tsx            # / — герой, BrandStrip, 4 карточки
│   ├── portfolio/
│   │   ├── page.tsx        # /portfolio — сетка mainProjects
│   │   └── [id]/page.tsx   # /portfolio/<id> — кейс, SSG через generateStaticParams
│   ├── about/, contact/    # статические страницы
│   ├── dev/                # песочницы обложек, см. предупреждение ниже
│   ├── not-found.tsx       # 404
│   └── globals.css         # дизайн-токены
├── components/
│   ├── Layout.tsx          # шапка + мобильное меню + футер ('use client')
│   ├── ProjectCard.tsx     # карточка в сетке (server)
│   ├── ProjectCardMedia.tsx# общая обёртка превью: img / video / компонент-обложка
│   ├── ProjectHeader.tsx   # шапка кейса: заголовок, мета-колонка, hero
│   ├── ProjectContent.tsx  # рендерер блоков контента ('use client')
│   ├── MoreProjects.tsx    # «Other Projects» в подвале кейса
│   ├── Testimonials.tsx    # отзывы
│   ├── BrandStrip.tsx      # бегущая строка логотипов
│   ├── AnimationObserver.tsx # общий IntersectionObserver ('use client')
│   ├── covers/             # NetokCover, KoticCover + их CSS
│   ├── icons/              # 10 SVG-логотипов брендов
│   └── ui/GallerySlider.tsx
├── data/                   # контент проектов, см. content-model.md
├── types/project.ts        # интерфейсы Project и ContentItem
├── hooks/useScrollDirection.tsx
└── lib/utils.ts            # cn()
```

## Клиент против сервера

По умолчанию всё серверное. `'use client'` стоит только там, где реально нужен
браузер: `Layout` (мобильное меню, подсветка активной ссылки, скрытие шапки при
скролле), `ProjectContent` (слушатель скролла для параллакса), `AnimatedHeadline`
(смена слова по таймеру), `AnimationObserver`, `CoverPreview`.

Карточки и обложки — серверные. Обложки Netok/Kotic анимируются чистым CSS, а
единственный нужный им JS вынесен в общий `AnimationObserver` в корневом layout.

## Маршруты

`/`, `/portfolio`, `/portfolio/<id>` (9 штук по числу проектов в `allProjects`),
`/about`, `/contact`, `/dev/netok`, `/dev/kotic`, 404.

`trailingSlash: true` — канонический адрес со слешем (`/portfolio/`), без слеша
уходит 301-редиректом. Причина в [decisions.md](decisions.md).

## Сборка и деплой

```bash
npm install
npm run dev      # next dev --turbo, localhost:3000
npm run build    # next build → out/, затем html-beautify форматирует HTML
npm run lint     # next lint
```

Статика собирается в `out/` (в .gitignore). Пуш в `main` запускает
`.github/workflows/deploy.yml`: Node 22 → `npm ci` → `npm run build` →
`upload-pages-artifact` (`./out`) → `deploy-pages@v4`. Ручной запуск —
`workflow_dispatch`. Отдельной ветки `gh-pages` нет, публикуется артефакт.

## Внешние зависимости рантайма

- Google Fonts через четыре `<link>` в `<head>`: Inter, JetBrains Mono, Sen,
  Funnel Sans. Из них в Tailwind объявлены только Inter (`font-sans`) и
  Funnel Sans (`font-headline`/`font-dynamic`); JetBrains Mono и Sen грузятся,
  но не используются.
- Google Analytics, `G-PDXLNPBHY0`, через `next/script` со `strategy="afterInteractive"`.

## Мёртвый код

Не импортируются ниоткуда: `ScrollToTop.tsx`, `TestSlider.tsx`,
`PulseSliderCSS.tsx`. `PulseSlider` и `GallerySlider` достижимы из
`ProjectContent`, но ни один проект в `src/data/` их не запрашивает — то есть
swiper тянется в бандл ради неиспользуемого пути. Осиротевшие картинки:
`public/images/projects/bud/` и `.../kfc/` (проекты удалены 2026-08-06).

## Особенность окружения

Сборка на Windows нестабильно падает с `PageNotFoundError: Cannot find module
for page: /<любая>` при успешной компиляции. Лечится `rm -rf .next out
node_modules/.cache` и повтором. Похоже на гонку антивируса с записью в `.next`.
В CI (ubuntu) не воспроизводится.
