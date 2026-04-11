const teamMembers = [
  {
    initials: 'ДК',
    name: 'Дмитро Коваленко',
    position: 'Директор',
    bio: 'Засновник компанії, понад 20 років у галузі промислової електротехніки. Відповідає за стратегічний розвиток та ключові партнерства.',
    color: 'bg-[#1e3a5f]',
  },
  {
    initials: 'ОМ',
    name: 'Олена Мельник',
    position: 'Менеджер з продажу',
    bio: 'Керує відділом продажу та роботою з клієнтами. Спеціалізується на підборі обладнання та формуванні комплексних пропозицій.',
    color: 'bg-amber-500',
  },
  {
    initials: 'АШ',
    name: 'Андрій Шевченко',
    position: 'Технічний спеціаліст',
    bio: "Інженер-електрик з досвідом роботи на промислових об'єктах. Консультує клієнтів щодо технічних характеристик обладнання.",
    color: 'bg-blue-600',
  },
  {
    initials: 'МБ',
    name: 'Марія Бондаренко',
    position: 'Логістика та постачання',
    bio: 'Забезпечує своєчасне постачання та оптимізацію ланцюга поставок. Координує роботу з митними брокерами та перевізниками.',
    color: 'bg-slate-600',
  },
]

export const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Люди
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Наша команда
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Досвідчені фахівці, які щодня працюють задля задоволення потреб наших клієнтів.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-xl p-7 border border-slate-100 hover:border-[#1e3a5f]/20 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-5 group-hover:scale-105 transition-transform duration-300`}
              >
                {member.initials}
              </div>
              <h3 className="font-bold text-[#1e3a5f] mb-1">{member.name}</h3>
              <p className="text-amber-500 text-sm font-medium mb-4">{member.position}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
