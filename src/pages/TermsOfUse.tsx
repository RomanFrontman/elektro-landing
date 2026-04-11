import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-condensed font-bold text-white text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-white/8">
      {title}
    </h2>
    <div className="space-y-3 font-sans text-slate-200 text-sm leading-relaxed">
      {children}
    </div>
  </div>
)

export const TermsOfUse = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-3">
            Правова інформація
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            УМОВИ ВИКОРИСТАННЯ
          </h1>
          <p className="font-mono text-[11px] text-slate-600">
            Дата набрання чинності: 01 січня 2026 р. · Остання редакція: 01 квітня 2026 р.
          </p>
        </div>

        <Section title="1. Прийняття умов">
          <p>
            Отримуючи доступ до веб-сайту elektrozahid.com (далі — «Сайт»), що належить
            ДК Електро-Захід (далі — «Компанія»), ви підтверджуєте, що прочитали, зрозуміли
            та погоджуєтесь дотримуватися цих Умов використання.
          </p>
          <p>
            Якщо ви не погоджуєтесь з будь-якою частиною цих умов — будь ласка, не використовуйте Сайт.
          </p>
        </Section>

        <Section title="2. Опис послуг">
          <p>
            Сайт є інформаційним ресурсом, що надає відомості про Компанію, її продукцію,
            ціни та контактну інформацію. Сайт не є інтернет-магазином.
            Усі замовлення та угоди укладаються безпосередньо з менеджерами Компанії.
          </p>
        </Section>

        <Section title="3. Інтелектуальна власність">
          <p>
            Весь контент Сайту — текстові матеріали, зображення, логотипи, графіка, дизайн —
            є власністю ДК Електро-Захід або використовується з відповідного дозволу правовласників
            та охороняється законодавством про авторське право.
          </p>
          <p>
            Забороняється копіювати, відтворювати, розповсюджувати, публікувати або іншим чином
            використовувати матеріали Сайту без письмового дозволу Компанії.
          </p>
        </Section>

        <Section title="4. Допустиме використання">
          <p>Користуючись Сайтом, ви зобов'язуєтесь:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              'Використовувати Сайт виключно в законних цілях',
              'Не намагатися отримати несанкціонований доступ до Сайту або систем Компанії',
              'Не поширювати шкідливе програмне забезпечення або шкідливий контент',
              'Не порушувати права інтелектуальної власності',
              'Надавати достовірні дані при заповненні контактних форм',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="5. Точність інформації">
          <p>
            Ми докладаємо зусиль для забезпечення актуальності та точності інформації на Сайті,
            однак не гарантуємо її повноту або відсутність помилок. Характеристики, ціни та наявність
            продукції можуть змінюватися без попереднього повідомлення.
          </p>
          <p>
            Для отримання актуальної інформації просимо звертатися безпосередньо до менеджерів Компанії.
          </p>
        </Section>

        <Section title="6. Обмеження відповідальності">
          <p>
            Сайт надається «як є» без будь-яких гарантій. Компанія не несе відповідальності за:
          </p>
          <ul className="list-none space-y-2 mt-2">
            {[
              'Прямі або непрямі збитки від використання або неможливості використання Сайту',
              'Будь-які перебої у роботі Сайту, технічні помилки або втрату даних',
              'Контент третіх осіб, доступних через посилання на Сайті',
              'Дії або бездіяльність третіх осіб у зв\'язку з вашим використанням Сайту',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce0000] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="7. Посилання на сторонні сайти">
          <p>
            Сайт може містити посилання на зовнішні ресурси. Ці посилання надаються виключно для
            зручності користувачів. Компанія не несе відповідальності за зміст, точність або
            практику конфіденційності таких сторонніх сайтів.
          </p>
        </Section>

        <Section title="8. Конфіденційність">
          <p>
            Збір та обробка персональних даних регулюються нашою{' '}
            <Link to="/privacy-policy" className="text-[#ce0000] hover:text-red-400 transition-colors">
              Політикою конфіденційності
            </Link>,
            яка є невід'ємною частиною цих Умов.
          </p>
        </Section>

        <Section title="9. Cookies">
          <p>
            Використання файлів cookie на Сайті регулюється нашою{' '}
            <Link to="/cookie-policy" className="text-[#ce0000] hover:text-red-400 transition-colors">
              Політикою Cookies
            </Link>.
          </p>
        </Section>

        <Section title="10. Зміни до умов">
          <p>
            Компанія залишає за собою право вносити зміни до цих Умов використання в будь-який час.
            Зміни набирають чинності з моменту їх публікації на Сайті. Продовження використання
            Сайту після публікації змін означає вашу згоду з оновленими умовами.
          </p>
        </Section>

        <Section title="11. Застосовне право">
          <p>
            Ці Умови регулюються та тлумачаться відповідно до законодавства України.
            Усі спори підлягають розгляду у судах за місцем знаходження Компанії —
            м. Львів, Україна.
          </p>
          <p>
            Якщо ви є резидентом ЄС, ви також маєте право скористатися механізмами
            альтернативного вирішення спорів відповідно до законодавства ЄС.
          </p>
        </Section>

        <Section title="12. Контакти">
          <p>
            З питань щодо цих Умов використання звертайтеся:
          </p>
          <div className="mt-3 p-4 rounded-xl border border-white/8 bg-white/[0.02] space-y-1.5">
            <p><span className="text-white font-medium">ДК Електро-Захід</span></p>
            <p>м. Львів, вул. Зелена, 238</p>
            <p>
              <a href="mailto:info@elektrozahid.com" className="text-[#ce0000] hover:text-red-400 transition-colors">
                info@elektrozahid.com
              </a>
            </p>
          </div>
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
