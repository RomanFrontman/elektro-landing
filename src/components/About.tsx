import { Shield, Award, CheckCircle, Handshake, CalendarCheck } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Надійність',
    description: 'Поставляємо лише сертифіковане обладнання від перевірених виробників.',
  },
  {
    icon: Award,
    title: 'Досвід',
    description: 'Понад 15 років роботи у сфері промислової електротехніки.',
  },
  {
    icon: CheckCircle,
    title: 'Якість',
    description: 'Кожна одиниця продукції проходить вхідний контроль якості.',
  },
  {
    icon: Handshake,
    title: 'Партнерство',
    description: 'Довгострокові відносини з клієнтами та постачальниками.',
  },
]

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/8 text-[#1e3a5f] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <CalendarCheck size={15} />
              З 2008 року на ринку
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Про компанію<br />
              <span className="text-amber-500">ДК Електро-Захід</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                ДК Електро-Захід — провідний постачальник промислового
                електротехнічного обладнання в Україні. Заснована у 2008 році у Львові,
                компанія спеціалізується на комплексному постачанні обладнання для
                автоматизації, водопостачання та електроживлення промислових об'єктів.
              </p>
              <p>
                Ми співпрацюємо з провідними європейськими та вітчизняними
                виробниками, що дозволяє нам пропонувати клієнтам оптимальне
                співвідношення ціни та якості. Наша команда інженерів та менеджерів
                завжди готова допомогти обрати правильне рішення для вашого проєкту.
              </p>
              <p>
                За роки роботи ми реалізували понад 1000 проєктів різної складності —
                від невеликих підприємств до великих промислових комплексів.
              </p>
            </div>
          </div>

          {/* Right: values grid */}
          <div className="grid grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#1e3a5f]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1e3a5f]/8 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors duration-300">
                  <Icon className="text-[#1e3a5f] group-hover:text-amber-500 transition-colors duration-300" size={22} />
                </div>
                <h3 className="font-semibold text-[#1e3a5f] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
