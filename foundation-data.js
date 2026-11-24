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
    "saber",
    "знать, уметь"
   ],
   [
    "conhecer",
    "быть знакомым, знать"
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
   ]
  ]
 ]
];
