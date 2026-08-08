# Лог вики

## 2026-08-08 update | Добавлен проект FontScout

Десятый проект в `allProjects` — FontScout, Chrome-расширение для определения
шрифтов на странице. Данные в `src/data/fontscout.ts`, обложка — статичная
картинка `public/images/projects/fontscout/fontscout-cover.png` (1200×900, ровно
4:3 под `aspect-[4/3]` карточки). Кейса нет, `content` — заглушка; карточка
уводит в Chrome Web Store через `cardExternalLink`, как у Netok.

Анимированную обложку по образцу Netok и Kotic пробовали и отказались: владелец
предпочёл статичную картинку. Ничего от эксперимента в кодовой базе не осталось,
`ProjectCoverId` по-прежнему `'netok' | 'kotic'`.

Обновлены: `domain/overview.md` (таблица проектов и абзац про личные продукты),
`plans/roadmap.md` (пункт про кейсы-заглушки).

## 2026-08-08 update | Подписи карточек личных продуктов — про продукт

`cardSubtitle` у Netok, Kotic и FontScout переписаны с «Brand and product design
for …» на описание самого продукта, по образцу HotRoom. Текст Netok — авторский,
от владельца, дословно. Вместе с этим со страниц пропало единственное упоминание
Rust и Tauri: оно жило только в старой подписи Netok.

`subtitle` не трогали, хотя у Kotic и FontScout он тоже написан как описание
продукта, а не работ, — в отличие от всех остальных кейсов.

Обновлён: `domain/overview.md` (раздел «Проекты»).

## 2026-08-06 update | Формулировка награды на /about

Абзац на `/about` переписан: «Led design for … (iF Design Award 2022)» →
«designed for an enterprise HR platform … that won an iF Design Award». Награда
теперь описана как принадлежащая платформе, а не автору — как и в кейсе Pulse.
Заодно перечисление брендов переставлено на METRO, PepsiCo, De Fonseca, Bud.

Обновлены: `domain/overview.md` (раздел «Награды»), `plans/roadmap.md` (пункт
закрыт).

## 2026-08-06 init | Начальная компиляция вики

Создана из: `README.md`, `package.json`, `next.config.mjs`, `tailwind.config.ts`,
`tsconfig.json`, `.github/workflows/deploy.yml`, `src/app/**` (layout, globals.css,
все страницы), `src/components/**` (включая `covers/` и комментарии в
`AnimationObserver.tsx`, `NetokCover.tsx`, `netok-cover.css`, `kotic-cover.css`),
`src/data/**`, `src/types/project.ts`, `public/`, история git.

7 статей: `architecture.md`, `content-model.md`, `design-system.md`,
`animation.md`, `decisions.md`, `domain/overview.md`, `plans/roadmap.md`.

`database.md` не создавался — БД в проекте нет, роль хранилища играет
`src/data/`, описан в `content-model.md`.

Зафиксировано состояние после коммита `b3a47bb` (переработка контента портфолио,
добавлены Netok и Kotic, удалены KFC и Bud).

Проверено при компиляции, а не взято из документации:

- `public/og-image.jpg` отсутствует, хотя `layout.tsx` на него ссылается;
- тёмная тема объявлена под `.dark`, но класс нигде не выставляется;
- `ScrollToTop`, `TestSlider`, `PulseSliderCSS` не импортируются;
- `PulseSlider` и `GallerySlider` не запрашиваются ни одним проектом;
- из объявленных типов блоков контента в данных используются 7 из 13.
