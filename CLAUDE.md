# korenyako.github.io

Персональный сайт-портфолио Антона Кореняко — продуктового дизайнера и
арт-директора. Next.js 14 со статическим экспортом, деплой на GitHub Pages.
Бэкенда, БД и аутентификации нет: весь контент лежит в TypeScript-модулях в
`src/data/`.

Живой сайт: https://korenyako.github.io

## Knowledge Base

Перед работой с проектом прочитай knowledge/INDEX.md и нужные статьи из вики.
После значимых изменений (новые фичи, изменения архитектуры, решения) обнови
соответствующие статьи в knowledge/ и добавь запись в log.md.

## Стек

Next.js 14 (App Router, `output: 'export'`) · React 18 · TypeScript 5.8 ·
Tailwind 3.4 + tailwindcss-animate · GitHub Pages через GitHub Actions.

`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `swiper` —
наследство шаблона shadcn/ui, реально используется только `cn()` из `src/lib/utils.ts`.

## Структура

```
src/
├── app/                  # App Router, папка = маршрут
│   ├── layout.tsx        # метаданные, шрифты, GA, AnimationObserver
│   ├── page.tsx          # главная
│   ├── portfolio/[id]/   # страницы кейсов, SSG
│   ├── about/ contact/
│   └── dev/              # песочницы обложек (уезжают в прод!)
├── components/
│   ├── covers/           # анимированные обложки Netok и Kotic
│   ├── icons/            # SVG-логотипы брендов
│   └── ui/
├── data/                 # контент проектов + реестр projects.ts
├── types/project.ts      # Project и ContentItem
├── hooks/ lib/
knowledge/                # вики проекта
public/                   # картинки, резюме, favicon
```

## Команды

```bash
npm install
npm run dev      # localhost:3000
npm run build    # → out/ (next build + html-beautify)
npm run lint
```

## Переменные окружения

Нет. `.env` в проекте отсутствует, секретов нет. ID Google Analytics
(`G-PDXLNPBHY0`) захардкожен в `src/app/layout.tsx`.

## Важное для AI

- **Контент правится в данных, не в разметке.** Подписи, ссылки, порядок карточек
  задаются полями `Project` в `src/data/`. Прежде чем менять компонент, проверь,
  нет ли уже поля под задачу — см. `knowledge/content-model.md`.
- **Порядок в `allProjects` определяет всё**: главная берёт первые четыре,
  `/portfolio` — `mainProjects`, `generateStaticParams` — весь список.
- **Не плоди типографские стили.** На сайте устоялись две пары классов,
  перечислены в `knowledge/design-system.md`. Новый вариант — только если ни одна
  не подходит.
- **Карточки и обложки — серверные компоненты.** Не добавляй `'use client'` в
  `ProjectCard`, `ProjectCardMedia` и `covers/`: анимации сделаны на CSS,
  единственный нужный им JS живёт в общем `AnimationObserver`.
- **Тёмная тема недостижима** — переменные под `.dark` есть, класс никто не
  ставит, переключателя нет.
- **Проверяй результат в собранном HTML**, а не только по типам: `npm run build`
  и grep по `out/`. Это статика, рантайма нет.
- **Сборка на Windows нестабильно падает** с `PageNotFoundError` при успешной
  компиляции. Лечится `rm -rf .next out node_modules/.cache` и повтором; к коду
  отношения не имеет.
- **Пуш в `main` публикует сайт** — workflow деплоя срабатывает сразу.
- Коммиты без подписи `Co-Authored-By: Claude` (правило из глобального CLAUDE.md).
