import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-condensed font-bold text-white text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-white/8">
      {title}
    </h2>
    <div className="space-y-3 font-sans text-slate-400 text-sm leading-relaxed">
      {children}
    </div>
  </div>
)

const cookieTable = [
  {
    category: 'Необхідні',
    cookies: [
      { name: 'cookie-consent',      purpose: 'Зберігає рівень вашої згоди на cookies',           duration: '12 місяців', provider: 'elektrozahid.com' },
      { name: 'cookie-consent-date', purpose: 'Зберігає дату надання згоди',                       duration: '12 місяців', provider: 'elektrozahid.com' },
    ],
  },
  {
    category: 'Аналітичні',
    cookies: [
      { name: '_ga',    purpose: 'Розрізняє користувачів Google Analytics',           duration: '2 роки',      provider: 'Google LLC' },
      { name: '_ga_*',  purpose: 'Зберігає стан сесії Google Analytics',              duration: '2 роки',      provider: 'Google LLC' },
      { name: '_gid',   purpose: 'Розрізняє користувачів (сесійний)',                 duration: '24 години',   provider: 'Google LLC' },
      { name: '_gat',   purpose: 'Обмежує кількість запитів до Google Analytics',     duration: '1 хвилина',   provider: 'Google LLC' },
    ],
  },
  {
    category: 'Маркетингові',
    cookies: [
      { name: '_fbp',   purpose: 'Відстеження конверсій Facebook Pixel',              duration: '3 місяці',    provider: 'Meta Platforms' },
      { name: 'IDE',    purpose: 'Показ релевантної реклами Google Ads',              duration: '1 рік',       provider: 'Google LLC' },
    ],
  },
]

export const CookiePolicy = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent')
    localStorage.removeItem('cookie-consent-date')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-3">
            Правова інформація
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            ПОЛІТИКА COOKIES
          </h1>
          <p className="font-mono text-[11px] text-slate-600">
            Дата набрання чинності: 01 січня 2026 р. · Остання редакція: 01 квітня 2026 р.
          </p>
        </div>

        <Section title="1. Що таке Cookies?">
          <p>
            Cookies (куки) — це невеликі текстові файли, які зберігаються на вашому пристрої
            (комп'ютері, смартфоні або планшеті) при відвідуванні веб-сайтів. Вони широко
            використовуються для забезпечення роботи сайтів або підвищення ефективності їх
            функціонування, а також надання інформації власникам сайтів.
          </p>
          <p>
            Ця Політика пояснює, які cookies використовуються на сайті elektrozahid.com,
            для яких цілей і як ви можете управляти ними. Вона відповідає вимогам GDPR,
            Директиви ЄС про електронну конфіденційність (ePrivacy) та законодавства України.
          </p>
        </Section>

        <Section title="2. Типи Cookies, які ми використовуємо">
          <div className="space-y-5 mt-2">
            {[
              {
                type: 'Необхідні (Strictly Necessary)',
                color: 'border-[#ce0000]/30 bg-[#ce0000]/5',
                desc: 'Ці cookies є обов\'язковими для роботи Сайту та не можуть бути відключені. Вони включають cookies для збереження вашого рішення щодо згоди. Правова підстава: законний інтерес (ст. 6(1)(f) GDPR).',
              },
              {
                type: 'Аналітичні (Analytics)',
                color: 'border-white/10 bg-white/[0.02]',
                desc: 'Ці cookies дозволяють нам відстежувати відвідуваність та поведінку користувачів для покращення Сайту. Ми використовуємо Google Analytics. Правова підстава: ваша згода (ст. 6(1)(a) GDPR).',
              },
              {
                type: 'Маркетингові (Marketing)',
                color: 'border-white/10 bg-white/[0.02]',
                desc: 'Ці cookies відстежують вашу активність для показу персоналізованої реклами. Можуть використовуватися Google Ads та Facebook Pixel. Правова підстава: ваша згода (ст. 6(1)(a) GDPR).',
              },
            ].map((item) => (
              <div key={item.type} className={`p-4 rounded-xl border ${item.color}`}>
                <p className="text-white font-medium mb-2">{item.type}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="3. Таблиця Cookies">
          <p className="mb-4">Перелік конкретних cookies, які використовуються на Сайті:</p>
          {cookieTable.map((group) => (
            <div key={group.category} className="mb-6">
              <p className="font-condensed font-bold text-white text-base uppercase tracking-wide mb-3">
                {group.category}
              </p>
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/8 bg-white/[0.03]">
                      {['Назва', 'Призначення', 'Термін зберігання', 'Провайдер'].map((h) => (
                        <th key={h} className="text-left px-4 py-3 font-mono text-slate-500 uppercase tracking-widest text-[10px] whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {group.cookies.map((c, i) => (
                      <tr key={c.name}
                          className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}>
                        <td className="px-4 py-3 font-mono text-[#ce0000] whitespace-nowrap">{c.name}</td>
                        <td className="px-4 py-3 text-slate-400">{c.purpose}</td>
                        <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{c.duration}</td>
                        <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{c.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </Section>

        <Section title="4. Cookies третіх осіб">
          <p>
            Деякі cookies встановлюються сторонніми постачальниками послуг. Вони регулюються
            власними політиками конфіденційності:
          </p>
          <ul className="list-none space-y-2 mt-3">
            {[
              { name: 'Google Analytics', url: 'https://policies.google.com/privacy' },
              { name: 'Google Ads',       url: 'https://policies.google.com/privacy' },
              { name: 'Meta (Facebook)',  url: 'https://www.facebook.com/privacy/policy' },
            ].map((item) => (
              <li key={item.name} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] shrink-0" />
                <span>{item.name} —{' '}
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                     className="text-[#ce0000] hover:text-red-400 transition-colors underline underline-offset-2">
                    Політика конфіденційності
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="5. Як управляти Cookies">
          <p>
            Ви маєте кілька способів управляти файлами cookie:
          </p>
          <div className="space-y-4 mt-3">
            <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
              <p className="text-white font-medium mb-2">Через наш сайт</p>
              <p className="mb-3">
                Ви можете змінити свої налаштування cookies, скинувши поточну згоду. При
                наступному відвідуванні сайту з'явиться повторний запит.
              </p>
              <button
                onClick={resetConsent}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ce0000]/10 hover:bg-[#ce0000]/20 border border-[#ce0000]/25 text-[#ce0000] text-sm font-semibold rounded-lg transition-all duration-300"
              >
                Скинути налаштування Cookies
              </button>
            </div>

            <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
              <p className="text-white font-medium mb-2">Через налаштування браузера</p>
              <p>Більшість браузерів дозволяють управляти cookies через налаштування:</p>
              <ul className="list-none space-y-1.5 mt-2">
                {[
                  { name: 'Google Chrome',  note: 'Налаштування → Конфіденційність і безпека → Файли cookie' },
                  { name: 'Mozilla Firefox', note: 'Налаштування → Конфіденційність і захист' },
                  { name: 'Safari',          note: 'Параметри → Конфіденційність' },
                  { name: 'Microsoft Edge', note: 'Налаштування → Конфіденційність, пошук та служби' },
                ].map((b) => (
                  <li key={b.name} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] mt-1.5 shrink-0" />
                    <span><span className="text-white">{b.name}:</span> {b.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                Зверніть увагу: вимкнення cookies може вплинути на функціонування Сайту.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
              <p className="text-white font-medium mb-2">Відмова від Google Analytics</p>
              <p>
                Для відмови від відстеження Google Analytics встановіть розширення{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
                   className="text-[#ce0000] hover:text-red-400 transition-colors underline underline-offset-2">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="6. Зберігання та безпека">
          <p>
            Cookie-файли зберігаються на вашому пристрої у зашифрованому або відкритому форматі
            залежно від типу. Ми не зберігаємо конфіденційні персональні дані (паролі,
            платіжні дані) у cookies.
          </p>
        </Section>

        <Section title="7. Зміни до Політики Cookies">
          <p>
            Ми можемо оновлювати цю Політику у зв'язку зі змінами у використовуваних технологіях
            або вимогах законодавства. Дата останньої редакції вказана вгорі сторінки.
            При суттєвих змінах ми повідомимо вас через повторний запит на згоду.
          </p>
        </Section>

        <Section title="8. Контакти">
          <p>
            З питань щодо використання cookies:{' '}
            <a href="mailto:info@elektrozahid.com" className="text-[#ce0000] hover:text-red-400 transition-colors">
              info@elektrozahid.com
            </a>
          </p>
          <p>
            Детальніше про обробку персональних даних читайте у нашій{' '}
            <Link to="/privacy-policy" className="text-[#ce0000] hover:text-red-400 transition-colors">
              Політиці конфіденційності
            </Link>.
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-white/8">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] text-slate-600 hover:text-white uppercase tracking-widest transition-colors duration-300">
            ← Повернутися на головну
          </Link>
        </div>
      </div>
    </div>
  )
}
