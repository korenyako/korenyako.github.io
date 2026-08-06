# Модель контента

БД в проекте нет. Роль хранилища играет `src/data/` — по TypeScript-модулю на
проект плюс `projects.ts` как реестр. Типы — `src/types/project.ts`.

## Project

Ключевые поля (полный список — в `src/types/project.ts`):

| Поле | Назначение |
|---|---|
| `id` | сегмент URL, `/portfolio/<id>` |
| `title` | заголовок карточки и кейса |
| `subtitle` | длинное описание; шапка кейса и фолбэк для карточки |
| `cardSubtitle` | подпись под карточкой в сетке; вытесняет `subtitle` |
| `hero` | превью карточки и картинка кейса; поддерживает `.mp4` |
| `heroDetail` | если задан, кейс берёт его вместо `hero` (карточка — всегда `hero`) |
| `heroComponent` | `'netok' \| 'kotic'` — карточка рисует компонент-обложку, `hero` остаётся фолбэком |
| `cardExternalLink` | карточка ведёт наружу, а не на кейс |
| `inDevelopment` | карточка некликабельна, показывает метку «In development» |
| `externalLink` | кнопка «Visit Website» в шапке кейса (не путать с `cardExternalLink`) |
| `awardLogo` / `awardLink` | логотип награды в шапке кейса |
| `role`, `scope`, `timeline`, `industry`, `deliverables`, `highlights` | мета-колонка кейса |
| `content` | массив `ContentItem` — тело кейса |

`externalLink` и `cardExternalLink` разведены намеренно: у FormEngine есть и
живой сайт, и внутренний кейс, поэтому одним полем не обойтись.

## Реестр (`projects.ts`)

```
allProjects   # порядок задаёт всё остальное
mainProjects  # allProjects минус illustrations и digital
projectMap    # id → Project
```

- Главная показывает `allProjects.slice(0, 4)` → Ncloud, HotRoom, FormEngine, Pulse.
- `/portfolio` показывает `mainProjects` — те же четыре плюс De Fonseca, Netok, Kotic.
- `generateStaticParams` идёт по `allProjects`, поэтому у `illustrations` и
  `digital` страницы генерируются, хотя карточек нигде нет.
- `MoreProjects` в подвале кейса берёт `allProjects.slice(0, 2)` после фильтра
  текущего — то есть почти всегда Ncloud и HotRoom.

Netok и Kotic стоят в конце списка сознательно: их кейсы ещё заглушки, и так они
не попадают на главную.

## ContentItem: блоки кейса

Рендерятся в `ProjectContent.tsx` по строковому `type`. Вертикальные отступы
считает `getSpacing()`: `mt-4` после заголовка, `mt-6` между текстовыми блоками,
`mt-16` во всех прочих стыках.

Используются в данных:

| Тип | Что | Ширина |
|---|---|---|
| `text` | абзац, допускает HTML через `dangerouslySetInnerHTML` | текстовая |
| `large-text` | крупный абзац, обычно интро и выводы | текстовая |
| `heading` | подзаголовок раздела | текстовая |
| `list` | список с длинным тире | текстовая |
| `image-text-width` | одна картинка по ширине текста | текстовая |
| `image-full` | картинка во всю ширину контейнера | полная |
| `image-duo` | две картинки в ряд, обрезка в квадрат `object-cover` | полная |

Объявлены в рендерере, но ни одним проектом не запрашиваются: `video`,
`image-full-width` (параллакс), `text-image`, `gallery-slider`, `custom`
(`PulseSlider`), `image-duo-text-width`.

`image-duo-text-width` добавлен 2026-08-06 и оставлен на будущее: две картинки в
ряд, которые вместе с гэпом занимают ровно текстовую ширину. Высоты не
выравнивает, поэтому годится только для пары с одинаковыми пропорциями.

«Текстовая ширина» — `max-w-3xl mx-auto` (768px), «полная» — ширина контейнера
`max-w-[1440px] px-4`. Подробнее в [design-system.md](design-system.md).

## Отзывы и бренды

Захардкожены в компонентах, не в `src/data/`:

- `Testimonials.tsx` — 6 отзывов (имя, должность, текст). Секция вставляется на
  `/portfolio` и в каждый кейс.
- `BrandStrip.tsx` — 10 инлайновых SVG-логотипов из `components/icons/`,
  бесконечная лента через дублирование списка и `animate-scroll`. Только на главной.
