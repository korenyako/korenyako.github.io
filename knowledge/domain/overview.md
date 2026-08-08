# Предметная область

## Владелец

Антон Кореняко — продуктовый дизайнер и арт-директор, 15+ лет в digital, живёт в
Турине. Позиционирование с сайта: дизайнер, который сам пишет код (React,
Next.js), часто приходит в ранние команды первым или единственным дизайнером.

Общее описание сайта: «Product designer in Turin. I design enterprise platforms,
mobile apps and websites.» Оно же в `<meta description>`, `og:description`,
`twitter:description` — задано в `layout.tsx` и продублировано в метаданных
главной, потому что метаданные страницы перекрывают layout.

Резюме — `public/documents/Anton-Korenyako-Product-Designer-Resume.pdf`, ссылка в
шапке. Рядом лежит второй, более старый PDF `Anton Korenyako - Resume.pdf`, он
нигде не используется.

## Проекты

Порядок — как в `allProjects`. Подписи под карточками — полные предложения, не
теги (решение от 2026-08-06).

У личных продуктов (Netok, Kotic, FontScout) `cardSubtitle` описывает **сам
продукт**, а не выполненные работы — как у HotRoom, а не как у Ncloud и Pulse.
Раньше все три начинались с «Brand and product design for …»; переписаны
2026-08-08. Формулировка Netok — авторская, дословно от владельца.

| id | Название | Что это | Статус |
|---|---|---|---|
| `cloud` | Ncloud | Enterprise-платформа облачной инфраструктуры, соло от эскизов до MVP | кейс готов |
| `hotroom` | HotRoom | Приложение брони отелей: почасовая, ночная и многодневная в одном флоу | кейс готов |
| `formengine` | FormEngine | Дизайн и фронтенд сайта конструктора форм на React; есть живой сайт | кейс готов |
| `pulse` | Pulse | HR-платформа Сбербанка, 250 000 пользователей в день | кейс готов |
| `defonseca` | De Fonseca | Мультиязычный e-commerce для итальянского бренда домашней обуви в России | кейс готов |
| `netok` | Netok | Бренд и продукт бесплатного десктопного приложения мониторинга сети (Rust + Tauri) | **кейс-заглушка**, карточка ведёт на netok.app |
| `kotic` | Kotic | Бренд и продукт мобильного приложения по единоборствам | **кейс-заглушка**, карточка некликабельна |
| `fontscout` | FontScout | Бренд и продукт Chrome-расширения, определяющего шрифты на странице | **кейс-заглушка**, карточка ведёт в Chrome Web Store |
| `illustrations` | Illustrations | Личные иллюстрации | страница есть, карточки нет |
| `digital` | Digital Experience | Заготовка с шаблонным текстом | страница есть, карточки нет |

Netok, Kotic и FontScout — личные продукты, не клиентские. У всех трёх в
`content` стоит заглушка «Case study in progress», при этом страницы
`/portfolio/netok/`, `/portfolio/kotic/` и `/portfolio/fontscout/` генерируются и
доступны по прямой ссылке, хотя ссылок на них нет нигде: карточки Netok и
FontScout уводят наружу, карточка Kotic некликабельна.

Удалены 2026-08-06: KFC (концепт редизайна сайта для KFC Россия, агентство LETO)
и Bud (AR-приложение для мерчандайзеров AB InBev). Данные и кейсы вырезаны,
картинки в `public/images/projects/{kfc,bud}/` остались, логотип KFC продолжает
крутиться в `BrandStrip`.

## Награды

Единственная — iF Design Award 2022 у платформы Pulse. Формулировка в кейсе
подчёркивает командный характер награды, см. [decisions.md](../decisions.md).
На `/about` с 2026-08-06 та же логика: «an enterprise HR platform … that won an
iF Design Award» — награду получила платформа, не автор. Год в этой формулировке
опущен.

## Отзывы

Шесть штук в `Testimonials.tsx`: Viacheslav Sabirov (BATNA), Fabrizio Rossi и
Rossano Rolla (De Fonseca), Sergey Doroshko (Leto Digital Agency), Roman Soroka
(KupiVIP), Mike Lukinov (OptimaJet). Отзыв Дорошко относится к сотрудничеству с
агентством, а не к удалённым кейсам KFC и Bud, поэтому при их удалении сохранён.

## Бренды

Лента логотипов на главной: KFC, De Fonseca, Salomon, Adidas, Ferrero, Hyundai,
Abbott, Mazda, Kotanyi, Xerox. На `/about` дополнительно упомянуты METRO, PepsiCo
и Bud — в тексте, без логотипов.
