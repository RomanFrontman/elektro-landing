const teamMembers = [
  {
    initials: 'ДК',
    name: 'Дмитро Коваленко',
    position: 'Директор',
    bio: 'Засновник компанії, понад 20 років у галузі промислової електротехніки. Відповідає за стратегічний розвиток та ключові партнерства.',
    color: 'bg-[#ce0000]',
    textColor: 'text-white',
  },
  {
    initials: 'ОМ',
    name: 'Олена Мельник',
    position: 'Менеджер з продажу',
    bio: 'Керує відділом продажу та роботою з клієнтами. Спеціалізується на підборі обладнання та формуванні комплексних пропозицій.',
    color: 'bg-white',
    textColor: 'text-black',
  },
  {
    initials: 'АШ',
    name: 'Андрій Шевченко',
    position: 'Технічний спеціаліст',
    bio: "Інженер-електрик з досвідом роботи на промислових об'єктах. Консультує клієнтів щодо технічних характеристик обладнання.",
    color: 'bg-zinc-700',
    textColor: 'text-white',
  },
  {
    initials: 'МБ',
    name: 'Марія Бондаренко',
    position: 'Логістика та постачання',
    bio: 'Забезпечує своєчасне постачання та оптимізацію ланцюга поставок. Координує роботу з митними брокерами та перевізниками.',
    color: 'bg-zinc-800',
    textColor: 'text-white',
  },
]

export const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#ce0000] text-sm font-semibold uppercase tracking-widest mb-3">
            Люди
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Наша команда
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
            Досвідчені фахівці, які щодня працюють задля задоволення потреб наших клієнтів.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white/3 rounded-xl p-7 border border-white/8 hover:border-[#ce0000]/30 hover:bg-white/6 hover:shadow-xl hover:shadow-[#ce0000]/5 transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 ${member.color} ${member.textColor} rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-5 group-hover:scale-105 transition-transform duration-300`}
              >
                {member.initials}
              </div>
              <h3 className="font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#ce0000] text-sm font-medium mb-4">{member.position}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
