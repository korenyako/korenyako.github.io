# Дизайн-система

## Токены

Объявлены в `src/app/globals.css` как HSL-тройки в CSS-переменных, Tailwind
подтягивает их в `tailwind.config.ts` через `hsl(var(--token))`.

Рабочий набор — почти монохром:

```
--background        0 0% 100%   белый
--foreground        0 0% 9%     #171717, основной текст
--muted-foreground  0 0% 45%    вторичный текст
--border            0 0% 90%
```

Остальные (`primary`, `secondary`, `accent`, `destructive`, `popover`, `card`,
`sidebar`) достались от шаблона shadcn и в разметке не встречаются. Отдельно
есть палитра `neutral-50…950` для утилит вроде `bg-neutral-100`.

## Тёмная тема — объявлена, но недостижима

`darkMode: ["class"]` в конфиге, полный набор переменных под `.dark` в
globals.css — и ни одного места, где класс `.dark` навешивается. Переключателя
нет. То есть тёмная тема мертва: писать под неё смысла нет, но и `bg-white`
вместо `bg-background` сейчас ничего не ломает.

## Типографика

По сайту устоялись две пары. Держаться их — дешёвый способ не плодить стили.

**Заголовок / лейбл**
```
text-xl md:text-2xl font-medium text-foreground     # заголовки карточек
text-base md:text-lg font-medium text-foreground    # лейблы мета-колонки, подзаголовки кейса, имена в отзывах
```

**Текст**
```
text-base md:text-lg text-muted-foreground leading-relaxed   # подписи под карточками, должности в отзывах
text-xl md:text-2xl text-muted-foreground leading-relaxed    # абзацы about/contact, герой главной
text-2xl md:text-3xl text-muted-foreground leading-relaxed   # интро кейса, large-text
```

Крупные заголовки страниц — `text-4xl md:text-5xl font-medium font-headline`
(Funnel Sans). Герой главной — `text-4xl md:text-7xl`.

## Раскладка

- Контейнер страницы: `max-w-[1440px] mx-auto px-4`.
- Текстовая колонка кейса: `max-w-3xl mx-auto` (768px).
- Сетка `/portfolio`: `grid-cols-1 md:grid-cols-3 gap-8`, главная — `md:grid-cols-2 gap-12`.
- Скругления: `rounded-3xl` у превью и полноширинных картинок, `rounded-2xl` у
  картинок текстовой ширины.
- Отступ под шапку: `pt-[88px]` у `<main>`, шапка `fixed`.

## Известные отклонения

- `Testimonials.tsx` — инлайновый `style={{ background: '#f7f5f4' }}`,
  единственный такой в проекте, и `bg-white` на карточках вместо токена.
  Ближайший токен `--muted` (`#f5f5f5`) чуть холоднее, поэтому замена меняет
  оттенок; решение отложено.
- `globals.css` — хардкод `#EDF1F8` в `.highlight-underline` и `#A76CF6` в
  `.link-craft`. Обе утилиты в разметке не используются.
- `BrandStrip.tsx` — градиенты-маски прибиты к `#FFFFFF`.
