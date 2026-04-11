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

export const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-3">
            Правова інформація
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
          </h1>
          <p className="font-mono text-[11px] text-slate-600">
            Дата набрання чинності: 01 січня 2026 р. · Остання редакція: 01 квітня 2026 р.
          </p>
        </div>

        <Section title="1. Загальні положення">
          <p>
            Ця Політика конфіденційності описує, як ДК Електро-Захід (далі — «Компанія», «ми», «нас»)
            збирає, використовує та захищає персональні дані відвідувачів веб-сайту elektrozahid.com
            (далі — «Сайт»).
          </p>
          <p>
            Ми дотримуємося вимог Загального регламенту про захист даних (GDPR) Європейського Союзу
            (Регламент ЄС 2016/679) та Закону України «Про захист персональних даних».
          </p>
          <p>
            Використовуючи наш Сайт, ви погоджуєтесь з умовами цієї Політики конфіденційності.
          </p>
        </Section>

        <Section title="2. Контролер персональних даних">
          <p>Відповідальним за обробку персональних даних є:</p>
          <div className="mt-3 p-4 rounded-xl border border-white/8 bg-white/[0.02] space-y-1.5">
            <p><span className="text-white font-medium">Назва:</span> ДК Електро-Захід</p>
            <p><span className="text-white font-medium">Адреса:</span> м. Львів, вул. Зелена, 238, Україна</p>
            <p>
              <span className="text-white font-medium">Email:</span>{' '}
              <a href="mailto:info@elektrozahid.com" className="text-[#ce0000] hover:text-red-400 transition-colors">
                info@elektrozahid.com
              </a>
            </p>
            <p>
              <span className="text-white font-medium">Телефон:</span>{' '}
              <a href="tel:+380322454753" className="text-[#ce0000] hover:text-red-400 transition-colors">
                (032) 245-47-53
              </a>
            </p>
          </div>
        </Section>

        <Section title="3. Які персональні дані ми збираємо">
          <p>Ми можемо збирати наступні категорії персональних даних:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              'Ім\'я та прізвище — для ідентифікації при зверненні',
              'Адреса електронної пошти — для відповіді на ваш запит',
              'Номер телефону — для оперативного зв\'язку (якщо вказано)',
              'Текст повідомлення — для обробки вашого запиту або пропозиції',
              'IP-адреса та технічні дані браузера — автоматично через cookies (аналітика)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Ми не збираємо спеціальні категорії персональних даних (расове походження, стан здоров'я,
            біометричні дані тощо).
          </p>
        </Section>

        <Section title="4. Мета та правова підстава обробки">
          <p>Ми обробляємо ваші персональні дані на таких підставах:</p>
          <div className="mt-3 space-y-3">
            {[
              {
                title: 'Виконання договору (ст. 6(1)(b) GDPR)',
                desc: 'Обробка запитів щодо продукції, формування комерційних пропозицій, укладення договорів постачання.',
              },
              {
                title: 'Законний інтерес (ст. 6(1)(f) GDPR)',
                desc: 'Покращення якості сервісу, захист від шахрайства, аналітика відвідуваності Сайту.',
              },
              {
                title: 'Згода (ст. 6(1)(a) GDPR)',
                desc: 'Надсилання маркетингових матеріалів та новин компанії — лише за вашою явною згодою.',
              },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg border border-white/8 bg-white/[0.02]">
                <p className="text-white font-medium mb-1">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Строки зберігання даних">
          <p>Ми зберігаємо персональні дані не довше, ніж це необхідно для досягнення зазначених цілей:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              'Дані з контактної форми — 3 роки з дати звернення',
              'Дані клієнтів за договором — 5 років після завершення договірних відносин',
              'Аналітичні дані (cookies) — відповідно до Політики Cookies',
              'Дані щодо маркетингових розсилок — до моменту відкликання згоди',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="6. Ваші права (права суб'єкта даних)">
          <p>Відповідно до GDPR, ви маєте наступні права щодо ваших персональних даних:</p>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {[
              { right: 'Право на доступ',       desc: 'Отримати копію ваших персональних даних, які ми зберігаємо.' },
              { right: 'Право на виправлення',  desc: 'Виправити неточні або неповні дані.' },
              { right: 'Право на видалення',    desc: 'Вимагати видалення ваших даних («право на забуття»).' },
              { right: 'Право на обмеження',    desc: 'Обмежити обробку ваших даних у певних випадках.' },
              { right: 'Право на перенесення',  desc: 'Отримати дані у машинозчитуваному форматі.' },
              { right: 'Право на заперечення',  desc: 'Заперечити проти обробки на підставі законних інтересів.' },
              { right: 'Право відкликати згоду', desc: 'Відкликати згоду на обробку в будь-який момент.' },
              { right: 'Право на скаргу',        desc: 'Подати скаргу до наглядового органу.' },
            ].map((item) => (
              <div key={item.right} className="p-3 rounded-lg border border-white/8 bg-white/[0.02]">
                <p className="text-white font-medium text-sm mb-1">{item.right}</p>
                <p className="text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            Для реалізації ваших прав надішліть запит на{' '}
            <a href="mailto:info@elektrozahid.com" className="text-[#ce0000] hover:text-red-400 transition-colors">
              info@elektrozahid.com
            </a>.
            Ми відповімо протягом 30 днів.
          </p>
        </Section>

        <Section title="7. Передача даних третім особам">
          <p>
            Ми не продаємо ваші персональні дані третім особам. Дані можуть бути передані:
          </p>
          <ul className="list-none space-y-2 mt-3">
            {[
              'Google LLC — аналітичні сервіси (Google Analytics), відповідно до Стандартних договірних положень ЄС',
              'Постачальники IT-послуг (хостинг, CRM) — виключно для надання послуг Компанії',
              'Державні органи — лише у випадках, передбачених законодавством України',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="8. Безпека даних">
          <p>
            Ми впровадили організаційні та технічні заходи для захисту ваших персональних даних від
            несанкціонованого доступу, зміни, розкриття або знищення, зокрема: шифрування HTTPS,
            обмежений доступ співробітників до даних, регулярні перевірки безпеки.
          </p>
        </Section>

        <Section title="9. Cookies">
          <p>
            Наш Сайт використовує cookies. Докладна інформація міститься у нашій{' '}
            <Link to="/cookie-policy" className="text-[#ce0000] hover:text-red-400 transition-colors">
              Політиці Cookies
            </Link>.
          </p>
        </Section>

        <Section title="10. Наглядовий орган">
          <p>
            Якщо ви вважаєте, що обробка ваших персональних даних порушує вимоги GDPR, ви маєте право
            подати скаргу до відповідного наглядового органу. В Україні таким органом є{' '}
            <span className="text-white">Уповноважений Верховної Ради України з прав людини</span>.
            Якщо ви є резидентом ЄС — до наглядового органу вашої країни.
          </p>
        </Section>

        <Section title="11. Зміни до Політики">
          <p>
            Ми залишаємо за собою право вносити зміни до цієї Політики. Актуальна версія завжди
            доступна на цій сторінці. Значні зміни будуть повідомлені додатково.
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-white/8">
          <p className="font-sans text-slate-600 text-sm">
            З питань конфіденційності: {' '}
            <a href="mailto:info@elektrozahid.com" className="text-[#ce0000] hover:text-red-400 transition-colors">
              info@elektrozahid.com
            </a>
          </p>
          <Link to="/" className="inline-flex items-center gap-2 mt-4 font-mono text-[11px] text-slate-600 hover:text-white uppercase tracking-widest transition-colors duration-300">
            ← Повернутися на головну
          </Link>
        </div>
      </div>
    </div>
  )
}
