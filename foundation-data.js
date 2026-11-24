/* Original curated Brazilian Portuguese vocabulary and related phrase decks. */
const FOUNDATION_GROUPS = [
 [
  "pronouns",
  "base",
  "Местоимения",
  "Pronomes pessoais",
  "Você и a gente требуют глагол в 3-м лице ед. числа. Tu используется в некоторых регионах.",
  "Você e a gente usam o verbo na terceira pessoa do singular. Tu é regional.",
  [
   [
    "eu",
    "я",
    "Eu sou estudante.",
    "Я учусь."
   ],
   [
    "você",
    "ты, вы",
    "Você fala português?",
    "Ты говоришь по-португальски?"
   ],
   [
    "ele",
    "он"
   ],
   [
    "ela",
    "она"
   ],
   [
    "nós",
    "мы",
    "Nós estudamos juntos.",
    "Мы учимся вместе."
   ],
   [
    "a gente",
    "мы (разг.)",
    "A gente vai à igreja.",
    "Мы идём в церковь."
   ],
   [
    "vocês",
    "вы (мн. ч.)"
   ],
   [
    "eles",
    "они (м. р.)"
   ],
   [
    "elas",
    "они (ж. р.)"
   ],
   [
    "tu",
    "ты (регион.)"
   ],
   [
    "o senhor",
    "вы (вежливо, к мужчине)"
   ],
   [
    "a senhora",
    "вы (вежливо, к женщине)"
   ]
  ]
 ],
 [
  "possessives",
  "base",
  "Принадлежность",
  "Possessivos",
  "Meu/minha, nosso/nossa согласуются с предметом, а не с владельцем.",
  "Meu/minha e nosso/nossa concordam com o objeto possuído.",
  [
   [
    "meu",
    "мой",
    "Meu livro está aqui.",
    "Моя книга здесь."
   ],
   [
    "minha",
    "моя",
    "Minha mãe está em casa.",
    "Моя мама дома."
   ],
   [
    "meus",
    "мои (м. р.)"
   ],
   [
    "minhas",
    "мои (ж. р.)"
   ],
   [
    "seu",
    "твой, ваш, его, её"
   ],
   [
    "sua",
    "твоя, ваша, его, её"
   ],
   [
    "seus",
    "твои, ваши, его, её (м. р.)"
   ],
   [
    "suas",
    "твои, ваши, его, её (ж. р.)"
   ],
   [
    "nosso",
    "наш"
   ],
   [
    "nossa",
    "наша"
   ],
   [
    "nossos",
    "наши (м. р.)"
   ],
   [
    "nossas",
    "наши (ж. р.)"
   ],
   [
    "dele",
    "его"
   ],
   [
    "dela",
    "её"
   ],
   [
    "deles",
    "их (м. р.)"
   ],
   [
    "delas",
    "их (ж. р.)"
   ]
  ]
 ],
 [
  "articles",
  "base",
  "Артикли и указательные слова",
  "Artigos e demonstrativos",
  "O/a — определённые артикли; um/uma — неопределённые. Este/esse/aquele указывают на предмет.",
  "O/a são artigos definidos; um/uma são indefinidos. Este/esse/aquele apontam para algo.",
  [
   [
    "o",
    "определённый артикль (м. р.)",
    "O livro está na mesa.",
    "Книга на столе."
   ],
   [
    "a",
    "определённый артикль (ж. р.)",
    "A casa é pequena.",
    "Дом маленький."
   ],
   [
    "os",
    "определённый артикль (м. р., мн.)"
   ],
   [
    "as",
    "определённый артикль (ж. р., мн.)"
   ],
   [
    "um",
    "один; неопределённый артикль (м. р.)"
   ],
   [
    "uma",
    "одна; неопределённый артикль (ж. р.)"
   ],
   [
    "uns",
    "несколько (м. р.)"
   ],
   [
    "umas",
    "несколько (ж. р.)"
   ],
   [
    "este",
    "этот"
   ],
   [
    "esta",
    "эта"
   ],
   [
    "esse",
    "этот, тот"
   ],
   [
    "essa",
    "эта, та"
   ],
   [
    "aquele",
    "тот"
   ],
   [
    "aquela",
    "та"
   ],
   [
    "isto",
    "это"
   ],
   [
    "isso",
    "это, то"
   ],
   [
    "aquilo",
    "то"
   ]
  ]
 ],
 [
  "questions",
  "base",
  "Вопросительные слова",
  "Palavras interrogativas",
  "Запоминай сразу в вопросах. Por que в вопросе, porque в ответе.",
  "Pratique em perguntas. Por que na pergunta, porque na resposta.",
  [
   [
    "quem",
    "кто",
    "Quem é você?",
    "Кто ты?"
   ],
   [
    "o que",
    "что",
    "O que você faz?",
    "Что ты делаешь?"
   ],
   [
    "qual",
    "какой, который",
    "Qual é o seu nome?",
    "Как тебя зовут?"
   ],
   [
    "quais",
    "какие, которые"
   ],
   [
    "onde",
    "где",
    "Onde você mora?",
    "Где ты живёшь?"
   ],
   [
    "aonde",
    "куда"
   ],
   [
    "de onde",
    "откуда"
   ],
   [
    "quando",
    "когда"
   ],
   [
    "como",
    "как"
   ],
   [
    "quanto",
    "сколько (м. р.)"
   ],
   [
    "quanta",
    "сколько (ж. р.)"
   ],
   [
    "quantos",
    "сколько (м. р., мн.)"
   ],
   [
    "quantas",
    "сколько (ж. р., мн.)"
   ],
   [
    "por que",
    "почему"
   ],
   [
    "porque",
    "потому что"
   ]
  ]
 ],
 [
  "coreverbs",
  "base",
  "Самые нужные глаголы",
  "Verbos essenciais",
  "Ser — кто/что и характеристики; estar — состояние и местоположение. Формы можно открыть в справочнике глаголов.",
  "Ser indica identidade e características; estar indica estado e localização.",
  [
   [
    "ser",
    "быть, являться",
    "Eu sou estudante.",
    "Я ученица."
   ],
   [
    "estar",
    "быть, находиться",
    "Estou em casa.",
    "Я дома."
   ],
   [
    "ter",
    "иметь",
    "Eu tenho uma pergunta.",
    "У меня есть вопрос."
   ],
   [
    "haver",
    "иметься, существовать",
    "Há duas cadeiras aqui.",
    "Здесь два стула."
   ],
   [
    "ir",
    "идти, ехать",
    "Vou para casa.",
    "Я иду домой."
   ],
   [
    "vir",
    "приходить"
   ],
   [
    "fazer",
    "делать"
   ],
   [
    "poder",
    "мочь"
   ],
   [
    "querer",
    "хотеть"
   ],
   [
    "precisar",
    "нуждаться"
   ],
   [
    "dever",
    "быть должным"
   ],
   [
    "ficar",
    "оставаться, находиться, становиться"
   ],
   [
    "dar",
    "давать"
   ],
   [
    "começar",
    "начинать"
   ],
   [
    "terminar",
    "заканчивать"
   ],
   [
    "conseguir",
    "справляться, суметь"
   ],
   [
    "colocar",
    "класть, ставить"
   ],
   [
    "pegar",
    "брать"
   ],
   [
    "deixar",
    "оставлять, позволять",
    "Deixei o caderno na mesa.",
    "Я оставила тетрадь на столе."
   ],
   [
    "usar",
    "использовать",
    "Posso usar este lápis?",
    "Могу я воспользоваться этим карандашом?"
   ],
   [
    "fechar",
    "закрывать",
    "Pode fechar a janela, por favor?",
    "Можешь закрыть окно, пожалуйста?"
   ],
   [
    "escolher",
    "выбирать",
    "Podemos escolher outro horário.",
    "Мы можем выбрать другое время."
   ],
   [
    "viver",
    "жить",
    "Ela vive em uma cidade pequena.",
    "Она живёт в небольшом городе."
   ]
  ]
 ],
 [
  "communicationverbs",
  "base",
  "Глаголы речи и мышления",
  "Verbos de fala e pensamento",
  "Запоминай глагол вместе с дополнением: gostar de, pensar em, saber fazer.",
  "Aprenda com o complemento: gostar de, pensar em, saber fazer.",
  [
   [
    "saber",
    "знать, уметь"
   ],
   [
    "conhecer",
    "быть знакомым, знать"
   ],
   [
    "dizer",
    "говорить, сказать"
   ],
   [
    "ver",
    "видеть"
   ],
   [
    "ouvir",
    "слышать"
   ],
   [
    "achar",
    "считать, находить"
   ],
   [
    "gostar",
    "любить, нравиться"
   ],
   [
    "pensar",
    "думать"
   ],
   [
    "sentir",
    "чувствовать"
   ],
   [
    "entender",
    "понимать"
   ],
   [
    "aprender",
    "учиться, изучать"
   ],
   [
    "ensinar",
    "обучать"
   ],
   [
    "parecer",
    "казаться",
    "O exercício parece fácil.",
    "Упражнение кажется лёгким."
   ],
   [
    "escrever",
    "писать",
    "Vou escrever uma frase em português.",
    "Я напишу предложение на португальском."
   ],
   [
    "esquecer",
    "забывать",
    "Esqueci de levar o livro.",
    "Я забыла взять книгу."
   ]
  ]
 ],
 [
  "adjectives",
  "base",
  "Размер, качество и описание",
  "Adjetivos básicos",
  "Прилагательные обычно согласуются с существительным: pequeno/pequena, pequenos/pequenas.",
  "Os adjetivos geralmente concordam com o substantivo.",
  [
   [
    "bom",
    "хороший"
   ],
   [
    "boa",
    "хорошая"
   ],
   [
    "mau",
    "плохой"
   ],
   [
    "ruim",
    "плохой"
   ],
   [
    "grande",
    "большой",
    "A cidade é grande.",
    "Город большой."
   ],
   [
    "pequeno",
    "маленький"
   ],
   [
    "novo",
    "новый, молодой"
   ],
   [
    "velho",
    "старый"
   ],
   [
    "bonito",
    "красивый"
   ],
   [
    "feio",
    "некрасивый"
   ],
   [
    "fácil",
    "лёгкий"
   ],
   [
    "difícil",
    "трудный",
    "O exercício é difícil.",
    "Упражнение трудное."
   ],
   [
    "rápido",
    "быстрый"
   ],
   [
    "lento",
    "медленный"
   ],
   [
    "caro",
    "дорогой"
   ],
   [
    "barato",
    "дешёвый"
   ],
   [
    "limpo",
    "чистый"
   ],
   [
    "sujo",
    "грязный"
   ],
   [
    "cheio",
    "полный"
   ],
   [
    "vazio",
    "пустой"
   ],
   [
    "aberto",
    "открытый"
   ],
   [
    "fechado",
    "закрытый"
   ],
   [
    "quente",
    "горячий"
   ],
   [
    "frio",
    "холодный"
   ],
   [
    "importante",
    "важный"
   ],
   [
    "diferente",
    "разный, другой"
   ],
   [
    "igual",
    "одинаковый"
   ],
   [
    "certo",
    "правильный"
   ],
   [
    "errado",
    "неправильный"
   ]
  ]
 ],
 [
  "prepositions",
  "base",
  "Предлоги и сокращения",
  "Preposições e contrações",
  "Em + o = no; em + a = na; de + o = do; a + a = à; por + a = pela.",
  "Em + o = no; em + a = na; de + o = do; a + a = à; por + a = pela.",
  [
   [
    "em",
    "в, на"
   ],
   [
    "de",
    "из, от, о"
   ],
   [
    "a",
    "к, в (предлог)"
   ],
   [
    "para",
    "для, к, чтобы"
   ],
   [
    "por",
    "через, за, по"
   ],
   [
    "com",
    "с"
   ],
   [
    "sem",
    "без"
   ],
   [
    "sobre",
    "о, над"
   ],
   [
    "entre",
    "между"
   ],
   [
    "até",
    "до"
   ],
   [
    "desde",
    "с (момента)"
   ],
   [
    "contra",
    "против"
   ],
   [
    "no",
    "в, на (em + o)"
   ],
   [
    "na",
    "в, на (em + a)"
   ],
   [
    "nos",
    "в, на (em + os)"
   ],
   [
    "nas",
    "в, на (em + as)"
   ],
   [
    "do",
    "из, от (de + o)"
   ],
   [
    "da",
    "из, от (de + a)"
   ],
   [
    "dos",
    "из, от (de + os)"
   ],
   [
    "das",
    "из, от (de + as)"
   ],
   [
    "ao",
    "к, в (a + o)"
   ],
   [
    "à",
    "к, в (a + a)"
   ],
   [
    "aos",
    "к (a + os)"
   ],
   [
    "às",
    "к (a + as)"
   ],
   [
    "pelo",
    "через, по (por + o)"
   ],
   [
    "pela",
    "через, по (por + a)"
   ],
   [
    "pelos",
    "через, по (por + os)"
   ],
   [
    "pelas",
    "через, по (por + as)"
   ],
   [
    "perto de",
    "рядом с"
   ],
   [
    "longe de",
    "далеко от"
   ]
  ]
 ],
 [
  "connectors",
  "base",
  "Связки и наречия",
  "Conectores e advérbios",
  "Связки помогают строить связную речь, а не отдельные слова.",
  "Conectores ajudam a construir uma fala fluida.",
  [
   [
    "e",
    "и"
   ],
   [
    "ou",
    "или"
   ],
   [
    "mas",
    "но"
   ],
   [
    "também",
    "тоже"
   ],
   [
    "então",
    "тогда, итак"
   ],
   [
    "por isso",
    "поэтому"
   ],
   [
    "porém",
    "однако"
   ],
   [
    "se",
    "если"
   ],
   [
    "quando",
    "когда"
   ],
   [
    "enquanto",
    "пока, в то время как"
   ],
   [
    "antes de",
    "перед, прежде чем"
   ],
   [
    "depois de",
    "после"
   ],
   [
    "sim",
    "да"
   ],
   [
    "não",
    "нет, не"
   ],
   [
    "talvez",
    "возможно"
   ],
   [
    "já",
    "уже"
   ],
   [
    "ainda",
    "ещё"
   ],
   [
    "só",
    "только"
   ],
   [
    "até mesmo",
    "даже"
   ],
   [
    "muito",
    "очень, много"
   ],
   [
    "pouco",
    "мало"
   ],
   [
    "mais",
    "больше"
   ],
   [
    "menos",
    "меньше"
   ],
   [
    "quase",
    "почти"
   ],
   [
    "mesmo",
    "даже; сам; тот же"
   ],
   [
    "aqui",
    "здесь"
   ],
   [
    "aí",
    "там (у собеседника)"
   ],
   [
    "ali",
    "вон там"
   ],
   [
    "lá",
    "там"
   ]
  ]
 ],
 [
  "numbers",
  "base",
  "Числа",
  "Números",
  "Сначала 0–20, затем десятки и сотни. Dois/duas и um/uma зависят от рода.",
  "Comece de 0 a 20, depois as dezenas e centenas.",
  [
   [
    "zero",
    "ноль"
   ],
   [
    "um",
    "один"
   ],
   [
    "dois",
    "два"
   ],
   [
    "duas",
    "две"
   ],
   [
    "três",
    "три"
   ],
   [
    "quatro",
    "четыре"
   ],
   [
    "cinco",
    "пять"
   ],
   [
    "seis",
    "шесть"
   ],
   [
    "sete",
    "семь"
   ],
   [
    "oito",
    "восемь"
   ],
   [
    "nove",
    "девять"
   ],
   [
    "dez",
    "десять"
   ],
   [
    "onze",
    "одиннадцать"
   ],
   [
    "doze",
    "двенадцать"
   ],
   [
    "treze",
    "тринадцать"
   ],
   [
    "quatorze",
    "четырнадцать"
   ],
   [
    "quinze",
    "пятнадцать"
   ],
   [
    "dezesseis",
    "шестнадцать"
   ],
   [
    "dezessete",
    "семнадцать"
   ],
   [
    "dezoito",
    "восемнадцать"
   ],
   [
    "dezenove",
    "девятнадцать"
   ],
   [
    "vinte",
    "двадцать"
   ],
   [
    "trinta",
    "тридцать"
   ],
   [
    "quarenta",
    "сорок"
   ],
   [
    "cinquenta",
    "пятьдесят"
   ],
   [
    "sessenta",
    "шестьдесят"
   ],
   [
    "setenta",
    "семьдесят"
   ],
   [
    "oitenta",
    "восемьдесят"
   ],
   [
    "noventa",
    "девяносто"
   ],
   [
    "cem",
    "сто"
   ],
   [
    "mil",
    "тысяча"
   ]
  ]
 ],
 [
  "calendar",
  "base",
  "Календарь и время",
  "Calendário e tempo",
  "Время: às duas horas; дни недели часто с артиклем: na segunda-feira.",
  "Horas: às duas horas; dias: na segunda-feira.",
  [
   [
    "segunda-feira",
    "понедельник"
   ],
   [
    "terça-feira",
    "вторник"
   ],
   [
    "quarta-feira",
    "среда"
   ],
   [
    "quinta-feira",
    "четверг"
   ],
   [
    "sexta-feira",
    "пятница"
   ],
   [
    "sábado",
    "суббота"
   ],
   [
    "domingo",
    "воскресенье"
   ],
   [
    "dia",
    "день"
   ],
   [
    "semana",
    "неделя"
   ],
   [
    "mês",
    "месяц"
   ],
   [
    "ano",
    "год"
   ],
   [
    "hora",
    "час"
   ],
   [
    "minuto",
    "минута"
   ],
   [
    "manhã",
    "утро"
   ],
   [
    "tarde",
    "день, после полудня"
   ],
   [
    "noite",
    "вечер, ночь"
   ],
   [
    "madrugada",
    "предрассветное время, глубокая ночь",
    "A madrugada antecede o amanhecer.",
    "Предрассветное время предшествует рассвету."
   ],
   [
    "amanhecer",
    "рассветать; рассвет",
    "O céu ficou claro ao amanhecer.",
    "Небо посветлело на рассвете."
   ],
   [
    "anoitecer",
    "смеркаться",
    "Começou a anoitecer cedo.",
    "Начало рано смеркаться."
   ],
   [
    "fim de semana",
    "выходные",
    "Gosto de ler no fim de semana.",
    "Я люблю читать на выходных."
   ]
  ]
 ],
 [
  "months",
  "base",
  "Месяцы года",
  "Meses do ano",
  "Названия месяцев пишутся с маленькой буквы.",
  "Os nomes dos meses são escritos com letra minúscula.",
  [
   [
    "janeiro",
    "январь"
   ],
   [
    "fevereiro",
    "февраль"
   ],
   [
    "março",
    "март"
   ],
   [
    "abril",
    "апрель"
   ],
   [
    "maio",
    "май"
   ],
   [
    "junho",
    "июнь"
   ],
   [
    "julho",
    "июль"
   ],
   [
    "agosto",
    "август"
   ],
   [
    "setembro",
    "сентябрь"
   ],
   [
    "outubro",
    "октябрь"
   ],
   [
    "novembro",
    "ноябрь"
   ],
   [
    "dezembro",
    "декабрь"
   ]
  ]
 ],
 [
  "frequency",
  "base",
  "Когда и как часто",
  "Quando e com que frequência",
  "Используй эти слова, чтобы говорить о времени и привычках.",
  "Use estas palavras para falar de tempo e hábitos.",
  [
   [
    "hoje",
    "сегодня"
   ],
   [
    "ontem",
    "вчера"
   ],
   [
    "amanhã",
    "завтра"
   ],
   [
    "agora",
    "сейчас"
   ],
   [
    "depois",
    "потом"
   ],
   [
    "cedo",
    "рано"
   ],
   [
    "tarde demais",
    "слишком поздно"
   ],
   [
    "sempre",
    "всегда"
   ],
   [
    "geralmente",
    "обычно"
   ],
   [
    "frequentemente",
    "часто"
   ],
   [
    "às vezes",
    "иногда"
   ],
   [
    "raramente",
    "редко"
   ],
   [
    "nunca",
    "никогда"
   ],
   [
    "aos poucos",
    "понемногу, постепенно",
    "Estou aprendendo português aos poucos.",
    "Я постепенно учу португальский."
   ],
   [
    "por enquanto",
    "пока, на данный момент",
    "Por enquanto, estou estudando em casa.",
    "Пока я занимаюсь дома."
   ],
   [
    "enquanto isso",
    "тем временем",
    "Enquanto isso, vou organizar minhas anotações.",
    "Тем временем я приведу в порядок заметки."
   ],
   [
    "de vez em quando",
    "время от времени",
    "De vez em quando, leio na biblioteca.",
    "Время от времени я читаю в библиотеке."
   ],
   [
    "quase sempre",
    "почти всегда",
    "Quase sempre levo meu caderno.",
    "Я почти всегда беру тетрадь."
   ],
   [
    "em breve",
    "скоро",
    "A apresentação começará em breve.",
    "Презентация скоро начнётся."
   ],
   [
    "daqui a pouco",
    "через некоторое время",
    "Vou voltar daqui a pouco.",
    "Я скоро вернусь."
   ],
   [
    "anteontem",
    "позавчера",
    "Anteontem, terminei o exercício.",
    "Позавчера я закончила упражнение."
   ],
   [
    "depois de amanhã",
    "послезавтра",
    "O encontro será depois de amanhã.",
    "Встреча будет послезавтра."
   ],
   [
    "atualmente",
    "в настоящее время",
    "Atualmente, estudo português.",
    "В настоящее время я изучаю португальский."
   ],
   [
    "antigamente",
    "раньше, в старину",
    "Antigamente, as cartas eram enviadas pelo correio.",
    "Раньше письма отправляли по почте."
   ],
   [
    "ultimamente",
    "в последнее время",
    "Ultimamente, tenho lido mais em português.",
    "В последнее время я больше читаю на португальском."
   ],
   [
    "cedinho",
    "рано утром, очень рано",
    "A biblioteca abre cedinho.",
    "Библиотека открывается рано утром."
   ],
   [
    "hoje em dia",
    "в наши дни",
    "Hoje em dia, muitas pessoas usam dicionários digitais.",
    "В наши дни многие пользуются цифровыми словарями."
   ]
  ]
 ],
 [
  "colors",
  "base",
  "Цвета",
  "Cores",
  "Цвета помогают описывать одежду и предметы: uma camisa branca.",
  "As cores ajudam a descrever objetos: uma camisa branca.",
  [
   [
    "branco",
    "белый"
   ],
   [
    "preto",
    "чёрный"
   ],
   [
    "cinza",
    "серый"
   ],
   [
    "vermelho",
    "красный"
   ],
   [
    "azul",
    "синий, голубой"
   ],
   [
    "verde",
    "зелёный"
   ],
   [
    "amarelo",
    "жёлтый"
   ],
   [
    "rosa",
    "розовый"
   ],
   [
    "roxo",
    "фиолетовый"
   ],
   [
    "laranja",
    "оранжевый"
   ],
   [
    "marrom",
    "коричневый"
   ],
   [
    "bege",
    "бежевый"
   ],
   [
    "claro",
    "светлый"
   ],
   [
    "escuro",
    "тёмный"
   ]
  ]
 ],
 [
  "greetings",
  "phrases",
  "Приветствие и знакомство",
  "Saudações e apresentações",
  "Нейтральные и вежливые фразы живого бразильского португальского.",
  "Frases neutras e educadas do português brasileiro.",
  [
   [
    "Oi!",
    "Привет!"
   ],
   [
    "Olá!",
    "Здравствуйте! / Привет!"
   ],
   [
    "Bom dia!",
    "Доброе утро!"
   ],
   [
    "Boa tarde!",
    "Добрый день!"
   ],
   [
    "Boa noite!",
    "Добрый вечер! / Спокойной ночи!"
   ],
   [
    "Tudo bem?",
    "Всё хорошо?"
   ],
   [
    "Tudo certo?",
    "Всё в порядке?"
   ],
   [
    "Como você está?",
    "Как ты?"
   ],
   [
    "Estou bem, obrigada.",
    "У меня всё хорошо, спасибо. (жен.)"
   ],
   [
    "Muito prazer!",
    "Очень приятно!"
   ],
   [
    "Prazer em conhecer você.",
    "Приятно познакомиться."
   ],
   [
    "Qual é o seu nome?",
    "Как тебя зовут?"
   ],
   [
    "Meu nome é...",
    "Меня зовут..."
   ],
   [
    "De onde você é?",
    "Откуда ты?"
   ],
   [
    "Eu sou da Armênia.",
    "Я из Армении."
   ],
   [
    "Onde você mora?",
    "Где ты живёшь?"
   ],
   [
    "Eu moro em Yerevan.",
    "Я живу в Ереване."
   ],
   [
    "Quantos anos você tem?",
    "Сколько тебе лет?"
   ],
   [
    "Eu sou estudante.",
    "Я учусь."
   ],
   [
    "Até logo!",
    "До скорого!"
   ],
   [
    "Até amanhã!",
    "До завтра!"
   ],
   [
    "Tchau!",
    "Пока!"
   ],
   [
    "Tenha um bom dia!",
    "Хорошего дня!"
   ]
  ]
 ],
 [
  "politeness",
  "phrases",
  "Вежливость и просьбы",
  "Cortesia e pedidos",
  "Obrigada говорит женщина, obrigado — мужчина. Остальные фразы не требуют изменения по полу.",
  "Obrigada é dito por mulheres; obrigado, por homens.",
  [
   [
    "Por favor.",
    "Пожалуйста."
   ],
   [
    "Obrigada.",
    "Спасибо. (жен.)"
   ],
   [
    "Obrigado.",
    "Спасибо. (муж.)"
   ],
   [
    "Muito obrigada!",
    "Большое спасибо! (жен.)"
   ],
   [
    "De nada.",
    "Не за что."
   ],
   [
    "Com licença.",
    "Извините (разрешите пройти/обратиться)."
   ],
   [
    "Desculpa.",
    "Извини."
   ],
   [
    "Desculpe.",
    "Извините."
   ],
   [
    "Não tem problema.",
    "Нет проблем."
   ],
   [
    "Você pode me ajudar?",
    "Можешь мне помочь?"
   ],
   [
    "Pode repetir, por favor?",
    "Можешь повторить, пожалуйста?"
   ],
   [
    "Pode falar mais devagar?",
    "Можешь говорить медленнее?"
   ],
   [
    "Posso entrar?",
    "Можно войти?"
   ],
   [
    "Posso perguntar uma coisa?",
    "Можно кое-что спросить?"
   ],
   [
    "Só um momento.",
    "Одну минуту."
   ],
   [
    "Pode deixar.",
    "Хорошо, предоставь это мне."
   ],
   [
    "Fique à vontade.",
    "Чувствуй себя как дома."
   ],
   [
    "Seja bem-vindo!",
    "Добро пожаловать! (муж.)"
   ],
   [
    "Seja bem-vinda!",
    "Добро пожаловать! (жен.)"
   ]
  ]
 ],
 [
  "conversation",
  "phrases",
  "Поддержать разговор",
  "Manter uma conversa",
  "Готовые связки для естественного разговора и выражения мнения.",
  "Expressões para conversar com naturalidade e dar opiniões.",
  [
   [
    "Como assim?",
    "В каком смысле?"
   ],
   [
    "O que você quer dizer?",
    "Что ты имеешь в виду?"
   ],
   [
    "Quer dizer...",
    "То есть..."
   ],
   [
    "Na verdade...",
    "На самом деле..."
   ],
   [
    "Na minha opinião...",
    "По моему мнению..."
   ],
   [
    "Eu acho que sim.",
    "Я думаю, что да."
   ],
   [
    "Eu acho que não.",
    "Я думаю, что нет."
   ],
   [
    "Se não me engano...",
    "Если я не ошибаюсь..."
   ],
   [
    "Que eu saiba...",
    "Насколько я знаю..."
   ],
   [
    "Falando nisso...",
    "Кстати, раз уж об этом..."
   ],
   [
    "Deixa eu ver.",
    "Дай подумать / посмотреть."
   ],
   [
    "Faz sentido.",
    "Это имеет смысл."
   ],
   [
    "É verdade.",
    "Это правда."
   ],
   [
    "Você tem razão.",
    "Ты прав(а)."
   ],
   [
    "Entendi.",
    "Понял(а)."
   ],
   [
    "Não entendi.",
    "Не понял(а)."
   ],
   [
    "Não sei.",
    "Не знаю."
   ],
   [
    "Não tenho certeza.",
    "Я не уверен(а)."
   ],
   [
    "Depende.",
    "Зависит от обстоятельств."
   ],
   [
    "Que bom!",
    "Как здорово!"
   ],
   [
    "Que legal!",
    "Как классно!"
   ],
   [
    "Sério?",
    "Серьёзно?"
   ],
   [
    "Tudo vai dar certo.",
    "Всё получится."
   ],
   [
    "Claro que sim!",
    "Конечно!"
   ],
   [
    "Me conta mais.",
    "Расскажи ещё."
   ],
   [
    "acontece que",
    "дело в том, что",
    "Acontece que hoje não tenho aula.",
    "Дело в том, что сегодня у меня нет уроков."
   ],
   [
    "na verdade",
    "на самом деле",
    "Na verdade, prefiro ler em casa.",
    "На самом деле я предпочитаю читать дома."
   ],
   [
    "quer dizer",
    "то есть, значит",
    "A aula começa às três, quer dizer, às quatro.",
    "Урок начинается в три, то есть в четыре."
   ],
   [
    "se não me engano",
    "если не ошибаюсь",
    "Se não me engano, a biblioteca abre às nove.",
    "Если не ошибаюсь, библиотека открывается в девять."
   ],
   [
    "que eu saiba",
    "насколько я знаю",
    "Que eu saiba, a reunião não foi cancelada.",
    "Насколько я знаю, собрание не отменили."
   ],
   [
    "faz sentido",
    "имеет смысл, логично",
    "Sua explicação faz sentido.",
    "Твоё объяснение имеет смысл."
   ],
   [
    "deixa eu ver",
    "дай посмотреть, дай подумать",
    "Deixa eu ver se tenho o livro.",
    "Дай посмотрю, есть ли у меня книга."
   ],
   [
    "falando nisso",
    "кстати, раз уж об этом заговорили",
    "Falando nisso, você terminou o trabalho?",
    "Кстати, ты закончила работу?"
   ],
   [
    "tudo bem?",
    "всё хорошо? как дела?",
    "Oi, tudo bem?",
    "Привет, как дела?"
   ],
   [
    "tudo certo",
    "всё в порядке",
    "Está tudo certo com o trabalho.",
    "С работой всё в порядке."
   ],
   [
    "tudo vai dar certo",
    "всё получится",
    "Minha amiga me disse que tudo vai dar certo.",
    "Подруга сказала мне, что всё получится."
   ]
  ]
 ],
 [
  "learning",
  "phrases",
  "Изучение языка",
  "Aprender português",
  "Фразы для разговора с преподавателем или носителем.",
  "Frases para falar com professores e falantes nativos.",
  [
   [
    "Estou aprendendo português.",
    "Я учу португальский."
   ],
   [
    "Ainda estou aprendendo.",
    "Я ещё учусь."
   ],
   [
    "Como se diz isso em português?",
    "Как это сказать по-португальски?"
   ],
   [
    "O que significa esta palavra?",
    "Что означает это слово?"
   ],
   [
    "Como se escreve?",
    "Как это пишется?"
   ],
   [
    "Como se pronuncia?",
    "Как это произносится?"
   ],
   [
    "Você pode corrigir meu erro?",
    "Можешь исправить мою ошибку?"
   ],
   [
    "Posso tentar de novo?",
    "Можно попробовать ещё раз?"
   ],
   [
    "Preciso praticar mais.",
    "Мне нужно больше практиковаться."
   ],
   [
    "Quero falar português melhor.",
    "Я хочу лучше говорить по-португальски."
   ],
   [
    "Você fala russo?",
    "Ты говоришь по-русски?"
   ],
   [
    "Eu falo um pouco de português.",
    "Я немного говорю по-португальски."
   ],
   [
    "Estou tentando entender.",
    "Я пытаюсь понять."
   ],
   [
    "Pode me dar um exemplo?",
    "Можешь привести пример?"
   ],
   [
    "Vou anotar esta palavra.",
    "Я запишу это слово."
   ]
  ]
 ],
 [
  "routine",
  "daily",
  "Распорядок дня",
  "Rotina diária",
  "Учись составлять фразы о собственном дне.",
  "Monte frases sobre o seu dia.",
  [
   [
    "acordar",
    "просыпаться"
   ],
   [
    "levantar-se",
    "вставать"
   ],
   [
    "escovar os dentes",
    "чистить зубы"
   ],
   [
    "tomar banho",
    "принимать душ"
   ],
   [
    "vestir-se",
    "одеваться"
   ],
   [
    "tomar café da manhã",
    "завтракать"
   ],
   [
    "sair de casa",
    "выходить из дома"
   ],
   [
    "ir à escola",
    "идти в школу"
   ],
   [
    "trabalhar",
    "работать"
   ],
   [
    "estudar",
    "учиться"
   ],
   [
    "almoçar",
    "обедать"
   ],
   [
    "descansar",
    "отдыхать"
   ],
   [
    "voltar para casa",
    "возвращаться домой"
   ],
   [
    "jantar",
    "ужинать"
   ],
   [
    "dormir",
    "спать"
   ],
   [
    "Eu acordo cedo.",
    "Я просыпаюсь рано."
   ],
   [
    "Hoje estou ocupada.",
    "Сегодня я занята."
   ],
   [
    "O que você vai fazer hoje?",
    "Что ты будешь делать сегодня?"
   ],
   [
    "Vou para casa agora.",
    "Я сейчас иду домой."
   ],
   [
    "Até mais tarde!",
    "До встречи позже!"
   ]
  ]
 ],
 [
  "family",
  "daily",
  "Семья и люди",
  "Família e pessoas",
  "Родственные связи и слова для знакомства.",
  "Parentesco e palavras para apresentações.",
  [
   [
    "família",
    "семья"
   ],
   [
    "pai",
    "отец"
   ],
   [
    "mãe",
    "мать"
   ],
   [
    "pais",
    "родители"
   ],
   [
    "irmão",
    "брат"
   ],
   [
    "irmã",
    "сестра"
   ],
   [
    "avô",
    "дедушка"
   ],
   [
    "avó",
    "бабушка"
   ],
   [
    "tio",
    "дядя"
   ],
   [
    "tia",
    "тётя"
   ],
   [
    "primo",
    "двоюродный брат"
   ],
   [
    "prima",
    "двоюродная сестра"
   ],
   [
    "filho",
    "сын"
   ],
   [
    "filha",
    "дочь"
   ],
   [
    "amigo",
    "друг"
   ],
   [
    "amiga",
    "подруга"
   ],
   [
    "vizinho",
    "сосед"
   ],
   [
    "vizinha",
    "соседка"
   ],
   [
    "criança",
    "ребёнок"
   ],
   [
    "adulto",
    "взрослый"
   ],
   [
    "pessoa",
    "человек"
   ],
   [
    "gente",
    "люди"
   ]
  ]
 ],
 [
  "home",
  "daily",
  "Дом и вещи",
  "Casa e objetos",
  "Предметы и места, которые часто употребляются вместе.",
  "Objetos e lugares usados no mesmo contexto.",
  [
   [
    "casa",
    "дом"
   ],
   [
    "apartamento",
    "квартира"
   ],
   [
    "quarto",
    "комната, спальня"
   ],
   [
    "sala",
    "гостиная, зал"
   ],
   [
    "cozinha",
    "кухня"
   ],
   [
    "banheiro",
    "ванная, туалет"
   ],
   [
    "porta",
    "дверь"
   ],
   [
    "janela",
    "окно"
   ],
   [
    "mesa",
    "стол"
   ],
   [
    "cadeira",
    "стул"
   ],
   [
    "cama",
    "кровать"
   ],
   [
    "sofá",
    "диван"
   ],
   [
    "armário",
    "шкаф"
   ],
   [
    "geladeira",
    "холодильник"
   ],
   [
    "chave",
    "ключ"
   ],
   [
    "luz",
    "свет"
   ],
   [
    "celular",
    "мобильный телефон"
   ],
   [
    "carregador",
    "зарядное устройство"
   ],
   [
    "bolsa",
    "сумка"
   ],
   [
    "mochila",
    "рюкзак"
   ],
   [
    "Onde está a chave?",
    "Где ключ?"
   ],
   [
    "Estou em casa.",
    "Я дома."
   ]
  ]
 ],
 [
  "food",
  "daily",
  "Еда и напитки",
  "Comida e bebidas",
  "Слова для магазина, кухни и кафе.",
  "Palavras para mercado, cozinha e café.",
  [
   [
    "água",
    "вода"
   ],
   [
    "café",
    "кофе"
   ],
   [
    "chá",
    "чай"
   ],
   [
    "leite",
    "молоко"
   ],
   [
    "suco",
    "сок"
   ],
   [
    "pão",
    "хлеб"
   ],
   [
    "arroz",
    "рис"
   ],
   [
    "feijão",
    "фасоль"
   ],
   [
    "ovo",
    "яйцо"
   ],
   [
    "queijo",
    "сыр"
   ],
   [
    "carne",
    "мясо"
   ],
   [
    "frango",
    "курица"
   ],
   [
    "peixe",
    "рыба"
   ],
   [
    "fruta",
    "фрукт"
   ],
   [
    "maçã",
    "яблоко"
   ],
   [
    "banana",
    "банан"
   ],
   [
    "laranja",
    "апельсин"
   ],
   [
    "tomate",
    "помидор"
   ],
   [
    "batata",
    "картофель"
   ],
   [
    "salada",
    "салат"
   ],
   [
    "sopa",
    "суп"
   ],
   [
    "açúcar",
    "сахар"
   ],
   [
    "sal",
    "соль"
   ],
   [
    "fome",
    "голод"
   ],
   [
    "sede",
    "жажда"
   ],
   [
    "Estou com fome.",
    "Я голоден / голодна."
   ],
   [
    "Estou com sede.",
    "Я хочу пить."
   ],
   [
    "Quero um copo de água, por favor.",
    "Мне стакан воды, пожалуйста."
   ],
   [
    "A conta, por favor.",
    "Счёт, пожалуйста."
   ]
  ]
 ],
 [
  "shopping",
  "daily",
  "Магазин и покупки",
  "Compras e preços",
  "Тренируй слова вместе с вопросами о цене.",
  "Pratique palavras com perguntas sobre preços.",
  [
   [
    "loja",
    "магазин"
   ],
   [
    "mercado",
    "рынок, магазин"
   ],
   [
    "supermercado",
    "супермаркет"
   ],
   [
    "dinheiro",
    "деньги"
   ],
   [
    "preço",
    "цена"
   ],
   [
    "troco",
    "сдача"
   ],
   [
    "cartão",
    "карта"
   ],
   [
    "desconto",
    "скидка"
   ],
   [
    "comprar",
    "покупать"
   ],
   [
    "vender",
    "продавать"
   ],
   [
    "pagar",
    "платить"
   ],
   [
    "escolher",
    "выбирать"
   ],
   [
    "experimentar",
    "примерять, пробовать"
   ],
   [
    "tamanho",
    "размер"
   ],
   [
    "Quanto custa?",
    "Сколько стоит?"
   ],
   [
    "Posso pagar com cartão?",
    "Можно оплатить картой?"
   ],
   [
    "Você tem outro tamanho?",
    "У вас есть другой размер?"
   ],
   [
    "Vou levar este.",
    "Я возьму этот."
   ],
   [
    "Só estou olhando.",
    "Я просто смотрю."
   ]
  ]
 ],
 [
  "transport",
  "daily",
  "Город и транспорт",
  "Cidade e transporte",
  "Слова для маршрута и просьбы объяснить дорогу.",
  "Palavras para trajetos e pedidos de orientação.",
  [
   [
    "rua",
    "улица"
   ],
   [
    "avenida",
    "проспект"
   ],
   [
    "praça",
    "площадь"
   ],
   [
    "estação",
    "станция"
   ],
   [
    "ponto de ônibus",
    "автобусная остановка"
   ],
   [
    "ônibus",
    "автобус"
   ],
   [
    "metrô",
    "метро"
   ],
   [
    "carro",
    "машина"
   ],
   [
    "táxi",
    "такси"
   ],
   [
    "passagem",
    "билет, проезд"
   ],
   [
    "motorista",
    "водитель"
   ],
   [
    "direita",
    "право"
   ],
   [
    "esquerda",
    "лево"
   ],
   [
    "em frente",
    "прямо, напротив"
   ],
   [
    "perto",
    "близко"
   ],
   [
    "longe",
    "далеко"
   ],
   [
    "chegar",
    "прибывать"
   ],
   [
    "sair",
    "выходить"
   ],
   [
    "descer",
    "спускаться, выходить из транспорта"
   ],
   [
    "subir",
    "подниматься, садиться в транспорт"
   ],
   [
    "Onde fica a estação?",
    "Где находится станция?"
   ],
   [
    "Vire à direita.",
    "Поверните направо."
   ],
   [
    "Siga em frente.",
    "Идите прямо."
   ],
   [
    "Quanto tempo demora?",
    "Сколько времени это занимает?"
   ]
  ]
 ],
 [
  "school",
  "daily",
  "Школа и учёба",
  "Escola e estudo",
  "Лексика для занятий и домашних заданий.",
  "Vocabulário para aulas e tarefas.",
  [
   [
    "escola",
    "школа"
   ],
   [
    "aula",
    "урок"
   ],
   [
    "professor",
    "учитель"
   ],
   [
    "professora",
    "учительница"
   ],
   [
    "aluno",
    "ученик"
   ],
   [
    "aluna",
    "ученица"
   ],
   [
    "estudante",
    "учащийся"
   ],
   [
    "caderno",
    "тетрадь"
   ],
   [
    "livro",
    "книга"
   ],
   [
    "caneta",
    "ручка"
   ],
   [
    "lápis",
    "карандаш"
   ],
   [
    "folha",
    "лист"
   ],
   [
    "pergunta",
    "вопрос"
   ],
   [
    "resposta",
    "ответ"
   ],
   [
    "exercício",
    "упражнение"
   ],
   [
    "tarefa",
    "задание"
   ],
   [
    "prova",
    "контрольная, экзамен"
   ],
   [
    "nota",
    "оценка"
   ],
   [
    "ler",
    "читать"
   ],
   [
    "escrever",
    "писать"
   ],
   [
    "responder",
    "отвечать"
   ],
   [
    "explicar",
    "объяснять"
   ],
   [
    "Eu tenho uma dúvida.",
    "У меня есть вопрос."
   ],
   [
    "A aula começa às oito.",
    "Урок начинается в восемь."
   ],
   [
    "mochila",
    "рюкзак",
    "O caderno está na mochila.",
    "Тетрадь находится в рюкзаке."
   ],
   [
    "borracha",
    "ластик, резина",
    "A borracha está ao lado do lápis.",
    "Ластик лежит рядом с карандашом."
   ],
   [
    "régua",
    "линейка",
    "Usei a régua para medir a folha.",
    "Я использовала линейку, чтобы измерить лист."
   ],
   [
    "estojo",
    "пенал, футляр",
    "Guardei a caneta no estojo.",
    "Я положила ручку в пенал."
   ],
   [
    "quadro",
    "доска, картина",
    "A professora escreveu no quadro.",
    "Учительница написала на доске."
   ],
   [
    "lição de casa",
    "домашнее задание",
    "Terminei a lição de casa.",
    "Я закончила домашнее задание."
   ],
   [
    "intervalo escolar",
    "школьная перемена",
    "Conversei com uma colega no intervalo escolar.",
    "Я поговорила с одноклассницей на перемене."
   ],
   [
    "turma",
    "класс, учебная группа",
    "Minha turma preparou uma exposição.",
    "Мой класс подготовил выставку."
   ],
   [
    "diretor",
    "директор, режиссёр",
    "O diretor conversou com a equipe.",
    "Директор поговорил с командой."
   ],
   [
    "diretora",
    "директор, режиссёр (жен.)",
    "A diretora apresentou o filme.",
    "Режиссёр представила фильм."
   ]
  ]
 ],
 [
  "education",
  "daily",
  "Образование и изучение языка",
  "Educação e aprendizagem de idiomas",
  "Слова для учёбы и языковой практики.",
  "Palavras para estudos e prática de idiomas.",
  [
   [
    "faculdade",
    "факультет, вуз",
    "Ela estuda em uma faculdade de artes.",
    "Она учится на факультете искусств."
   ],
   [
    "universidade",
    "университет",
    "A universidade oferece vários cursos.",
    "Университет предлагает несколько программ."
   ],
   [
    "bolsa de estudos",
    "стипендия на обучение",
    "O edital descreve os requisitos da bolsa de estudos.",
    "В объявлении описаны требования к стипендии."
   ],
   [
    "mensalidade",
    "ежемесячная плата",
    "O curso informa o valor da mensalidade.",
    "Курс сообщает размер ежемесячной платы."
   ],
   [
    "inscrição online",
    "онлайн-регистрация",
    "A inscrição online está disponível no site.",
    "Онлайн-регистрация доступна на сайте."
   ],
   [
    "aula particular",
    "индивидуальный урок",
    "A aula particular começou com uma conversa.",
    "Индивидуальный урок начался с разговора."
   ],
   [
    "livro didático",
    "учебник",
    "O livro didático contém exemplos claros.",
    "Учебник содержит понятные примеры."
   ],
   [
    "dicionário",
    "словарь",
    "Consultei o dicionário para confirmar o sentido.",
    "Я обратилась к словарю, чтобы уточнить значение."
   ],
   [
    "gramática",
    "грамматика",
    "A gramática ajuda a organizar as frases.",
    "Грамматика помогает строить предложения."
   ],
   [
    "vocabulário",
    "словарный запас, лексика",
    "Aprendo vocabulário com exemplos.",
    "Я учу лексику на примерах."
   ],
   [
    "sotaque",
    "акцент",
    "O sotaque varia de uma região para outra.",
    "Акцент различается от региона к региону."
   ],
   [
    "expressão oral",
    "устная речь",
    "A expressão oral melhora com a prática.",
    "Устная речь улучшается с практикой."
   ],
   [
    "compreensão auditiva",
    "понимание на слух",
    "A compreensão auditiva exige atenção ao contexto.",
    "Понимание на слух требует внимания к контексту."
   ],
   [
    "legendar",
    "снабжать субтитрами",
    "Vou legendar meu vídeo em português.",
    "Я добавлю португальские субтитры к своему видео."
   ],
   [
    "subtítulo",
    "подзаголовок, субтитр",
    "O subtítulo apresenta o assunto do capítulo.",
    "Подзаголовок представляет тему главы."
   ],
   [
    "rascunhar",
    "делать черновик",
    "Vou rascunhar o texto antes de revisá-lo.",
    "Я набросаю черновик текста перед проверкой."
   ],
   [
    "anotar",
    "записывать, делать заметки",
    "Anotei a palavra no caderno.",
    "Я записала слово в тетрадь."
   ],
   [
    "sublinhar",
    "подчёркивать",
    "Você pode sublinhar o verbo da frase.",
    "Можешь подчеркнуть глагол в предложении."
   ],
   [
    "riscar",
    "зачёркивать",
    "Risquei a palavra repetida.",
    "Я зачеркнула повторяющееся слово."
   ]
  ]
 ],
 [
  "feelings",
  "daily",
  "Эмоции и самочувствие",
  "Sentimentos e bem-estar",
  "Estar com medo, estar feliz, estar cansado — частые конструкции.",
  "Estar com medo, estar feliz, estar cansado são construções comuns.",
  [
   [
    "feliz",
    "счастливый"
   ],
   [
    "triste",
    "грустный"
   ],
   [
    "cansado",
    "уставший"
   ],
   [
    "cansada",
    "уставшая"
   ],
   [
    "preocupado",
    "обеспокоенный"
   ],
   [
    "preocupada",
    "обеспокоенная"
   ],
   [
    "tranquilo",
    "спокойный"
   ],
   [
    "tranquila",
    "спокойная"
   ],
   [
    "nervoso",
    "нервный"
   ],
   [
    "animado",
    "воодушевлённый"
   ],
   [
    "contente",
    "довольный"
   ],
   [
    "medo",
    "страх"
   ],
   [
    "alegria",
    "радость"
   ],
   [
    "saudade",
    "тоска по кому-то, чувство скучания"
   ],
   [
    "dor",
    "боль"
   ],
   [
    "saúde",
    "здоровье"
   ],
   [
    "Estou feliz.",
    "Я счастлива / счастлив."
   ],
   [
    "Estou um pouco cansada.",
    "Я немного устала."
   ],
   [
    "Como você se sente?",
    "Как ты себя чувствуешь?"
   ],
   [
    "Estou melhor.",
    "Мне лучше."
   ]
  ]
 ],
 [
  "church",
  "faith",
  "Церковь и служение",
  "Igreja e serviço",
  "Люди, места и действия в церкви.",
  "Pessoas, lugares e ações na igreja.",
  [
   [
    "igreja",
    "церковь"
   ],
   [
    "pastor",
    "пастор"
   ],
   [
    "pastor auxiliar",
    "помощник пастора"
   ],
   [
    "obreiro",
    "помощник, служитель"
   ],
   [
    "obreira",
    "помощница, служительница"
   ],
   [
    "membro",
    "член общины"
   ],
   [
    "reunião",
    "собрание"
   ],
   [
    "culto",
    "богослужение"
   ],
   [
    "pregação",
    "проповедь"
   ],
   [
    "púlpito",
    "кафедра"
   ],
   [
    "louvor",
    "хвала"
   ],
   [
    "grupo",
    "группа"
   ],
   [
    "equipe",
    "команда"
   ],
   [
    "serviço",
    "служение, работа"
   ],
   [
    "servir",
    "служить"
   ],
   [
    "participar",
    "участвовать"
   ],
   [
    "acolher",
    "принимать, встречать"
   ],
   [
    "convidar",
    "приглашать"
   ],
   [
    "evangelizar",
    "благовествовать"
   ],
   [
    "voluntário",
    "волонтёр"
   ],
   [
    "Vou à reunião.",
    "Я иду на собрание."
   ],
   [
    "Quero servir a Deus.",
    "Я хочу служить Богу."
   ],
   [
    "Posso ajudar na igreja?",
    "Могу я помочь в церкви?"
   ],
   [
    "evangelização",
    "евангелизация",
    "Nós participamos da evangelização.",
    "Мы участвуем в евангелизации."
   ],
   [
    "obra de Deus",
    "служение Богу",
    "Ela participa da obra de Deus.",
    "Она участвует в служении Богу."
   ],
   [
    "pregar",
    "проповедовать",
    "O pastor prega sobre a fé.",
    "Пастор проповедует о вере."
   ],
   [
    "testemunho",
    "свидетельство",
    "Ela conta seu testemunho.",
    "Она рассказывает своё свидетельство."
   ]
  ]
 ],
 [
  "prayer",
  "faith",
  "Молитва и вера",
  "Oração e fé",
  "Слова для понимания молитвы и проповеди.",
  "Palavras para compreender orações e pregações.",
  [
   [
    "Deus",
    "Бог"
   ],
   [
    "Senhor",
    "Господь"
   ],
   [
    "Jesus",
    "Иисус"
   ],
   [
    "Espírito Santo",
    "Святой Дух"
   ],
   [
    "fé",
    "вера"
   ],
   [
    "esperança",
    "надежда"
   ],
   [
    "oração",
    "молитва"
   ],
   [
    "orar",
    "молиться"
   ],
   [
    "crer",
    "верить"
   ],
   [
    "confiar",
    "доверять"
   ],
   [
    "agradecer",
    "благодарить"
   ],
   [
    "pedir",
    "просить"
   ],
   [
    "abençoar",
    "благословлять"
   ],
   [
    "bênção",
    "благословение"
   ],
   [
    "perdão",
    "прощение"
   ],
   [
    "perdoar",
    "прощать"
   ],
   [
    "graça",
    "благодать"
   ],
   [
    "misericórdia",
    "милосердие"
   ],
   [
    "salvação",
    "спасение"
   ],
   [
    "paz",
    "мир"
   ],
   [
    "amor",
    "любовь"
   ],
   [
    "sabedoria",
    "мудрость"
   ],
   [
    "Eu creio em Deus.",
    "Я верю в Бога."
   ],
   [
    "Que Deus abençoe você.",
    "Пусть Бог благословит тебя."
   ],
   [
    "Vamos orar.",
    "Давайте помолимся."
   ],
   [
    "meditação bíblica",
    "размышление над Библией",
    "A meditação bíblica pode começar com uma pergunta.",
    "Размышление над Библией может начинаться с вопроса."
   ],
   [
    "devocional",
    "духовное размышление",
    "O devocional apresenta um tema para reflexão.",
    "Духовное размышление предлагает тему для осмысления."
   ],
   [
    "momento de oração",
    "время молитвы",
    "O grupo reservou um momento de oração.",
    "Группа выделила время для молитвы."
   ],
   [
    "pedido de oração",
    "молитвенная просьба",
    "Ela preferiu não divulgar seu pedido de oração.",
    "Она предпочла не разглашать свою молитвенную просьбу."
   ],
   [
    "oração em conjunto",
    "совместная молитва",
    "A oração em conjunto faz parte da programação.",
    "Совместная молитва является частью программы."
   ],
   [
    "oração de agradecimento",
    "благодарственная молитва",
    "O exemplo apresenta uma oração de agradecimento.",
    "Пример содержит благодарственную молитву."
   ],
   [
    "oração pessoal",
    "личная молитва",
    "A oração pessoal não precisa ser compartilhada.",
    "Личной молитвой необязательно делиться."
   ],
   [
    "oração silenciosa",
    "тихая молитва",
    "Algumas pessoas preferem a oração silenciosa.",
    "Некоторые предпочитают тихую молитву."
   ],
   [
    "orar juntos",
    "молиться вместе",
    "O grupo decidiu que todos poderiam orar juntos após a leitura.",
    "Группа решила, что все желающие могут вместе помолиться после чтения."
   ],
   [
    "interceder em oração",
    "ходатайствовать в молитве",
    "A expressão interceder em oração faz parte da linguagem religiosa.",
    "Выражение «ходатайствовать в молитве» относится к религиозной речи."
   ],
   [
    "arrependimento",
    "покаяние",
    "A mensagem fala de arrependimento.",
    "Послание говорит о покаянии."
   ],
   [
    "libertação",
    "освобождение",
    "O texto fala de libertação.",
    "Текст говорит об освобождении."
   ],
   [
    "intercessão",
    "ходатайственная молитва",
    "A oração de intercessão é o tema da aula.",
    "Тема урока — ходатайственная молитва."
   ],
   [
    "reunião de oração",
    "молитвенное собрание",
    "A reunião de oração começa às sete.",
    "Молитвенное собрание начинается в семь."
   ]
  ]
 ],
 [
  "scripture",
  "faith",
  "Библия и чтение",
  "Bíblia e leitura",
  "Слова для чтения, обсуждения и перевода библейского текста.",
  "Palavras para ler, discutir e traduzir textos bíblicos.",
  [
   [
    "Bíblia",
    "Библия"
   ],
   [
    "Escritura",
    "Писание"
   ],
   [
    "Antigo Testamento",
    "Ветхий Завет"
   ],
   [
    "Novo Testamento",
    "Новый Завет"
   ],
   [
    "Evangelho",
    "Евангелие"
   ],
   [
    "Salmo",
    "псалом"
   ],
   [
    "livro",
    "книга"
   ],
   [
    "capítulo",
    "глава"
   ],
   [
    "versículo",
    "стих"
   ],
   [
    "passagem",
    "отрывок"
   ],
   [
    "palavra",
    "слово"
   ],
   [
    "texto",
    "текст"
   ],
   [
    "profeta",
    "пророк"
   ],
   [
    "discípulo",
    "ученик"
   ],
   [
    "apóstolo",
    "апостол"
   ],
   [
    "parábola",
    "притча"
   ],
   [
    "ensinamento",
    "учение"
   ],
   [
    "mandamento",
    "заповедь"
   ],
   [
    "promessa",
    "обещание, обетование"
   ],
   [
    "aliança",
    "завет, союз"
   ],
   [
    "testemunho",
    "свидетельство"
   ],
   [
    "Vamos ler a Bíblia.",
    "Давайте прочитаем Библию."
   ],
   [
    "Qual é o versículo?",
    "Какой это стих?"
   ],
   [
    "O que este texto ensina?",
    "Чему учит этот текст?"
   ],
   [
    "material de estudo",
    "учебный материал",
    "O material de estudo está disponível em dois idiomas.",
    "Учебный материал доступен на двух языках."
   ],
   [
    "caderno de anotações",
    "тетрадь для заметок",
    "O caderno de anotações ajuda a registrar novas palavras.",
    "Тетрадь для заметок помогает записывать новые слова."
   ],
   [
    "versão da Bíblia",
    "версия, перевод Библии",
    "O leitor pode escolher a versão da Bíblia.",
    "Читатель может выбрать перевод Библии."
   ],
   [
    "tradução bíblica",
    "библейский перевод",
    "Cada tradução bíblica tem características próprias.",
    "У каждого библейского перевода свои особенности."
   ],
   [
    "plano de leitura",
    "план чтения",
    "O plano de leitura organiza os capítulos por temas.",
    "План чтения распределяет главы по темам."
   ],
   [
    "leitura em voz alta",
    "чтение вслух",
    "A leitura em voz alta ajuda a praticar a pronúncia.",
    "Чтение вслух помогает тренировать произношение."
   ],
   [
    "memorização",
    "запоминание",
    "A memorização pode ser acompanhada de compreensão.",
    "Запоминание может сопровождаться пониманием."
   ],
   [
    "consulta à Bíblia",
    "обращение к Библии",
    "A consulta à Bíblia permite verificar a passagem.",
    "Обращение к Библии позволяет проверить отрывок."
   ],
   [
    "palavra de Deus",
    "Слово Божье",
    "Nós estudamos a palavra de Deus.",
    "Мы изучаем Слово Божье."
   ]
  ]
 ],
 [
  "interpreting",
  "faith",
  "Перевод и общение на служении",
  "Interpretação e comunicação",
  "Готовые фразы для уточнения смысла и передачи речи.",
  "Frases para esclarecer o sentido e interpretar.",
  [
   [
    "traduzir",
    "переводить"
   ],
   [
    "interpretar",
    "устно переводить, толковать"
   ],
   [
    "tradução",
    "перевод"
   ],
   [
    "intérprete",
    "устный переводчик"
   ],
   [
    "mensagem",
    "послание"
   ],
   [
    "voz",
    "голос"
   ],
   [
    "microfone",
    "микрофон"
   ],
   [
    "ouvir",
    "слушать"
   ],
   [
    "falar",
    "говорить"
   ],
   [
    "repetir",
    "повторять"
   ],
   [
    "compreender",
    "понимать"
   ],
   [
    "sentido",
    "смысл"
   ],
   [
    "contexto",
    "контекст"
   ],
   [
    "expressão",
    "выражение"
   ],
   [
    "Pode repetir a última frase?",
    "Можете повторить последнюю фразу?"
   ],
   [
    "Pode fazer uma pausa?",
    "Можете сделать паузу?"
   ],
   [
    "Não ouvi a última palavra.",
    "Я не услышала последнее слово."
   ],
   [
    "Como posso traduzir esta expressão?",
    "Как можно перевести это выражение?"
   ],
   [
    "Entendi o sentido.",
    "Я поняла смысл."
   ],
   [
    "Vou traduzir a reunião.",
    "Я буду переводить собрание."
   ],
   [
    "tradução consecutiva",
    "последовательный перевод",
    "A tradução consecutiva ocorre após um segmento de fala.",
    "Последовательный перевод выполняется после фрагмента речи."
   ],
   [
    "interpretação simultânea",
    "синхронный перевод",
    "A interpretação simultânea acompanha a fala do orador.",
    "Синхронный перевод сопровождает речь выступающего."
   ],
   [
    "cabine de interpretação",
    "кабина переводчика",
    "A cabine de interpretação ajuda a separar os sons.",
    "Кабина переводчика помогает разделить звуки."
   ],
   [
    "fone de ouvido",
    "наушник, наушники",
    "O intérprete testou o fone de ouvido.",
    "Переводчик проверил наушники."
   ],
   [
    "mensagem de abertura",
    "вступительное послание",
    "A mensagem de abertura apresenta o objetivo do encontro.",
    "Вступительное послание представляет цель встречи."
   ],
   [
    "palavra de encerramento",
    "заключительное слово",
    "A palavra de encerramento retoma o tema principal.",
    "Заключительное слово возвращается к главной теме."
   ]
  ]
 ],
 [
  "holyplaces",
  "faith",
  "Храмы и священные предметы",
  "Templos e objetos sagrados",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "altar",
    "жертвенник, алтарь",
    "O altar aparece no relato.",
    "В повествовании упоминается жертвенник."
   ],
   [
    "arca",
    "ковчег",
    "O capítulo descreve a arca.",
    "В главе описывается ковчег."
   ],
   [
    "arca da aliança",
    "ковчег завета",
    "A arca da aliança é mencionada na narrativa.",
    "В повествовании упоминается ковчег завета."
   ],
   [
    "tabernáculo",
    "скиния",
    "O tabernáculo era um lugar de adoração no relato bíblico.",
    "В библейском повествовании скиния была местом поклонения."
   ],
   [
    "santuário",
    "святилище",
    "O texto faz referência ao santuário.",
    "В тексте говорится о святилище."
   ],
   [
    "templo",
    "храм",
    "O templo ocupa um lugar importante na narrativa.",
    "Храм занимает важное место в повествовании."
   ],
   [
    "sinagoga",
    "синагога",
    "A sinagoga é mencionada no Evangelho.",
    "В Евангелии упоминается синагога."
   ]
  ]
 ],
 [
  "biblepeople",
  "faith",
  "Люди и титулы в Библии",
  "Pessoas e títulos bíblicos",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "sacerdote",
    "священник",
    "O sacerdote aparece como personagem da passagem.",
    "Священник появляется как персонаж отрывка."
   ],
   [
    "sumo sacerdote",
    "первосвященник",
    "O relato menciona o sumo sacerdote.",
    "В рассказе упоминается первосвященник."
   ],
   [
    "levita",
    "левит",
    "O levita é uma das personagens da parábola.",
    "Левит — один из персонажей притчи."
   ],
   [
    "profeta",
    "пророк",
    "O profeta transmite uma mensagem ao povo.",
    "Пророк передаёт послание народу."
   ],
   [
    "profetisa",
    "пророчица",
    "A profetisa é mencionada no relato.",
    "Пророчица упоминается в повествовании."
   ],
   [
    "profecia",
    "пророчество",
    "O leitor analisa o contexto da profecia.",
    "Читатель анализирует контекст пророчества."
   ],
   [
    "apóstolo",
    "апостол",
    "O apóstolo escreve à comunidade.",
    "Апостол пишет общине."
   ],
   [
    "evangelista",
    "евангелист",
    "O evangelista organiza seu relato.",
    "Евангелист выстраивает своё повествование."
   ],
   [
    "patriarca",
    "патриарх",
    "Abraão é apresentado como patriarca.",
    "Авраам представлен как патриарх."
   ],
   [
    "descendente",
    "потомок",
    "O texto identifica um descendente de Davi.",
    "В тексте назван потомок Давида."
   ],
   [
    "genealogia",
    "родословная",
    "A genealogia apresenta várias gerações.",
    "Родословная представляет несколько поколений."
   ],
   [
    "geração",
    "поколение",
    "Uma geração transmite histórias à seguinte.",
    "Одно поколение передаёт истории следующему."
   ],
   [
    "tribo",
    "колено, племя",
    "O relato identifica a tribo de origem.",
    "В рассказе указано племя происхождения."
   ],
   [
    "nação",
    "народ, нация",
    "A palavra nação aparece em contextos diferentes.",
    "Слово «народ» встречается в разных контекстах."
   ],
   [
    "gentio",
    "язычник; нееврей (библ.)",
    "O termo gentio deve ser entendido no contexto histórico.",
    "Термин «язычник» нужно понимать в историческом контексте."
   ],
   [
    "pagão",
    "язычник",
    "O significado de pagão depende do contexto.",
    "Значение слова «язычник» зависит от контекста."
   ],
   [
    "fariseu",
    "фарисей",
    "O fariseu é uma personagem da parábola.",
    "Фарисей — персонаж притчи."
   ],
   [
    "saduceu",
    "саддукей",
    "O texto menciona um saduceu.",
    "В тексте упоминается саддукей."
   ],
   [
    "publicano",
    "мытарь, сборщик налогов",
    "A parábola apresenta um publicano.",
    "Притча представляет мытаря."
   ],
   [
    "escriba",
    "книжник",
    "O escriba faz uma pergunta no relato.",
    "Книжник задаёт вопрос в повествовании."
   ],
   [
    "centurião",
    "сотник",
    "O centurião aparece no capítulo sete de Lucas.",
    "Сотник появляется в седьмой главе Луки."
   ],
   [
    "servo",
    "слуга, раб (по контексту)",
    "O servo recebe uma tarefa na parábola.",
    "Слуга получает поручение в притче."
   ],
   [
    "serva",
    "служанка, раба",
    "A serva é mencionada na narrativa.",
    "В повествовании упоминается служанка."
   ],
   [
    "mestre",
    "учитель, наставник",
    "Os discípulos chamam Jesus de Mestre.",
    "Ученики называют Иисуса Учителем."
   ],
   [
    "rabi",
    "равви, учитель",
    "Rabi é uma forma de tratamento no Evangelho.",
    "Равви — форма обращения в Евангелии."
   ],
   [
    "Messias",
    "Мессия",
    "O título Messias é explicado durante a leitura.",
    "Титул «Мессия» объясняется во время чтения."
   ],
   [
    "Salvador",
    "Спаситель",
    "O título Salvador tem sentido religioso.",
    "Титул «Спаситель» имеет религиозное значение."
   ],
   [
    "Redentor",
    "Искупитель",
    "Redentor é um título da linguagem cristã.",
    "«Искупитель» — титул в христианской речи."
   ]
  ]
 ],
 [
  "redemption",
  "faith",
  "Спасение и освящение",
  "Redenção e santificação",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "redenção",
    "искупление",
    "O capítulo aborda o tema da redenção.",
    "Глава затрагивает тему искупления."
   ],
   [
    "redimir",
    "искупать",
    "O verbo redimir aparece em textos religiosos.",
    "Глагол «искупать» встречается в религиозных текстах."
   ],
   [
    "remissão",
    "отпущение, прощение",
    "A expressão remissão dos pecados tem uso religioso.",
    "Выражение «отпущение грехов» употребляется в религиозной речи."
   ],
   [
    "pecado",
    "грех",
    "A passagem discute o sentido de pecado.",
    "Отрывок обсуждает понятие греха."
   ],
   [
    "pecador",
    "грешник",
    "O termo pecador aparece na narrativa.",
    "В повествовании встречается слово «грешник»."
   ],
   [
    "iniquidade",
    "беззаконие",
    "Iniquidade é um termo de registro bíblico.",
    "«Беззаконие» — термин библейского регистра."
   ],
   [
    "transgressão",
    "преступление, нарушение",
    "O texto usa transgressão em sentido moral.",
    "В тексте слово «нарушение» употребляется в нравственном смысле."
   ],
   [
    "santidade",
    "святость",
    "O estudo explica o conceito de santidade.",
    "Занятие объясняет понятие святости."
   ],
   [
    "santificação",
    "освящение",
    "A santificação é um tema da teologia cristã.",
    "Освящение — тема христианского богословия."
   ],
   [
    "santificar",
    "освящать",
    "Santificar é um verbo de uso religioso.",
    "«Освящать» — глагол религиозной речи."
   ],
   [
    "purificação",
    "очищение",
    "O relato descreve um ritual de purificação.",
    "В повествовании описывается обряд очищения."
   ],
   [
    "purificar",
    "очищать",
    "O verbo purificar pode ter sentido figurado.",
    "Глагол «очищать» может иметь переносное значение."
   ],
   [
    "impureza",
    "нечистота",
    "O contexto histórico ajuda a entender impureza.",
    "Исторический контекст помогает понять понятие нечистоты."
   ]
  ]
 ],
 [
  "character",
  "faith",
  "Характер и нравственные качества",
  "Caráter e virtudes",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "justo",
    "праведный, справедливый",
    "O adjetivo justo pode ter sentido moral.",
    "Прилагательное «праведный» может иметь нравственный смысл."
   ],
   [
    "ímpio",
    "нечестивый",
    "Ímpio é uma palavra frequente no registro bíblico.",
    "«Нечестивый» — распространённое слово библейского регистра."
   ],
   [
    "piedade",
    "благочестие, жалость",
    "Piedade pode expressar devoção ou compaixão.",
    "«Благочестие» может обозначать преданность Богу или сострадание."
   ],
   [
    "piedoso",
    "благочестивый, милосердный",
    "O narrador descreve um homem piedoso.",
    "Рассказчик описывает благочестивого человека."
   ],
   [
    "mansidão",
    "кротость",
    "A mansidão não equivale à falta de firmeza.",
    "Кротость не равнозначна отсутствию твёрдости."
   ],
   [
    "manso",
    "кроткий",
    "O adjetivo manso também descreve um animal dócil.",
    "Прилагательное «кроткий» также описывает спокойное животное."
   ],
   [
    "humilde",
    "смиренный, скромный",
    "Uma pessoa humilde reconhece que pode aprender.",
    "Скромный человек признаёт, что может учиться."
   ],
   [
    "soberba",
    "гордыня",
    "O texto contrasta a soberba e a humildade.",
    "Текст противопоставляет гордыню и смирение."
   ],
   [
    "vaidade",
    "тщеславие, суета",
    "A vaidade assume sentidos diferentes em cada contexto.",
    "«Суета» приобретает разные значения в каждом контексте."
   ],
   [
    "tentação",
    "искушение",
    "O episódio aborda o tema da tentação.",
    "Эпизод затрагивает тему искушения."
   ],
   [
    "tentar",
    "пытаться; искушать",
    "Tentar compreender o contexto exige atenção.",
    "Попытка понять контекст требует внимания."
   ],
   [
    "vencer",
    "побеждать, преодолевать",
    "A personagem procura vencer uma dificuldade.",
    "Персонаж стремится преодолеть трудность."
   ]
  ]
 ],
 [
  "trial",
  "faith",
  "Испытания и поддержка",
  "Provações e apoio",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "vitória",
    "победа",
    "A palavra vitória pode ter sentido figurado.",
    "Слово «победа» может иметь переносный смысл."
   ],
   [
    "derrota",
    "поражение",
    "A derrota não determina toda a trajetória.",
    "Поражение не определяет весь жизненный путь."
   ],
   [
    "adversário",
    "противник",
    "O narrador menciona um adversário.",
    "Рассказчик упоминает противника."
   ],
   [
    "inimigo",
    "враг",
    "A passagem aborda a relação com um inimigo.",
    "В отрывке обсуждаются отношения с врагом."
   ],
   [
    "inimizade",
    "вражда",
    "A história descreve o fim da inimizade.",
    "История описывает окончание вражды."
   ],
   [
    "tribulação",
    "скорбь, испытание",
    "Tribulação é um termo de registro formal ou religioso.",
    "«Скорбь» — термин официального или религиозного регистра."
   ],
   [
    "aflição",
    "тревога, скорбь",
    "A personagem expressa sua aflição.",
    "Персонаж выражает свою тревогу."
   ],
   [
    "angústia",
    "тоска, тревога",
    "A poesia transmite um sentimento de angústia.",
    "Поэзия передаёт чувство тревоги."
   ],
   [
    "afligir",
    "огорчать, причинять страдание",
    "Uma notícia pode afligir quem a recebe.",
    "Новость может огорчить того, кто её получает."
   ],
   [
    "desamparo",
    "беспомощность, отсутствие поддержки",
    "O relato descreve uma situação de desamparo.",
    "Рассказ описывает ситуацию отсутствия поддержки."
   ],
   [
    "deserto",
    "пустыня",
    "O deserto faz parte do cenário bíblico.",
    "Пустыня — часть библейского пейзажа."
   ],
   [
    "despertar",
    "пробуждать, пробуждаться",
    "A reflexão pode despertar novas perguntas.",
    "Размышление может вызвать новые вопросы."
   ],
   [
    "vigiar",
    "бодрствовать, наблюдать",
    "Vigiar é um verbo que também pode indicar atenção.",
    "«Бодрствовать» — глагол, который может обозначать внимательность."
   ],
   [
    "vigilância",
    "бдительность, наблюдение",
    "O texto emprega vigilância em sentido figurado.",
    "Текст употребляет «бдительность» в переносном смысле."
   ]
  ]
 ],
 [
  "kingdom",
  "faith",
  "Царство, слава и вечность",
  "Reino, glória e eternidade",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "eternidade",
    "вечность",
    "A eternidade é um conceito religioso e filosófico.",
    "Вечность — религиозное и философское понятие."
   ],
   [
    "eterno",
    "вечный",
    "O adjetivo eterno aparece na linguagem religiosa.",
    "Прилагательное «вечный» встречается в религиозной речи."
   ],
   [
    "vida eterna",
    "вечная жизнь",
    "A expressão vida eterna aparece em João.",
    "Выражение «вечная жизнь» встречается у Иоанна."
   ],
   [
    "reino",
    "царство",
    "O contexto esclarece o sentido de reino.",
    "Контекст проясняет смысл слова «царство»."
   ],
   [
    "reino de Deus",
    "Царство Божье",
    "A expressão reino de Deus é estudada no Evangelho.",
    "Выражение «Царство Божье» изучается в Евангелии."
   ],
   [
    "trono",
    "престол, трон",
    "A imagem do trono sugere autoridade.",
    "Образ престола указывает на власть."
   ],
   [
    "coroa",
    "венец, корона",
    "A coroa pode funcionar como símbolo.",
    "Венец может выступать символом."
   ],
   [
    "cetro",
    "скипетр",
    "O cetro representa autoridade real.",
    "Скипетр символизирует царскую власть."
   ],
   [
    "majestade",
    "величие",
    "O poema utiliza a palavra majestade.",
    "В стихотворении используется слово «величие»."
   ],
   [
    "glória",
    "слава",
    "A palavra glória tem diferentes usos.",
    "У слова «слава» разные употребления."
   ],
   [
    "glorificar",
    "прославлять",
    "Glorificar a Deus é uma expressão religiosa.",
    "«Прославлять Бога» — религиозное выражение."
   ],
   [
    "honra",
    "честь, почёт",
    "O relato emprega honra em sentido social.",
    "В рассказе слово «честь» употребляется в социальном смысле."
   ],
   [
    "honrar",
    "почитать, уважать",
    "Honrar uma pessoa pode significar demonstrar respeito.",
    "Почитать человека может означать проявлять уважение."
   ],
   [
    "bendizer",
    "благословлять, восхвалять",
    "Bendizer é um verbo de registro religioso.",
    "«Благословлять» — глагол религиозного регистра."
   ],
   [
    "bendito",
    "благословенный",
    "Bendito é um adjetivo presente em orações.",
    "«Благословенный» — прилагательное, встречающееся в молитвах."
   ],
   [
    "bem-aventurado",
    "блаженный",
    "Bem-aventurado é comum em traduções bíblicas.",
    "«Блаженный» часто встречается в переводах Библии."
   ],
   [
    "bem-aventurança",
    "блаженство",
    "O estudo aborda o sentido de bem-aventurança.",
    "Занятие рассматривает понятие блаженства."
   ],
   [
    "bênção",
    "благословение",
    "A palavra bênção pode expressar gratidão.",
    "Слово «благословение» может выражать благодарность."
   ],
   [
    "maldição",
    "проклятие",
    "O termo maldição é analisado no contexto do relato.",
    "Термин «проклятие» анализируется в контексте повествования."
   ]
  ]
 ],
 [
  "obedience",
  "faith",
  "Послушание и заповеди",
  "Obediência e mandamentos",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "maldade",
    "злоба, зло",
    "A narrativa contrasta bondade e maldade.",
    "Повествование противопоставляет доброту и зло."
   ],
   [
    "benevolência",
    "благожелательность",
    "A benevolência é demonstrada por atitudes.",
    "Благожелательность проявляется в поступках."
   ],
   [
    "longanimidade",
    "долготерпение",
    "Longanimidade é um termo de registro formal.",
    "«Долготерпение» — термин книжного регистра."
   ],
   [
    "benignidade",
    "благость, доброжелательность",
    "O estudo compara benignidade e bondade.",
    "Занятие сопоставляет благость и доброту."
   ],
   [
    "retidão",
    "праведность, честность",
    "A retidão envolve agir com honestidade.",
    "Праведность включает честное поведение."
   ],
   [
    "retidão de coração",
    "чистосердечие",
    "A retidão de coração se manifesta na sinceridade.",
    "Чистосердечие проявляется в искренности."
   ],
   [
    "obediência",
    "послушание",
    "O texto aborda a obediência em seu contexto.",
    "Текст рассматривает послушание в его контексте."
   ],
   [
    "obedecer",
    "слушаться, повиноваться",
    "O verbo obedecer exige normalmente a preposição a.",
    "Глагол obedecer обычно требует предлога a."
   ],
   [
    "desobediência",
    "непослушание",
    "A narrativa descreve consequências da desobediência.",
    "Рассказ описывает последствия непослушания."
   ],
   [
    "rebelar-se",
    "восставать, бунтовать",
    "A personagem decide rebelar-se contra a ordem.",
    "Персонаж решает восстать против распоряжения."
   ],
   [
    "rebeldia",
    "непокорность",
    "A palavra rebeldia pode ter diferentes conotações.",
    "Слово «непокорность» может иметь разные коннотации."
   ],
   [
    "mandamento",
    "заповедь",
    "O estudo examina um mandamento no contexto da passagem.",
    "Занятие рассматривает заповедь в контексте отрывка."
   ],
   [
    "mandar",
    "приказывать, посылать",
    "O verbo mandar possui mais de uma acepção.",
    "У глагола mandar несколько значений."
   ],
   [
    "lei",
    "закон",
    "A palavra lei pode indicar normas ou um conjunto de textos.",
    "Слово «закон» может обозначать нормы или собрание текстов."
   ],
   [
    "preceito",
    "предписание, заповедь",
    "O preceito é explicado em linguagem atual.",
    "Предписание объясняется современным языком."
   ],
   [
    "estatuto",
    "устав, установление",
    "O estatuto contém orientações específicas.",
    "Установление содержит конкретные предписания."
   ],
   [
    "ordenança",
    "установление, предписание",
    "Ordenança aparece em algumas traduções bíblicas.",
    "Слово «установление» встречается в некоторых переводах Библии."
   ]
  ]
 ],
 [
  "worshipobjects",
  "faith",
  "Обряды и предметы поклонения",
  "Ritos e objetos de adoração",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "sacrifício",
    "жертва, жертвоприношение",
    "O relato descreve um sacrifício ritual.",
    "Рассказ описывает ритуальное жертвоприношение."
   ],
   [
    "holocausto",
    "всесожжение (библ.)",
    "No contexto antigo, holocausto designa um tipo de oferta ritual.",
    "В древнем контексте «всесожжение» обозначает вид ритуального приношения."
   ],
   [
    "incenso",
    "фимиам, ладан",
    "O texto menciona o aroma do incenso.",
    "В тексте упоминается аромат ладана."
   ],
   [
    "mirra",
    "смирна",
    "A mirra é mencionada no relato de Mateus.",
    "Смирна упоминается в повествовании Матфея."
   ],
   [
    "azeite",
    "оливковое масло, елей",
    "O azeite aparece em várias imagens bíblicas.",
    "Елей встречается в различных библейских образах."
   ],
   [
    "vaso",
    "сосуд, ваза",
    "O vaso pode representar algo frágil na metáfora.",
    "Сосуд может обозначать нечто хрупкое в метафоре."
   ],
   [
    "oleiro",
    "гончар",
    "O oleiro trabalha com o barro.",
    "Гончар работает с глиной."
   ],
   [
    "barro",
    "глина",
    "O barro é utilizado na imagem do oleiro.",
    "Глина используется в образе горшечника."
   ]
  ]
 ],
 [
  "biblefarming",
  "faith",
  "Земледелие и пастушество",
  "Agricultura e pastoreio",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "vinhedo",
    "виноградник",
    "O vinhedo aparece em uma parábola.",
    "Виноградник появляется в притче."
   ],
   [
    "poda",
    "обрезка ветвей",
    "A poda faz parte do cuidado de uma videira.",
    "Обрезка ветвей — часть ухода за лозой."
   ],
   [
    "podar",
    "обрезать ветви",
    "O agricultor sabe quando podar as plantas.",
    "Земледелец знает, когда обрезать растения."
   ],
   [
    "trigo",
    "пшеница",
    "O trigo aparece em imagens de colheita.",
    "Пшеница встречается в образах жатвы."
   ],
   [
    "joio",
    "плевелы",
    "O joio é mencionado em uma parábola de Mateus.",
    "Плевелы упоминаются в притче Матфея."
   ],
   [
    "ceifa",
    "жатва",
    "A ceifa pode representar uma etapa de conclusão.",
    "Жатва может обозначать этап завершения."
   ],
   [
    "ceifar",
    "жать, пожинать",
    "Ceifar significa cortar plantas na colheita.",
    "Ceifar означает срезать растения при жатве."
   ],
   [
    "lavrador",
    "земледелец",
    "O lavrador prepara a terra.",
    "Земледелец готовит землю."
   ],
   [
    "vinho",
    "вино (лексика текста)",
    "O vinho é mencionado no relato de João dois.",
    "Вино упоминается во второй главе Иоанна."
   ],
   [
    "odre",
    "мех для жидкости",
    "O odre aparece como objeto em uma comparação bíblica.",
    "Мех для жидкости появляется как предмет библейского сравнения."
   ],
   [
    "maná",
    "манна",
    "O maná é mencionado no relato do deserto.",
    "Манна упоминается в повествовании о пустыне."
   ],
   [
    "cajado",
    "посох",
    "O cajado faz parte da imagem do pastor.",
    "Посох — часть образа пастыря."
   ],
   [
    "aprisco",
    "овечий загон",
    "O aprisco é um lugar destinado às ovelhas.",
    "Овечий загон — место для овец."
   ],
   [
    "cordeiro de Deus",
    "Агнец Божий",
    "Cordeiro de Deus é um título religioso.",
    "«Агнец Божий» — религиозный титул."
   ]
  ]
 ],
 [
  "biblenature",
  "faith",
  "Природа и образы Библии",
  "Natureza e imagens bíblicas",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "leão",
    "лев",
    "O leão pode simbolizar força em uma narrativa.",
    "Лев может символизировать силу в повествовании."
   ],
   [
    "águia",
    "орёл",
    "A imagem da águia aparece na poesia bíblica.",
    "Образ орла встречается в библейской поэзии."
   ],
   [
    "pomba",
    "голубь, голубка",
    "A pomba aparece como símbolo em diferentes passagens.",
    "Голубь выступает символом в разных отрывках."
   ],
   [
    "serpente",
    "змея",
    "A serpente é mencionada em Gênesis.",
    "Змея упоминается в Бытии."
   ],
   [
    "oliveira",
    "оливковое дерево",
    "A oliveira aparece em imagens de crescimento.",
    "Оливковое дерево встречается в образах роста."
   ],
   [
    "palmeira",
    "пальма",
    "A palmeira faz parte da paisagem descrita.",
    "Пальма — часть описанного пейзажа."
   ],
   [
    "cedro",
    "кедр",
    "O cedro é uma árvore mencionada em textos antigos.",
    "Кедр — дерево, упоминаемое в древних текстах."
   ],
   [
    "espinho",
    "шип, терние",
    "O espinho pode ter sentido literal ou figurado.",
    "Терние может иметь буквальный или переносный смысл."
   ],
   [
    "espinheiro",
    "терновник",
    "O espinheiro aparece na descrição do cenário.",
    "Терновник встречается в описании местности."
   ],
   [
    "monte",
    "гора, холм",
    "O monte é um elemento geográfico do relato.",
    "Гора — географический элемент повествования."
   ],
   [
    "vale",
    "долина",
    "O grupo atravessa um vale na narrativa.",
    "Группа проходит через долину в рассказе."
   ],
   [
    "rio",
    "река",
    "O rio Jordão é mencionado em vários relatos.",
    "Река Иордан упоминается в нескольких повествованиях."
   ],
   [
    "nascente",
    "источник (воды)",
    "A nascente fornece água ao riacho.",
    "Источник питает ручей."
   ],
   [
    "cisterna",
    "цистерна, водоём",
    "A cisterna servia para guardar água.",
    "Цистерна служила для хранения воды."
   ],
   [
    "fonte de água viva",
    "источник живой воды",
    "A expressão fonte de água viva pode ser figurativa.",
    "Выражение «источник живой воды» может быть переносным."
   ],
   [
    "muralha",
    "городская стена",
    "A muralha cercava a cidade antiga.",
    "Стена окружала древний город."
   ],
   [
    "portão",
    "ворота",
    "O portão dava acesso à cidade.",
    "Ворота давали доступ в город."
   ],
   [
    "fortaleza",
    "крепость, твердыня",
    "A fortaleza também pode ser uma imagem de proteção.",
    "Твердыня также может быть образом защиты."
   ],
   [
    "abrigo",
    "убежище",
    "O abrigo oferece proteção contra a chuva.",
    "Убежище защищает от дождя."
   ],
   [
    "rochedo",
    "скала",
    "O rochedo faz parte da paisagem do deserto.",
    "Скала — часть пустынного пейзажа."
   ],
   [
    "fundamento sólido",
    "прочное основание",
    "A imagem de um fundamento sólido sugere estabilidade.",
    "Образ прочного основания указывает на устойчивость."
   ],
   [
    "pedra angular",
    "краеугольный камень",
    "A expressão pedra angular é usada em sentido figurado.",
    "Выражение «краеугольный камень» употребляется в переносном смысле."
   ],
   [
    "jugo",
    "ярмо, иго",
    "O jugo pode representar uma obrigação pesada.",
    "Ярмо может обозначать тяжёлую обязанность."
   ],
   [
    "fardo",
    "бремя, груз",
    "A palavra fardo pode indicar uma responsabilidade difícil.",
    "Слово «бремя» может обозначать трудную ответственность."
   ]
  ]
 ],
 [
  "journeyfaith",
  "faith",
  "Паломничество, освобождение и завет",
  "Peregrinação, libertação e aliança",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "libertar",
    "освобождать",
    "Libertar alguém significa torná-lo livre.",
    "Освободить кого-то означает сделать его свободным."
   ],
   [
    "cativeiro",
    "плен",
    "O capítulo narra um período de cativeiro.",
    "Глава описывает период плена."
   ],
   [
    "exílio",
    "изгнание",
    "O exílio é um tema de vários livros bíblicos.",
    "Изгнание — тема нескольких библейских книг."
   ],
   [
    "retorno do exílio",
    "возвращение из изгнания",
    "O relato descreve o retorno do exílio.",
    "Рассказ описывает возвращение из изгнания."
   ],
   [
    "peregrino",
    "странник, паломник",
    "O peregrino segue em direção à cidade.",
    "Паломник направляется к городу."
   ],
   [
    "peregrinação",
    "паломничество, странствие",
    "A peregrinação é mencionada no contexto histórico.",
    "Паломничество упоминается в историческом контексте."
   ],
   [
    "prometer",
    "обещать",
    "Prometer exige responsabilidade por aquilo que se diz.",
    "Обещать означает нести ответственность за свои слова."
   ],
   [
    "juramento",
    "клятва",
    "O texto menciona um juramento solene.",
    "В тексте упоминается торжественная клятва."
   ],
   [
    "jurar",
    "клясться",
    "O verbo jurar pode indicar uma promessa solene.",
    "Глагол «клясться» может означать торжественное обещание."
   ],
   [
    "herdeiro",
    "наследник",
    "O herdeiro recebe uma herança.",
    "Наследник получает наследство."
   ],
   [
    "herdar",
    "наследовать",
    "Herdar pode ter sentido concreto ou figurado.",
    "«Наследовать» может иметь буквальный или переносный смысл."
   ],
   [
    "primogênito",
    "первенец",
    "Primogênito designa o primeiro filho nascido.",
    "«Первенец» обозначает первого родившегося ребёнка."
   ],
   [
    "primícias",
    "первые плоды, начатки",
    "Primícias é um termo ligado à primeira parte da colheita.",
    "«Начатки» — термин, связанный с первой частью урожая."
   ]
  ]
 ],
 [
  "revelation",
  "faith",
  "Чудеса и откровение",
  "Milagres e revelação",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "multidão de pessoas",
    "множество людей",
    "Uma multidão de pessoas escutava a mensagem.",
    "Множество людей слушало послание."
   ],
   [
    "milagre",
    "чудо",
    "O narrador descreve um milagre.",
    "Рассказчик описывает чудо."
   ],
   [
    "sinal e maravilha",
    "знамение и чудо",
    "A expressão sinal e maravilha pertence ao vocabulário religioso.",
    "Выражение «знамение и чудо» относится к религиозной лексике."
   ],
   [
    "revelação",
    "откровение",
    "O contexto ajuda a interpretar a palavra revelação.",
    "Контекст помогает истолковать слово «откровение»."
   ],
   [
    "revelar",
    "открывать, раскрывать",
    "O narrador revela um detalhe importante.",
    "Рассказчик раскрывает важную деталь."
   ],
   [
    "mistério",
    "тайна",
    "O texto aborda o conceito de mistério.",
    "Текст рассматривает понятие тайны."
   ]
  ]
 ],
 [
  "biblicalevents",
  "faith",
  "События и образы Нового Завета",
  "Eventos e imagens do Novo Testamento",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "visão",
    "видение, зрение",
    "A palavra visão pode significar percepção ou experiência religiosa.",
    "Слово «видение» может означать восприятие или религиозный опыт."
   ],
   [
    "sonho",
    "сон, мечта",
    "O sonho aparece na narrativa de José.",
    "Сон встречается в повествовании об Иосифе."
   ],
   [
    "ressuscitar",
    "воскрешать, воскресать",
    "Ressuscitar é um verbo importante na leitura do Evangelho.",
    "«Воскресать» — важный глагол при чтении Евангелия."
   ],
   [
    "crucificação",
    "распятие",
    "A crucificação é um acontecimento central nos Evangelhos.",
    "Распятие — центральное событие Евангелий."
   ],
   [
    "cruz",
    "крест",
    "A cruz é um símbolo central do cristianismo.",
    "Крест — центральный символ христианства."
   ],
   [
    "sepulcro",
    "гробница",
    "O sepulcro é mencionado no final dos Evangelhos.",
    "Гробница упоминается в конце Евангелий."
   ],
   [
    "ascensão",
    "вознесение",
    "A ascensão é um tema da tradição cristã.",
    "Вознесение — тема христианской традиции."
   ],
   [
    "pentecostes",
    "Пятидесятница",
    "Pentecostes é mencionado no livro de Atos.",
    "Пятидесятница упоминается в книге Деяний."
   ],
   [
    "juízo",
    "суд, суждение",
    "Juízo pode indicar julgamento ou discernimento.",
    "«Суд» может обозначать решение суда или рассудительность."
   ]
  ]
 ],
 [
  "faithphrases",
  "faith",
  "Выражения веры и благодарности",
  "Expressões de fé e gratidão",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "misericordioso",
    "милосердный",
    "O adjetivo misericordioso caracteriza quem demonstra misericórdia.",
    "Прилагательное «милосердный» характеризует проявляющего милосердие."
   ],
   [
    "conceder",
    "даровать, предоставлять",
    "Conceder uma oportunidade pode ser um gesto de bondade.",
    "Предоставить возможность может быть добрым поступком."
   ],
   [
    "buscar ao Senhor",
    "искать Господа",
    "A expressão buscar ao Senhor tem sentido religioso.",
    "Выражение «искать Господа» имеет религиозный смысл."
   ],
   [
    "dar graças",
    "воздавать благодарность",
    "Dar graças é uma expressão de gratidão.",
    "«Воздавать благодарность» — выражение признательности."
   ],
   [
    "render graças",
    "возносить благодарение",
    "Render graças é uma expressão de registro religioso.",
    "«Возносить благодарение» — выражение религиозного регистра."
   ],
   [
    "de todo o coração",
    "от всего сердца",
    "Ela agradeceu de todo o coração.",
    "Она поблагодарила от всего сердца."
   ],
   [
    "andar pela fé",
    "ходить верой",
    "Andar pela fé é uma expressão figurativa cristã.",
    "«Ходить верой» — христианское образное выражение."
   ],
   [
    "dar fruto",
    "приносить плод",
    "A expressão dar fruto pode indicar um resultado.",
    "Выражение «приносить плод» может обозначать результат."
   ],
   [
    "semear e colher",
    "сеять и пожинать",
    "Semear e colher pode formar uma metáfora de consequências.",
    "«Сеять и пожинать» может образовать метафору последствий."
   ],
   [
    "revestir-se",
    "облекаться",
    "Revestir-se de humildade é uma expressão figurativa.",
    "«Облечься в смирение» — образное выражение."
   ],
   [
    "despojar-se",
    "совлекаться, избавляться",
    "O texto usa despojar-se em sentido figurado.",
    "Текст использует «совлекаться» в переносном смысле."
   ],
   [
    "firmar-se",
    "утверждаться, укрепляться",
    "Firmar-se em uma convicção exige reflexão.",
    "Утверждаться в убеждении требует размышления."
   ],
   [
    "edificar",
    "созидать, назидать",
    "Edificar pode significar construir ou contribuir para o crescimento.",
    "«Созидать» может означать строить или способствовать развитию."
   ],
   [
    "edificação",
    "назидание, созидание",
    "A palavra edificação tem um sentido figurado no contexto cristão.",
    "Слово «назидание» имеет переносное значение в христианском контексте."
   ]
  ]
 ],
 [
  "biblicalspeech",
  "faith",
  "Наставление и речь",
  "Exortação e linguagem",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "exortar",
    "увещевать",
    "Exortar é encorajar ou aconselhar com ênfase.",
    "Увещевать — настойчиво ободрять или советовать."
   ],
   [
    "admoestar",
    "вразумлять, увещевать",
    "Admoestar pertence a um registro mais formal.",
    "«Вразумлять» относится к более книжному регистру."
   ],
   [
    "iniquidade do coração",
    "беззаконие сердца",
    "A expressão iniquidade do coração tem sentido moral.",
    "Выражение «беззаконие сердца» имеет нравственный смысл."
   ],
   [
    "murmurar",
    "роптать, бормотать",
    "O verbo murmurar pode indicar uma queixa discreta.",
    "Глагол «роптать» может обозначать тихое недовольство."
   ],
   [
    "murmuração",
    "ропот",
    "A narrativa menciona a murmuração do povo.",
    "В повествовании упоминается ропот народа."
   ],
   [
    "contenda",
    "распря, спор",
    "A contenda pode prejudicar a convivência.",
    "Распра может ухудшать отношения."
   ],
   [
    "contender",
    "спорить, пререкаться",
    "Contender é uma forma mais formal de dizer disputar.",
    "Contender — более книжный способ сказать «спорить»."
   ],
   [
    "tardio",
    "поздний, медленный",
    "Tardio é um adjetivo de registro formal.",
    "«Поздний» — прилагательное книжного регистра."
   ],
   [
    "vão",
    "напрасный, тщетный",
    "O adjetivo vão pode indicar falta de resultado.",
    "Прилагательное «тщетный» может указывать на отсутствие результата."
   ]
  ]
 ],
 [
  "literary",
  "faith",
  "Книжные и библейские выражения",
  "Expressões literárias e bíblicas",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "em vão",
    "напрасно",
    "Não quero procurar a informação em vão.",
    "Я не хочу искать информацию напрасно."
   ],
   [
    "eis que",
    "и вот (книжн.)",
    "Eis que introduz uma nova situação no relato.",
    "«И вот» вводит новую ситуацию в рассказе."
   ],
   [
    "porquanto",
    "ибо, поскольку (книжн.)",
    "Porquanto introduz uma explicação causal em registro formal.",
    "Porquanto вводит причинное пояснение в книжном регистре."
   ],
   [
    "todavia",
    "однако, тем не менее",
    "O texto é antigo; todavia, sua estrutura pode ser analisada.",
    "Текст древний, однако его структуру можно анализировать."
   ],
   [
    "outrossim",
    "также, кроме того (книжн.)",
    "Outrossim é mais frequente em linguagem formal.",
    "Outrossim чаще встречается в формальной речи."
   ],
   [
    "varão",
    "муж, мужчина (книжн.)",
    "Varão é uma palavra encontrada em traduções bíblicas tradicionais.",
    "«Муж» — слово, встречающееся в традиционных переводах Библии."
   ],
   [
    "donzela",
    "девица (книжн.)",
    "Donzela pertence a um registro literário antigo.",
    "«Девица» относится к старинному литературному регистру."
   ],
   [
    "mancebo",
    "юноша (устар.)",
    "Mancebo pode ser substituído por jovem na fala atual.",
    "В современной речи mancebo можно заменить на jovem."
   ],
   [
    "porventura não",
    "разве не (книжн.)",
    "Porventura não é uma expressão que podemos encontrar em textos antigos?",
    "Разве это не выражение, которое можно встретить в древних текстах?"
   ],
   [
    "em verdade",
    "истинно, поистине",
    "Em verdade é uma expressão de registro solene.",
    "«Истинно» — выражение торжественного регистра."
   ]
  ]
 ],
 [
  "churchroles",
  "faith",
  "Команды и служители",
  "Equipes e funções na igreja",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "secretaria",
    "секретариат",
    "A secretaria informa os horários das reuniões.",
    "Секретариат сообщает время собраний."
   ],
   [
    "secretário",
    "секретарь",
    "O secretário organiza os documentos.",
    "Секретарь организует документы."
   ],
   [
    "secretária",
    "секретарь (жен.)",
    "A secretária preparou o comunicado.",
    "Секретарь подготовила объявление."
   ],
   [
    "coordenador",
    "координатор",
    "O coordenador explica as tarefas à equipe.",
    "Координатор объясняет команде задачи."
   ],
   [
    "coordenadora",
    "координатор (жен.)",
    "A coordenadora confirmou a programação.",
    "Координатор подтвердила программу."
   ],
   [
    "responsável pela equipe",
    "ответственный за команду",
    "O responsável pela equipe recebeu as sugestões.",
    "Ответственный за команду принял предложения."
   ],
   [
    "equipe de recepção",
    "команда встречающих",
    "A equipe de recepção orienta os visitantes.",
    "Команда встречающих помогает посетителям сориентироваться."
   ],
   [
    "equipe de comunicação",
    "команда коммуникаций",
    "A equipe de comunicação preparou o aviso.",
    "Команда коммуникаций подготовила объявление."
   ],
   [
    "equipe de som",
    "звуковая команда",
    "A equipe de som verificou o microfone.",
    "Звуковая команда проверила микрофон."
   ],
   [
    "equipe de mídia",
    "медиакоманда",
    "A equipe de mídia organizou as imagens autorizadas.",
    "Медиакоманда организовала разрешённые к использованию изображения."
   ],
   [
    "equipe de limpeza",
    "команда уборки",
    "A equipe de limpeza deixou a sala organizada.",
    "Команда уборки привела зал в порядок."
   ],
   [
    "equipe de apoio",
    "команда поддержки",
    "A equipe de apoio distribuiu os materiais.",
    "Команда поддержки раздала материалы."
   ],
   [
    "voluntária",
    "доброволец (жен.)",
    "A voluntária escolheu uma tarefa adequada.",
    "Доброволица выбрала подходящую задачу."
   ],
   [
    "voluntariado comunitário",
    "общественное волонтёрство",
    "O voluntariado comunitário depende da participação livre.",
    "Общественное волонтёрство зависит от свободного участия."
   ],
   [
    "diácono",
    "диакон",
    "O diácono participa da organização da comunidade.",
    "Диакон участвует в организации общины."
   ],
   [
    "diaconisa",
    "диакониса",
    "A função da diaconisa varia conforme a igreja.",
    "Роль диаконисы различается в разных церквях."
   ],
   [
    "presbítero",
    "пресвитер",
    "O título presbítero aparece em diferentes tradições cristãs.",
    "Титул «пресвитер» встречается в разных христианских традициях."
   ],
   [
    "missionário",
    "миссионер",
    "O missionário aprende a língua local.",
    "Миссионер изучает местный язык."
   ],
   [
    "missionária",
    "миссионерка",
    "A missionária conversa com a comunidade.",
    "Миссионерка беседует с общиной."
   ],
   [
    "missão",
    "миссия",
    "A equipe explicou o objetivo da missão.",
    "Команда объяснила цель миссии."
   ],
   [
    "missionário local",
    "местный миссионер",
    "O missionário local conhece os costumes da região.",
    "Местный миссионер знает обычаи региона."
   ],
   [
    "congregação",
    "община, собрание верующих",
    "A congregação participa de uma atividade de leitura.",
    "Община участвует в занятии по чтению."
   ],
   [
    "assembleia",
    "собрание",
    "A assembleia discutiu uma proposta.",
    "Собрание обсудило предложение."
   ],
   [
    "fiel",
    "верующий; верный",
    "O fiel participou da leitura.",
    "Верующий участвовал в чтении."
   ],
   [
    "bispo",
    "епископ",
    "O bispo conversa com os pastores.",
    "Епископ беседует с пасторами."
   ],
   [
    "Dona",
    "уважительное обращение",
    "Dona Ana, a senhora pode me ajudar?",
    "Дона Ана, вы можете мне помочь?"
   ]
  ]
 ],
 [
  "churchmeetings",
  "faith",
  "Группы и собрания",
  "Grupos e reuniões",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "membro da igreja",
    "член церкви",
    "Um membro da igreja pediu informações.",
    "Член церкви попросил сведения."
   ],
   [
    "frequentador",
    "посетитель, регулярно посещающий",
    "O frequentador conhece a programação habitual.",
    "Постоянный посетитель знает обычное расписание."
   ],
   [
    "novo convertido",
    "новообращённый",
    "O novo convertido pode esclarecer suas dúvidas.",
    "Новообращённый может прояснить свои вопросы."
   ],
   [
    "discipulado",
    "ученичество, духовное наставничество",
    "O discipulado envolve aprendizado e reflexão.",
    "Ученичество включает обучение и размышление."
   ],
   [
    "estudo em grupo",
    "групповое изучение",
    "O estudo em grupo começa após a leitura individual.",
    "Групповое изучение начинается после самостоятельного чтения."
   ],
   [
    "grupo de jovens",
    "молодёжная группа",
    "O grupo de jovens organizou uma atividade cultural.",
    "Молодёжная группа организовала культурное мероприятие."
   ],
   [
    "grupo de oração",
    "молитвенная группа",
    "O grupo de oração se reúne em um horário combinado.",
    "Молитвенная группа собирается в согласованное время."
   ],
   [
    "grupo de leitura",
    "группа чтения",
    "O grupo de leitura conversa sobre o significado do texto.",
    "Группа чтения обсуждает смысл текста."
   ],
   [
    "encontro de jovens",
    "молодёжная встреча",
    "O encontro de jovens inclui atividades voluntárias.",
    "Молодёжная встреча включает добровольные занятия."
   ],
   [
    "reunião de família",
    "семейное собрание",
    "A reunião de família tem uma programação específica.",
    "Семейное собрание имеет отдельную программу."
   ],
   [
    "reunião de fé",
    "собрание веры",
    "O aviso informa o horário da reunião de fé.",
    "Объявление сообщает время собрания веры."
   ],
   [
    "reunião especial",
    "особое собрание",
    "A reunião especial será anunciada com antecedência.",
    "Об особом собрании сообщат заранее."
   ],
   [
    "reunião de estudo",
    "учебное собрание",
    "A reunião de estudo aborda o vocabulário bíblico.",
    "Учебное собрание посвящено библейской лексике."
   ],
   [
    "leitura bíblica",
    "чтение Библии",
    "A leitura bíblica precede a discussão do tema.",
    "Чтение Библии предшествует обсуждению темы."
   ]
  ]
 ],
 [
  "churchmusic",
  "faith",
  "Музыка и звук на служении",
  "Música e som na igreja",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "cântico",
    "песнопение",
    "O grupo aprendeu um cântico novo.",
    "Группа выучила новое песнопение."
   ],
   [
    "hino",
    "гимн, духовная песнь",
    "O hino será apresentado pelo grupo.",
    "Гимн исполнит группа."
   ],
   [
    "hinário",
    "сборник гимнов",
    "O hinário reúne cânticos de diferentes épocas.",
    "Сборник содержит гимны разных эпох."
   ],
   [
    "coral",
    "хор",
    "O coral ensaiou antes da apresentação.",
    "Хор репетировал перед выступлением."
   ],
   [
    "ensaio",
    "репетиция",
    "O ensaio começou no horário combinado.",
    "Репетиция началась в согласованное время."
   ],
   [
    "ensaiar",
    "репетировать",
    "O grupo vai ensaiar a música.",
    "Группа будет репетировать песню."
   ],
   [
    "instrumentista",
    "инструменталист",
    "A instrumentista acompanha o coral.",
    "Инструменталистка аккомпанирует хору."
   ],
   [
    "teclado musical",
    "музыкальная клавиатура",
    "O teclado musical foi preparado para o ensaio.",
    "Музыкальную клавиатуру подготовили к репетиции."
   ],
   [
    "violão",
    "акустическая гитара",
    "O músico tocou violão durante o ensaio.",
    "Музыкант играл на гитаре во время репетиции."
   ],
   [
    "microfone",
    "микрофон",
    "O microfone precisa ser testado antes da reunião.",
    "Микрофон нужно проверить перед собранием."
   ],
   [
    "caixa de som",
    "колонка",
    "A caixa de som está perto da mesa.",
    "Колонка находится рядом со столом."
   ],
   [
    "mesa de som",
    "микшерный пульт",
    "A equipe verificou a mesa de som.",
    "Команда проверила микшерный пульт."
   ],
   [
    "volume do som",
    "громкость звука",
    "O volume do som deve ser confortável.",
    "Громкость звука должна быть комфортной."
   ],
   [
    "projetor",
    "проектор",
    "O projetor mostra o tema da aula.",
    "Проектор показывает тему занятия."
   ],
   [
    "tela de projeção",
    "проекционный экран",
    "A tela de projeção fica à frente da sala.",
    "Проекционный экран находится в передней части зала."
   ]
  ]
 ],
 [
  "churchrooms",
  "faith",
  "Помещения и оборудование церкви",
  "Espaços e equipamentos da igreja",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "púlpito",
    "кафедра, амвон",
    "O orador se aproximou do púlpito.",
    "Выступающий подошёл к кафедре."
   ],
   [
    "auditório",
    "актовый зал, аудитория",
    "O auditório foi preparado para o encontro.",
    "Зал подготовили к встрече."
   ],
   [
    "banco da igreja",
    "церковная скамья",
    "Os visitantes se sentaram no banco da igreja.",
    "Посетители сели на церковную скамью."
   ],
   [
    "assento reservado",
    "зарезервированное место",
    "O assento reservado fica perto da entrada.",
    "Зарезервированное место находится у входа."
   ],
   [
    "entrada principal",
    "главный вход",
    "A recepção fica junto à entrada principal.",
    "Стойка приёма находится у главного входа."
   ],
   [
    "saída de emergência",
    "аварийный выход",
    "A saída de emergência deve ficar desobstruída.",
    "Аварийный выход должен быть свободным."
   ],
   [
    "sala de atendimento",
    "комната для бесед",
    "A sala de atendimento oferece privacidade.",
    "Комната для бесед обеспечивает конфиденциальность."
   ],
   [
    "sala de reunião",
    "комната для собраний",
    "A sala de reunião está disponível à tarde.",
    "Комната для собраний свободна после обеда."
   ],
   [
    "banheiro",
    "туалет, ванная комната",
    "O visitante perguntou onde fica o banheiro.",
    "Посетитель спросил, где находится туалет."
   ],
   [
    "bebedouro",
    "фонтанчик для питьевой воды",
    "O bebedouro fica no corredor.",
    "Питьевой фонтанчик находится в коридоре."
   ],
   [
    "ventilação",
    "вентиляция",
    "A ventilação melhora o conforto da sala.",
    "Вентиляция улучшает комфорт помещения."
   ],
   [
    "iluminação",
    "освещение",
    "A equipe verificou a iluminação antes da filmagem.",
    "Команда проверила освещение перед съёмкой."
   ]
  ]
 ],
 [
  "churchmedia",
  "faith",
  "Медиа и организация служений",
  "Mídia e organização",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "enquadramento",
    "кадрирование",
    "O enquadramento destaca o tema da imagem.",
    "Кадрирование выделяет тему изображения."
   ],
   [
    "filmadora",
    "видеокамера",
    "A filmadora está pronta para o registro autorizado.",
    "Видеокамера готова к разрешённой съёмке."
   ],
   [
    "tripé",
    "штатив",
    "O tripé mantém a câmera estável.",
    "Штатив удерживает камеру неподвижно."
   ],
   [
    "transmissão ao vivo",
    "прямая трансляция",
    "A transmissão ao vivo usa apenas imagens autorizadas.",
    "В прямой трансляции используются только разрешённые изображения."
   ],
   [
    "gravação de áudio",
    "аудиозапись",
    "A gravação de áudio precisa de autorização quando inclui outras pessoas.",
    "Аудиозапись требует разрешения, когда включает других людей."
   ],
   [
    "autorização de imagem",
    "разрешение на использование изображения",
    "A autorização de imagem deve ser solicitada antes da publicação.",
    "Разрешение на использование изображения нужно запросить перед публикацией."
   ],
   [
    "material de divulgação",
    "информационные материалы",
    "O material de divulgação apresenta a programação.",
    "Информационные материалы представляют программу."
   ],
   [
    "cartaz",
    "плакат",
    "O cartaz informa a data do encontro.",
    "Плакат сообщает дату встречи."
   ],
   [
    "folheto",
    "листовка",
    "O folheto contém informações sobre a atividade.",
    "Листовка содержит информацию о мероприятии."
   ],
   [
    "panfleto",
    "листовка, буклет",
    "O panfleto apresenta o tema da reunião.",
    "Буклет представляет тему собрания."
   ],
   [
    "convite impresso",
    "печатное приглашение",
    "O convite impresso informa o horário.",
    "Печатное приглашение сообщает время."
   ],
   [
    "lista de presença",
    "список присутствующих",
    "A lista de presença deve respeitar a privacidade.",
    "Список присутствующих должен учитывать конфиденциальность."
   ],
   [
    "escala de serviço",
    "график служения",
    "A escala de serviço considera a disponibilidade de cada voluntário.",
    "График служения учитывает свободное время каждого добровольца."
   ],
   [
    "plantão",
    "дежурство",
    "O plantão foi organizado por acordo da equipe.",
    "Дежурство организовали по договорённости команды."
   ],
   [
    "turno",
    "смена",
    "O voluntário escolheu um turno disponível.",
    "Доброволец выбрал доступную смену."
   ],
   [
    "mídia",
    "медиа",
    "A equipe de mídia grava um vídeo.",
    "Медиакоманда записывает видео."
   ]
  ]
 ],
 [
  "churchwelcome",
  "faith",
  "Приветствие и организация собрания",
  "Recepção e organização da reunião",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "chegar com antecedência",
    "приходить заранее",
    "A equipe combinou chegar com antecedência.",
    "Команда договорилась прийти заранее."
   ],
   [
    "estar à disposição",
    "быть готовым помочь",
    "Estou à disposição para esclarecer dúvidas sobre a atividade.",
    "Я готова разъяснить вопросы о мероприятии."
   ],
   [
    "prestar assistência",
    "оказывать помощь",
    "A equipe pode prestar assistência quando solicitada.",
    "Команда может оказать помощь по просьбе."
   ],
   [
    "oferecer uma palavra de apoio",
    "сказать слова поддержки",
    "Ela quis oferecer uma palavra de apoio à colega.",
    "Она хотела сказать коллеге слова поддержки."
   ],
   [
    "acolher com respeito",
    "принимать с уважением",
    "É importante acolher com respeito cada visitante.",
    "Важно принимать каждого посетителя с уважением."
   ],
   [
    "dar boas-vindas",
    "приветствовать",
    "A equipe vai dar boas-vindas aos participantes.",
    "Команда поприветствует участников."
   ],
   [
    "encaminhar uma dúvida",
    "передать вопрос ответственному",
    "Posso encaminhar uma dúvida ao coordenador.",
    "Я могу передать вопрос координатору."
   ],
   [
    "com licença",
    "разрешите, извините",
    "Com licença, onde fica a sala de reunião?",
    "Извините, где находится комната для собраний?"
   ],
   [
    "fique à vontade",
    "чувствуйте себя свободно",
    "Fique à vontade para fazer perguntas.",
    "Не стесняйтесь задавать вопросы."
   ],
   [
    "agradecer pela presença",
    "благодарить за присутствие",
    "O orador quis agradecer pela presença de todos.",
    "Выступающий хотел поблагодарить всех за присутствие."
   ],
   [
    "encerrar a reunião",
    "завершить собрание",
    "O responsável vai encerrar a reunião no horário previsto.",
    "Ответственный завершит собрание в намеченное время."
   ],
   [
    "dar um aviso",
    "сделать объявление",
    "Antes da leitura, a coordenadora vai dar um aviso.",
    "Перед чтением координатор сделает объявление."
   ],
   [
    "avisar com antecedência",
    "предупреждать заранее",
    "Se houver alteração, vamos avisar com antecedência.",
    "Если будут изменения, мы предупредим заранее."
   ],
   [
    "marcar uma reunião",
    "назначать собрание",
    "Podemos marcar uma reunião quando a equipe estiver disponível.",
    "Можем назначить собрание, когда команда будет свободна."
   ],
   [
    "confirmar presença",
    "подтверждать присутствие",
    "Quem quiser participar pode confirmar presença.",
    "Желающие участвовать могут подтвердить присутствие."
   ],
   [
    "preparar o ambiente",
    "подготавливать помещение",
    "A equipe vai preparar o ambiente antes da atividade.",
    "Команда подготовит помещение перед мероприятием."
   ],
   [
    "distribuir folhetos",
    "раздавать листовки",
    "Os voluntários podem distribuir folhetos a quem desejar recebê-los.",
    "Добровольцы могут раздавать листовки желающим их получить."
   ],
   [
    "acolhimento",
    "радушный приём",
    "O acolhimento dos visitantes é importante.",
    "Радушный приём посетителей важен."
   ],
   [
    "aconselhamento",
    "беседа с советом",
    "Ela procura aconselhamento.",
    "Она обращается за советом."
   ]
  ]
 ],
 [
  "volunteering",
  "faith",
  "Социальные проекты и помощь",
  "Projetos sociais e ajuda",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "ação solidária",
    "благотворительная акция",
    "A ação solidária foi organizada com participação voluntária.",
    "Благотворительную акцию организовали с добровольным участием."
   ],
   [
    "arrecadação de alimentos",
    "сбор продуктов",
    "A arrecadação de alimentos tem uma lista de itens solicitados.",
    "Для сбора продуктов есть список необходимых позиций."
   ],
   [
    "campanha solidária",
    "благотворительная кампания",
    "A campanha solidária respeita a escolha dos participantes.",
    "Благотворительная кампания уважает выбор участников."
   ],
   [
    "cesta básica",
    "набор основных продуктов",
    "A equipe organizou a entrega da cesta básica.",
    "Команда организовала передачу набора продуктов."
   ],
   [
    "entrega de doações",
    "передача пожертвований",
    "A entrega de doações foi planejada com respeito à privacidade.",
    "Передача пожертвований была спланирована с учётом конфиденциальности."
   ],
   [
    "apoio comunitário",
    "поддержка сообщества",
    "O apoio comunitário pode incluir informações e orientação.",
    "Поддержка сообщества может включать информацию и консультации."
   ],
   [
    "atendimento voluntário",
    "волонтёрский приём",
    "O atendimento voluntário tem horários definidos.",
    "Волонтёрский приём проводится в установленные часы."
   ],
   [
    "formação de voluntários",
    "обучение добровольцев",
    "A formação de voluntários inclui orientações sobre respeito.",
    "Обучение добровольцев включает наставления об уважении."
   ],
   [
    "Força Jovem Universal",
    "молодёжное движение FJU",
    "Os jovens participam das atividades da FJU.",
    "Молодёжь участвует в мероприятиях FJU."
   ]
  ]
 ],
 [
  "psalmsone",
  "faith",
  "Псалом 1: жизнь и путь",
  "Salmo 1: vida e caminho",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "influência",
    "влияние",
    "Uma boa influência ajuda a crescer.",
    "Хорошее влияние помогает расти."
   ],
   [
    "rejeitar",
    "отвергать",
    "Precisamos rejeitar a mentira.",
    "Нам нужно отвергать ложь."
   ],
   [
    "escarnecedor",
    "насмешник",
    "O escarnecedor ridiculariza os outros.",
    "Насмешник высмеивает других."
   ],
   [
    "instrução divina",
    "Божье наставление",
    "O salmista valoriza a instrução divina.",
    "Псалмопевец ценит Божье наставление."
   ],
   [
    "refletir sobre",
    "размышлять о",
    "Quero refletir sobre minhas escolhas.",
    "Я хочу размышлять о своих решениях."
   ],
   [
    "meditar",
    "размышлять",
    "Reservamos um tempo para meditar.",
    "Мы выделяем время для размышления."
   ],
   [
    "continuamente",
    "непрерывно",
    "A comunidade ora continuamente pelas pessoas.",
    "Община постоянно молится за людей."
   ],
   [
    "árvore",
    "дерево",
    "Uma árvore oferece sombra ao viajante.",
    "Дерево даёт путнику тень."
   ],
   [
    "produzir fruto",
    "приносить плод",
    "A planta precisa de tempo para produzir fruto.",
    "Растению нужно время, чтобы принести плод."
   ],
   [
    "folhagem",
    "листва",
    "A folhagem protege o solo do sol.",
    "Листва защищает почву от солнца."
   ],
   [
    "momento adequado",
    "подходящее время",
    "Escolha um momento adequado para conversar.",
    "Выбери подходящий момент для разговора."
   ],
   [
    "em contraste",
    "в противоположность",
    "Em contraste com o primeiro exemplo, este mostra instabilidade.",
    "В отличие от первого примера, этот показывает неустойчивость."
   ],
   [
    "palha",
    "солома, мякина",
    "O agricultor recolheu a palha.",
    "Земледелец собрал солому."
   ],
   [
    "injusto",
    "неправедный",
    "Não devemos apoiar um ato injusto.",
    "Не следует поддерживать несправедливый поступок."
   ],
   [
    "levar pelo vento",
    "уносить ветром",
    "Uma folha seca é fácil de levar pelo vento.",
    "Сухой лист легко уносится ветром."
   ],
   [
    "julgamento",
    "суд",
    "O julgamento exige imparcialidade.",
    "Суд требует беспристрастности."
   ],
   [
    "injustiça",
    "неправедность",
    "A comunidade não deve tolerar a injustiça.",
    "Община не должна терпеть несправедливость."
   ],
   [
    "posição segura",
    "прочное положение",
    "O viajante procurou uma posição segura.",
    "Путник искал безопасное место."
   ],
   [
    "ruína",
    "крах, гибель",
    "O abandono levou o edifício à ruína.",
    "Заброшенность привела здание к разрушению."
   ],
   [
    "terminar em",
    "заканчиваться чем-либо",
    "Uma discussão pode terminar em acordo.",
    "Спор может закончиться соглашением."
   ]
  ]
 ],
 [
  "psalmshepherd",
  "faith",
  "Псалом 23: забота и пастырь",
  "Salmo 23: cuidado e pastor",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "pastoreio",
    "пастушество",
    "O pastoreio era importante na economia antiga.",
    "Пастушество имело значение в древней экономике."
   ],
   [
    "pastagem",
    "пастбище",
    "O rebanho encontrou uma pastagem.",
    "Стадо нашло пастбище."
   ],
   [
    "provisão",
    "обеспечение необходимым",
    "A provisão de alimento ajudou a comunidade.",
    "Обеспечение пищей помогло общине."
   ],
   [
    "água tranquila",
    "спокойная вода",
    "As ovelhas descansam perto da água tranquila.",
    "Овцы отдыхают у спокойной воды."
   ],
   [
    "renovar as forças",
    "восстанавливать силы",
    "O descanso permite renovar as forças.",
    "Отдых позволяет восстановить силы."
   ],
   [
    "refrigério",
    "отрада, освежение",
    "A sombra trouxe refrigério aos viajantes.",
    "Тень принесла путникам прохладу."
   ],
   [
    "viajante",
    "путник",
    "O viajante recebeu ajuda no caminho.",
    "Путник получил помощь в дороге."
   ],
   [
    "ameaçador",
    "угрожающий",
    "O céu parecia ameaçador antes da tempestade.",
    "Небо выглядело угрожающе перед бурей."
   ],
   [
    "bordão",
    "посох",
    "O pastor caminhava com um bordão.",
    "Пастух шёл с посохом."
   ],
   [
    "recepção generosa",
    "щедрый приём",
    "Os hóspedes agradeceram pela recepção generosa.",
    "Гости поблагодарили за щедрый приём."
   ],
   [
    "diante de",
    "перед лицом",
    "Ela manteve a serenidade diante de uma dificuldade.",
    "Она сохранила спокойствие перед лицом трудности."
   ],
   [
    "cálice",
    "чаша",
    "O museu conserva um cálice antigo.",
    "В музее хранится старинная чаша."
   ],
   [
    "bondade divina",
    "Божья благость",
    "O poema expressa confiança na bondade divina.",
    "Псалом выражает доверие Божьей благости."
   ],
   [
    "beneficência",
    "благодеяние",
    "A beneficência pode atender necessidades concretas.",
    "Благотворительность может удовлетворять конкретные нужды."
   ],
   [
    "proximidade",
    "близость",
    "O diálogo favorece a proximidade entre as pessoas.",
    "Диалог способствует сближению людей."
   ],
   [
    "habitar",
    "обитать",
    "Na narrativa, a família passou a habitar naquela região.",
    "В повествовании семья стала жить в том краю."
   ]
  ]
 ],
 [
  "johnprologue",
  "faith",
  "Иоанн 1: Слово и творение",
  "João 1: Palavra e criação",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "prólogo",
    "пролог",
    "O prólogo introduz os temas do livro.",
    "Пролог знакомит с темами книги."
   ],
   [
    "anterior à criação",
    "предшествующий творению",
    "O estudo discute a existência anterior à criação.",
    "В разборе обсуждается существование до творения."
   ],
   [
    "natureza divina",
    "божественная природа",
    "O tema da natureza divina aparece na discussão teológica.",
    "Тема божественной природы возникает в богословском обсуждении."
   ],
   [
    "reforçar",
    "подчёркивать, усиливать",
    "A repetição pode reforçar uma ideia.",
    "Повторение может усилить мысль."
   ],
   [
    "existência",
    "существование",
    "A passagem levanta uma questão sobre a existência.",
    "Отрывок поднимает вопрос о существовании."
   ],
   [
    "desde o começo",
    "с самого начала",
    "Ela acompanhou o estudo desde o começo.",
    "Она следила за занятием с самого начала."
   ],
   [
    "junto de",
    "рядом с",
    "A criança ficou junto de sua família.",
    "Ребёнок остался рядом со своей семьёй."
   ],
   [
    "criação",
    "творение",
    "O capítulo aborda o tema da criação.",
    "В главе рассматривается тема творения."
   ],
   [
    "por intermédio de",
    "посредством",
    "Recebemos a notícia por intermédio de um amigo.",
    "Мы получили новость через друга."
   ],
   [
    "realizar",
    "осуществлять",
    "A equipe pretende realizar uma atividade de leitura.",
    "Команда намерена провести занятие по чтению."
   ],
   [
    "humanidade",
    "человечество",
    "O texto aborda questões importantes para a humanidade.",
    "Текст затрагивает важные для человечества вопросы."
   ],
   [
    "tornar-se",
    "становиться",
    "Ela deseja tornar-se uma boa tradutora.",
    "Она хочет стать хорошей переводчицей."
   ],
   [
    "em meio a",
    "среди",
    "Encontramos silêncio em meio a tantas atividades.",
    "Мы нашли тишину среди множества занятий."
   ],
   [
    "dominar",
    "властвовать, одолевать",
    "É preciso tempo para dominar uma língua.",
    "Нужно время, чтобы овладеть языком."
   ],
   [
    "amotinar-se",
    "бунтовать",
    "Na narrativa, parte da população começa a amotinar-se.",
    "В повествовании часть населения начинает бунтовать."
   ]
  ]
 ],
 [
  "psalmstwo",
  "faith",
  "Псалом 2: власть и наставление",
  "Salmo 2: autoridade e instrução",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "agitação",
    "волнение, смятение",
    "A notícia causou agitação na cidade.",
    "Новость вызвала волнение в городе."
   ],
   [
    "inutilidade",
    "бесполезность, тщетность",
    "O texto destaca a inutilidade do orgulho.",
    "Текст подчёркивает тщетность гордыни."
   ],
   [
    "imaginar",
    "воображать, замышлять",
    "É possível imaginar uma resposta diferente.",
    "Можно представить другой ответ."
   ],
   [
    "governante",
    "правитель",
    "O governante recebeu os representantes do povo.",
    "Правитель принял представителей народа."
   ],
   [
    "conspirar",
    "замышлять, вступать в заговор",
    "Os personagens tentam conspirar contra o rei.",
    "Персонажи пытаются устроить заговор против царя."
   ],
   [
    "ungido",
    "помазанник, помазанный",
    "A palavra ungido tem importância na linguagem bíblica.",
    "Слово «помазанник» важно в библейской речи."
   ],
   [
    "unir-se",
    "объединяться",
    "Os vizinhos decidiram unir-se para ajudar.",
    "Соседи решили объединиться ради помощи."
   ],
   [
    "romper",
    "разрывать",
    "A injustiça pode romper laços de confiança.",
    "Несправедливость может разрушить узы доверия."
   ],
   [
    "ligadura",
    "связь, узы, повязка",
    "Ligadura pode designar uma faixa ou um vínculo.",
    "Ligadura может означать повязку или связь."
   ],
   [
    "submissão",
    "подчинение",
    "O texto discute a submissão à autoridade.",
    "Текст рассматривает подчинение власти."
   ],
   [
    "livrar-se de",
    "избавляться от",
    "Ela deseja livrar-se de um hábito prejudicial.",
    "Она хочет избавиться от вредной привычки."
   ],
   [
    "zombar",
    "насмехаться",
    "Não é respeitoso zombar de alguém.",
    "Насмехаться над человеком неуважительно."
   ],
   [
    "arrogância",
    "высокомерие",
    "A arrogância dificulta o diálogo.",
    "Высокомерие затрудняет диалог."
   ],
   [
    "soberania",
    "верховная власть, суверенитет",
    "O poema reflete sobre a soberania divina.",
    "Псалом размышляет о Божьей верховной власти."
   ],
   [
    "ira",
    "гнев",
    "A palavra ira expressa indignação intensa.",
    "Слово ira выражает сильное негодование."
   ],
   [
    "turbar",
    "тревожить, смущать",
    "Uma notícia inesperada pode turbar a tranquilidade.",
    "Неожиданная новость может нарушить спокойствие."
   ],
   [
    "advertência",
    "предупреждение",
    "A advertência foi recebida com atenção.",
    "Предупреждение было воспринято внимательно."
   ],
   [
    "abalar",
    "поколебать",
    "A dificuldade não precisa abalar a esperança.",
    "Трудность не обязательно должна поколебать надежду."
   ],
   [
    "Sião",
    "Сион",
    "Sião ocupa lugar central na poesia bíblica.",
    "Сион занимает важное место в библейской поэзии."
   ],
   [
    "legitimidade",
    "законность, правомерность",
    "O texto discute a legitimidade da autoridade.",
    "Текст обсуждает законность власти."
   ],
   [
    "estabelecer",
    "устанавливать",
    "A comunidade decidiu estabelecer novas regras.",
    "Община решила установить новые правила."
   ],
   [
    "decreto",
    "указ, постановление",
    "O decreto foi anunciado ao povo.",
    "Указ был объявлен народу."
   ],
   [
    "filiação",
    "сыновство, принадлежность",
    "A filiação é um tema importante na passagem.",
    "Сыновство — важная тема отрывка."
   ],
   [
    "gerar",
    "порождать, рождать",
    "Uma palavra de apoio pode gerar esperança.",
    "Слово поддержки может породить надежду."
   ],
   [
    "proclamar",
    "провозглашать",
    "O mensageiro veio proclamar uma notícia.",
    "Вестник пришёл провозгласить новость."
   ],
   [
    "possessão",
    "владение",
    "O documento menciona a possessão de terras.",
    "Документ упоминает владение землями."
   ],
   [
    "confins",
    "пределы, отдалённые края",
    "A expressão confins da terra indica grande distância.",
    "Выражение «пределы земли» обозначает большую отдалённость."
   ],
   [
    "para além de",
    "за пределами",
    "O projeto vai para além de uma única cidade.",
    "Проект выходит за пределы одного города."
   ],
   [
    "fragilidade",
    "хрупкость",
    "O artesão explicou a fragilidade da cerâmica.",
    "Мастер объяснил хрупкость керамики."
   ],
   [
    "instruir",
    "наставлять, обучать",
    "A professora procura instruir com clareza.",
    "Учительница старается объяснять понятно."
   ],
   [
    "rever",
    "пересматривать",
    "É importante rever uma decisão quando surgem novos fatos.",
    "Важно пересмотреть решение при появлении новых фактов."
   ],
   [
    "reverência",
    "благоговение, почтение",
    "A reverência pode ser expressa com respeito.",
    "Благоговение можно выразить уважением."
   ],
   [
    "temor reverente",
    "благоговейный страх",
    "O estudo distingue temor reverente de pânico.",
    "Разбор отличает благоговейный страх от паники."
   ],
   [
    "regozijar-se",
    "радоваться, ликовать",
    "A família pôde regozijar-se com a boa notícia.",
    "Семья смогла порадоваться доброй вести."
   ],
   [
    "refugiar-se",
    "находить убежище",
    "Durante a tempestade, os viajantes procuraram refugiar-se.",
    "Во время бури путники искали убежище."
   ],
   [
    "perecer",
    "погибать",
    "Sem água suficiente, a planta pode perecer.",
    "Без достаточного количества воды растение может погибнуть."
   ]
  ]
 ],
 [
  "psalmsthree",
  "faith",
  "Псалом 3: доверие и помощь",
  "Salmo 3: confiança e auxílio",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "multiplicar-se",
    "умножаться",
    "As dúvidas podem multiplicar-se sem explicações claras.",
    "Без ясных объяснений сомнения могут множиться."
   ],
   [
    "levantar-se contra",
    "восставать против",
    "O relato descreve pessoas que decidiram levantar-se contra a autoridade.",
    "Повествование описывает людей, решивших восстать против власти."
   ],
   [
    "exaltar",
    "возвышать, прославлять",
    "O cântico busca exaltar a bondade de Deus.",
    "Песнь стремится прославить Божью благость."
   ],
   [
    "monte santo",
    "святая гора",
    "A expressão monte santo remete a um lugar sagrado.",
    "Выражение «святая гора» отсылает к священному месту."
   ],
   [
    "deitar-se",
    "ложиться",
    "Ela costuma deitar-se cedo.",
    "Она обычно ложится рано."
   ],
   [
    "sustentar",
    "поддерживать, содержать",
    "A amizade pode sustentar uma pessoa em momentos difíceis.",
    "Дружба может поддерживать человека в трудные моменты."
   ],
   [
    "temer",
    "бояться",
    "Não devemos temer fazer uma pergunta respeitosa.",
    "Не нужно бояться задать уважительный вопрос."
   ],
   [
    "cercar",
    "окружать",
    "As montanhas cercam a aldeia.",
    "Горы окружают деревню."
   ],
   [
    "socorrer",
    "помогать, приходить на помощь",
    "Os voluntários procuram socorrer quem precisa.",
    "Волонтёры стараются помогать нуждающимся."
   ],
   [
    "coletivo",
    "коллективный, общий",
    "O bem coletivo exige responsabilidade.",
    "Общее благо требует ответственности."
   ],
   [
    "enviado",
    "посланник, посланный",
    "O enviado trouxe uma mensagem à comunidade.",
    "Посланник принёс весть общине."
   ]
  ]
 ],
 [
  "johntestimony",
  "faith",
  "Иоанн 1: свидетельство и благодать",
  "João 1: testemunho e graça",
  "Повторяй эти слова вместе: они относятся к одной теме.",
  "Revise estas palavras juntas: pertencem ao mesmo tema.",
  [
   [
    "mensageiro",
    "вестник",
    "O mensageiro chegou à cidade.",
    "Вестник прибыл в город."
   ],
   [
    "testificar",
    "свидетельствовать",
    "Uma testemunha pode testificar sobre o que observou.",
    "Свидетель может рассказать о том, что наблюдал."
   ],
   [
    "apontar para",
    "указывать на",
    "O professor pode apontar para uma palavra no quadro.",
    "Учитель может указать на слово на доске."
   ],
   [
    "ocupar o lugar de",
    "занимать место кого-либо",
    "Um resumo não deve ocupar o lugar de uma leitura completa.",
    "Пересказ не должен заменять полное чтение."
   ],
   [
    "iluminar",
    "освещать, просвещать",
    "A janela permite iluminar a sala.",
    "Окно позволяет осветить комнату."
   ],
   [
    "alcance universal",
    "всеобщий охват",
    "O estudo discute o alcance universal da imagem.",
    "Разбор обсуждает всеобщий охват образа."
   ],
   [
    "vinda",
    "приход, пришествие",
    "A narrativa anuncia a vinda de um mensageiro.",
    "Повествование возвещает приход вестника."
   ],
   [
    "depender de",
    "зависеть от",
    "O resultado pode depender de vários fatores.",
    "Результат может зависеть от нескольких факторов."
   ],
   [
    "tensão narrativa",
    "напряжение в повествовании",
    "A tensão narrativa aumenta ao longo do capítulo.",
    "Напряжение в повествовании нарастает на протяжении главы."
   ],
   [
    "recusa",
    "отказ",
    "A recusa foi comunicada com respeito.",
    "Об отказе сообщили уважительно."
   ],
   [
    "pertencer",
    "принадлежать",
    "Cada livro pode pertencer a uma coleção.",
    "Каждая книга может принадлежать коллекции."
   ],
   [
    "filho de Deus",
    "дитя Божье, сын Божий",
    "A expressão filho de Deus tem usos distintos conforme o contexto.",
    "Выражение «сын Божий» имеет разные употребления в зависимости от контекста."
   ],
   [
    "crer em",
    "верить в",
    "Ela aprendeu a usar a expressão crer em Deus.",
    "Она научилась употреблять выражение «верить в Бога»."
   ],
   [
    "ascendência",
    "происхождение, родословная",
    "O documento informa a ascendência da família.",
    "Документ сообщает о происхождении семьи."
   ],
   [
    "nascimento espiritual",
    "духовное рождение",
    "O nascimento espiritual é discutido no Evangelho.",
    "В Евангелии обсуждается духовное рождение."
   ],
   [
    "vontade humana",
    "человеческая воля",
    "O texto distingue vontade humana e iniciativa divina.",
    "Текст различает человеческую волю и Божью инициативу."
   ],
   [
    "encarnação",
    "воплощение",
    "A encarnação é um tema da teologia cristã.",
    "Воплощение — тема христианского богословия."
   ],
   [
    "unigênito",
    "единородный",
    "Unigênito aparece em contextos bíblicos e teológicos.",
    "Unigênito встречается в библейском и богословском контексте."
   ],
   [
    "plenitude",
    "полнота",
    "O estudo analisa o sentido de plenitude.",
    "Разбор анализирует значение полноты."
   ],
   [
    "habitar entre",
    "обитать среди",
    "O povo passou a habitar entre outras comunidades.",
    "Народ стал жить среди других общин."
   ],
   [
    "precedência",
    "первенство, предшествование",
    "O debate distingue precedência temporal e importância.",
    "Обсуждение различает временное первенство и значимость."
   ],
   [
    "apesar de",
    "несмотря на",
    "Apesar da dificuldade, ela continuou estudando.",
    "Несмотря на трудность, она продолжила учиться."
   ],
   [
    "abundância",
    "изобилие",
    "A colheita trouxe abundância de alimentos.",
    "Урожай принёс изобилие продуктов."
   ],
   [
    "dom",
    "дар",
    "A música pode ser considerada um dom.",
    "Музыку можно считать даром."
   ],
   [
    "lei mosaica",
    "Моисеев закон",
    "A lei mosaica é estudada no contexto da Torá.",
    "Моисеев закон изучают в контексте Торы."
   ],
   [
    "por meio de",
    "посредством",
    "Aprendemos por meio de exemplos.",
    "Мы учимся посредством примеров."
   ],
   [
    "seio",
    "лоно, грудь",
    "A palavra seio pode ter sentido figurado de intimidade.",
    "Слово seio может иметь переносное значение близости."
   ],
   [
    "tornar conhecido",
    "делать известным, открывать",
    "O relatório pretende tornar conhecido o resultado.",
    "Отчёт призван сделать результат известным."
   ]
  ]
 ],
 [
  "churchrites",
  "faith",
  "Церковные обряды и посвящение",
  "Ritos e dedicação na igreja",
  "Термины церковной жизни; значение зависит от традиции.",
  "Termos da vida da igreja; o sentido depende da tradição.",
  [
   [
    "batismo",
    "крещение",
    "O pastor explica o significado do batismo.",
    "Пастор объясняет значение крещения."
   ],
   [
    "batismo nas águas",
    "водное крещение",
    "A reunião aborda o batismo nas águas.",
    "На собрании обсуждают водное крещение."
   ],
   [
    "unção",
    "помазание",
    "O texto menciona a unção.",
    "В тексте упоминается помазание."
   ],
   [
    "ungir",
    "помазывать",
    "O pastor explica o verbo ungir.",
    "Пастор объясняет глагол «помазывать»."
   ],
   [
    "jejum",
    "пост",
    "O texto menciona o jejum.",
    "В тексте упоминается пост."
   ],
   [
    "vigília",
    "бдение",
    "A palavra vigília aparece no texto.",
    "В тексте встречается слово «бдение»."
   ],
   [
    "Santa Ceia",
    "Святая Вечеря",
    "O pastor fala sobre a Santa Ceia.",
    "Пастор говорит о Святой Вечере."
   ],
   [
    "dízimo",
    "десятина",
    "O capítulo menciona o dízimo.",
    "В главе упоминается десятина."
   ],
   [
    "oferta",
    "пожертвование",
    "A palavra oferta tem vários sentidos.",
    "У слова oferta несколько значений."
   ],
   [
    "consagração",
    "посвящение",
    "A mensagem fala sobre consagração.",
    "Послание говорит о посвящении."
   ],
   [
    "propósito",
    "цель, намерение",
    "Qual é o propósito desta reunião?",
    "Какова цель этого собрания?"
   ]
  ]
 ]
];
