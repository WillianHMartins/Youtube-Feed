'use strict';

const mockSearchResults = [
  {
    id: 'ygluZ0tB8S4',
    title: '2014 Sochi Olympic Opening Ceremony',
    description:
      'Any redistribution of this content without written consent from the IOC is prohibited. Please enjoy. Like me on Facebook! https://www.facebook.com/Super-Catman... Follow me on Twitter! https://twitter.com/supercatmanyt',
    duration: 209.33333333333334,
  },
  {
    id: 'J4YGDFT3ZYk',
    title:
      "Full Men's Singles Short Program - Figure Skating | Sochi 2014 Replays",
    description:
      "Can't wait? Watch it now: https://oly.ch/MSinglesShortProgramSochi2014\n\nRelive the full Men's singles short program in Figure Skating from the 2014 Winter Olympic Games in Sochi that was held at the Iceberg Skating Palace! Javier Fernández from Spain, Yuzuru Hanyu from Japan, and Patrick Chan from Canada all made it to the top 3. Stay tuned to find out the final order of the podium!\n\nSubscribe to the official Olympic channel here & hit the bell! 🔔\r\nhttp://oly.ch/Subscribe\r\n\r\nVisit the Olympic Channel, where the Games never end: http://www.olympicchannel.com",
    duration: 303.0833333333333,
  },
  {
    id: 'iRlCcOdmuHg',
    title:
      'Sochi Opening Ceremony - Spectacular Highlights | Sochi 2014 Winter Olympics',
    description:
      'Extended highlights from the spectacular Opening Ceremony of the Sochi 2014 Winter Olympic Games, featuring amazing displays of music, art, dance and culture.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics',
    duration: 28.05,
  },
  {
    id: 'Ljp4C4Vz8tU',
    title: 'Figure Skating - Ice Dancing - Free Dance | Sochi 2014 Replays',
    description:
      "Can't wait? Watch it now: https://oly.ch/FigureSkatingFreeSochi2014\n\nRelive the full Free Dance competition in Figure Skating from the 2014 Winter Olympics in Sochi. Elena Ilinykh & Nikita Katsalapov from Russia, Meryl Davis & Charlie White from the United States, and Canada's Tessa Virtue & Scott Moir made it to the top 3. But who would win the Gold medal for their country? Stay tuned to find out!\n\nSubscribe to the official Olympic channel here & hit the bell! 🔔\r\nhttp://oly.ch/Subscribe\r\n\r\nVisit the Olympic Channel, where the Games never end: http://www.olympicchannel.com",
    duration: 194.43333333333334,
  },
  {
    id: 'FAv9MJm5ylQ',
    title: 'Closing Ceremony of the Sochi 2014 Winter Olympics | #Sochi365',
    description:
      '23rd of February 2014 the closing ceremony of the Sochi Winter Olympics Games, now available in full as part of the #Sochi365 celebrations on the Olympic YouTube channel.\n\nSubscribe to the official Olympic channel here: http://bit.ly/1dn6AV5\n\nFind more about the Olympic Games at http://www.olympic.org/olympic-games\n\nFollow your favourite athletes on the Olympic Athletes Hub: http://hub.olympic.org/',
    duration: 176.78333333333333,
  },
  {
    id: 'GvK8vaUE6Pg',
    title:
      "Men's Alpine Skiing - Downhill - Matthias Mayer Wins Gold  | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Alpine Skiing Downhill event from the Rosa Khutor Alpine Centre as Austria's Matthias Mayer wins the gold medal at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners:\n\nGold: Matthias Mayer (AUT)\nSilver: Christof Innerhofer (ITA)\nBronze: Kjetil Jansrud (NOR)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 6.083333333333333,
  },
  {
    id: '1Kgs930W4-g',
    title:
      "Full Men's singles free Program - Figure Skating | Sochi 2014 Replays",
    description:
      "Can't wait? Watch it now: oly.ch/FigureSkatingMenSochi2014\n\nRelive the full men's single figure skating competition (free skating) from the 2014 Winter Olympics in Sochi that was held at the Iceberg Skating Palace! Are you wondering who claimed the Gold medal? Find out here!\n\nSubscribe to the official Olympic channel here & hit the bell! 🔔\r\nhttp://oly.ch/Subscribe\r\n\r\nVisit the Olympic Channel, where the Games never end: http://www.olympicchannel.com",
    duration: 233.9,
  },
  {
    id: 'ke0iusvydl8',
    title:
      "Yulia Lipnitskaya's Phenomenal Free Program - Team Figure Skating | Sochi 2014 Winter Olympics",
    description:
      "Relive the amazing free program of Russia's 15 year old Yulia Lipnitskaya from the Team Figure Skating event at the Sochi 2014 Olympic Games as she scores an incredible 141.51\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 8.716666666666667,
  },
  {
    id: 'W8WDgnpvqdo',
    title: "Skeleton - Men's Heats 1 & 2 | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights from the Sanki Sliding Centre of the first two runs of the Men's Skeleton event at the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 3.45,
  },
  {
    id: 'NkR3-eknssI',
    title: "Russian Odyssey - Winter Olympics ' Sochi 2014",
    description:
      "Short movie made for Winter Olympics ' Sochi 2014 Opening Ceremony.\nwww.mrpost.ru\nwww.facebook.com/MainRoadPost\n\nProduction company: Bonanza\nDirector: Dzhanik Fayziev\nDP: Maxim Osadchiy\n\nVisual Effects by Main Road Post\n\n© Copyright 2014 International Olympic Comittee",
    duration: 3.066666666666667,
  },
  {
    id: 'CrVL5tM926s',
    title:
      "Sotnikova's Gold Medal Winning Performance - Ladies Figure Skating | Sochi 2014 Winter Olympics",
    description:
      "Highlights of Adelina Sotnikova's gold medal winning performance in the Free Program of the Ladies Figure Skating competition during the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 8.8,
  },
  {
    id: 'hgXKJvTVW9g',
    title:
      'Yuna Kim\'s Free Skate to "Adios Nonino" at Sochi 2014 Winter Olympics',
    description:
      "Youth Olympic Games Ambassador; Yuna Kim performs a wonderful routine in the Iceberg Skating Palace to claim the silver medal in the Ladies' Figure Skating event at the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 8,
  },
  {
    id: 'tTd6DqAdWoE',
    title: 'Bobsleigh - Four-Man Heats 1 & 2 | Sochi 2014 Winter Olympics',
    description:
      "Daily Report - Highlights of the 1st & 2nd Heats in the Men's Four-Man Bobsleigh event from the Sanki Sliding Centre at the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 5.083333333333333,
  },
  {
    id: 'x9IuBMEcluc',
    title:
      "Ski Jumping - Men's Large Hill - Final - Stoch Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Ski Jumping Large Hill final from the RusSki Gorki Jumping Centre as Poland's Kamil Stoch wins the gold medal at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners:\nGold: Kamil Stoch (POL)\nSilver: Noriaki Kasai (JPN)\nBronze: Peter Prevc (SLO)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.9,
  },
  {
    id: 'Bk6qrBrqAqo',
    title:
      'Yuzuru Hanyu Breaks Olympic Record - Full Short Program | #Sochi365',
    description:
      "13th February 2014 Japan's Yuzuru Hanyu set a new Olympic points record with his Short Program performance in the men's Figure Skating event at the Sochi 2014 Winter Olympic Games. Hanyu's full Short Program performance is now available on the Olympic YouTube channel as part of the #Sochi365 celebrations.\n\nDon't forget to share this video with you friends using #Sochi365\n\nSubscribe to the official Olympic channel here: http://bit.ly/1dn6AV5\n\nFind more about the Olympic Games at http://www.olympic.org/olympic-games\n\nFollow your favourite athletes on the Olympic Athletes Hub: http://hub.olympic.org/",
    duration: 7.05,
  },
  {
    id: '_1N3gol_eN8',
    title: 'Kim Yuna Adelina Sotnikova Sochi 2014 Scandal',
    description:
      'Never forget....\n\n*Small Edit: at 10:55 to about 11:15; The table for ChSq1 did not show up.\n\nChSq1 (Base Value: 2.00)\n_________________________\nAdelina (Sochi) +1.50 GOE\nAdelina (TEB) +1.20 GOE',
    duration: 17.5,
  },
  {
    id: 'MLWwRIEZrC4',
    title:
      "Sage Kotsenburg's Gold Winning Snowboard Slopestyle Run | Sochi 2014 Winter Olympics",
    description:
      "The USA's Sage Kotesenburg performs an incredible run in the final of the men's Snowboard Slopestyle event to win the gold medal at the Sochi 2014 Winter Olympic Games.\n\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 3.0166666666666666,
  },
  {
    id: 'u7jA5YBiSls',
    title:
      "Men's Speed Skating 5000m Full Event - Kramer Sets Olympic Record | #Sochi365",
    description:
      "8th February 2014 the Netherlands' Sven Kramer set a new Olympic record to claim gold in the men's 5000m Speed Skating event. As part of #Sochi365 we now celebrate one year on from the this amazing achievement with full coverage of the event from the Sochi 2014 Winter Olympics now available on the Olympic YouTube channel. \n\nSubscribe to the official Olympic channel here: http://bit.ly/1dn6AV5\n\nFind more about the Olympic Games at http://www.olympic.org/olympic-games\n\nFollow your favourite athletes on the Olympic Athletes Hub: http://hub.olympic.org/",
    duration: 160.3,
  },
  {
    id: 'dG1iLMi0Do0',
    title:
      'All music from Sochi 2014 opening ceremony - Вся музыка с церемонии Сочи 2014',
    description:
      'Almost all music from Sochi 2014 Olympic opening ceremony in order of playing  (i don\'t know 2 or 3 tracks). English and Russian playlist below. Subscribe to get more music!\n\nEnglish playlist:\n\n1. Alexander Porfiryevich Borodin - Fly away on the wings of the wind (from opera Prince Igor) 0:01\n2. Alexander Porfiryevich Borodin - Glory to the beautiful Sun (from opera Prince Igor) 2:58 \n3. Alexander Vasilyevich Alexandrov - National Anthem of Russia 6:50\n4. Deák Tamás - Music from "Nu, pogodi!" (Russian animated series) 10:21\n5. Igor Fyodorovich Stravinsky - The Rite of Spring (Part I: L\'Adoration de la Terre (Adoration of the Earth)) 13:22\n6. Igor Fyodorovich Stravinsky - The Rite of Spring (Augurs of Spring) 16:19\n7. Ivan Kupala - Kostroma 20:02\n8. Eugen Doga - Waltz (music from "A Hunting Accident") 23:30\n9. Alfred Schnittke -  Concerto Grosso no.1 26:53\n10. Georgy Vasilyevich Sviridov  -  Time, Forward! 33:59 \n11. Andrey Pavlovich Petrov - Walking the Streets of Moscow 37:29\n12. Arno Babajanian and Leonid Derbenyov - The Best City on Earth (perfroming by Muslim Magomayev) 39:22\n13. Aram Khachaturian - Sabre Dance 41:51\n14. Aleksander Sergeyevich Zatsepin - Music from Operation Y and Shurik\'s Other Adventures 44:12\n15. Vasily Solovyov-Sedoi and poet Mikhail Matusovsky - Moscow Nights 47:07\n16. Lubeh - Guys from our neighborhood 51:32\n17. Eduard Anatolyevich Khil -  I Am Glad, \'Cause I\'m Finally Returning Back Home (aka Trololo) 56:53\n18. Arkady Ostrovsky and Lev OshaninMay - There Always Be Sunshine 59:35\n19. Eduard Nikolaevich Artemyev - music from "Sibiriada" 1:02:37\n20. Pyotr Ilyich Tchaikovsky - music from "Swan Lake" 1:07:07\n21. Eduard Nikolaevich Artemyev - music from "Stalker" 1:10:13\n22. Georgy Vasilyevich Sviridov  -  Waltz (from "The Blizzard") 1:15:33\n\n\nRussian playlist:\n\n1. Алекса́ндр Порфи́рьевич Бороди́н - Улетай на крыльях ветра (из оперы Князь Игорь) 0:01\n2. Алекса́ндр Порфи́рьевич Бороди́н - Солнцу красному слава (из оперы Князь Игорь) 2:58\n3. Алекса́ндр Васи́льевич Алекса́ндров - Госуда́рственный гимн Росси́йской Федера́ци 6:50\n4. Тамаш Деак - Музыка из м/ф "Ну Погоди" (Remix) 10:21\n5. И́горь Фёдорович Страви́нский - Весна священная (Часть I. Поцелуй земли) 13:22\n6. И́горь Фёдорович Страви́нский - Весна священная (Весенние гадания. Пляски щеголих) 16:19\n7. Иван Купала - Кострома 20:02\n8. Евге́ний Дми́триевич До́га - «Вальс» (к/ф «Мой ласковый и нежный зверь») 23:30\n9. Альфре́д Га́рриевич Шни́тке - Concerto Grosso no.1 1 26:53\n10. Гео́ргий Васи́льевич Свири́дов - Время вперед 33:59\n11. Андре́й Па́влович Петро́в - Я шагаю по Москве (поет Н.С. Михалков) 37:29\n12. Л. Дербенев, А. Бабаджанян - Лучший город Земли (поет Муслим Магомаев) 39:22\n13. Ара́м Ильи́ч Хачатуря́н - Танец с саблями (Гаяне) 41:51\n14. Алекса́ндр Серге́евич Заце́пин - из к/ф "Операция «Ы» и другие приключения Шурика" 44:12\n15. Василий Соловьёв-Седой и Михаил Матусовский - Подмосковные вечера (поет Влади́мир Константи́нович Тр́ошин).47:07\n16. Любэ - Ребята с нашего двора 51:32\n17. Эдуа́рд Анато́льевич Хиль - Я очень рад, ведь я, наконец, возвращаюсь домой (aka Trololo) 56:53\n18. Аркадий Островский и Лев Ошанин - Пусть всегда будет солнце 59:35\n19. Эдуард Артемьев - Поход (из х/ф Сибириада) 1:02:37\n20. Пётр Ильи́ч Чайко́вский - из оперы Лебединое озеро 1:07:07\n21. Эдуард Артемьев - Медитация (из х/ф Сталкер) 1:10:13\n22. Гео́ргий Васи́льевич Свири́дов - Вальс (из х/ф Метель) 1:15:33\n\n\nВся музыка исключительно для ознакомления!',
    duration: 79.46666666666667,
  },
  {
    id: 'BwtyYN-k-I8',
    title: 'Vancouver Hands Over To Sochi - Winter Olympics Presentation',
    description:
      'Highlights from the Closing Ceremony of the Vancouver 2010 Winter Olympic Games as the presentation is made for the Sochi 2014 Olympic Games.\n\n\nhttp://www.olympic.org/sochi-2014-winter-olympics\nhttp://www.olympic.org/vancouver-2010-winter-olympics',
    duration: 9.416666666666666,
  },
  {
    id: 'sD5VvdaC1W8',
    title:
      'Sochi 2014   Programa por parejas Tatiana Volosozhar y Maxim Trankov, Sochi 2014   RTVEes A la Carta',
    description: '',
    duration: 4.983333333333333,
  },
  {
    id: 'NU-KfPZOUsk',
    title:
      'Ksenia Stolbova & Fedor Klimov Win Silver With Free Program | Sochi 2014 Winter Olympics',
    description:
      "Russia's Ksenia Stolbova and Fedor Klimov perform to The Addams Family as their amazing performance wins the silver medal in the Pairs' Figure Skating event at the Sochi 2014 Winter Olympic Games\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 8.483333333333333,
  },
  {
    id: 'VXQUdcIXzNE',
    title: "Men's Giant Slalom - Ligety Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights from the Rosa Khutor Alpine Centre as Ted Ligety wins Gold in the Men's Giant Slalom at the Sochi 2014 Olympic Games. \n \nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 6.716666666666667,
  },
  {
    id: 'Kf-0ct53q0w',
    title:
      "Yuzuru Hanyu wins Gold in the Men's Free Skating - Full Event | #Sochi365",
    description:
      "14th of February 2014 Japan's Yuzuru Hanyu electrifies spectators and judges in the Men's Free Skating event to take home the gold medal. As part of our #Sochi365 content celebrating one year on from the Winter Games the full event is now available on the Olympic YouTube channel.\n\nSubscribe to the official Olympic channel here: http://bit.ly/1dn6AV5\n\nFind more about the Olympic Games at http://www.olympic.org/olympic-games\n\nFollow your favourite athletes on the Olympic Athletes Hub: http://hub.olympic.org/",
    duration: 41.61666666666667,
  },
  {
    id: 'lrFwokp3z48',
    title:
      'Meryl Davis & Charlie White Full Free Dance Performance Wins Gold | Sochi 2014 Winter Olympics',
    description:
      "Relive the Free Dance that secured the gold medals for the USA's Meryl Davis and Charlier White in the Ice Dancing event at the Sochi 2014 Winter Olympic Games - Full performance.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 8.283333333333333,
  },
  {
    id: '4Zb0zF20q_s',
    title:
      "Men's Snowboard Halfpipe - Podladtchikov Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Snowboard Halfpipe semi-final and final as Iouri Podladtchikov wins Gold from the Rosa Khutor Extreme Park at the Sochi 2014 Winter Olympic Games.\n\nMedals\nGold - Iouri Podladtchikov\nSilver - Ayumu Hirano\nBronze - Taku Hiraoka\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.566666666666666,
  },
  {
    id: 'bN7l1ztW-wI',
    title:
      "Men's Biathlon 10km Sprint - Bjoerndalen Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Biathlon 10km Sprint from the Laura Cross-Country Ski Stadium as Norway's Ole Einar Bjoerndalen wins the gold medal at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners\n\nGold: Ole Einar Bjoerndalen (NOR)\nSilver: Dominik Landertinger (AUT)\nBronze: Jaroslav Soukup (CZE)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 3.2333333333333334,
  },
  {
    id: '4b9Ji7DvsjU',
    title: 'Winter Olympics 2014: Trailer - BBC Sport',
    description:
      "Subscribe and 🔔 to OFFICIAL BBC YouTube 👉 https://bit.ly/2IXqEIn\nStream original BBC programmes FIRST on BBC iPlayer 👉 https://bbc.in/2J18jYJ\n\nhttp://www.bbc.co.uk/winterolympics The 2014 Winter Olympic Games takes place in Sochi, Russia from 7th-23rd February 2014.  \n\nLive across the BBC on BBC Two, Radio 5 live and online.\n\n#bbc\nAll our TV channels and S4C are available to watch live through BBC iPlayer, although some programmes may not be available to stream online due to rights. If you would like to read more on what types of programmes are available to watch live, check the 'Are all programmes that are broadcast available on BBC iPlayer?' FAQ 👉 https://bbc.in/2m8ks6v.",
    duration: 1.5166666666666666,
  },
  {
    id: 'BeMoig-AJzk',
    title:
      'Evgeny Plyushchenko Wows His Home Crowd - Figure Skating Team Event | Sochi 2014 Winter Olympics',
    description:
      "Skating to 'The Best Of Plyushchenko' Evgeny Plyushchenko puts on a spectacular performance for his home crowd in the Figure Skating Team event at the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 8.6,
  },
  {
    id: 'm8Pt8j9mbqU',
    title:
      "Short Track Speed Skating - Ladies' 3000m Relay - Korea Win Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Ladies' Short Track Speed Skating 3000m Realy from the Iceberg Skating Palace as Korea win the gold medal at the Sochi 2014 Winter Olympic Games. \n\nMedals\nGold -  Korea\nSilver - Canada\nBronze - Italy\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 2.6,
  },
  {
    id: '5F_vCOy0ZTA',
    title: 'Figure Skating Gala Exhibition Sochi 2014 All Performers',
    description: 'Figure Skating Gala Exhibition Sochi 2014 All Performers',
    duration: 11.05,
  },
  {
    id: 'l8yboFRTQvw',
    title:
      "Men's Ski Jumping - Normal Hill Final -  Stoch Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Ski Jumping Normal Hill Final from the RusSki Gorki Jumping Centre as Poland's Kamil Stoch wins the gold medal at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners:\n\nGold: Kamil Stoch (POL)\nSilver: Peter Prevc (SLO)\nBronze: Anders Bardal (NOR)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 5.1,
  },
  {
    id: 'bQoJqDi8490',
    title:
      'P&G \'Thank You Mom\' Campaign Ad: "#BecauseOfMom" (Sochi 2014 Olympic Games)',
    description:
      'This 2014 version of P&G\'s "Thank you Mom" campaign features supportive mothers helping their children learn to walk, skate, and ski on their way to becoming successful Olympic athletes.\nScript: "For teaching us that falling only makes us stronger. Thank you, Mom." [Tide logo] [Pampers logo] [Gillette logo] [Duracell logo] [Bounty logo]  [P&G logo]  "P&G: Proud sponsor of Moms." #BecauseOfMom',
    duration: 2.283333333333333,
  },
  {
    id: 'yscAKatTJDs',
    title:
      'Mao Asada skates to Sergei Rachmaninoff in Sochi 2014 | Music Monday',
    description:
      'Japan\'s World Champion and Olympic silver medal winner Mao Asada performs to Sergei Rachmaninoff\'s "Piano Concerto No.2" at the 2014 Olympic Winter Games in Sochi.\n\nWhat was your favorite Olympic performance to music? Let us know in the comments and we will add them to a future #MusicMonday!\n\nSubscribe to the official Olympic channel here & hit the bell! 🔔: http://bit.ly/SubscribeOlympic\n\nVisit the Olympic Channel, where the Games never end: http://www.olympicchannel.com',
    duration: 6.116666666666666,
  },
  {
    id: 'qnXfkZln-Gk',
    title:
      "Figure Skating - Ladies' Short Program | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights from the Figure Skating Ladies' Short Program event in the Iceberg Skating Palace the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.416666666666667,
  },
  {
    id: 'R_MBOeqSYVk',
    title: 'Why the Sochi Olympics are the Most Expensive in History',
    description:
      "Like VICE News? Subscribe to our news channel: http://bit.ly/Subscribe-to-VICE-News\n\nCheck out more of VICE News here: http://bit.ly/PILfBe\n\nThe Olympics are as much about money as they are about sports. Between broadcasting rights, merchandising, sponsorships and construction of the Olympic venues themselves, there's a lot of money to be made. In the case of Russia's Winter Olympics in Sochi, there's more money to be made than ever before, especially if you're a friend of President Putin.\n\nThe 2014 Winter Games have cost Russia about $50 billion, making them the most expensive in history. Corruption watchdogs say it's ordinary Russians who will end up footing the bill for this excess, not private investors as Putin has suggested.\n\nWe went to Sochi to investigate the claims of corruption and kickbacks, tour some of the most expensive Olympic venues ever built, and talk to Sochi residents who have been pushed aside to make room for Putin's man-made mountains of money.\n\nTo keep up with Simon's coverage of the Olympics on VICE News through February, follow him on Twitter: @simonostrovsky - https://twitter.com/SimonOstrovsky\n\nSubscribe to VICE News here: http://bit.ly/Subscribe-to-VICE-News\n\nhttp://vicenews.com\n\nFollow VICE News here\nFacebook: https://www.facebook.com/vicenews\nTwitter: https://twitter.com/vicenews\nTumblr: http://vicenews.tumblr.com/",
    duration: 17.2,
  },
  {
    id: '8Thj7yqPSOE',
    title:
      "Men's Moguls - Finals - Bilodeau Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Moguls Finals from the Rosa Khutor Extreme Park as Canada's Alex Bilodeau wins the gold medal at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners:\n\nGold: Alex Bilodeau (CAN)\nSilver: Mikael Kingsbury (CAN)\nBronze: Alexandr Smyshlyaev (RUS)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 5.116666666666666,
  },
  {
    id: 'zNGs5Ep7Xas',
    title:
      'How Russians really feel about their Soviet past and Communism (Sochi 2014)',
    description: 'https://www.youtube.com/watch?v=bKhuvril8Rs',
    duration: 13.983333333333333,
  },
  {
    id: '7tlBnEgAomE',
    title: 'Sochi 2014 Biatlon sprint muži 10km',
    description: 'Další video z biatlonového Nagana ;).',
    duration: 93.18333333333334,
  },
  {
    id: '8xhjLVNaKa0',
    title:
      "Curling - Men's Gold Medal Game - Canada v Great Britain | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Curling gold medal game as Canada beat Great Britain to win the gold medal at the Sochi 2014 Olympic Games. \n\nMedal Winners:\nGold: Canada\nSilver: Great Britain\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.1,
  },
  {
    id: 'PBnjfnqxmMk',
    title:
      "Alpine Skiing - Men's Super Combined - Downhill | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of Downhill event of the Men's Super Combined  from the Rosa Khutor Alpine Centre at the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.083333333333333,
  },
  {
    id: 'AqMw1EVqR9A',
    title:
      "Ice Hockey - Sweden 0 - 3 Canada - Men's Full Gold Medal Match | Sochi 2014 Winter Olympics",
    description:
      "Full coverage of the final of the Men's Ice Hockey tournament as Sweden take on Canada in the gold medal match at the Sochi 2014 Winter Olympic Games.\n\nFinal Score: Sweden 0 v 3 Canada\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 101.46666666666667,
  },
  {
    id: 'kaSH9HqzXwk',
    title: 'Adelina Sotnikova FS Sochi 2014 HD Skater REACTIONS',
    description: "Adelina's program cures insomnia",
    duration: 5.65,
  },
  {
    id: 'sgf1aby6qTQ',
    title: "Sochi 2014 Men's medal ceremony: Hanyu, Chan, Ten 00725",
    description: 'video by AnnaFedorovna',
    duration: 10.2,
  },
  {
    id: 'KIyaZirHLOA',
    title: 'Epic Cyrillic / Russian Alphabet / Русская азбука',
    description:
      'Cyrillic alphabet was developed in the First Bulgarian Empire to write the Old Church Slavonic language. The modern Cyrillic script is still used primarily for Slavic languages like Russian.\n\nPart of the Winter Olympics Opening Ceremony 2014 in Sochi. Official Olympic Games Copyrights!\n\nSubscribe to the Olympic YouTube channel: https://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics',
    duration: 4.15,
  },
  {
    id: 'YMx5ufFH558',
    title:
      "Ladies' Speed Skating - 500m - Lee Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Ladies' Speed Skating 500m from the Adler Arena as Korea's Lee Sang Hwa wins the gold medal at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners\n\nGold: Lee Sang Hwa (KOR)\nSilver: Olga Fatkulina (RUS)\nBronze: Margot Boer (NED)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.733333333333333,
  },
  {
    id: 'KK77jDwfd1M',
    title:
      'Bobsleigh - Four-Man Heats 3 & 4 - Russia Win Gold | Sochi 2014 Winter Olympics',
    description:
      "Daily Report - Highlights of the 3rd & 4th Heats in the Men's Four-Man Bobsleigh event from the Sanki Sliding Centre at the Sochi 2014 Winter Olympic Games.\n\nMedals\nGold -  Russia\nSilver - Latvia\nBronze - USA\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.733333333333333,
  },
  {
    id: 'qiXX6MPoGho',
    title:
      "Ladies' Figure Skating - Short Program Qualification | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Short Program Qualification in the Ladies' Figure Skating event from the Iceberg Skating Palace at the Sochi 2014 Winter Olympic Games.\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 3.6333333333333333,
  },
  {
    id: 'JuMqhKMHEaY',
    title:
      "Ice Hockey - Men's Semi-Final - USA v Canada | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights from the Bolshoy Ice Dome of the Men's Ice Hockey Semi-Final between the USA and Canada at the Sochi 2014 Olympic Games. \n \nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 3.066666666666667,
  },
  {
    id: 'pYfK9bdB2uo',
    title:
      "Freestyle Skiing - Men's Ski Slopestyle - Joss Christensen Wins Gold | Sochi 2014 Winter Olympics",
    description:
      "Daily Report - Highlights of the Men's Ski Slopestyle Final from the Rosa Khutor Extreme Park where Joss Christensen, Gus Kenworthy and Nicholas Goepper win the medals for the USA at the Sochi 2014 Winter Olympic Games.\n\nMedal Winners \nGold - Joss Christensen (USA)\nSilver -  Gus Kenworthy (USA)\nBronze - Nicholas Goepper  (USA)\n\nSubscribe to the Olympic YouTube channel: http://www.youtube.com/user/olympic?sub_confirmation=1\n\nDiscover more about Sochi 2014: http://www.olympic.org/sochi-2014-winter-olympics",
    duration: 4.1,
  },
  {
    id: 'Nx_0NRU1mIU',
    title: 'GREFG VS EL MEJOR JUGADOR DE MANDO DE FORTNITE - TheGrefg',
    description:
      'Mejor jugador de Mando de España https://www.youtube.com/channel/UC8tjND0LE7QwVbFs_X8Hy5w\nMejor jugador de Mando de Fortnite https://www.youtube.com/channel/UCsoppxd-dvakcMiDXI6NSzg\n🔴 ¡Sígueme para ver mis Directos! https://www.twitch.tv/thegrefg\n★ ¡Mi Libro! https://www.planetadelibros.com/libro-los-secretos-de-youtube/279938\n➜ ¡Mi Mando Oficial! https://xcontrollers.es/\n➜ ¡Mi Silla! https://xchairsco.com/\n➜ ¡Mis Cascos! https://astro.family/Grefg\n● ¡Último vídeo de Heretics! https://youtu.be/ai-fT0zZIaM\n\n► ¡Sígueme!\n• Miembro del canal https://youtube.com/thegrefg/join\n• Suscríbete al Canal! https://goo.gl/alqmWP\n• Twitter! https://twitter.com/TheGrefg\n• Instagram! https://instagram.com/grefg_official/\n• Facebook! https://www.facebook.com/TheGrefg\n\n► Team Heretics\n• YouTube https://www.youtube.com/teamheretics\n• Twitter https://twitter.com/TeamHeretics\n• Instagram https://www.instagram.com/teamheretics/?hl=es\n• Discord https://discord.gg/teamheretics\n• Gfuel 10% dto. Código HERETICS https://gfuel.com/teamheretics\n\n★ Gracias por la Miniatura!! Miguez https://goo.gl/WrEwDT\n\n---\nVídeo creado y subido por TheGrefg.',
    duration: 14.7,
  },
  {
    id: 'NcOyHUDrtUg',
    title:
      'Kim Kardashian Faces Her Biggest Fear...Tarantulas! | KUWTK Telenovelas | E!',
    description:
      'When Kourtney\'s backyard has tarantulas creeping around, Kim & Larsa Pippen are the ones who must face their fears on "KUWTK"!\n\n#KUWTK #KeepingUpWithTheKardashians #EEntertainment #KimKardashian #KhloéKardashian #KourtneyKardashian #KylieJenner #KendallJenner #KrisJenner #LarsaPippen\n\nSUBSCRIBE: http://www.youtube.com/kuwtk\n\nAbout Keeping Up With the Kardashians:\n"Keeping Up with the Kardashians” takes viewers beyond the headlines and into the stories that dominate the news cycle and E! is the only destination to get the real story. Keep Up with the Kardashian-Jenner fam as they build business empires, face personal challenges, and share ups and downs together. Through all the epic moments, one thing remains the same… family always comes first. The Kardashian-Jenner clan continue to overcome it all through their unwavering love and commitment to each other.\n\nKeeping Up With the Kardashians Returns this September\n\nConnect with the Kardashians:\nVisit the KUWTK WEBSITE: http://bit.ly/KUWTKweb\nLike KUWTK on FACEBOOK: http://bit.ly/KUWTKfb \nFollow KUWTK on TWITTER: http://bit.ly/KUWTKtwtr \n\nAbout E! Entertainment:\nE! is on the Pulse of Pop Culture, bringing fans the very best original content including reality series, topical programming, exclusive specials, breaking entertainment news, and more. Passionate viewers can’t get enough of our Pop Culture hits including ""Keeping Up with the Kardashians,"" ""Total Divas,” and “Very Cavallari.” And with new original programming on the way, fans have even more to love.\n\nDownload The E! News App For The Latest Celebrity News and Trending Videos: https://eonline.onelink.me/yMtl/4ead5017\n\nWatch Full Episodes: https://e.app.link/zqpv3aRRu3\n\nConnect with E! Entertainment:\nVisit the E! WEBSITE: http://eonli.ne/1iX6d8n\nLike E! on FACEBOOK: http://on.fb.me/1fzeamg\nCheck out E! on INSTAGRAM: http://bit.ly/EInsta\nFollow E! on TWITTER: http://bit.ly/EEntTwitter\n\nKim Kardashian Faces Her Biggest Fear...Tarantulas! | KUWTK Telenovelas | E!\nhttp://www.youtube.com/kuwtk',
    duration: 4.716666666666667,
  },
  {
    id: '4oI8haxRuPo',
    title: 'Kane Brown - Worldwide Beautiful (Lyric Video)',
    description:
      "Benefitting the Boys and Girls Club of America to advocate for justice and equality for the millions of youth that are counting on us. For more info and to learn how you can support, click here: http://BGCA.org/KaneBrown\n\nKane Brown “Worldwide Beautiful” is available now.\n\nApple Music: https://KB.lnk.to/wwbAY/applemusic\niTunes: https://KB.lnk.to/wwbAY/itunes\nSpotify: https://KB.lnk.to/wwbAY/spotify\nAmazon Music: https://KB.lnk.to/wwbAY/amazonmusic\nPandora: https://KB.lnk.to/wwbAY/pandora\nYouTube Music: https://KB.lnk.to/wwbAY/youtubemusic\n\nSubscribe to Kane Brown's YouTube channel: http://smarturl.it/kbyoutubesubscribe\n\nFollow Kane Brown:\nNewsletter: https://smarturl.it/kbemailsubscribe?IQid=yt\nOfficial Website: https://kanebrownmusic.com\nInstagram: https://www.instagram.com/kanebrown_music\nFacebook: https://www.facebook.com/kaneallenbrown\nTwitter: https://twitter.com/kanebrown\nTikTok: https://www.tiktok.com/@kanebrown\nText Kane at 615-205-1717\n\n#KaneBrown #WorldwideBeautiful",
    duration: 3.5166666666666666,
  },
  {
    id: 'VA5qTwo_HIs',
    title:
      'My Rich Mom Chose Money over my Brother’s Life, I Destroy Her Life Until She Begs for Redemption',
    description:
      'Hi, my name is Emery and I am twenty five years old. I am here to tell you the story of how I lost my brother because of my mom, and how deeply this impacted me. I could never bring myself to forgive my mom for what she did.\n\nTrue Anime Store ➡️ teespring.com/stores/true-story-7\n\n\nWant to Collaborate or share your own story with us ➡️ featuretruestory@gmail.com',
    duration: 21.316666666666666,
  },
  {
    id: '-Zda8qgimrU',
    title: 'Key Glock - Son Of A Gun (Official Video)',
    description:
      'Listen to the single "Son Of A Gun". Out now!\nStream: https://empire.ffm.to/sonofagun.oyd\n\n#KeyGlock #SonOfAGun #PRE\n\nOfficial music video by Key Glock performing "Son Of A Gun" © 2020 Paper Route EMPIRE\n\nhttp://vevo.ly/73fhsd',
    duration: 1.9,
  },
  {
    id: 'pUhNXhFu5Uc',
    title:
      'Get Up reacts to Drew Brees’ comments about ‘disrespecting the flag’',
    description:
      "Louis Riddick and Tim Hasselbeck join Mike Greenberg on Get Up to discuss New Orleans Saints QB Drew Brees' comments on social media about NFL players kneeling during the national anthem and then later issuing an apology on his comments.\n#GetUp #NFL\n\r\n✔️Subscribe to ESPN+ https://plus.espn.com/\r\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\r\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\r\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\r\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\r\n\r\nESPN on Social Media:\r\n► Follow on Twitter: http://www.twitter.com/espn\r\n► Like on Facebook: http://www.facebook.com/espn\r\n► Follow on Instagram: http://www.instagram.com/espn\r\n\r\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \r\n\r\nMore on ESPN.com: https://www.espn.com",
    duration: 7.183333333333334,
  },
  {
    id: 'ZqaySM5jvFI',
    title:
      'Michael Bisping tells his incredible life story and how he beat Anderson Silva and Luke Rockhold',
    description:
      "Michael Bisping reflects on his journey in MMA and how hard it was to become the UK's only UFC champion. This is The Count's story in his own words...\n\nWatch Michael Bisping: Path To Glory on BT Sport 3 HD from 9pm on Thursday, 4th June.\n\nHit 'Subscribe' above to ensure you never miss a video from the BT Sport YouTube channel.\n\nVisit and subscribe to our 'BT Sport Boxing' YouTube channel ➡️ http://www.youtube.com/c/btsportboxing\n\nTwitter: http://twitter.com/btsport\nFacebook: http://www.facebook.com/btsport\nInstagram:http://instagram.com/btsport\nWebsite: http://sport.bt.com",
    duration: 32.28333333333333,
  },
  {
    id: 'ynSEY-DfK1o',
    title: 'Փափուկ խաղալիք, Սերիա 24 / Fluffy Toy / Papuk Khaghaliq',
    description:
      'Follow Armenia TV on social platforms:\nInstagram: https://www.instagram.com/armeniatv.official/\nFacebook: https://www.facebook.com/ArmeniaTVMain/\n#ՓափուկԽաղալիք #ArmeniaTV #PapukKhaghaliq',
    duration: 29.583333333333332,
  },
  {
    id: '-dYWZMx-Lfs',
    title:
      'Coronavirus Pandemic Update 79: COVID-19 Vaccines to Keep an Eye On - mRNA, Antigen, Others',
    description:
      'COVID-19 Update 79 with Roger Seheult, MD who is Quadruple Board Certified and an Associate Professor at UC Riverside School of Medicine, and Co-Founder of https://www.medcram.com\nDr. Seheult discusses five COVID 19 vaccines that have shown some promise in phase 1, 2, and 3 trials.  These include an mRNA vaccine (Moderna), an adenovirus antigen (epitope) vaccine (Oxford Vaccine Group), a vaccine developed by Johnson and Johnson, a coronavirus vaccine developed by Merck (that utilizes similar technology for the development of their Ebola vaccine), and another mRNA coronavirus vaccine developed by Pfizer. (This video was recorded June 4, 2020)\n-------------------------------------------\nLive Event: Dr. Seheult interviewed by Dr. Desai about vaccines at 4 pm PT on Thurs. June 4, 2020 (MedIQ on Facebook) https://www.facebook.com/MedIQCME/posts/3048648725192804\n\nLinks referenced in this video:\n\nJohns Hopkins Tracker - https://coronavirus.jhu.edu/map.html\n\nRAPS - https://www.raps.org/news-and-articles/news-articles/2020/3/covid-19-vaccine-tracker\n\nSTAT - https://www.statnews.com/2020/03/11/researchers-rush-to-start-moderna-coronavirus-vaccine-trial-without-usual-animal-testing/\n\n-------------------------------------------\n\nSome previous videos from this series (visit MedCram.com for the full series):\n- Coronavirus Pandemic Update 78: Mask Controversy; Vaccine Update for COVID-19 https://youtu.be/_IrYyhufDwI\n- Coronavirus Pandemic Update 77: Remdesivir Update; COVID-19 in Mexico https://youtu.be/LXtY_3A0WN8\n- Coronavirus Pandemic Update 76: Antibody Testing False Positives in COVID-19 https://youtu.be/NSRK41UbTEU\n- Coronavirus Pandemic Update 75: COVID-19 Lung Autopsies - New Data https://youtu.be/PlUFibXtDxQ\n- Coronavirus Pandemic Update 74: Vitamin D & COVID 19; Academic Censorship https://youtu.be/-zK8LgVx2G8\n- Coronavirus Pandemic Update 73: Relapse, Reinfections, & Re-Positives - The Likely Explanation https://youtu.be/01Rftnxbi6w\n- Coronavirus Pandemic Update 72: Dentists; Diabetes; Sensitivity of COVID-19 Antibody Tests: https://youtu.be/UANgon3Umns\n- Coronavirus Pandemic Update 71: New Data on Adding Zinc to Hydroxychloroquine + \nAzithromycin: https://youtu.be/WZq-K1wpur8\n- Coronavirus Pandemic Update 70: Glutathione Deficiency, Oxidative Stress, and COVID 19 https://youtu.be/OtL0B1bqXak\n- Coronavirus Pandemic Update 69: "NAC" Supplementation and COVID-19 (N-Acetylcysteine) https://youtu.be/Dr_6w-WPr0w\n- Coronavirus Pandemic Update 68: Kawasaki Disease; Minority Groups & COVID-19: https://youtu.be/Ja-jhcXMGj0\n- Coronavirus Pandemic Update 67: COVID-19 Blood Clots - Race, Blood Types, & Von Willebrand Factor https://youtu.be/JOlVkES_kC8\n- Coronavirus Pandemic Update 66: ACE-Inhibitors and ARBs - Hypertension Medications with COVID-19 https://youtu.be/OudhmwulJHY\n- Coronavirus Pandemic Update 65: COVID-19 and Oxidative Stress (Prevention & Risk Factors) https://youtu.be/gzx8LH4Fjic\n- Coronavirus Pandemic Update 64: Remdesivir COVID-19 Treatment Update https://youtu.be/Z2hfGcTokiY\n- Coronavirus Pandemic Update 63: Is COVID-19 a Disease of the Endothelium (Blood Vessels and Clots)? https://youtu.be/Aj2vB_VITXQ\n- Coronavirus Pandemic Update 62: Treatment with Famotidine (Pepcid)? https://youtu.be/DtPwfihjyrY\n- Coronavirus Pandemic Update 61: Blood Clots & Strokes in COVID-19; ACE-2 Receptor; Oxidative Stress https://youtu.be/22Bn8jsGI54\n- Coronavirus Pandemic Update 60: Hydroxychloroquine Update; NYC Data; How Widespread is COVID-19? https://youtu.be/fn2yk5SbGiw\n- Coronavirus Pandemic Update 59: Dr. Seheult\'s Daily Regimen (Vitamin D, C, Zinc, Quercetin, NAC) https://youtu.be/NM2A2xNLWR4\n- Coronavirus Pandemic Update 58: Testing; Causes of Hypoxemia in COVID 19 (V/Q vs Shunt vs Diffusion) https://youtu.be/nO4xgcIaPeA\n\nAll coronavirus updates are at MedCram.com (including a discussion of the diagnosis, prevention, treatment, and vaccines for COVID-19 - including mRNA vaccines such as the Moderna vaccine) and we offer many other medical topics (ECG Interpretation, strokes, thrombosis, pulmonary embolism, myocardial infarction, hypercoagulation, hypertension, anticoagulation, DKA, acute kidney injury, influenza, measles, mechanical ventilation, etc.).\n\n-------------------------------------------\n\nSpeaker: Roger Seheult, MD\nBoard Certified in Internal Medicine, Pulmonary Disease, Critical Care, and Sleep Medicine.\nAssociate Professor at the University of California, Riverside School of Medicine\n\nMedCram provides videos to a variety of medical schools, education programs, and institutions (please contact us at customers@medcram.com if you are interested)\n\nMedia Contact: customers@medcram.com\nMedia contact info: https://www.medcram.com/pages/media-contact\n\nMedCram medical videos are for medical education and exam preparation, and NOT intended to replace recommendations from your doctor.\n#COVID19 #SARSCoV2 #FOAMed',
    duration: 3.3833333333333333,
  },
  {
    id: 'uAvXTevJmfw',
    title: 'All four ex-cops charged in George Floyd death',
    description:
      'Fired Minneapolis police officer Derek Chauvin will face a more serious murder charge and three other sacked officers will be charged with aiding and abetting in the death of George Floyd that triggered days of nationwide protest.\n\nWATCH MORE: https://thestartv.com/c/news\nSUBSCRIBE: https://cutt.ly/TheStar\nLIKE: https://fb.com/TheStarOnline',
    duration: 2.283333333333333,
  },
  {
    id: 'y9FBABrfoBo',
    title: 'NFL Kickers Recovering Their Onside Kicks',
    description:
      'NFL Kickers Recovering Their Onside Kicks (Rare Plays)\n\nSorry about the last 2 clips not having sound. I looked for a couple hours trying to track down the exact games they were from, but I could only find the no-sound clips.\n\nShoutout to this video for a few of the clips : https://www.youtube.com/watch?v=0jgXeLWlJ7w\n\nAnother shoutout to NFL Throwback for providing a HQ version of the 1992 game between the Oilers and the Bills  (The Comeback) that I used in this video: https://www.youtube.com/watch?v=u1lgLXsO2Ag&t=502s\n\nDiscord Server: https://discord.gg/dNHDSqv\nNEW Business Email: highlightheavenbusiness@gmail.com\nTwitter: https://twitter.com/highlghtheaven\nInstagram: https://www.instagram.com/highlght.heaven/\nTwitch: https://www.twitch.tv/alexthagreat01\nPatreon: https://www.patreon.com/highlightheaven \n\n(All rights go to ESPN, Fox, CBS, NBC, Universal Music Group, the NFL, NBA, NCAA, MLB, NHL, AAF, XFL & its broadcasters. I do not own the music and the footage used in this video. No copyright infringement intended. For entertainment purposes)',
    duration: 2.95,
  },
  {
    id: 'm4EyrU6sLqQ',
    title: 'The Real Reason Tiger Woods And Lindsey Vonn Broke Up',
    description:
      "Golf great Tiger Woods and skiing sensation Lindsey Vonn were one of those celebrity couples you wanted to root for. Both were top athletes, divorcees, and seemingly enjoyed a genuine connection and real love. So what went wrong? Here's the real reason Tiger Woods and Lindsey Vonn broke up.\n\nWoods and Vonn met by chance at a charity event in Las Vegas in 2012, and according to Vonn, they immediately connected. \n\nAs their relationship deepened, they bonded by trying out each other's area of expertise. Vonn told the late night host that she even nailed a hole-in-one during her first round on the green. She also confessed that Woods is a decent skier, but of course, not the best.\n\nThe divorcees ended up cementing their love as they healed together, quite literally. Woods was rehabbing his often injured back and Vonn was recovering from a knee surgery that kept her out of the 2014 Sochi Olympics. Vonn told the AP,\n\n\"Rehab is not a fun thing to do, it's very monotonous and tedious. But if you're going through rehab, it's nice to have a partner to do this with.\"\n\nAlthough their competitiveness was obviously a form of flirting for these super athletes, Vonn said they kept the attraction \"at bay\" during their joint physical therapy sessions. She added,\n\n\"It's about doing it right and taking the time [you need] to really heal properly.\" Keep watching to learn The Real Reason Tiger Woods And Lindsey Vonn Broke Up!\n\n#TigerWoods #LindseyVonn\n\nLove story | 0:17\nLindsay's side | 1:24\nTiger's side | 1:55\nClassic guy mistake | 2:37\nToo famous for her? | 3:26\nJust a rebound? | 4:23\nThey were never going to work | 5:05\n\nRead full article: https://www.nickiswift.com/200745/the-real-reason-tiger-woods-and-lindsey-vonn-broke-up/",
    duration: 5.933333333333334,
  },
  {
    id: 'JQJdFwVXBTs',
    title: '🎥 ELEPHANT MAN (1980) | Full Movie Trailer | Classic Movie',
    description:
      'A Victorian surgeon rescues a heavily disfigured man who is mistreated while scraping a living as a side-show freak. Behind his monstrous facade, there is revealed a person of intelligence and sensitivity.\n----------------\nCast: Anthony Hopkins, John Hurt, Anne Bancroft #MoviePredictor #trailer #BestMovie',
    duration: 2.7,
  },
  {
    id: '1nhRJLNwCtE',
    title:
      'Hitman 2: 2 Ways to Play Elusive Target THE STOWAWAY (Mike Attempts Stealth, Dozens Die)',
    description:
      "Hitman 2 returns to the channel with elusive target The Stowaway! The Stowaway is a reactivated Elusive Target mission: a muckraking tabloid journalist named Jimmy Chen currently trying to infiltrate the Ark Society on the remote Isle of Sgail. Now look, Jimmy: if anyone's going to be infiltrating secret societies, changing outfits and causing havoc, it's going to be us. See how Mike and Andy get on in this Hitman 2 gameplay (Jane was on a murder vacation) and subscribe for more from Outside Xbox!\n\nLooking for more Hitman gameplay? See all our Hitman videos here: \nhttps://www.youtube.com/watch?v=f2OUsoN6yDs&list=PL_WcVABbXAhCCavvVIhwu5Fl2PKiXPWwP\n\n---\nOfficial Merch Store! https://teespring.com/stores/outside-xbox-outside-xtra\n\nBecome a member of Outside Xbox for exclusive behind-the-scenes videos, merch discounts and chat/commenter badges! https://www.youtube.com/channel/UCKk076mm-7JjLxJcFSXIPJA/join\n\nOutside Xbox brings you daily videos about videogames, especially Xbox One games and Xbox 360 games. Join us for new gameplay, original videos, previews, lists, Show of the Week and other things (ask us about the other things). \n\nThanks for watching and be excellent to each other in the comments. \n\nFind us at http://www.outsidexbox.com\nFollow us on Twitter: http://www.twitter.com/outsidexbox\nFollow us on Instagram: http://www.instagram.com/outsidexboxofficial\n\n#hitman #hitman2 #elusivetarget",
    duration: 25.516666666666666,
  },
  {
    id: 'p64JsQqOeA8',
    title:
      "Skip & Shannon discuss if LeBron's role in social activism makes him the GOAT | NBA | UNDISPUTED",
    description:
      "2-time NBA champ and Finals MVP Cedric Maxwell has crowned LeBron as the greatest of all time over Michael Jordan. Maxwell said quote, “he's the GOAT because, not only on the basketball side, but social issues: He's been involved in every social issue that we look at.” Hear why Shannon Sharpe agrees with Cedric Maxwell.\n\n#Undisputed #NBA #LeBron #MichaelJordan #CedricMaxwell \n\nSUBSCRIBE to get the latest UNDISPUTED content: http://foxs.pt/SubscribeUNDISPUTED\nListen to UNDISPUTED on Spotify: https://foxs.pt/UNDISPUTEDSpotify\n\n▶Watch our latest NFL content: http://foxs.pt/NFLonUNDISPUTED\n▶Watch our latest NBA content: http://foxs.pt/NBAonUNDISPUTED\n▶Watch our latest MLB content: http://foxs.pt/MLBonUNDISPUTED\n\n▶First Things First's YouTube channel: http://foxs.pt/SubscribeFIRSTTHINGSFIRST\n▶The Herd with Colin Cowherd’s YouTube channel: http://foxs.pt/SubscribeTHEHERD\n▶Speak for Yourself’s YouTube channel: http://foxs.pt/SubscribeSPEAKFORYOURSELF\n▶Fair Game with Kristine Leahy’s YouTube channel: http://foxs.pt/SubscribeFAIRGAME\n\nSee more from UNDISPUTED: http://foxs.pt/UNDISPUTEDFoxSports\nLike UNDISPUTED on Facebook: http://foxs.pt/UNDISPUTEDFacebook\nFollow UNDISPUTED on Twitter: http://foxs.pt/UNDISPUTEDTwitter\nFollow UNDISPUTED on Instagram: http://foxs.pt/UNDISPUTEDInstagram\n\nFollow Skip Bayless on Twitter: http://foxs.pt/SkipBaylessTwitter\nFollow Shannon Sharpe on Twitter: http://foxs.pt/ShannonSharpeTwitter\n\nAbout Skip and Shannon: UNDISPUTED:\nUNDISPUTED is a daily two-and-a-half hour sports debate show starring Skip Bayless and Shannon Sharpe. Every day, Skip and Shannon will give their unfiltered, incisive, passionate opinions on the biggest sports topics of the day.\n\nSkip & Shannon discuss if LeBron's role in social activism makes him the GOAT | NBA | UNDISPUTED\nhttps://youtu.be/p64JsQqOeA8\n\nSkip and Shannon: UNDISPUTED\nhttps://www.youtube.com/c/UndisputedOnFS1",
    duration: 12.266666666666667,
  },
  {
    id: '5VE4r0WKX9E',
    title:
      'Unprovoked attack leaves 3 cops wounded, suspect critical, NYPD says',
    description:
      'Three NYPD officers are hospitalized and a suspect in critical condition after what police say was an unprovoked attack on officers during an anti-looting patrol in Brooklyn.\n\nIt happened just before 12 a.m. Thursday near Church and Flatbush avenues.\n\nPolice say two officers were on an anti-looting patrol when a man walked up and stabbed one of those officers on the left side of his neck.\n\nSeconds later, officers nearby heard gunshots and ran towards the scene.\n\n"We believe that when they got there they saw the perp with a gun in his hand that we believe belonged to one of the officers," said Police Commissioner Dermot Shea. "It appears to be a complete cowardly, despicable, unprovoked attack on a defenseless police officer.  And thank God we\'re not planning a funeral right now."\n\nRead more: https://7ny.tv/3gOto94\n\nCheck out more Eyewitness News - http://7ny.tv/2suJHTd\n\nNEW HERE? – \n\nHi! We’re abc7NY, also known as Channel 7 on TV, home to Eyewitness News, New York’s Number 1 news.   We hope you love us on YouTube as much as you do on television!\n\nOUR SOCIAL MEDIA –\n\nFACEBOOK: https://www.facebook.com/ABC7NY/\nTWITTER: https://twitter.com/abc7ny\nINSTAGRAM: https://www.instagram.com/abc7ny/\n\n\nNEWS TIPS:\n\nOnline: https://7ny.tv/36UsL9a\nPhone: 917-260-7700\nEmail: abc7ny@abc.com\n\n#abc7NY #localnews #nypd',
    duration: 2.3,
  },
  {
    id: '8Y7DO1LVOPE',
    title:
      "SIMON COWELL'S Best GOLDEN BUZZERS From Britain's Got Talent  | Amazing Auditions",
    description:
      'SIMON COWELL hits his GOLDEN BUZZER for these GOLDEN acts on BGT! Including Performances from:\nJack and Tim\nBars and Melody\nCalum Scott\nSarah Ikumu \nand Kojo \n\nSubscribe for Amazing Auditions ▶︎ http://bit.ly/AMAZING_SUBSCRIBE',
    duration: 35.25,
  },
  {
    id: 'GbsJFgRupWo',
    title:
      "Inside the George Floyd protests in New York: 'We are not the problem'",
    description:
      'The police killing of George Floyd continues to ignite protests across the US. On 2 June, the Guardian embedded with activists as they marched through New York City to voice their anger at the death and the systematic racism that enabled it \nSubscribe to The Guardian on YouTube ► http://is.gd/subscribeguardian\n\nSupport the Guardian ► https://support.theguardian.com/contribute\n\nToday in Focus podcast ► https://www.theguardian.com/news/series/todayinfocus\n\nSign up for the Guardian documentaries newsletter ► https://www.theguardian.com/info/2016/sep/02/sign-up-for-the-guardian-documentaries-update\n\nThe Guardian ► https://www.theguardian.com\n\nThe Guardian YouTube network:\n\nGuardian News ► http://is.gd/guardianwires\nOwen Jones talks ► http://bit.ly/subsowenjones\nGuardian Football ► http://is.gd/guardianfootball\nGuardian Sport ► http://bit.ly/GDNsport\nGuardian Culture ► http://is.gd/guardianculture',
    duration: 5.333333333333333,
  },
  {
    id: 'iXjUXO3aSaM',
    title:
      'This is SOO Worth The Gems!  New Skin Evil Gene Gameplay and Sneak Peek',
    description:
      'Subscribe Here ► https://goo.gl/fJqkSn\nBrawl Stars Creator Code ► http://bit.ly/SupportLex\n\nToday we take a look at the brand new Evil Gene Skin Coming into Brawl Stars on June 10th. \n\nThe BEST Phones ► https://www.oneplus.com/\n-----------------------------------------------------------------------------\n\nSUPPORT ME HERE\n\n► Twitch Subscriber! http://bit.ly/LexTwitchSub\n► Lex Merch! http://bit.ly/LexMerch\n► My Studio Gear! https://www.amazon.com/shop/lex-brawlstars\n\n----------------------------------------------------------------------------\n\nSOCIAL MEDIA!\n► Twitch: https://www.twitch.tv/LexBrawlStars\n► Instagram: https://www.instagram.com/LexBrawl\n► Facebook Page: https://www.facebook.com/LexBrawlStars\n► Twitter: https://twitter.com/LexMobileGaming\n► Discord Server: https://discord.gg/LexBrawl\n-----------------------------------------------------------------------------',
    duration: 11.933333333333334,
  },
  {
    id: '87BaA_FixeI',
    title:
      'Karrion Kross sends a violent message to Tommaso Ciampa: WWE NXT, June 3, 2020',
    description:
      'Using Bronson Reed as a proxy, Karrion Kross gives The Blackheart a taste of what’s in store for him this Sunday. #WWENXT\nWWE Network | Subscribe now: http://wwe.yt/wwenetwork\r\n---------------------------------------------------------------------\r\nFollow WWE on YouTube for more exciting action!\r\n---------------------------------------------------------------------\r\nSubscribe to WWE on YouTube: http://wwe.yt/\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out our other channels!\r\n---------------------------------------------\r\nThe Bella Twins: https://www.youtube.com/thebellatwins\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nWWEMusic: https://www.youtube.com/wwemusic\r\nTotal Divas: https://www.youtube.com/wwetotaldivas\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nReddit: https://www.reddit.com/user/RealWWE\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------\r\nWWE Podcasts\r\n------------------------------------\r\nAfter the Bell with Corey Graves: http://bit.ly/afterthebellpodcast\r\nThe New Day: Feel the Power: https://link.chtbl.com/7Fp6uOqk',
    duration: 0.7333333333333333,
  },
  {
    id: '8ER8rugZ6gM',
    title:
      'Best Cake Recipes | Amazing Fruit Cake Decorating Ideas For Any Occasion | So Yummy Chocolate Cake',
    description:
      "▽ Subscribe Here: http://www.youtube.com/c/TastyPlus\n\n▽ Question of the Day: \nWill you eat these cake alone or with your friend?\n\n➞ Yummy Cake Recipes: \nhttps://www.youtube.com/watch?v=w0Kw3NvCxQo&t=10s\n\n➞ Tasty Cake Official: \nhttps://www.youtube.com/watch?v=l5MKs9_SgfQ&list=PL2NGAW-Txv7cswulCIgorRVCZ_eB8kOFU\n\n▽ About Tasty Plus: \nThe official YouTube channel of all things Tasty Plus, the world's largest food network. From recipes, world-class talent, and top-of-the-line cookware, we help connect food lovers in every way they interact with food.\n\n▽ Contact: contact@tastyplus.net\n\n▽ Thank for watching! Don’t forget to turn on notifications, like, & subscribe!",
    duration: 10.65,
  },
  {
    id: 'gILMP8zE_sg',
    title:
      'Defense Secretary Breaks With Trump Over Military Response To George Floyd Protests | NBC News',
    description:
      'Defense Secretary Mark Esper said he does not support invoking the Insurrection Act, as President Trump has threatened, and argued against using “active-duty forces in a law enforcement role.” Esper later overturned a Pentagon decision to send home hundreds of active-duty soldiers around Washington, D.C.\n» Subscribe to NBC News: http://nbcnews.to/SubscribeToNBC\n» Watch more NBC video: http://bit.ly/MoreNBCNews\n\nNBC News Digital is a collection of innovative and powerful news brands that deliver compelling, diverse and engaging news stories. NBC News Digital features NBCNews.com, MSNBC.com, TODAY.com, Nightly News, Meet the Press, Dateline, and the existing apps and digital extensions of these respective properties.  We deliver the best in breaking news, live video coverage, original journalism and segments from your favorite NBC News Shows.\n\nConnect with NBC News Online!\nNBC News App: https://smart.link/5d0cd9df61b80\nBreaking News Alerts: https://link.nbcnews.com/join/5cj/breaking-news-signup?cid=sm_npd_nn_yt_bn-clip_190621\nVisit NBCNews.Com: http://nbcnews.to/ReadNBC\nFind NBC News on Facebook: http://nbcnews.to/LikeNBC\nFollow NBC News on Twitter: http://nbcnews.to/FollowNBC\nFollow NBC News on Instagram: http://nbcnews.to/InstaNBC\n\nDefense Secretary Breaks With Trump Over Military Response To George Floyd Protests | NBC News',
    duration: 2.7,
  },
  {
    id: '7asKSzBaPGY',
    title:
      'Drake Maverick gets a standing ovation: WWE Network Exclusive, June 3, 2020',
    description:
      'Drake Maverick takes in the moment after receiving an NXT contract.\nWWE Network | Subscribe now: http://wwe.yt/wwenetwork\r\n---------------------------------------------------------------------\r\nFollow WWE on YouTube for more exciting action!\r\n---------------------------------------------------------------------\r\nSubscribe to WWE on YouTube: http://wwe.yt/\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out our other channels!\r\n---------------------------------------------\r\nThe Bella Twins: https://www.youtube.com/thebellatwins\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nWWEMusic: https://www.youtube.com/wwemusic\r\nTotal Divas: https://www.youtube.com/wwetotaldivas\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nReddit: https://www.reddit.com/user/RealWWE\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------\r\nWWE Podcasts\r\n------------------------------------\r\nAfter the Bell with Corey Graves: http://bit.ly/afterthebellpodcast\r\nThe New Day: Feel the Power: https://link.chtbl.com/7Fp6uOqk',
    duration: 1.65,
  },
  {
    id: 'l1-mHBAP6fo',
    title:
      'Cargos más graves contra expolicía Derek Chauvin por muerte de George Floyd',
    description:
      'Derek Chauvin ahora enfrenta un cargo de homicidio sin premeditación por la muerte de George Floyd y la fiscalía acusó a los otros tres agentes involucrados en el incidente por instigar el hecho.\n\nLos 4 exagentes involucrados en muerte de George Floyd ahora enfrentan cargos y Chauvin es acusado de un cargo más grave.\n\nEl exagente de policía de Minneapolis que presionó su rodilla contra el cuello de George Floyd fue acusado de homicidio sin premeditación y los otros tres agentes en la escena durante su muerte fueron acusados de ayudar e instigar, según documentos judiciales.\n\nSe espera que el anuncio oficial del fiscal de Minnesota Keith Ellison se produzca el miércoles por la tarde, más de una semana después de que Floyd fuera asesinado mientras estaba bajo custodia policial en Minneapolis, lo que provocó protestas en todo el país que piden el fin de la violencia policial contra los ciudadanos negros.\n\nDerek Chauvin, quien tuvo su rodilla presionada contra el cuello de Floyd durante casi nueve minutos, había sido acusado previamente de asesinato en tercer grado y homicidio sin premeditación. Los agentes Thomas Lane y J.A. Keung, que ayudaron a contener a Floyd, y un cuarto agente, Tou Thao, que estaba cerca de los demás, no habían sido acusados ​​inicialmente.\n\nLa autopsia independiente dice que la muerte de George Floyd fue un homicidio debido a “asfixia por presión sostenida”\nDos autopsias en Floyd determinaron que murió por homicidio. La jefa de policía de Minneapolis, Medaria Arradondo, despidió a los cuatro agentes y dijo que fueron “cómplices” de la muerte de Floyd. La familia de Floyd y los manifestantes en todo el país han pedido que sean arrestados y condenados por el asesinato.\n\n#GeorgeFloyd\n#Racismo\n#DerekChauvin\n\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\nVisita nuestro sitio: https://cnnespanol.cnn.com/\nSuscríbete a nuestro canal en Youtube: http://bit.ly/15NWkSN\n\nDale a "Me gusta" en Facebook: http://Facebook.com/cnnee\nSíguenos en Twitter: http://Twitter.com/cnnee\nCNN en Español en Instagram: http://instagram.com/cnnee\n\nSUSCRÍBETE A NUESTRO NUEVO NEWSLETTER: https://mailchi.mp/cnn/5cosas\n\nPROYECTO SER HUMANO\ncnne.com/serhumano',
    duration: 7.433333333333334,
  },
  {
    id: '3NCJTFZRATE',
    title: 'Does President Trump have double standard for protests?',
    description:
      'ABC News’ David Wright reports on the president’s criticism of demonstrations across the U.S., despite his praise for overseas protests.\n\nABC News Live Prime, Weekdays at 7EST & 9EST \nWATCH the ABC News Live Stream Here: https://www.youtube.com/watch?v=w_Ma8oQLmSM   \n\nSUBSCRIBE to ABC NEWS: https://bit.ly/2vZb6yP \nWatch More on http://abcnews.go.com/  \nLIKE ABC News on FACEBOOK https://www.facebook.com/abcnews   \nFOLLOW ABC News on TWITTER: https://twitter.com/abc',
    duration: 5.3,
  },
  {
    id: '9fuvxF_QfUU',
    title:
      'Why Philippe Coutinho and Ousmane Dembele are a huge economic problem for Barcelona | La Liga',
    description:
      'ESPN FC’s Sid Lowe, Alejandro Moreno and Steve Nicol join Sebastian Salazar to consider what happens next with Barcelona pair Philippe Coutinho and Ousmane Dembele. Lowe points out the economic headache the duo provides the Barca hierarchy with, and says if they do let both players go out on loan it’s because they couldn’t find a better solution.\n#ESPNFC\n\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC',
    duration: 6.666666666666667,
  },
  {
    id: 'T90InivROSc',
    title: 'Melania needs a new smile machine',
    description:
      'After Trump tells Melania to smile for a photo, the operators living in her mouth scramble to turn the smile machine on for the first time in years. Watch the full segment on CBS All Access. #TOTN #TooningOut\n\nTooning Out The News is Now Streaming, only on CBS All Access.\n\nSubscribe To "CBS All Access" Channel HERE: https://bit.ly/39BLBSh\nFor more content from "Tooning Out The News", click HERE: https://bit.ly/3bE6AFv\nWatch full episodes of "Tooning Out The News" HERE: https://bit.ly/2UxQqrz\nFollow "Tooning Out The News" on Twitter HERE: https://twitter.com/tooningout\nFollow "Tooning Out The News" on Instagram HERE: https://www.instagram.com/tooning.out/\nLike "Tooning Out The News" on Facebook HERE: https://www.facebook.com/tooningout/\n\nClip air date 6/4/2020\n \n© 2020 CBS Interactive. All rights reserved.\n\nCBS All Access. IT\'S ON.\n\nSign Up: https://bit.ly/2D3jkGr\n\nVisit: https://www.cbs.com/\n\n#CBSAllAccess #CBS',
    duration: 0.8666666666666667,
  },
  {
    id: 'vksN1OITiX0',
    title:
      'Only LeBron can save the NBA season, Colin reacts to 22-team proposal, July 31 start date | THE HERD',
    description:
      "Colin Cowherd discusses the NBA's return on today's show. Hear his thoughts on the 22-team proposal, July 31st start date and why he thinks LeBron James is the only person who can salvage this season.\n\n#TheHerd #NBA #LeBron\n\nSUBSCRIBE to get all the latest content from The Herd: http://foxs.pt/SubscribeTHEHERD \n \n►Watch the latest content from The Herd: http://foxs.pt/LatestOnTheHerd \n►Watch our favorite content on “Best of The Herd”: http://foxs.pt/BestOnTheHerd \n\n▶First Things First's YouTube channel: http://foxs.pt/SubscribeFIRSTTHINGSFIRST\n►UNDISPUTED’s YouTube channel: http://foxs.pt/SubscribeUNDISPUTED \n►Speak for Yourself’s YouTube channel: http://foxs.pt/SubscribeSPEAKFORYOURSELF \n▶Fair Game with Kristine Leahy’s YouTube channel: http://foxs.pt/SubscribeFAIRGAME\n\nSee more from THE HERD: http://foxs.pt/THEHERDFoxSports \nLike THE HERD on Facebook: http://foxs.pt/THEHERDFacebook \nFollow THE HERD on Twitter: http://foxs.pt/THEHERDTwitter \nFollow THE HERD on Instagram: http://foxs.pt/THEHERDInstagram \n\nFollow Colin Cowherd on Twitter: http://foxs.pt/ColinCowherdTwitter \n \nAbout The Herd with Colin Cowherd:\nThe Herd with Colin Cowherd is a three-hour sports television and radio show on FS1 and iHeartRadio. Every day, Colin will give you his authentic, unfiltered opinion on the day’s biggest sports topics.\n\nOnly LeBron can save the NBA season, Colin reacts to 22-team proposal, July 31 start date | THE HERD\nhttps://youtu.be/vksN1OITiX0\n\nThe Herd with Colin Cowherd\nhttps://www.youtube.com/c/colincowherd",
    duration: 11.766666666666667,
  },
  {
    id: 'BC9i2sLAGPk',
    title:
      'Johnny Gargano has the “key” to victory: WWE Network Exclusive, June 3 2020',
    description:
      "Johnny Gargano plans to prove his point by taking Keith Lee's North American Title at NXT TakeOver: In Your House.\nWWE Network | Subscribe now: http://wwe.yt/wwenetwork\r\n---------------------------------------------------------------------\r\nFollow WWE on YouTube for more exciting action!\r\n---------------------------------------------------------------------\r\nSubscribe to WWE on YouTube: http://wwe.yt/\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out our other channels!\r\n---------------------------------------------\r\nThe Bella Twins: https://www.youtube.com/thebellatwins\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nWWEMusic: https://www.youtube.com/wwemusic\r\nTotal Divas: https://www.youtube.com/wwetotaldivas\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nReddit: https://www.reddit.com/user/RealWWE\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------\r\nWWE Podcasts\r\n------------------------------------\r\nAfter the Bell with Corey Graves: http://bit.ly/afterthebellpodcast\r\nThe New Day: Feel the Power: https://link.chtbl.com/7Fp6uOqk",
    duration: 1.2166666666666668,
  },
  {
    id: 'oe4Y36UZ6Qs',
    title: 'All 4 officers charged in George Floyd’s death l BREAKING NEWS',
    description:
      "The death of George Floyd, a black man who died on Memorial Day after he was pinned down by a white Minnesota police officer, has sparked outrage and protests in Minneapolis and across the United States.\n\nSecond-degree murder, third-degree murder and manslaughter charges have been filed against Derek Chauvin, the officer who prosecutors say held his knee on Floyd's neck for nearly nine minutes. Three other officers have also been charged with aiding and abetting second-degree murder and aiding and abetting manslaughter. READ MORE: https://abcn.ws/374kP5x\n\nSUBSCRIBE to ABC NEWS: https://bit.ly/2vZb6yP\nWatch More on http://abcnews.go.com/\nLIKE ABC News on FACEBOOK\nhttps://www.facebook.com/abcnews\nFOLLOW ABC News on TWITTER:\nhttps://twitter.com/abc\nGOOD MORNING AMERICA'S HOMEPAGE:\nhttps://www.goodmorningamerica.com/\n\n#BreakingNews #Charges #GeorgeFloyd #Officers #Police #Minnesota #ABCNews",
    duration: 14.7,
  },
  {
    id: 'BsaLT5gw4w0',
    title: '23 IDEAS DE MAQUILLAJE PARA FIESTAS',
    description:
      'IDEAS ÚNICAS DE MAQUILLAJE PARA CAMBIAR TO LOOK\n\nSi tienes una importante fiesta o evento y no tienes idea de como maquillarte....¿adivina qué? ¡no tienes que preocuparte ya! Déjanos mostrarte increíbles ideas de aplicar maquillaje que te ayudarán mucho a conseguir un look perfecto. Hemos reunido los trucos de maquillaje más geniales y coloridos especialmente para ti. La primera idea es el maquillaje de espantapájaros. Probablemente se esté preguntando de qué se trata todo esto ... ¡necesitas verlo para comprenderlo realmente!\n\nDespués de eso, te mostraremos cómo hacer que tus ojos se vean como sandías hermosas y jugosas. Este maquillaje de ojos es bastante fácil de hacer, solo sigue los sencillos pasos que te mostraremos hoy. En este video aprenderás cómo agregar volumen a tus labios en cuestión de segundos. También les mostraremos el increíble truco de cambio de color de lápiz labial. Y si también quieres aprender a crear colores de lápiz labiales únicos y perfectos, ¡definitivamente mira este video hasta el final!\n\n¡Glamour, aquí vamos!\n\nMARCAS DE TIEMPO:\n\n1:19 - Maquillaje de espantapájaros\n3:42 - Ojos de sandía\n6:26 - Agregar volumen a los labios\n8:31 - Cambio de color del lápiz labial\n10:40 - Color de labios perfecto\nEste video fué hecho con fines de entretenimiento. No garantizamos la integridad, seguridad y/o fiabilidad. Cualquier acción que se realice con la información en este video queda estrictamente bajo su propio riesgo, y no seremos responsables de ningún daño o pérdida. Es responsabilidad del espectador usar su juicio, cuidado y las precauciones necesarias si planea replicar lo visto aquí.\n\nEl siguiente video presenta actividades realizadas por nuestros actores dentro de un entorno controlado; utilice su criterio, cuidado y precauciones necesarias si planea replicarlo.\n\n--------------------------------------------------------------------------------------- \n\nMúsica de Epidemic Sound: https://www.epidemicsound.com/\nImágenes: https://www.depositphotos.com\n\nSuscríbete a nuestro canal: https://goo.gl/cYzfZP \n\n---------------------------------------------------------------------------------------- \n\nNuestras redes sociales: \nIdeas en 5 minutos: https://goo.gl/oLiN2F\nFacebook: https://www.facebook.com/ideasen5minu...\nEl lado Genial de Youtube: https://goo.gl/r4jisX',
    duration: 12.833333333333334,
  },
  {
    id: 'GSRNKbQoS1M',
    title: "George Floyd's memorial service held in Minneapolis | USA TODAY",
    description:
      "Reverend Al Sharpton is delivering the eulogy at George Floyd's memorial service at North Central University in Minneapolis.\nRELATED: George Floyd remembered as 'gentle giant' by friends https://www.youtube.com/watch?v=12f2Fa0XPAQ&t=4s \n\nAlong with family and friends, celebrities, civil rights leaders and politicians are expected to attend the memorial service for Floyd. \n\nTen days after Floyd's death, the nation is still reeling from the blatant injustice the viral video of the confrontation appears to show. Floyd died on Memorial Day after Derek Chauvin knelt on his neck for almost nine minutes while Floyd pleaded that he could not breathe. Protests across the U.S. remained large but were more subdued Wednesday night.\n\n» Subscribe to USA TODAY: http://bit.ly/1xa3XAh\n» Watch more on this and other topics from USA TODAY: https://bit.ly/2IMPbAh\n» USA TODAY delivers current local and national news, sports, entertainment,  finance, technology, and more through award-winning journalism, photos, videos and VR.\n\n#georgefloyd #floydmemorial #usatoday",
    duration: 138.33333333333334,
  },
  {
    id: 'zF7z7XF-yZM',
    title: 'Что скрывают объявления: Porsche против ПОЕЗДА?!',
    description:
      '— Что скрывают объявления: предыдущие части https://www.youtube.com/playlist?list=PLB588ZZtekcaKph0hzyJl4c0bCtkFGgnE\n— Покупаем машину для каскадёра https://youtu.be/Etu3lhW0eB8\n— Подробнее об отчёте Авто.ру: auto.ru/history\n\nМы уже не раз показывали, как фотографии из объявлений и внимательность помогают легко определять автомобили с плохой историей. Но порой машину так хорошо готовят к продаже, что по фотографиям почти невозможно найти следы ДТП. Даже если ДТП было настолько грандиозным, что о нём писали в новостях. Все подробности — в новом выпуске «Осторожно, окрашено»!',
    duration: 36.416666666666664,
  },
  {
    id: 'ps8qXjeYvIk',
    title: 'Introduction to Google Help',
    description:
      'Matt from the Google team gives a musical tour of the Google Help Center. Audio production by Andrew Song.\n\nGiven that the Google Help Center (support.google.com) has a new look and feel, this video no longer appears in specific articles.',
    duration: 1.1,
  },
  {
    id: 'Q2vuWyLpFGs',
    title:
      'London protests: Angry crowd turns on reporter, cameraman | 9 News Australia',
    description:
      "9 News Australia's Europe Correspondent Ben Avery and camera operator Cade Thompson were confronted by an angry crowd while broadcasting live from demonstrations held in London in solidarity with those in the US following the death of Minneapolis man George Floyd. Subscribe: https://bit.ly/2noaGhv Get more breaking news at: https://bit.ly/2nobVgF\n\nJoin Nine News for the latest in news and events that affect you in your local city, as well as news from across Australia and the world.\n\nFollow Nine News on Facebook: https://www.facebook.com/9News/\nFollow Nine News on Twitter: https://twitter.com/9NewsAUS\nFollow Nine News on Instagram: https://www.instagram.com/9news/\n\n#9News #BreakingNews #NineNewsAustralia #9NewsAUS",
    duration: 11.15,
  },
  {
    id: 'c9Zzr_w1IZI',
    title: 'ПРОПАВШИЕ СРЕДИ ЖИВЫХ (советский фильм детектив)',
    description:
      'На протяжении нескольких месяцев в городе угоняют легковые машины — не помогают ни сигнализация, ни “секретные” замки. Но когда следователь, наконец, выходит на след, преступника находят мертвым...',
    duration: 79.88333333333334,
  },
  {
    id: 'FGZdYPS8PPw',
    title: 'Его звали Роберт',
    description:
      'Молодой ученый, руководитель экспериментальной лаборатории, создал биохимическую модель человека. Робот — точная копия своего создателя. Для эксперимента Роберта решили выпустить\nв жизнь, к людям...\nДиплом жюри фильму и приз «Серебряный астероид» за лучшее исполнение мужской роли О.Стриженову на VI МКФ фантастических фильмов в Триесте (1968).\nПриз «Золотой шар» на МКФ фантастических фильмов в Милане, Италия (1969).',
    duration: 80.15,
  },
  {
    id: 'GZULOGZQdiY',
    title:
      'Watch in full: George Floyd memorial held in Minneapolis for family and friends',
    description:
      "A memorial service is held for George Floyd at North Central University in Minneapolis, with Reverend Al Sharpton delivering the eulogy.\n\nKeep up with the latest updates: https://www.telegraph.co.uk/news/2020/06/04/george-floyd-death-us-uk-protests-black-lives-matter-news/?WT.mc_id=tmg_youtube_offsite_televideo-youtubevideo_4JuneTrump&utm_source=tmgoff&utm_medium=tmg_youtube&utm_content=offsite_televideo&utm_campaign=tmg_youtube_offsite_televideo-youtubevideo_4JuneTrump\n\nTelegraph.co.uk and YouTube.com/TelegraphTV are websites of The Telegraph, the UK's best-selling quality daily newspaper providing news and analysis on UK and world events, business, sport, lifestyle and culture.",
    duration: 146.28333333333333,
  },
  {
    id: '1lF7CSXCMws',
    title: '🎥 SECRET WINDOW (2004) | Full Movie Trailer in Full HD | 1080p',
    description:
      'A writer is accused of plagiarism by a strange man, who then starts haunting him for "justice."\n----------------\nCast: Johnny Depp, Maria Bello, John Turturro #MoviePredictor #trailer #BestMovie',
    duration: 2.4166666666666665,
  },
  {
    id: 'rlHXhff7d1k',
    title: '[Hindi] PMPL South Asia Day 1 W 3 | PUBG MOBILE Pro League S1',
    description:
      'Welcome to PUBG Mobile Official Stream!\n\nGet READY to witness action-packed PUBG Mobile LIVE! \n\n#PMPL2020 Season 1 South Asia Day 1, Week 3 is here! Top 20 Squads from South Asia will battle it out for 3 weeks for the ultimate slot of the World League!\n\n9 Teams from India Region and 6 Teams from South Asia Region proved themselves in the PMCO Regional Stages and are now facing a bigger challenge against PMCO 2019 Global Finals and Prelims Invited teams! \n\nWill the Invited teams continue their form? Will the teams qualified from PMCO Regional Finals 2020 grab this chance and take the win? Tune in and find out!\n\nShout out the team and players you support in the chat!\n\nMatches:\n\nMatch 1: Erangel [ A B C D ]\nMatch 2: Sanhok [ A B C D ]\nMatch 3: Miramar [ A B C D ]\nMatch 4: Vikendi [ A B C D ]\nMatch 5: Sanhok [ A C D E ]\n\n\nPMPL 2020 Groups: \n\nGroup A :\n\n1. TSM | Entity\n2. Marcos Gaming\n3. Team Hype\n4. Celtz\n\nGroup B :\n1. Soul\n2. Team Tamilas\n3. INES\n4. VSG Crawlers\n\nGroup C :\n1. SynerGE\n2. MegaStars\n3. JyanMaara\n4. UMExRxN\n\nGroup D :\n1. IND\n2. Orange Rock\n3. DeadEyes Guy\n4. Fnatic\n\nGroup E :\n1. Powerhouse\n2. GodLike\n3. Team Xtreme\n4. ElementriX\n\nPrizepool\nWinner: $10,000 \nRunner up: $8,000  \n2nd Runner up: $6,000 \n4th: $4,000 \n5th - 6th: $3,500 \n7th - 8th: $2,000 \n9th - 12th: $1500\n13th - 16th: $1250\n17th - 20th: $1000\n\n#PUBGMOBILE #PMPLSA\n\nFollow us:\nFacebook - https://www.facebook.com/PUBGMESPORTSOFFICIAL/\n\nInstagram - https://instagram.com/esportspubgmobile\n\nTwitter - https://twitter.com/EsportsPUBGM',
    duration: 318.71666666666664,
  },
  {
    id: 'wfNankqNu3E',
    title: 'How Close Are We to Flying Cars? | How Sci-Fi Inspired Science',
    description:
      "Could flying cars be the answer to avoiding bumper-to-bumper traffic? Inventors have been trying for decades to create flying cars, though it seems the idea of self-driving cars may soon be closer to science reality.\n➡ Subscribe: http://bit.ly/NatGeoSubscribe\n\nAbout National Geographic:\nNational Geographic is the world's premium destination for science, exploration, and adventure. Through their world-class scientists, photographers, journalists, and filmmakers, Nat Geo gets you closer to the stories that matter and past the edge of what's possible.\n\nGet More National Geographic:\nOfficial Site: http://bit.ly/NatGeoOfficialSite\nFacebook: http://bit.ly/FBNatGeo\nTwitter: http://bit.ly/NatGeoTwitter\nInstagram: http://bit.ly/NatGeoInsta\n\nHow Close Are We to Flying Cars? | How Sci-Fi Inspired Science\nhttps://youtu.be/wfNankqNu3E\n\nNational Geographic\nhttps://www.youtube.com/natgeo",
    duration: 3.1,
  },
  {
    id: 'GZtvvczz7uc',
    title: '2020 HOUSE TOUR!! - JoJo Siwa',
    description:
      '2020 HOUSE TOUR!! - JoJo Siwa\n✰SUBSCRIBE✰ ► https://www.youtube.com/channel/UCeV2...\n\nCOME SEE ME PERFORM LIVE ON TOUR! - http://www.jojodreamtour.com\n✰GO WATCH MY NEW MUSIC VIDEO!! ► https://www.youtube.com/watch?v=RzM56PzKITA\n\n✰ MORE VIDEOS ON MY VLOG CHANNEL!✰ ► https://www.youtube.com/user/1jessalynn\n\n✰ FOLLOW ME ON SOCIAL MEDIA!✰\n✔︎INSTAGRAM (@ItsJoJoSiwa) ► https://www.instagram.com/ItsJoJoSiwa\n✔︎TWITTER (@ItsJoJoSiwa) ► http://twitter.com/ItsJoJoSiwa\n✔︎FACEBOOK ► https://www.facebook.com/itsjojosiwa/\n✔︎TIK TOK ► @ItsJoJoSiwa\n\n✰SEE YOU SOON!!!✰',
    duration: 7.833333333333333,
  },
  {
    id: 'cbvXIi7hV5I',
    title:
      'Former Deputy Attorney General Rod Rosenstein testifies on Crossfire Hurricane Investigation',
    description:
      'Former Deputy Attorney General Rod Rosenstein testifies on Crossfire Hurricane Investigation before Senate Judiciary Cmte http://cs.pn/2Xqtk7X',
    duration: 194.73333333333332,
  },
  {
    id: 'cvRXYYC7Rbs',
    title: 'Остров сокровищ  2 серия',
    description:
      'Отважный Джим Хоккинс и его друзья отправляются на поиски сокровищ, но корабль, который они зафрахтовали для этого, оказался пиратским...',
    duration: 65.73333333333333,
  },
  {
    id: 'txmHBO5BDTY',
    title: 'LOS 25 MEJORES CONSEJOS DE ESPIONAJE QUE NUNCA ANTES HABÍAS VISTO',
    description:
      'INCREÍBLES CONSEJOS SECRETOS DE ESPIONAJE\n\nEl video de hoy es una asignatura de alto secreto y deberías aceptarla, ya que te enseñará increíbles consejos de espionaje ¡que ni siquiera sabes que existen! Ahora mismo comienza tu misión secreta, así que, toma asiento y disfruta el viaje. Comenzaremos mostrándote cómo escribir un mensaje secreto con tinta invisible. Nadie podrá leerlo a menos que les digas cómo.\n\nTambién aprenderás cómo ocultar tu teléfono y mantenerlo seguro, pase lo que pase. ¡Nadie adivinará dónde está! Si necesitas decirle a alguien algo sin que otras personas lo sepan, entonces realmente necesitas revisar el mensaje codificado. ¿Quieres llevar tus habilidades de espionaje a otro nivel? Mire este video y ve cómo hacer tu propia tinta invisible con jabón.\n\n¡Asegúrate de ver este video hasta el final para aprender también cómo abrir un sobre sin rasgar el papel!\n\n\nMARCAS DE TIEMPO:\n\n1:36 - Tinta invisible\n2:55 - El escondite del celular\n5:22 - Mensaje secreto codificado\n8:23 - Tinta de jabón\n10:55 - Abrir un sobre\nEste video fué hecho con fines de entretenimiento. No garantizamos la integridad, seguridad y/o fiabilidad. Cualquier acción que se realice con la información en este video queda estrictamente bajo su propio riesgo, y no seremos responsables de ningún daño o pérdida. Es responsabilidad del espectador usar su juicio, cuidado y las precauciones necesarias si planea replicar lo visto aquí.\n\nEl siguiente video presenta actividades realizadas por nuestros actores dentro de un entorno controlado; utilice su criterio, cuidado y precauciones necesarias si planea replicarlo.\n\n--------------------------------------------------------------------------------------- \n\nMúsica de Epidemic Sound: https://www.epidemicsound.com/\nImágenes: https://www.depositphotos.com\n\nSuscríbete a nuestro canal: https://goo.gl/cYzfZP \n\n---------------------------------------------------------------------------------------- \n\nNuestras redes sociales: \nIdeas en 5 minutos: https://goo.gl/oLiN2F\nFacebook: https://www.facebook.com/ideasen5minu...\nEl lado Genial de Youtube: https://goo.gl/r4jisX',
    duration: 12.583333333333334,
  },
  {
    id: 'KTlUdQmRviI',
    title:
      'After the Waves | Social Enterprise Short Film | by AirAsia Foundation',
    description:
      '#DestinationGOOD #DestinationGOODShortFilms\nOn December 26, 2004, the coast of Aceh was struck by the deadliest tsunami ever recorded.  Fifteen years later, a social enterprise helps them regenerate their livelihood and reap richer harvest.',
    duration: 4.4,
  },
  {
    id: 'ZEvhwYuRA5g',
    title:
      'Australian reporter assaulted on live TV in London | Nine News Australia',
    description:
      "9 News Australia's Europe Correspondent Sophie Walsh was assaulted on live television while reporting from Hyde Park in London by a man making 'stabbing' motions toward her. Subscribe: https://bit.ly/2noaGhv Get more breaking news at: https://bit.ly/2nobVgF\n\nJoin Nine News for the latest in news and events that affect you in your local city, as well as news from across Australia and the world.\n\nFollow Nine News on Facebook: https://www.facebook.com/9News/\nFollow Nine News on Twitter: https://twitter.com/9NewsAUS\nFollow Nine News on Instagram: https://www.instagram.com/9news/\n\n#9News #BreakingNews #NineNewsAustralia #9NewsAUS",
    duration: 5.516666666666667,
  },
  {
    id: '_qZT7ZxD50M',
    title: 'Սիրուն Սոնա, Սերիա 108 / Beautiful Sona / Sirun Sona',
    description: '#ՍիրունՍոնա #ATV #PanArmenianTV #SirunSona',
    duration: 41.5,
  },
  {
    id: 'ywODFIrWIfc',
    title:
      'Webinar com Fabio Kanczuk, Diretor de Política Econômica do Banco Central do Brasil',
    description: '',
    duration: 61.68333333333333,
  },
  {
    id: 'JGEJxAWZMzE',
    title:
      'CID - सीआईडी - Ep 479 - The Case of the Vanishing Magician - Full Episode',
    description:
      "Click here to Subscribe to SET India Channel: https://www.youtube.com/user/setindia?sub_confirmation=1\n\n\nEp 479: The Case of the Vanishing Magician\n----------------------------------------------------------------------------------\nGayaabi gets vanished from an enclosed box and a dead body drops out instead. Thereafter, three murders take place, all of which are in relation to Gayaabi. Gayaabi, on the other hand, has a talent of hypnotizing any person from which he didn't even spare Inspector Daya. Will ACP Pradyuman succeed in nabbing this great magician whose skills cannot be undermined?\n\n\nAbout The Show:\n---------------------------------------------------------\nThe first thrilling investigative series on Indian Television is today one of the most popular shows on Sony Entertainment Television. Dramatic and absolutely unpredictable, C.I.D. has captivated viewers over the last eleven years and continues to keep audiences glued to their television sets with its thrilling plots and excitement. Also interwoven in its fast-paced plots are the personal challenges that the C.I.D. team faces with non-stop adventure, tremendous pressure and risk, all in the name of duty. \nThe series consists of hard-core police procedural stories dealing with investigation, detection and suspense. The protagonists of the serial are an elite group of police officers belonging to the Crime Investigation Department of the police force, led by ACP Pradyuman [played by the dynamic Shivaji Satam]. While the stories are plausible, there is an emphasis on dramatic plotting and technical complexities faced by the police. At every stage, the plot throws up intriguing twists and turns to keep the officers on the move as they track criminals, led by the smallest of clues.",
    duration: 39.7,
  },
  {
    id: 'D5S97v1xWvg',
    title: 'Coinigy Bitcoin Trading Platform - Getting Started',
    description:
      'Coinigy is a Bitcoin & Cryptocurrency Trading Platform that connects to 25+ Bitcoin Exchanges with High-Definition Charts and more. \n\nWatch this quick getting started video to learn how to setup your account!\n\nSign up @ Coinigy.com',
    duration: 4.083333333333333,
  },
  {
    id: 'ESjvg0cUdSo',
    title: 'Additional Terminology 1.1.1',
    description:
      "Here are some additional terms that boaters should be familiar with before operating a boat:\n\nAFT - near or at the stern of the boat.\nBEAM - the width of a boat, also the direction at right angles to the centerline of a vessel.\nBILGE - the lowest point of a boat's interior hull.\nDRAFT - the vertical distance from the waterline to the lowest point of the keel; the minimum depth of water in which a vessel will float.\nFORWARD - aboard a boat, the direction to the front, to the bow.\nFREEBOARD - the vertical distance from the waterline to the gunwale.\nKEEL - the main structural member of a boat; its backbone; the lateral area beneath the hull that helps to provide stability and reduce the sideways drift of a boat.\nWATERLINE - the intersection of a boat's hull and the water's surface.",
    duration: 1.1666666666666667,
  },
  {
    id: '0ui923iXlKU',
    title:
      "Watch Barack Obama's full speech on the George Floyd protests in the United States",
    description:
      '"There\'s something different here": Former U.S. president Barack Obama looked back at protests in the 1960s, saying the current demonstrations are far more representative of American society. \n\nSubscribe to CTV News to watch more videos: https://www.youtube.com/ctvnews\r\n\r\nConnect with CTV News:\r\nFor the latest news visit: http://www.ctvnews.ca/ \r\nFor a full video offering visit the CTV News Network: http://www.ctvnews.ca/video \r\nCTV News on Facebook: https://www.facebook.com/CTVNews  \r\nCTV News on Twitter: https://twitter.com/CTVNews  \r\nWatch CTV News on Twitter: https://twitter.com/WatchCTVNews \r\nCTV News on Google+: https://plus.google.com/+CTVNews/posts \r\nCTV News on Instagram: https://instagram.com/ctvnews/ \r\nCTV News on Pinterest: https://www.pinterest.com/ctvnews \r\n\r\n---\r\nCTV News is Canada\'s most-watched news organization both locally and nationally, and has a network of national, international, and local news operations.',
    duration: 15.483333333333333,
  },
  {
    id: 'pjHDTqow7pw',
    title: "방탄소년단(BTS), 슈스의 컴백 출국길 'Let's go PERSONA!' (인천공항)",
    description:
      "[스포츠서울 박경호기자] 그룹 방탄소년단(BTS)이 신규 앨범 '맵 오브 더 소울 : 페르소나(MAP OF THE SOUL : PERSONA)' 컴백무대를 위해 10일 오후 미국 뉴욕으로 출국했다.\n\n방탄소년단은 오는 12일 미국 NBC 코미디쇼 'SNL'을 통해 첫 컴백 무대를 가진다.\n\npark5544@sportsseoul.com\n\n사진 | 유튜브",
    duration: 2.9833333333333334,
  },
  {
    id: 'hIenLfRHxRk',
    title: 'БЛЯ-МАЖОР / ЖЕНЩИНА С КОЗЛОМ',
    description:
      'Депутатским женам, пострадавшим во имя налоговых деклараций своих мужей, посвящается...\nСтихи: Дмитрий Филатов. Исполняет Михаил Ефремов. Лабает Петюня Тихонов.\n\nСмотрите ток-шоу "ГОСПОДИН ХОРОШИЙ" на http://tvrain.ru/ каждый понедельник в 22:30. Все видео проекта доступны также на http://tvrain.ru/teleshow/mr_good/',
    duration: 4.483333333333333,
  },
  {
    id: '4RuTSCh5ikw',
    title: 'Ахбори Тоҷикистон ва ҷаҳон (04.06.2020)اخبار تاجیکستان .(HD)',
    description:
      'Агентии ҳавонавардии Тоҷикистон мегӯяд, то ҳанӯз ба парвозҳои байналмилали иҷозат надодааст, роҳҳои баста нархи меваву сабзавотро поин бурд ва муаллимон шикоят доранд, ки се моҳ боз маош нагирифтаанд.',
    duration: 15.083333333333334,
  },
  {
    id: '9XWA84yR5dc',
    title: 'BECKY MOVIE REVIEW | Double Toasted',
    description:
      "BECKY MOVIE REVIEW | Double Toasted - You were all probably very shocked at the trailer for Becky when you saw Kevin James being a bad guy facing off against a little girl, Lulu Wilson, and her father, Joel McHale! Well, the release date was not altered insanely like a lot of other movies and this is definitely something that whether it's theatrical or streaming, the plot is sure to suck you in. I mean, what else is there to watch in June 2020? Don't answer that. Watch this bloody battle as Becky goes wild on some bad guys. \n\nHead on over to Doubletoasted.com for funny movie reviews and movie trailer reactions to official trailers of 2020 livestreamed for your viewing pleasure all throughout the week!",
    duration: 32.916666666666664,
  },
  {
    id: 'LvSoFQBmoL4',
    title: 'Tin Tan: Fuerte, Audaz y Valiente - Película Completa',
    description:
      'Angel y Javier le sacan a la vida más de lo que ella les puede dar estafando a todo el que se les ponga enfrente, pero como a todos, les llegarála hora de pagar.',
    duration: 92.23333333333333,
  },
  {
    id: 'UOXxZLA63vM',
    title: 'Les Emmerdeurs - Ep 7 "The Captive"',
    description:
      'Pierrot is held by the Nazis. He must resist Dietrich’s tortures to find out the Resistance’s secrets. Schäffer seems to be kinder, and reveals to Pierrot the full extent of his power and how to master it.\n\nAvailable with YouTube Premium - http://youtube.com/Premium. To see if Premium is available in your country, click here: https://goo.gl/A3HtfP',
    duration: 29.25,
  },
  {
    id: '7iTFZjTpeMw',
    title: 'Tin Tan: Escuela De Verano (1959) - Película Completa',
    description:
      'Ve la película completa de Tin Tan: Escuela De Verano\n\nCasimiro Bellavista (Tin-Tan) se hace con la dirección de la escuela de verano, cuando sorprende a Archibaldo (un estafador internacional) robando el dinero recaudado con las colegiaturas de las alumnas que vienen de todo el mundo, y comienza una serie de divertidos enredos cuando Archibaldo intenta recuperar el botín que dejó en la escuela al ser sorprendido, mientras que Casimiro hará lo posible por llevar a buen puerto las clases en la escuela, mientras se recrea la pupila con las hermosas alumnas.\n\nDanos me gusta en Facebook: \nhttps://www.facebook.com/Butacatv-157544434297292/',
    duration: 92.71666666666667,
  },
  {
    id: 'EKIFFIRa9zs',
    title: 'Full George Floyd memorial service in Minneapolis',
    description:
      'KARE 11 is broadcasting and live streaming the memorial service for George Floyd at North Central University in Minneapolis. The service is closed to the public. People in Minneapolis and around the world are pausing to honor and celebrate the life of Floyd, who died more than a week ago while being restrained by police. \n\n https://www.kare11.com/georgefloyd\n\n\nWelcome to the KARE 11 News YouTube channel. Subscribe to our channel for compelling and dramatic storytelling, award winning investigations, breaking news and information you can use. \n\nText your photos, videos and news tips to 763-797-7215. \n\n» Subscribe to KARE 11 on YouTube: https://www.youtube.com/user/KARE11?s... \n» Watch more KARE 11 video: https://www.youtube.com/user/KARE11/v... \n» Visit KARE11.com: http://www.kare11.com/ \n» Download our app! https://www.kare11.com/appredirect/ \n» Find KARE 11 on Facebook: https://www.facebook.com/KARE11/ \n» Follow KARE 11 on Twitter: https://twitter.com/kare11 \n» Follow KARE 11 on Instagram: https://www.instagram.com/kare11/',
    duration: 155.96666666666667,
  },
  {
    id: 'zqeSkjXOALg',
    title:
      'O gnoju na Facebooku, dawcach nerek - motocyklistach i syfie w sklepach [CZARNE OWCE] [#1] - DEBIUT!',
    description:
      'Zawsze jest ten pierwszy raz. Oto premierowy odcinek Czarnych Owiec, a w nim.. Obciach na facebooku, wnerwiający motocykliści na szlifierkach, kiedy piątek trzy i mały diss na Zjednoczone Emiraty Katolickie. \n\n🔽🔽🔽 WIĘCEJ 🔽🔽🔽\n\n✪ DOŁĄCZ DO PATRONÓW!🔥 http://patronite.pl/CzarneOwce \n✪ SKLEP (koszulki, gadżety, duperele)🛒 http://czarneowce.pl/sklep\n✪ SUBSKRYBUJ KANAŁ👉🔔 http://youtube.com/CzarneOwceShow?sub_confirmation=1\n✪ POLUB FANPAGE👍❤ http://facebook.com/CzarneOwceShow\n✪ PODCASTY🎧 http://anchor.fm/czarneowce\n✪ OFICJALNA STRONA KANAŁU🌐 http://czarneowce.pl\n\n📌 w imieniu naszych niesłyszących widzów ZACHĘCAMY DO OPRACOWANIA NAPISÓW W J.POLSKIM LUB (jeśli masz czas) W INNYCH JĘZYKACH! Mistrzów świata nagradzamy owczymi gadżetami lub darmowym wjazdem na ZLOT widzów i kolejką na nasz koszt:)\n\n\nP L A Y L I S T Y :\n- - - - - - - - - - - - - -\n▶ [CZARNE OWCE]² 📼 http://youtube.com/playlist?list=PLtSdV9H8oCx1BuRkZ6J-0SgJ8pP0He6d7\n▶ [CZARNE OWCE SHOW]🎤 http://youtube.com/playlist?list=PLtSdV9H8oCx0_lmAbhEXCTBGSYaY5Rzmr\n▶ [TELEDYSKI] 💿 https://www.youtube.com/playlist?list=PLtSdV9H8oCx2ZYGw8AZ-SCMcN-RIB2EHH\n▶ [OWCZARNIA] [nasza animacja] 🐑 https://www.youtube.com/playlist?list=PLtSdV9H8oCx3CQStYfdCDMPI7wx5TRtXz \n▶ [DEZINFORMACJE24] 📡 http://youtube.com/playlist?list=PLtSdV9H8oCx0heahS8tV9J5CeM84Dn0Cm\n▶ [TASIEMIEC] [recenzje seriali] 📺 https://www.youtube.com/playlist?list=PLtSdV9H8oCx2gPqQZ1yDqEbhfcuHjPmMQ \n▶ [SUSZARNIA] [dowcipy] 😁 https://www.youtube.com/playlist?list=PLtSdV9H8oCx0C8UxnnJLwRvFaNIfcFLXh \n▶ [ODPADY] [making of] 🚮 https://www.youtube.com/playlist?list=PLtSdV9H8oCx3s7LB0DTgP1n0amt2F14In \n▶ [COVERY WIDZÓW] 🎸 https://www.youtube.com/playlist?list=PLtSdV9H8oCx2ZADxTsPPwTZqOjcErUgrU\n\n\nP O D C A S T Y :\n- - - - - - - - - - - - - -\n🎧 SPOTIFY http://open.spotify.com/show/0rYYwAr4592fb3asRpFdn9\n🎧 GOOGLE PODCASTS http://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9kMTVlODkwL3BvZGNhc3QvcnNz\n🎧 RADIO PUBLIC http://radiopublic.com/czarne-owce-WxOwzV\n🎧 OVERCAST http://overcast.fm/itunes1475371311/czarne-owce\n🎧 BREAKER http://breaker.audio/czarne-owce\n🎧 APPLE (hehe) http://podcasts.apple.com/pl/podcast/czarne-owce/id1475371311\n\n\n\\m/ W STADZIE SIŁA !!!! \\m/\n\n\n#1_NA_KARCIE_NA_CZASIE_W_PRL',
    duration: 24.15,
  },
  {
    id: 'ggof8jp-cQE',
    title:
      'Ernie Johnson & Malcolm Brogdon On Police Brutality, Racism & Our Shared Responsibility For Change',
    description:
      'Watch tonight’s #NBATogether with Ernie Johnson as Malcolm Brogdon of the Pacers joins Ernie to discuss the killing of George Floyd, demonstrating against racism and police brutality, and our shared responsibility to drive change. #NBAVoices \n\nSubscribe to the NBA: https://on.nba.com/2JX5gSN\r\n\r\nFull Game Highlights Playlist: https://on.nba.com/2rjGMge\r\n\r\nFor news, stories, highlights and more, go to our official website at https://nba_webonly.app.link/nbasite\r\n\r\nGet NBA LEAGUE PASS: https://nba.app.link/nbaleaguepass5',
    duration: 32.61666666666667,
  },
  {
    id: 'uDnPxLxDsvA',
    title:
      'Live: Rod Rosenstein Testifies Before Senate On Russia Investigation | NBC News',
    description:
      'Former Deputy Attorney General Rod Rosenstein testifies before the Senate Judiciary Committee on the origins of the Russia investigation.\n\n» Subscribe to NBC News: http://nbcnews.to/SubscribeToNBC\n» Watch more NBC video: http://bit.ly/MoreNBCNews\n\nNBC News is a leading source of global news and information. Here you will find clips from NBC Nightly News, Meet The Press, and original digital videos. Subscribe to our channel for news stories, technology, politics, health, entertainment, science, business, and exclusive NBC investigations.\n\nConnect with NBC News Online!\nVisit NBCNews.Com: http://nbcnews.to/ReadNBC\nFind NBC News on Facebook: http://nbcnews.to/LikeNBC\nFollow NBC News on Twitter: http://nbcnews.to/FollowNBC\nFollow NBC News on Instagram: http://nbcnews.to/InstaNBC\n\nLive: Rod Rosenstein Testifies Before Senate On Russia Investigation | NBC News',
    duration: 194.28333333333333,
  },
  {
    id: 't1wM1FSTIm0',
    title: 'Светлый путь / The Bright Way',
    description:
      'Смотрите наши фильмы - на сайте http://кино-мосфильм.рф\n\nПодпишитесь на наши страницы в социальных сетях!\nFacebook: https://www.facebook.com/MosfilmOfficial\nВКонтакте: https://vk.com/club20286388\nInstagram: https://www.instagram.com/mosfilm_official/\n\nНеграмотная, но трудолюбивая деревенская девушка Таня, приехав в подмосковный город и поработав домработницей, нашла свое счастье в учебе и коллективном труде. За трудовые заслуги её награждают орденом Ленина: вчерашняя золушка оказывается в прекрасном дворце, где от радости кружится в танце среди хрустальных люстр и позолоченных зеркал. На протяжении всего своего "светлого пути" героиня тайно влюблена в обаятельного молодого инженера, но считает себя недостойной такого умного и интеллигентного человека - пока её не награждают орденом.',
    duration: 93.46666666666667,
  },
  {
    id: 'UvHCQswnjEg',
    title: 'Transformers, a few basics',
    description:
      "Before the rectifier was discovered the theory was electrons flowed from positive to negative creating a current flow. When the tubes/valve rectifier was discovered, this is when it was discovered that electrons flow from negative to positive. They had a 50-50 chance, they had guessed wrong. Electrons do flow from negative to positive. Why some say that current flows from positive to negative is a mystery to me. One thing to keep in mind is what a theory actually is, it is someone's best guess and that's all it is. We really do not know the why of anything. Some people like to give the impression that what they're telling you is the way it is, when in fact, we don't know. We don't know why electrons flow from negative to positive and we don't know what electrons really are.\nTransformers, a few basics\nhttp://www.richardmcwhorter.com/Transformers/",
    duration: 8.95,
  },
  {
    id: '0W3_Lg46yh4',
    title: 'Petra, Jordania - Jordan',
    description:
      'Petra, Jordania. La ciudad Rosa del Desierto.\r\n\r\nPetra (Greek "πέτρα" (petra), meaning rock; Arabic: البتراء, Al-Batrāʾ) is a historic and archaeological city in the Jordanian governorate of Ma\'an that has rock cut architecture and a water conduits system. Established sometime around the 6th century BC as the capital city of the Nabataeans, it is a symbol of Jordan as well as its most visited tourism attraction. It lies on the slope of Mount Hor in a basin among the mountains which form the eastern flank of Arabah (Wadi Araba), the large valley running from the Dead Sea to the Gulf of Aqaba. Petra has been a UNESCO World Heritage Site since 1985.\r\n\r\nThe site remained unknown to the Western world until 1812, when it was introduced by Swiss explorer Johann Ludwig Burckhardt. It was described as "a rose-red city half as old as time" in a Newdigate Prize-winning sonnet by John William Burgon. UNESCO has described it as "one of the most precious cultural properties of man\'s cultural heritage." Petra was chosen by the BBC as one of "the 40 places you have to see before you die".\r\n\r\nPliny the Elder and other writers identify Petra as the capital of the Nabataeans and the centre of their caravan trade. Enclosed by towering rocks and watered by a perennial stream, Petra not only possessed the advantages of a fortress, but controlled the main commercial routes which passed through it to Gaza in the west, to Bosra and Damascus in the north, to Aqaba and Leuce Come on the Red Sea, and across the desert to the Persian Gulf.\r\n\r\nExcavations have demonstrated that it was the ability of the Nabataeans to control the water supply that led to the rise of the desert city, creating an artificial oasis. The area is visited by flash floods and archaeological evidence demonstrates the Nabataeans controlled these floods by the use of dams, cisterns and water conduits. These innovations stored water for prolonged periods of drought, and enabled the city to prosper from its sale.\r\n \r\nThe Theatre \r\nThe narrow passage (Siq) that leads to Petra \r\nPetra is known as the Rose-Red City for the colour of the rocks in which Petra is carvedAlthough in ancient times Petra might have been approached from the south via Saudi Arabia on a track leading around Jabal Haroun ("Aaron\'s Mountain"), across the plain of Petra, or possibly from the high plateau to the north, most modern visitors approach the site from the east. The impressive eastern entrance leads steeply down through a dark, narrow gorge (in places only 3--4 m (9.8--13 ft) wide) called the Siq ("the shaft"), a natural geological feature formed from a deep split in the sandstone rocks and serving as a waterway flowing into Wadi Musa. At the end of the narrow gorge stands Petra\'s most elaborate ruin, Al Khazneh (popularly known as "the Treasury"), hewn into the sandstone cliff.\r\n \r\nEl Deir ("The Monastery") A little further from the Treasury, at the foot of the mountain called en-Nejr, is a massive theatre, so placed as to bring the greatest number of tombs within view. At the point where the valley opens out into the plain, the site of the city is revealed with striking effect. The amphitheatre has been cut into the hillside and into several of the tombs during its construction. Rectangular gaps in the seating are still visible. Almost enclosing it on three sides are rose-coloured mountain walls, divided into groups by deep fissures, and lined with knobs cut from the rock in the form of towers.',
    duration: 7.633333333333333,
  },
  {
    id: 'PKdpMp3oQCY',
    title: 'Все не случайно. Фильм.',
    description:
      'Подписывайся на канал FILM.UA Group - https://www.youtube.com/user/FilmUaGroup\n\nСайт - http://goo.gl/oORnr\nIMDB - http://goo.gl/0PQvB\nInstagram - http://goo.gl/JiyAC\nTwitter - http://goo.gl/ur5Elo\nLinkedIn - http://goo.gl/myBN0\nVimeo - http://goo.gl/c57k6\n\nЖанр: мелодрама\nТип: телефильм\nГод: 2008\nПроизводство: FILM.UA, ШПИЛЬ\nРежиссер: Сергей Полуянов\nПродюсер: Виктор Мирский, Максим Уханов\nОператор: Глеб Вавилов\nАвтор сценария: Руслан Людмилин\nВ ролях: Иван Стебунов («Курсанты», «Город»), Карина Разумовская («Там, где живет любовь», «Сестры»), Екатерина Климова («Бедная Настя», «Грехи отцов»)\n\nПророчество старика из антикварной лавки... Случайный номер телефона на салфетке в кафе… Судьбоносная встреча… Словно расставляя знаки, жизнь предрекает будущее Андрея. Знакомство с одинокой девушкой Лилей преображает его жизнь. Она так не похожа на женщин, которых Андрей знал до нее. Лиля живет в мире бабушкиных грез и верит в чудеса. Неисправимый циник Андрей до беспамятства влюблен. Он хочет стать ей мужем, но Лиля оттягивает свадьбу, не решаясь сказать, что порок сердца, вряд ли, позволит ей иметь детей. Они просто живут и любят, не думая о завтрашнем дне… Безоблачное счастье разрушает глупое ДТП. Ужасная травма превращает Андрея из успешного бизнесмена в инвалида, прикованного к постели. Катастрофа становится началом череды сложных жизненных и психологических испытаний, выпавших на долю Лили и Андрея. Но пока есть любовь, есть надежда...',
    duration: 80.58333333333333,
  },
  {
    id: 'EX6iy4fvvi0',
    title:
      'Tens of Thousands March Through New York City for George Floyd | NBC New York',
    description:
      "After a full week of protests across New York City, thousands will gather again Thursday for a vigil to honor the life of George Floyd, whose death sparked demonstrations in all 50 states calling to end police brutality and racial justice.\n\nProtesters will join Terrence Floyd, George Floyd's brother who lives in Brooklyn, Thursday afternoon at Brooklyn's Cadman Plaza Park before taking to the streets and marching across the Brooklyn Bridge as they have done on previous days.\n\nThis time, the man whose brother's death sparked protests across America and, increasingly the globe, will lead them in that somber journey over the span to Foley Square, which has been the scene of a number of NYC rallies this week.",
    duration: 302.3333333333333,
  },
  {
    id: 'OM6rzDulG2c',
    title:
      'Senators Harris and Booker urge Senate to pass bill making lynching federal crime | ABC News',
    description:
      '"There is no reason for this...other than cruel and deliberate obstruction on a day of mourning."\n\nIn emotional speeches, Senators Kamala Harris and Cory Booker urge the Senate to pass a bill making lynching a federal crime. Sen. Rand Paul is standing in the way of its passage. https://abcn.ws/30gf7Mm\n\nSUBSCRIBE to ABC NEWS: https://bit.ly/2vZb6yP\nWatch More on http://abcnews.go.com/\nLIKE ABC News on FACEBOOK\nhttps://www.facebook.com/abcnews\nFOLLOW ABC News on TWITTER:\nhttps://twitter.com/abc\nGOOD MORNING AMERICA\'S HOMEPAGE:\nhttps://www.goodmorningamerica.com/',
    duration: 6.833333333333333,
  },
  {
    id: 'GMoKWRtTs3c',
    title: 'Phantom from Space (1953) old movie',
    description:
      'An alien being with the power of invisibility lands in Santa Monica. Killing two people who attacked him due to the menacing appearance of his spacesuit, the creature takes it off while being pursued by government authorities. -\n\nFollow us on social media :\n\nFacebook : https://www.facebook.com/CultCinemaClassics\nInsta : https://www.instagram.com/cultcinemaclassics',
    duration: 71.45,
  },
  {
    id: 'lfKv4VK_Itk',
    title: 'Partridge Family "Maybe Someday,"',
    description:
      "Written by Skip Webster\r\nProduced by Larry Rosen\r\nDirected by Bruce Bilson\r\nOriginal Air Date: March 2, 1973\r\n\r\nAll havoc breaks loose when Shirley buys a cuckoo clock for $29 at Bartlet's Department Store. It seems Bartlet's has recently installed a computer to handle all their accounts. When Shirley receives her computerized bill for the clock, it reads $290 instead of $29. She goes down to the store to straighten things out with Mr. Atwater. Atwater apologizes and instructs the computer operator, Tom, to program the 1984-Z to move the decimal point and correct the bill to read $29. (Tom is quite impressed with Laurie.)\r\n\r\nThe decimal point is moved -- but the wrong way! Shirley's bill is now $2,900. The computer has sent bad risk notices to other companies, ruining the Partridge's credit rating. It has also had a collection agency pick up the check from the family's last engagement.\r\n\r\nShirley again goes to Bartlet's; things are quite out of hand. While she's seeing the manager, Laurie leads a picket line outside the store. When they arrive home, the collection agency has repossessed all their furniture!\r\n\r\nMore promises from Atwater don't satisfy the kids. They form a conspiracy. While Laurie flirts with Tom and gets him to desert his post at the computer, Danny distracts Atwater and Keith tinkers with the computer. Shirley soon receives a check for $50,000! When Atwater rushes over to get the check back, the Partridge's tease him a little but finally return it. When everything is straightened out, Shirley realizes that the cuckoo clock doesn't even work!\r\nbbbbbbbbbS03E21",
    duration: 2.1166666666666667,
  },
  {
    id: 'dYWhNZXNo84',
    title: 'Shaqet El Talaba شقة الطلبة',
    description:
      'Subscribe To Mazzika Channel | إشترك علي قناة مزيكا\nhttp://bit.ly/Mazzika\n\nMovie : Shaqet El Talaba - شقة الطلبة\n\n• New Releases - الجديد من مزيكا \nhttp://bit.ly/Mazzika-New-Releases\n\n(C) 2017 Mazzika Group.\nArtist Booking: +201000842222 - booking@mazzikatv.com\nTo license this music contact us at license@mazzikatv.com',
    duration: 100.46666666666667,
  },
  {
    id: 'VhLEjySpbhs',
    title: 'MEA Smart Service ง่าย สะดวก สบาย ฟรี !!',
    description:
      'ร่วมหยุดแพร่ COVID-19 ง่าย ๆ  เพียงหยุดอยู่กับบ้าน และหันมาใช้ MEA Smart Service ครบทุกบริการด้านไฟฟ้า แบบ Online เพื่อคุณ ง่าย สะดวก สบาย ฟรี !!!\n\n*การชำระค่าไฟฟ้าผ่านทาง e-Payment หลากหลายช่องทาง ช่วยให้ชีวิต สะดวก สบาย ฟรีค่าธรรมเนียม!!\n1. การชำระผ่านทาง MEA Smart Life Application สามารถดาวน์โหลดฟรีได้ที่ http://onelink.to/measmartlife\n2. การหักผ่านบัญชีธนาคาร\n3. การหักผ่านบัญชีบัตรเครดิต\n4. การชำระผ่านทาง Mobile Banking\n5. การชำระผ่านทาง Internet Banking\n\n*การบริการขอใช้ไฟฟ้าใหม่ ขอใช้ไฟฟ้าเพิ่ม ง่าย ๆ ผ่านทาง MEASY คลิก https://eservice.mea.or.th\n\n*การสมัครรับเอกสารในรูปแบบ Electronic ไม่ว่าจะเป็น ใบแจ้งยอดค่าไฟฟ้า ใบเสร็จรับเงิน ใบกำกับภาษี หมดห่วงเรื่องเอกสารหาย คลิก http://ebill.mea.or.th\n\n*MEA Smart Life Application แอปเดียวจบ ครบทุกเรื่องไฟฟ้า แจ้งไฟฟ้าขัดข้องเพียง 2 คลิก เช็กค่าไฟย้อนหลังได้ 6 เดือน ชำระค่าไฟฟ้าผ่านบัตรเครดิต Visa, Master Card, BluePay และช่องทางเคาน์เตอร์เซอร์วิสด้วย Bar Code - QR Code สะดวกรวดเร็ว พร้อมตรวจสอบประวัติการใช้ไฟฟ้าแบบกราฟ และฟังก์ชันอื่น ๆ อีกมากมาย\n\nสะดวก…ทุกที่ ทุกเวลา / รวดเร็ว…ผ่านสมาร์ทโฟน / ปลอดภัย…หมดกังวล ลดความเสี่ยงติดเชื้อ #อยู่บ้านหยุดเชื้อเพื่อชาติ #MEA #MEAsmartservice\nด้วยความปรารถนาดีจาก MEA\n“อยู่บ้าน หยุดเชื้อ เพื่อชาติ”',
    duration: 0.5166666666666667,
  },
  {
    id: 'IJ_5VNr8mDE',
    title: 'Oohalu Gusagusalade Telugu Full Movie | Naga Shaurya, Rashi Khanna',
    description:
      'Watch & Enjoy Oohalu Gusagusalade Full Movie With English Subtitles Exclusively on Sri Balaji Video. #OohaluGusagusalade Movie Starring #NagaShaurya, #RashiKhanna & Srinivas Avasarala. Directed by Srinivas Avasarala and Produced by Sai Korrapati & Rajani Korrapati. Music of the film composed by Kalyani Koduri.\n\nN Venkateswara Rao (Naga Shourya) is an youngster whose ambition is to become a famous TV newsreader just like his bedridden father. He works in a TV studio that is owned by Uday (Srinivas Avasarala). Uday is a socially awkward guy and is bad at communicating with women. Venkateswara Rao falls in love with Prabhavathi (Rashi Khanna) few years back when he visits a relative in Vizag. They break-up because of a misunderstanding. The rest of the story is all about what happens when Uday wants to impress upon Prabhavathi.\n\n► Subscribe to YouTube Channel: http://goo.gl/tEjah\n► Like us on Facebook: https://www.facebook.com/sribalajivideo\n► Circle us on G+: https://plus.google.com/+SriBalajiMovies\n► Like us on Twitter: https://twitter.com/sribalajivideos\n► Visit Our Website: http://www.sribalajivideo.com\n\nFor more Entertainment Channels\n► Telugu Full Movies: http://tinyurl.com/pfymqun\n► Telugu Comedy Scenes: http://goo.gl/RPk9x\n► Telugu Video Songs: http://goo.gl/ReGCU\n► Telugu Action Scenes: http://goo.gl/xG9wD\n► Telugu Latest Promos: http://goo.gl/BMSQs\n\nWelcome to the Sri Balaji Video YouTube channel, The destination for premium Telugu entertainment videos on YouTube. Sri Balaji Video is a Leading Digital Telugu Entertainment Channel, This is your one stop shop for discovering and watching thousands of Indian Languages Movies, etc.\n•▬▬▬••▬▬▬••▬▬▬•▬▬▬•▬▬▬••▬▬▬••▬▬▬••▬▬▬•',
    duration: 131.1,
  },
  {
    id: 'hijWxWO1oc4',
    title:
      'New York Gov. Cuomo speaks on coronavirus and George Floyd protests — 6/4/2020',
    description:
      'New York Gov. Andrew Cuomo holds his daily press conference on the Covid-19 outbreak, which has infected more than 374,085 people across the state, according to data compiled by Johns Hopkins University.  Cuomo said Tuesday mass protests sparked by the death of George Floyd in police custody in Minneapolis could threaten the state’s progress in containing the spread of the coronavirus.   \n     \n\n» Subscribe to CNBC TV: https://cnb.cx/SubscribeCNBCtelevision\n» Subscribe to CNBC: https://cnb.cx/SubscribeCNBC\n» Subscribe to CNBC Classic: https://cnb.cx/SubscribeCNBCclassic\n\nTurn to CNBC TV for the latest stock market news and analysis. From market futures to live price updates CNBC is the leader in business news worldwide.\n\nConnect with CNBC News Online\nGet the latest news: http://www.cnbc.com/\nFollow CNBC on LinkedIn: https://cnb.cx/LinkedInCNBC\nFollow CNBC News on Facebook: https://cnb.cx/LikeCNBC\nFollow CNBC News on Twitter: https://cnb.cx/FollowCNBC\nFollow CNBC News on Instagram: https://cnb.cx/InstagramCNBC\n\n#CNBC\n#CNBCTV\nNew York Gov. Cuomo speaks on coronavirus and George Floyd protests — 6/4/2020',
    duration: 46.266666666666666,
  },
  {
    id: 'QKmPD95UihU',
    title:
      'Вопреки Здравому Смыслу / Against All Better Judgement. Фильм. StarMedia. Мелодрама',
    description:
      'Подпишись на канал и смотри новые фильмы и сериалы каждый день: http://www.youtube.com/user/StarMedia?sub_confirmation=1\nМарина — успешная бизнес-леди, специалист по ландшафтному дизайну. Более того, она — дочь замминистра строительства. И еще счастливая невеста. Все складывается просто замечательно. Но вот Марина застает жениха в пикантной ситуации с фотомоделью и ...отменяет свадьбу. Чтобы отвлечься, она соглашается выполнить заказ своего старого знакомого Сергея Баринова, нынче владельца крупной строительной фирмы...\n\nMarina, a successful landscape designer is about to be married. However, the day before she is due to introduce her fiancé to her rich and influential father, they quarrel and she accidentally locks herself out of her flat. Luckily for her a passer-by Bogdan comes to her rescue. Realising that he could be the solution to her other dilemma, Marina asks him if he would be willing to pose as her fiancé and meet her father. He refuses, suddenly realising that he has become very attracted to Marina, but does not want her or her family to find out that he has just been released from prison.\n\nФормат/Type: телевизионный фильм/film\nЖанр/Genre: мелодрама/melodrama\nГод производства / Year of production: 2007\nХронометраж / Duration: 90 минут/minutes\nРежиссер / Directed by: Сайдо Курбанов/Saido Kyrbanov\nСценарий / Written by: Николай Голиков/Nikolay Golikov\nОператор-постановщик / Director of photography: Андрей Квардаков/Andrey Kvardakov\nКомпозитор / Composer: Сергей Чичмели/Sergey Chichmeli\nПродюсеры / Producers: Валентин Опалев, Влад Ряшин/Valentin Opalev, Vlad Ryashin\nВ ролях / Cast: Ирина Апексимова, Эдуард Марцевич, Рамзес Джабраилов, Андрей Чернышов, Юрий Гумиров, Михаил Хмуров, Андрей Биланов, Светлана Фатина, Ирина Яковлева, Борис Клюев, Александр Симонец/Irina Apeksimova, Edyard Martsevich, Rasmi Dzhabrailov, Andrey Chernyshev, Yriy Gymirov, Mikhail Khmurov, Andrey Bilanov, Svetlana Fatina, Irina Yakovleva\n\nhttp://youtu.be/QKmPD95UihU\nСмотреть онлайн бесплатно "Вопреки Здравому Смыслу / Against All Better Judgement"\n\nОнлайн-кинотеатр StarMedia на YouTube\nhttps://www.youtube.com/starmedia\nСмотреть онлайн фильмы и сериалы бесплатно в хорошем качестве.\n\nhttps://www.starmediafilm.com\nЛучшие русские фильмы и сериалы, лучшие мелодрамы, военные фильмы, новинки кино, фильмы с русскими и английскими субтитрами — смотреть онлайн бесплатно в хорошем качестве в онлайн кинотеатре StarMedia на YouTube. Приятного просмотра!\n\nStar Media в социальных сетях:\nhttps://www.facebook.com/starmediacompany\nhttps://vk.com/starmediafilm\nhttp://www.odnoklassniki.ru/starmedia\nhttps://plus.google.com/+StarmediafilmRu\nhttps://twitter.com/StarMedia_2006\n\n#StarMedia',
    duration: 88.95,
  },
  {
    id: 'Ru2mocXnQzA',
    title: 'Krishna - The Birth Movie - Hindi',
    description:
      "Green Gold Animation Presents Krishna - The Birth Movie\n\nRated as the No.1 program on Cartoon Network-India for the week of 13th to 19th August 2006 (CS 4+ yrs). \nWinner of the Best Animated film from FICCI's BAF AWARD 2006.\n\nKrishna - The Birth is the enchanting tale of the miraculous birth of Lord Vishnu in the form of baby Krishna to Vasudev and Devaki. The story is set in an era when the human race was overburdened by the demonic forces of different kings posing themselves as the royal order.\n\nThe adventures of Krishna and his friends in Vrindavan is filled with action and excitement, as they discover new forests and face new demons. All through these fun adventures Krishna and his friends are challenged by demons which are finally destroyed by Krishna and Balram.\n\nNow you can bring home the fun... Own your favorite Krishna, Chhota Bheem, Krishna Balram, Mighty Raju, Chorr Police series on DVDs, Books, Activity Books, School Bags Etc...\nShop Online at www.greengoldstore.com\n\nBuy all the cool Movie Merchandise (T-Shirts, Mugs, Water Bottles, Sippers, Stationery, Cushions and lot more) at http://www.greengoldstore.com/movie-merchandise.html\n\nGet Attractive Combo Deals on your favorite Super Hero's Merchandise use this link:\nhttp://www.greengoldstore.com/chhota-bheem-deals.html\n\nSubscribe for more videos: http://bit.ly/greengoldtv\nWatch Chhota Bheem Kung Fu Dhamaka Trailer: https://youtu.be/Gr0q1wULRVU\nVisit: http://www.kungfudhamaka.com\n\nFollow us\nhttps://www.facebook.com/mightyraju\nhttps://www.instagram.com/iammightyraju\nhttps://twitter.com/iammightyraju",
    duration: 73.01666666666667,
  },
  {
    id: '5JUq9UvK8bc',
    title: 'Цветущая юность (1939) документальный фильм',
    description:
      'Советский документальный фильм о параде физкультурников в Москве 18 июля 1939 года. Первый советский цветной (трёхцветный) фильм, снятый при помощи специального трёхплёночного киносъёмочного аппарата ЦКС-1, и отпечатанный по отечественной гидротипной технологии методом хромированной желатины по способу П. Мершина. \n\nПарад физкультурников — мероприятие, проводившееся в СССР в сталинский период, призванное пропагандировать среди советского народа занятие физкультурой и спортом.\n\nМы знаем, как получить от видео максимальный доход. Подключайтесь к партнерской программе RVISION на YouTube https://rvision.tv\nВступайте в нашу группу в ВКонтакте: https://vk.com/rvision\nПодписывайтесь на нашу страницу в Facebook: https://www.facebook.com/rvisionchannel/\nПодписывайтесь на канал http://www.youtube.com/user/ClassicFilmRVision?sub_confirmation=1\nОставляйте ваши отзывы о работе сети RVISION: https://www.facebook.com/rvisionchannel/reviews\n\nЦветущая юность (1939) документальный фильм\n\nПроизводство: Мосфильм, Ленфильм\n\nАссистент: Г. Кабалов\nТехнический руководитель и цветооператор: Ф. Проворов\nЦветооператоры: В. Гарданов, А. Атакшиев, М. Магид\nОператор: Павел Мершин\nИнженер по цветной обработке: В. Фридман\nКомпозитор: Валентин Кручинин\n\nКатегории:\nМузыкальные: https://www.youtube.com/watch?v=A_wDsMYqHPc&list=PLAWK_P1s4gGD8GL1izwn0_JBYV1IW470Y\nКомедии: https://www.youtube.com/watch?v=BjpcrxV9rJY&list=PLAWK_P1s4gGAH9ZxYZuDcJ4Pjfa896Gi_\nЭкранизация: https://www.youtube.com/watch?v=WlqgMdjwe_4&list=PLAWK_P1s4gGB2rLvb6ZT2XZTV-v0PuYID\nДрама: https://www.youtube.com/watch?v=WlqgMdjwe_4&list=PLAWK_P1s4gGBgK5WsIt_1xerppH62ybL-\nИсторические: https://www.youtube.com/watch?v=DjwNXSiYIvs&list=PLAWK_P1s4gGAx1OqHR7OIKWfF28gsqC-F\nДокументальные: https://www.youtube.com/watch?v=fQ6428GyPF8&list=PLAWK_P1s4gGB-MS8gcp0vtRV_ikEh8ZoZ\nТеатральные постановки: https://www.youtube.com/watch?v=WeNyWIFeBz4&list=PLAWK_P1s4gGA9kmvDf4_uxtyuPDqPLmKu\nБиографические: https://www.youtube.com/watch?v=WzSr5_6C7_U&list=PLAWK_P1s4gGB2dGOUJR5Z9l9xHh5w8gfC\nВоенные: https://www.youtube.com/watch?v=M4-Zw3Dc2ZY&list=PLAWK_P1s4gGD-8JO3zrv9mKPikRU2vb7z\nСказки: https://www.youtube.com/watch?v=YdEdsS4JCTI&list=PLAWK_P1s4gGBNWMD6ZOEhyartId2Ohprb\nМультфильмы: https://www.youtube.com/watch?v=NCIThlEUuq0&list=PLAWK_P1s4gGAjBMnYAuiciXhEY5V6PBJq\nДетективы: https://www.youtube.com/watch?v=8sP7wcb77NE&list=PLAWK_P1s4gGDavVojT3uAdp4YRn74gpLn\nПриключения: https://www.youtube.com/watch?v=MudpDHW5IVA&list=PLAWK_P1s4gGA-k7eEDitnTRtjxlvU0fTY\nСатира: https://www.youtube.com/watch?v=A_wDsMYqHPc&list=PLAWK_P1s4gGB7Npb0148kZI-YVKpPeiVk\nНемое кино: https://www.youtube.com/watch?v=0QQjldNOzZE&list=PLAWK_P1s4gGA51Jori0nrhPyoSUzpEOd0\nДетские: https://www.youtube.com/watch?v=QJaKDpAf8ms&list=PLAWK_P1s4gGD10dNhcIgvm3MlJXjDKDls\nКиноповести: https://www.youtube.com/watch?v=2kyzBJ3jReg&list=PLAWK_P1s4gGAdundIvH-rg20U6nskMNqH\nМелодрамы: https://www.youtube.com/watch?v=8HoWG9El4qA&list=PLAWK_P1s4gGBhjXP7trZPJDlEgEl7td9Q\nФантастика: https://www.youtube.com/watch?v=hNDR0ym2914&list=PLAWK_P1s4gGDfqq6QeunrQwHuAnEiTDt7',
    duration: 17.366666666666667,
  },
  {
    id: 'lo7SH3S6zCw',
    title:
      'FITKIREE | Nepali Full Movie | Saugat Malla | Diya Maskey | Nischal Basnet | Anup Baral',
    description:
      'Jeevan Jung Thapa (Saugat Malla) is a loyal and hard-working police inspector. His life turns upside down when he finds himself trapped in between a brain-twisting case and road construction problems. In search of the man behind the kidnapping of a merchant, he eventually uncovers more clues to the case. Desperate to solve the case in order to gain promotion and live a happy life, he is left with nothing but his house which is marked for demolition, a worried wife and kid, and all the anger needed to solve the cliff-hanging case. The film depicts the increasing traffic problems along with increasing number of crimes of Kathmandu.\nCasting: Saugat Mall, Deeya Maskey, Nischal Basnet, Shanti Giri, Ramesh Ranjan Jha, Anup Baral\nColorist: Prabin Manandhar\nAction: Surya Thokar\nLyrics: Bhupendra Khadka\nMusic: Arjun Kumar, Girish Khatiwada\nSound Design & Mixing: Uttam NEupane\nBackground Score: Kiran Tuladhar\nEditing: Nimesh Shrestha\nCinematography: Purushottam Pradhan\nWritten: Yangesh\nProducers: Arjun Kumar, Sumit Mainali\nDirector: Anup Baral\n\n\nAll Rights Reserved © Hi-Tech Entertainment Pvt Ltd 2015\n\nSubscribe HiTechEntertainment Channel\nhttp://www.youtube.com/HiTechEntertai...\n\nCircle us on Google+\nhttps://plus.google.com/+HiTechEntert...\n\nLike us on Facebook\nhttps://www.facebook.com/hitechent\n\nFollow us on Twitter\nhttps://twitter.com/hitech_np\n\n#HiTechEntertainment\n#SaugatMalla\n#NischalBasnet',
    duration: 148.03333333333333,
  },
  {
    id: 'HXCHQZ5qQVs',
    title: 'Infestation - Full Documentary - Episode 02 Season 01',
    description:
      'Jellygeddon is nigh!\nSubscribe to Viewster on YouTube! ► http://bit.ly/ViewsterYT\nWatch more thrilling full Action Movies ► http://bit.ly/15BR76z\n\nDr. David Lodge examines the infestations that are spreading throughout our fresh and salt water systems and clogging our precious waterways.  “Jellygeddon” is on the rise as jellyfish are causing billions of dollars of damage every year.\n\nLike us on Facebook ► http://www.facebook.com/viewster \nFollow us on Twitter ► https://twitter.com/viewster\nFollow us on Google+ ► https://plus.google.com/106263749630756543868/posts\n\nDownload our Viewster mobile apps\nAndroid: http://bit.ly/ViewsterAndroid\niOS: http://bit.ly/ViewsterioS\n\nCheck out more terrifying full horror movies ► http://bit.ly/1xXDUNa\n\nCheck out more hilarious full comedies ► http://bit.ly/1yUDZFr\n\nCheck out more full drama movies ► http://bit.ly/1BdTgxV\n\nCheck out fascinating full documentaries ► http://bit.ly/15ArBhI',
    duration: 46.1,
  },
  {
    id: 'zakXTnke3m0',
    title: 'The Hunchback of Notre Dame',
    description:
      'The plot is loosely based on the novel by Victor Hugo. Quasimodo, the hunchback bell-ringer of Notre Dame Cathedral in Paris sees the beautiful gypsy Esmeralda at the Paris Festival of Fools and is fascinated by her. Esmeralda falls in love with the handsome Captain Phoebus, but also the unscrupulous Judge Frollo falls in love with the beauty. Frollo can kidnap Esmeralda by Quasimodo. But Captain Phoebus and the Royal Guard can liberate her. Quasimodo is captured, but Frollo escapes. On the next chance he kills Captain Phoebus, but  Esmeralda is under suspicion. She is captured and she is about to be executed. Quasimodo frees and brings her into the church of Notre Dame. From now on the plot diverges from the novel in substance. In the novel, Esmeralda and Quasimodo die. In this silent movie version, where also Phoebus remains alive and  gets happy with Esmeralda, only Quasimodo dies.',
    duration: 110.68333333333334,
  },
  {
    id: 'UPf2wgKikhg',
    title:
      'What do you know about Balady?- ماذا تعرف عن البوابة الالكترونية بلدي؟',
    description:
      'سعياً للارتقاء بجودة المعيشة في المدن السعودية، تم تطوير بلدي ليكون البوابة الوطنية الداعمة للمجتمع البلدي بالتعاون مع أمانات المملكة.\nhttps://www.balady.gov.sa',
    duration: 1.5166666666666666,
  },
  {
    id: 'RnmIHbpJJjc',
    title: 'Person Capacity 1.4.3',
    description:
      'Manufacturers take a number of variables into account when determining the maximum person capacity for a boat (which is displayed on the capacity plate). The maximum person capacity is a guideline. Keep in mind that most manufacturers assume an average weight per person of 150 lb. If you have passengers over 150 lb., you should adjust the maximum person capacity accordingly.',
    duration: 0.48333333333333334,
  },
  {
    id: 'f_dnArWb3qU',
    title:
      'Jo Bole So Nihaal Full Hindi Movie | Sunny Deol, Kamaal Khan, Shilpi Sharma | Bollywood Action Movie',
    description:
      'Watch the Bollywood full length Hindi Movie "Jo Bole So Nihal" starring Sunny Deol, Kamaal Khan, Shilpi Sharma, Thomas Tevana and others. Directed by Rahul Rawail and Produced by N. R. Pachisia.\n\nSynopsis: Nihaal Singh (Sunny Deol) is police constable who does his job with complete honesty. Romeo (Kamaal Khan) is a terrorist who moves from country to country to spread his venom. Circumstances bring the two together in such a way that Nihaal Singh, unknowingly, helps Romeo escape. This leads to his image being tarnished and he being labelled as a traitor. Nihaal is suspended from his job and humiliated. \nMeanwhile, Romeo spreads his wings in New York to kill the US President. Since the only person who knows what the terror menace looks like is Nihaal Singh, he is recruited by the FBI to help them catch hold of Romeo. He agrees to help them and is guided by two bilingual FBI agents. But Nihaal has one condition -- after nabbing Romeo he will take him back to his hometown to clear his name and restore his former glory, lost because of Romeo.\n\n Subscribe To Our Channel : http://bit.ly/SubscribeToRajshri\n\nFollow us on G+ http://plus.google.com/+rajshri\n\nLike us on Facebook - https://www.facebook.com/rajshri\n\nFollow us on Twitter - https://twitter.com/Rajshri\n\nFollow us on Pinterest - http://www.pinterest.com/rajshrivideos\n\nVisit Rajshri\'s Website - http://www.rajshri.com',
    duration: 124.33333333333333,
  },
  {
    id: '7VP-taFaAOo',
    title: 'A Better Way to Unbank Yourself',
    description:
      "You don't need to go off the grid to unbank yourself. Instead, check out a better banking alternative and join Affinity Credit Union! We have your best interests in mind!",
    duration: 0.5166666666666667,
  },
  {
    id: 'bWkLEo7MXJM',
    title: 'Испания / Spain (1939) документальный фильм',
    description:
      'Полнометражный документальный фильмо о гражданской войне в Испании 1936-1939 гг. Картина "Испания" получила в ту пору широкий резонанс в мире. Высоко были оценены ее художественные достоинства: режиссура, дикторский комментарий, операторская работа Романа Кармена.\n\nФильмы повествует о гражданской войне в Испании (1936 – 1939 гг.) и представляет собой переработанный материал кинохроники «К событиям в Испании», которая регулярно показывалась в кинотеатрах Советского Союза 1930-х годов. Авторами съёмок были операторы Роман Кармен и Борис Макасеев. Также были использованы кадры хроники франкистов. Режиссёрская работа Эсфирь Шуб сводилась к монтажу. Фильм вышел на экраны уже после того, как Гражданская война завершилась.\n\nЦенность кинодокумента «Испания» заключается не в том, что это наиболее подробный видеоисточник по Гражданской войне в Испании, в которой советские добровольцы принимали непосредственное участие. Также «Испания» демонстрирует тенденции агитационного кино, характерные для 30-х годов, когда жанр переживал свой расцвет. Если Эсфирь Шуб была признанным классиком документального кино, то для Романа Кармена «Испания» стала одним из первых опытов работы. Впоследствии Роман Кармен станет всемирно известным документалистом и кинооператором.\n\nМы знаем, как получить от видео максимальный доход. Подключайтесь к партнерской программе RVISION на YouTube https://rvision.tv\nВступайте в нашу группу в ВКонтакте: https://vk.com/rvision\nПодписывайтесь на нашу страницу в Facebook: https://www.facebook.com/rvisionchannel/\nПодписывайтесь на канал http://www.youtube.com/user/ClassicFilmRVision?sub_confirmation=1\nОставляйте ваши отзывы о работе сети RVISION: https://www.facebook.com/rvisionchannel/reviews\n\nИспания (1939) документальный фильм\n\nПроизводство: Мосфильм\n\nОператор: Роман Кармен, Борис Макасеев\nДикторский текст: Всеволод Вишневский\n\nКатегории:\nМузыкальные: https://www.youtube.com/watch?v=A_wDsMYqHPc&list=PLAWK_P1s4gGD8GL1izwn0_JBYV1IW470Y\nКомедии: https://www.youtube.com/watch?v=BjpcrxV9rJY&list=PLAWK_P1s4gGAH9ZxYZuDcJ4Pjfa896Gi_\nЭкранизация: https://www.youtube.com/watch?v=WlqgMdjwe_4&list=PLAWK_P1s4gGB2rLvb6ZT2XZTV-v0PuYID\nДрама: https://www.youtube.com/watch?v=WlqgMdjwe_4&list=PLAWK_P1s4gGBgK5WsIt_1xerppH62ybL-\nИсторические: https://www.youtube.com/watch?v=DjwNXSiYIvs&list=PLAWK_P1s4gGAx1OqHR7OIKWfF28gsqC-F\nДокументальные: https://www.youtube.com/watch?v=fQ6428GyPF8&list=PLAWK_P1s4gGB-MS8gcp0vtRV_ikEh8ZoZ\nТеатральные постановки: https://www.youtube.com/watch?v=WeNyWIFeBz4&list=PLAWK_P1s4gGA9kmvDf4_uxtyuPDqPLmKu\nБиографические: https://www.youtube.com/watch?v=WzSr5_6C7_U&list=PLAWK_P1s4gGB2dGOUJR5Z9l9xHh5w8gfC\nВоенные: https://www.youtube.com/watch?v=M4-Zw3Dc2ZY&list=PLAWK_P1s4gGD-8JO3zrv9mKPikRU2vb7z\nСказки: https://www.youtube.com/watch?v=YdEdsS4JCTI&list=PLAWK_P1s4gGBNWMD6ZOEhyartId2Ohprb\nДетективы: https://www.youtube.com/watch?v=8sP7wcb77NE&list=PLAWK_P1s4gGDavVojT3uAdp4YRn74gpLn\nПриключения: https://www.youtube.com/watch?v=MudpDHW5IVA&list=PLAWK_P1s4gGA-k7eEDitnTRtjxlvU0fTY\nСатира: https://www.youtube.com/watch?v=A_wDsMYqHPc&list=PLAWK_P1s4gGB7Npb0148kZI-YVKpPeiVk\nДетские: https://www.youtube.com/watch?v=QJaKDpAf8ms&list=PLAWK_P1s4gGD10dNhcIgvm3MlJXjDKDls\nКиноповести: https://www.youtube.com/watch?v=2kyzBJ3jReg&list=PLAWK_P1s4gGAdundIvH-rg20U6nskMNqH\nМелодрамы: https://www.youtube.com/watch?v=8HoWG9El4qA&list=PLAWK_P1s4gGBhjXP7trZPJDlEgEl7td9Q',
    duration: 84.71666666666667,
  },
  {
    id: 'J9DRDDb70xE',
    title: 'Pinky Moge Wali | Full Punjabi Movie | Neeru Bajwa | Gavie Chahal',
    description:
      '"Pinky Moge Wali" is a Punjabi film starring Neeru Bajwa and Gavie Chahal. The movie got released on 28th September,2012\n\nThe film\'s title "Pinky Moge Wali" comes from the popular character introduced in Punjabi movie "Jihne Mera Dil Lutya".',
    duration: 134.3,
  },
  {
    id: 'v6O6bzQSQ3s',
    title: 'Overloading or Over-Powering 1.4.1',
    description:
      'An overloaded boat or over-powered boat can be extremely dangerous. An over-powered boat may cause the stern to sit lower in the water, making the vessel susceptible to being swamped by its own wake or that of a passing boat. Similarly, too much weight in the stern or the bow will make the vessel prone to swamping. Additionally, it is important to spread the load evenly throughout the vessel. Too much weight on either side will make the vessel less stable and more apt to capsize. Take extreme caution in loading your vessel properly.',
    duration: 0.7333333333333333,
  },
  {
    id: 'OogJ-jtH32M',
    title: 'What is the All-Star eSports League?',
    description:
      'How to win money, defeat enemies, and conquer the world: condensed into one short video.  \n\n-----------------------------------------------------------------------------------------------------------\n\nWant to be part of the largest high school eSports league in history?  Register at https://www.allstaresports.com/registration today!',
    duration: 1.6,
  },
  {
    id: 'i0D2jTEt5Ho',
    title: 'How to Make a WordPress Website (Step by Step) - 2014',
    description:
      "In this tutorial you will learn how to make your own professional business website, step by step, using the popular WordPress platform!\n\nGet discounted domain and hosting: https://www.hostgator.com/discounted\nCode: DISCOUNTED (***60% off and Free Domain***)\nCode: 1DIRTYCENT (1 cent first month)\n\n\n=====================================\n\nUpdates: http://www.emediacoach.com/tutorials/make-a-business-website-step-by-step/\n\nWeb agencies charge thousands of $$$$'s - but we teach you how to do it for next to nothing. Do you have Questions? Ask in the comments below, we'll be happy to help :)\n\nQuick Links\n00:26 - Overview.\n04:46 - Getting your .com domain.\n10:24 - Getting web hosting.\n15:57 - Initial website setup.\n25:39 - Adding the awesome site design!\n31:08 - Customizing the sidebar (adding map, facebook box, etc..)\n48:40 - Adding the contact form.\n53:57 - Adding content pages.\n56:15 - Adding the awesome dropdown menu.\n59:53 - Adding the 4 footer boxes.\n1:02:18 - Adding the Social Media icon links.\n1:05:55 - Adding the slider images.\n1:10:03 - Creating a Logo. First we recommend you get one custom made for a few dollars: http://goo.gl/snxcOU\n1:14:38 - Optional design settings.\n1:19:23 - The FINISHED website!\n\nHope we have been able to teach you how to create a website for your business, using the popular and easy to use WordPress Content Management System (CMS).  Contact us if you have any questions. And please THUMBS UP our video!\n\nSubscribe:\nhttp://www.youtube.com/subscription_center?add_user=emediacoach",
    duration: 80.58333333333333,
  },
  {
    id: 'Xf7DmTg38tA',
    title:
      'Welcome to Marburg. Professional Medical Treatment & Best Hospitality',
    description:
      'In the heart of Germany, German values and tradition meet the latest treatment methods using world leading technology. Whether routine check-up or a specific procedure, the University Hospital of Marburg is dedicated to providing the best guidance, consultation, advice and care to every patient. Trust German innovation and precision designed to the highest medical standards and visit one of the largest and most advanced hospitals in Germany. \n\nDuring your treatment, the magnificent ambience of the high-end Vila Vita Rosenpark Hotel will be a place for you to call home. Tucked away in a picturesque setting, you will enjoy all the comforts on the level of an international 5-star hotel. This includes free use of the hotel‘s own fleet of limousines, the private airport, the hotel‘s horse riding facilities, and our first-class concierge service. A warm welcome awaits you at Vila Vita Rosenpark Hotel, where you will be treated courteously and with respect, assured of the best hospitality with unrivaled service and comfort.',
    duration: 4.833333333333333,
  },
  {
    id: '9h8D2Vvljm8',
    title: 'Sensational Spy 3',
    description:
      'Watch African Movies and Nigerian Nollywood Movie starring: Saint Obi, Stephanie Okereke, Hank Anuku, Enebeli Elebuwa,\n\nSYNOPSIS: A young lady (Stephanie Okereke) mistakenly in possession of an incriminating evidence against a top business man (Enebeli Elebuwa) is in serious danger because the man is after her life at any cost though a young police spy has been assigned to protect the life of this young lady until she testifies in court.\nProcuced By Ossy Okeke Jnr (OSSY AFFASSON) and Directed By TARILA THOMSON\n\nPlease Subscribe to realnollymovies channel here: \n\nhttp://www.youtube.com/subscription_center?add_user=realnollymovies\n\nLike/recommend this video or make your comment below, HAVE FUN!!',
    duration: 48.75,
  },
  {
    id: '_l0b6cJ3qF4',
    title: 'Eetharam Nehru Full Length Telugu Movie || Krishna, Prema, Suman',
    description:
      'Eetharam Nehru Telugu Full Movie. Watch " Ee Taram Nehru " Telugu Movie Online starring Superstar Krishna, Prema, Suman, Suresh and Naresh directed by Siva Nagu produced by Narra Renuka Chowdary.\n\nEetharam Nehru Krishna is a good Samaritan wandering the streets, with his machine gun toting body guards. His primary aim is to rid the city of ISI moles and the baddies. And so we see the swinging Krishna accompanied by his four bodyguards saving State ministers, police officers\' sons, and even police officers, not to talk of the common man, from the bomb fury unleashed by the ISI activists. He is so immersed in his activities that he has no time to fall in love with Prema, who is after him for God-knows-how-many years. Then there is Suman, the SP who is hellbent on restoring law and order by putting all the bad guys behind bars. And in this act he comes into conflict with Krishna, since Suman refuses to allow anyone barring the police to take law into his hands. Despite this, they have a point of convergence, and that is the ISI. But since that is the exclusive prerogative of Krishna, Suman clashes with the henchmen of Rami Reddy, the local don. Rest of the story you can see in the movie.',
    duration: 124.81666666666666,
  },
  {
    id: '0AOkkH8K_VI',
    title:
      'Naan Sigappu Manithan Tamil Full Movie | Vishal | Ronnie Screwvala | Siddharth Roy Kapoor',
    description:
      'Indran, a narcoleptic, and Meera, the daughter of a rich businessman, are in love with each other. One day, as he suffers from a narcoleptic bout, she gets gang-raped. Indran desires brutal revenge.\n\n\nDirected: Thiru\nProduced: \n\nVishal\nRonnie Screwvala\nSiddharth Roy Kapoor\n\nWritten: Thiru\nStarring\nVishal \nLakshmi Menon\nIniya\n\nMusic: G. V. Prakash Kumar\n\nCinematography: Richard M. Nathan\n\nEdited: Anthony L. Ruben\n\nProduction company\n\nUTV Motion Pictures\nVishal Film Factory\n\nSubscribe Uie Movies for Latest Movies : https://www.youtube.com/UIEMovies\nLike Us : https://goo.gl/XVrj4u\nhttps://www.facebook.com/UIEMoviesOffl/\n\nIn Association with Divo\nhttp://www.facebook.com/divomovies\nhttps://twitter.com/divomovies',
    duration: 153.36666666666667,
  },
  {
    id: 'Mk8pataENZM',
    title: 'Бумеранг. Фильм. StarMedia. Мостелефильм. Детектив',
    description:
      'Подпишись на канал и смотри новые фильмы и сериалы каждый день: http://www.youtube.com/user/StarMedia?sub_confirmation=1\nВ частное детективное агентство обращается жена влиятельного бизнесмена, Анна, со странной просьбой. После сотрясения мозга она страдает частичной амнезией и просит Сергея Краснова, частного детектива и бывшего сотрудника органов, вести за ней скрытую слежку, снимая все ее действия и передвижения на камеру. По мнению ее лечащего врача, просматривая отснятое видео о своей жизни, Анна сможет быстрее восстановить потерянную память. Краснов берется за это дело, не подозревая, что попадает в расставленную кем-то искусную ловушку. \n\nФормат: телевизионный фильм\nЖанр: детектив\nГод производства: 2008\nРежиссер: Дин Махаматдинов\nСценарий: Дин Махаматдинов, Андрей Бадин\nОператор-постановщик: Андрей Гуркин\nПродюсеры: Валентин Опалев, Влад Ряшин \nВ ролях: Олеся Судзиловская, Алексей Кравченко, Дмитрий Ульянов, Юрий Осипов, Елизавета Олиферова, Иван Агапов, Андрей Рапопорт, Егор Баринов, Борис Шевченко, Георгий Мартиросьян, Саид Дашук-Нигматулин\n\nhttp://youtu.be/Mk8pataENZM\nСмотреть онлайн бесплатно "Бумеранг"\n\nОнлайн-кинотеатр StarMedia на YouTube\nhttps://www.youtube.com/starmedia\nСмотреть онлайн фильмы и сериалы бесплатно в хорошем качестве.\n\nhttps://www.starmediafilm.com\nЛучшие русские фильмы и сериалы, лучшие мелодрамы, военные фильмы, новинки кино, фильмы с русскими и английскими субтитрами — смотреть онлайн бесплатно в хорошем качестве в онлайн кинотеатре StarMedia на YouTube. Приятного просмотра!\n\nStar Media в социальных сетях:\nhttps://www.facebook.com/starmediacompany\nhttps://vk.com/starmediafilm\nhttp://www.odnoklassniki.ru/starmedia\nhttps://plus.google.com/+StarmediafilmRu\nhttps://twitter.com/StarMedia_2006\n\n#StarMedia',
    duration: 97.33333333333333,
  },
  {
    id: 'bGSeJ_L6VoA',
    title: 'Telugu Full Movie - Dil 2003 -  Nitin, Neha and Prakash Raj',
    description:
      "Telugu Full Movie - Dil 2003 -  Nitin, Neha and Prakash Raj\n\nDil is a Telugu film released in year 2003 which starred Nitin, Neha and Prakash Raj in lead roles. This movie was directed and produced by deubutants V.V. Vinayak and Dil Raju.\nThe story is about Seenu (Nitin) who is a new student at a college. Nandini (Neha) also joins the same college. Nandini is the only daughter of Gowri Shankar (Prakash Raj), who is big mafia don and Seenu is from a middle class family. One day, Gowri Shankar suspects them to be lovers after he finds them dancing at the freshers celebration at school. Seenu is beaten down brutually on the fresher party night, and this leads him to challenge to win Nandini's love. After several attempts, she finally starts loving him. They elope and get married when Gowri Shankar tries to separate them. The story takes several turns before the movie ends in a happy note.\n\nSubscribe to Movies Box for unlimited South Indian and South Indian dubbed movies, clips, songs, and much more here: http://goo.gl/0ulK6S",
    duration: 122.18333333333334,
  },
  {
    id: 'Uh1k8IcdlSY',
    title: 'Gharana',
    description:
      'Super Hit Old Classic Movie Gharana (1961), a family drama, starring Rajendra Kumar, Raj Kumar, Asha Parekh, Shubha Khote, Agha, Minu Mumtaz, Kanhaiya Lal. Music Director : Ravi, Director : S.S.Vasan\nSynopsis : This story revolves around a rich family of two sons, a hen pecked Father and a over-bearing Mother (Lalita Pawar). The older son Kailash (Rajkumar) is married to a very nice girl. The younger son Kamal (Rajendra Kumar) is still in college and eventually marries Usha (Asha Parekh).When the mother starts harrasing the younger daughter-in-law, the younger son puts his foot down. He decides to provoke his father into taking over the reigns of running the family and putting his mother in her place due to some intentional misunderstanding. The older brother think sthere is something going on between his wife and leaves the house. Does the older brother come back? Does the father manage to control and subdue his wife? To find out more watch this family drama"Gharana" unfold itself.',
    duration: 167.11666666666667,
  },
  {
    id: 't2QBa7_zCeE',
    title:
      'THE WOMAN AVENGER | 師妹出馬 | Ha Kwong-Li | 夏光莉 | Full Length Kung Fu Movie | English |',
    description:
      "An abused woman's journey from near death to kung fu expert, helped by a merciful Abbess and a crippled orphan.\n----------------\nCast:\nKang Peng - Kwong Wu Chi\nKuang-Li Hsia\nChi Ping Chang\nKuan-Lung Chang\n-----------\nTOP 10!\nFight Area™  recommends: https://www.youtube.com/playlist?list=PLM6ksMbio_BIOI3b1MaP2g5tYnh2H6mzv\n(click and watch full length movies)\n\n#FullMovie #Fight Area #movie",
    duration: 88.53333333333333,
  },
  {
    id: 'pgsiuleKHN8',
    title: 'Szükséges töltenem a hibrid autót?',
    description: '',
    duration: 0.5166666666666667,
  },
  {
    id: 'hf5cw9C5izU',
    title: 'O Mágico de Oz (Dublado)',
    description:
      'Neste clássico musical com fantasia, Judy Garland estrela como Dorothy Gale, uma jovem garota do interior do Kansas que sonha com uma terra "em algum lugar além do arco-íris". O sonho da Dorothy se torna realidade quando ela, seu cachorro, Toto, e a sua casa são transportados por um tornado para um mundo mágico e brilhante como nada que ela tinha visto antes. Infelizmente, ela se torna inimiga mortal de uma bruxa malvada quando a casa cai sobre a irmã da bruxa. Agora, tendo feito amizade com um espantalho sem cérebro, um homem de lata sem coração e um leão covarde--e protegida por um par de sapatos vermelhos encantados--Dorothy embarca em uma estrada de tijolos amarelos a caminho da Cidade das Esmeraldas para pedir ao todo-poderoso Mago de Oz ajuda para voltar para casa.',
    duration: 101.71666666666667,
  },
  {
    id: 'n-QnSj1nTq4',
    title: 'Кража (1982)',
    description:
      'Советский фильм, драма "Кража" по одноименной пьесе Джека Лондона\n🎥 Подписаться на "Фильмы. Золотая коллекция": https://www.youtube.com/channel/UCOVlL3Oo72Sr6jLXA-Dvzag?sub_confirmation=1\n🎬 Другие фильмы 80-х: https://www.youtube.com/playlist?list=PL9CCHSQbqyjCcHeNupcBTKlKzLR6saAMe\n\n1 серия - 00:00:00\n2 серия - 01:10:24\n\nДействие происходит в США, в 1910 году. Говард Нокс, известный своими социалистическими взглядами, собирается выступить с речью, обличающей финансового магната Старкуэтера. Конкурентам Старкуэтера удалось выкрасть тайную переписку, изобличающую его тёмные финансовые махинации, которую они передают Ноксу.\nОднако за день до выступления помощник Старкуэтера Хоббард крадёт компрометирующие бумаги из номера отеля, где остановился Нокс. О краже узнает дочь Старкуотера Маргарет Чалмерс. Ей уже давно надоел её муж, марионетка в руках её могущественного отца, да и сама жизнь за фасадом добропорядочной буржуазной семьи.\nМаргарет влечёт к незаурядной личности Говарда Нокса, которого она сравнивает с Авраамом Линкольном. Чтобы помочь Ноксу, она крадёт документы из кабинета отца и готова пройти через унижения ради своей любви и истины.\n\n🎥 Режиссер: Леонид Пчёлкин\n🎬 В ролях: Анастасия Вертинская, Иннокентий Смоктуновский, Юозас Будрайтис, Олег Борисов, Юрис Каминскис, Нина Ольхина, Елена Сотникова, Михаил Данилов, Валерий Матвеев, Татьяна Погоржельская, Саша Фисенко',
    duration: 141.36666666666667,
  },
  {
    id: 'iE2oRz9keak',
    title: 'Doutor Estranho (2016) (Dublado)',
    description:
      'O Filme conta a história do famoso neurocirurgião Dr. Stephen Strange, que tem a vida alterada para sempre após um acidente de automóvel que afeta seriamente suas mãos. Quando a medicina tradicional falha, ele se vê obrigado a buscar cura e esperança em um lugar improvável: uma comunidade isolada e misteriosa chamada Kamar-Taj. Ele rapidamente descobre que este não é apenas um centro de recuperação, mas também a primeira linha de uma batalha contra forças obscuras empenhadas em destruir a nossa realidade. Em pouco tempo, Strange, armado com seus poderes mágicos recém adquiridos, é forçado a escolher entre voltar à sua velha vida de riqueza e status, ou deixar tudo para defender o mundo como o mago mais poderoso do planeta.',
    duration: 115.16666666666667,
  },
  {
    id: 'bmpyhpxqel8',
    title: 'Bízhatok a hibrid technológiában?',
    description: '',
    duration: 0.5,
  },
  {
    id: 'nadymJsqjVQ',
    title: 'Chandamama Kathalu',
    description:
      "Watch Chandamama Kathalu Telugu Movie, Starring Lakshmi Manchu, Aamani, Naresh, Krishnudu, Chaitanya Krishna. Richa Panai, Naga Shourya, Film directed by Praveen Sattaru and produced by Chanakya Bhooneti and Music Composed by Mickey J Meyer.\n\nPlot ;\n\nSaradhi (Kishore) is a writer. His daughter is suffering from a chronic ailment and he desperately needs 5 lacs. He starts writing a novel with seven different story lines, all inspired from his surroundings.\n\nHaseena (Richa Panai) gets a marriage proposal to a well off guy living in Dubai. She Cheats Ashraf and marries dubai guy before she even sees him, based on a photograph of him and sets off to Dubai, which leaves Ashraf (Abhijeet) heartbroken. There she finds that her husband is way older than the photograph shows and works as a taxi driver. Raghu (Chitanya Krishna) turns out to be fraud, who plans to trap Renu (Shamili) for her money, her father comes to know of this and apparently gets him killed. Raghu one night sneaks into Gauri's (Isha Ranganath) home, but gets caught. He is then forced to marry her by their families, owing to social pressure. He sets off to the city, where he works in the municipality. Gauri delivers a baby, but gets killed during childbirth unable to bear the pain. Then he starts taking care f her daughter. Saritha (Aamani) and Mohan (Naresh) who were unable to get married during their teenage finally make good of their second opportunity. Krishneshwar Rao saves 10 lacs from his begging income which he stores at various locations in the city in small amounts and strikes a deal for a house. But he dies in sleep ,the night before he could buy the house. Depressed, Lisa and Venkateshwara Rao, both go to the same bar. They are later shown to be married.\n\nFinally Saradhi finishes his story and Unable to get the money from Publisher. He then finds Krishneshwara Rao's bag with 10 lacs and has his daughter cured forms the main plot of the story.",
    duration: 134.6,
  },
  {
    id: 'wrrBWDvQhV8',
    title: 'MONSTERBASS will help you catch bigger bass this year!',
    description:
      "Every month we'll send you a box full of the best bass fishing baits from brand names that you know and trust.  We hand pick baits based upon the region of the country where you live and fish.  We pick the best shapes and colors so that you're throwing proven baits for the conditions you're fishing.\n\nOur boxes never include a bunch of cheap knockoffs with over-inflated prices. Never!  We partner with the industry's best brands in order to bring you the best baits. So if you're looking to crush your PB this year... look no further than MONSTERBASS.",
    duration: 0.5166666666666667,
  },
  {
    id: 'g_EJx1IrJ4s',
    title:
      'Star Kids สตาร์คิดส์ 20 ส.ค. 58 | น้องป่าน เพลงสีกาสั่งนาค | ช่อง 3',
    description:
      'สตาร์คิดส์ รายการที่เปิดโอกาสเด็กได้มีพื้นที่ในการแสดงออกถึงความสามารถโดยไม่มีเงื่อนไขในการร้อง ไม่มีเงื่อนไขในการเต้น ไม่มีเงื่อนไขในการแสดง จะมาเดี่ยว  มาคู่  หรือมาเป็นทีมก็ได้ แบ่งเป็นการแข่งขันสัปดาห์ละ 3 การแสดง และหาหนึ่งเดียวเท่านั้นที่เป็นผู้ชนะเลิศประจำสัปดาห์ ซึ่งเมื่อครบ 12 คน จะเข้าไปแข่งขันในรอบแชมป์ออฟเดอะแชมป์เพื่อหาผู้ชนะเลิศประจำซีซั่นต่อไป ขอเพียงกล้าที่จะมาเล่น กล้าที่จะมาโชว์ และพร้อมที่จะมาสร้างรอยยิ้มและเสียงหัวเราะให้กับคุณผู้ชม ออกอากาศทุกวันพฤหัสบดี เวลา 15.30 น. ทางไทยทีวีสีช่อง 3\n\nรายละเอียด\nออกอากาศวันที่ 20 สิงหาคม 2558 เวลา 15.30 น.\n\nพิธีกร: \nทอม นิรุทธ์ สุจริต \n\nคณะกรรมการ: \nครูอิน บูโดกัน, ครูเจี๊ยบ นนทิยา, ครูมอร์ริส เค, ครูโรจน์\n\nการแสดง:\nเพลงสาวเลยยังรอ    \nด.ญ.ดวงเพชร  กัญญาพันธ์ (น้ำเพชร) อายุ 6 ปี\n\n-----------------------------------------------------------------------------\nติดตามสตาร์คิดส์ได้ที่ \nช่อง 3 ออริจินัล \nทีวีดิจิทัล หรือ กล่องดิจิทัลทีวี ช่อง 33\nจานดาวเทียม หรือ เคเบิลทีวี ช่อง 43\nFacebook: www.facebook.com/starkids.tv3',
    duration: 2.783333333333333,
  },
  {
    id: '_xtOlHZ4Cg8',
    title: 'Super Telugu Full Movie',
    description:
      'Super is a 2005 Telugu film written and directed by Puri Jagannadh. The film stars Akkineni Nagarjuna, Ayesha Takia, Sonu Sood, and Anushka Shetty. Soundtrack of the film was composed by Sandeep Chowta. The film was also dubbed into Hindi and was titled Robbery.\n\nFor More Latest Videos, please check out\nFull Movies: http://goo.gl/mDS9IQ\nFilm Trailers & Events: http://goo.gl/vQ6oKl\nBreaking News: http://goo.gl/rXYPWO\nFilm Songs:  http://goo.gl/XogNaH\nTV Shows: http://goo.gl/BQT0x5\n\n►  For Your Movie Promotions And Promotional Interviews \n     Please Call @ +91 7093 162 162\n    (Or) Email Us @ Promotions@iDreamMedia.com\n\nClick here for more Latest Movie updates,\n\n►Subscribe to our Youtube Channel: https://www.youtube.com/channel/UC60U1OtwT9Y6Buecc6P0L5g?sub_confirmation=1\n\n►Like us on  https://www.facebook.com/iDreamMedia',
    duration: 144.68333333333334,
  },
  {
    id: 'uC-8Fx0zjrI',
    title: 'El nuevo error de Nicolás Maduro - En Corto',
    description:
      'En Corto presenta las notas más divertidas de la farándula politiquera ecuatoriana, además del mundo del espectáculo.\n\n► Visita nuestra web oficial en: http://bit.ly/EnCortoOficial\n\nSíguenos en redes sociales:\n\n► Facebook: https://www.facebook.com/EnCortoOficial/\n\n► Twitter: https://twitter.com/EnCortoTA\n\n► Instagram: https://www.instagram.com/encortooficial/',
    duration: 1.3333333333333333,
  },
  {
    id: 'WxIs-O4RAOg',
    title: 'Four Shaolin Challengers',
    description:
      'Disciples of the Master confront the evil enemy and save their village..',
    duration: 89.5,
  },
  {
    id: '0KzDOvZRidc',
    title:
      'Kudumbam Oru Kadambam Full Movie | S.V.Shekar, Suhasini | Classic Tamil Movie',
    description:
      "The film opens on an ordinary day in the lives of the families in a large apartment house in Chennai. Each family represents a different slice of early 1980s middle-class society. Kannan and Uma are a working couple. They enjoy the comforts of dual income, but their general lament is that their long work hours compel them to send their five year old daughter Priya to boarding school. The second couple comprises real estate agent Paramasivam and his homemaker wife Parvathi. Real estate in the early 1980s is not very profitable. Paramasivam and Parvathi enjoy a happy marriage, but Paramasivam's limited income is barely able to meet household costs. The third couple is Srinivasa Raghavan and Lakshmiammal. Fifty-five year old Srinivasa Raghavan is a worthless wastrel. He has never worked a day in his life. He chooses to roam about the city and engage in pointless argument with anyone he can find. Lakshmiammal works as a cook to earn a meager wage, but they frequently have to pledge their valuables to get by. Their son Madhu is an aspiring actor with dreams of making it big, and their daughter Mythili is still in high school. Uma, Parvathi and Lakshmiammal individually ponder the central questions of the film - the role of money and the role of working women in the new society. Watch this Tamil Movie Kudumbam Oru Kadambam starring Vishu, S.V.Shekar, Suhasini, Sumalata and directed by S.P.Muthuraman and Music by M.S.Vishwanathan.\n\nTo watch more videos, Click http://www.youtube.com/rajshritamil\n\nSubscribe now for more updates \nhttp://www.youtube.com/subscription_center?add_user=rajshritamil\n\nJoin & Like our Facebook Rajshritamil Fan Page \nhttp://www.facebook.com/rajshritamil\n\nJoin us on Google+\nhttps://plus.google.com/+rajshritamil\n\nSubscribe now to Rajshri Tamil for more updates: http://bit.ly/Subscribe-ToRajshriTamil",
    duration: 132.61666666666667,
  },
  {
    id: '7Aig04t1oIw',
    title: 'Viyabari Tamil Full Movie',
    description:
      'Subscribe Uie Movies for Latest Movies : https://www.youtube.com/UIEMovies\nLike Us : https://goo.gl/XVrj4u\n\nIn Association with Divo\nhttp://www.facebook.com/divomovies\nhttps://twitter.com/divomovies\n\nDirected by Shakti Chidambaram\n\nProduced by Shakti Preetham, Shakti Threja\n\nWritten by Shakti Chidambaram\n\nStarring \nS. J. Suryah\nTamanna Bhatia\nPrakash Raj\nNamitha\nMalavika\nVadivelu\nSeetha (actress)\nN. Santhanam\nNassar\n\nMusic by Deva\n\nCinematography M. V. Panneerselvam\n\nEdited by Suraj Kavee\n\nProduction company : Cinema Paradise',
    duration: 162.61666666666667,
  },
  {
    id: 'UV15NtEZgNg',
    title: 'Vaanmathi',
    description:
      'Vaanmathi (Swathi) is the daughter of Padmavathi (Vadivukkarasi) who is a rich and powerful lady. Padmavathi had separated from her husband and had therefore single-handedly raised her daughter. Both mother and daughter agree on all issues and are well-known for their arrogance. Vaanmathi falls in love with Krishna (Ajit Kumar) a young lad from a middle class family. This leads to a rift between the mother and the daughter. Does Padmavathi succeed in convincing her daughter to forget about her first love; or does Vaanmathi win her mother over?\n\nSubscribe now to Rajshri Tamil for more updates: http://bit.ly/Subscribe-ToRajshriTamil',
    duration: 147.1,
  },
  {
    id: 'r28Ysd4hUoc',
    title: '#AksiDarling Taman Wisata Alam Kawah Ijen',
    description:
      '16 Desember 2019, 249 Darling Squad dari 35 Universitas melakukan #AksiDarling dengan menanam di 1,1 hektare Taman Wisata Alam Kawah Ijen.\n______________________________________________________\n\nLike, Subscribe, dan komen di bawah ya!\n\nInstagram: https://www.instagram.com/siapdarling\n\nFacebook Fanpage: https://www.facebook.com/siapdarling/\n\nTwitter: https://twitter.com/siapdarling',
    duration: 1.0166666666666666,
  },
  {
    id: '7bMiTuyoz04',
    title: 'Jateeya Pathakam Telugu Full Movie | Tabu | Arjun | TeluguOne',
    description:
      "Jateeya Pathakam Full Length Telugu Movie Description : Arjun (Arjun) is trying to track a terrorist leader with the help of Anjali (Tabu), who he had rescued earlier from the hideout of the same.\nThere's also a sub-plot of the mysterious suicide of Arjun's ex-wife Asha (Nivedita). One and a half hours of 'reeling', and Arjun is still trying to track a terrorist leader with the help of Anjali.\nThe terrorists now abduct Arjun's neighbour's kids as they already kidnapped Tabu earlier. Arjun easily completes the déjà vu by busting the terrorist's ass once again & once & for all. As for the sub-plot, Asha kills herself, out of shame it seems, since her terrorist-father's blood was being pumped into her aorta. At the fag end of the film, a fed-up dad emotionally ponders over the dismal condition of our country.\n\n\nMovie Name : Jateeya Pathakam \nStarring : Arjun, Tabu, Nivedita, Sona, Alphonsa, Baby Shamili\nDirected by Arjun\nMusic by: Vidya Sagar\nProduced by : T. Surendra\nRelease Date: 2001",
    duration: 128.95,
  },
  {
    id: 'xQunS1iq0Qg',
    title: 'The Old Testament',
    description:
      'The Old testament is brought to life in this enthralling movie. Brad Harris.',
    duration: 88.96666666666667,
  },
  {
    id: 'ddU1whG1qQM',
    title: 'Goodwill Treasure Hunting',
    description:
      'Take a look inside one of our Goodwill Stores and see the different treasures it has to offer.',
    duration: 4.016666666666667,
  },
  {
    id: 'KZD_s6AMV3I',
    title: 'سخرنا طاقاتنا في خدمتهم ليتمكنوا من أداء نسكهم بكل يسر وسهولة',
    description: '#خدمة_الحاج_واجبنا\n#الحجاج_عين_بلدي',
    duration: 3.4333333333333336,
  },
  {
    id: 'BcgL2YM1u0s',
    title:
      'Duniya Kannada Movies Full | Kannada Movies | kannada new movies full |  Vijay (HP), Rangayana Raghu',
    description:
      'Stars:\n\nVijay (HP), Rangayana Raghu, Kishore, Mico Nagaraj, Yogesh, Sai Sunil, Chandra, Prasanna, Mahesh, Rashmi, Vasudha Barighat, Latha, Ambujakshi\n\nDirection:\n\nDirector Soori\nAssociate Director Chandra\nAssistant Director Mahesh, Suresh, Sathish\n\nProduction:\n\nBanner Samy Associates\nProducer T P Siddaraju\nCo-Producer A T Lokesh, C Rudrappa\nProduction Controller N Ramesh Thalaghattapura\nProduction Manager Madhugiri Prakash\n\nWriters:\n\nStory Soori\nScreenplay Soori\nDialogue Soori\nLyrics V Nagendra Prasad, V Manohar, Ranganath, Yogaraj Bhat\n\nOther Crews:\n\nMusic V Manohar\nBackground Music Sadhu Kokila\nCinematography Sathya Hegde\nEditor Deepu S Kumar\nStunts Different Danny\nChoreography Madan Harini\nArt Y S K Swamy (Prasanna)\nCostume Babu, Anji\nMakeup N K Umamaheshwar\nPRO Sudheendra Venkatesh\nPublicity Designs Kumar\nStills Digital Srinath\n\nSound Recording:\n\nEffects Rajan\nDTS M R Gandhi, D S Balaji\nDubbing Artist Deepa, Asha, Manju\n\nCensor Details:\n\nCBFC U/A\nDated 29-12-2006\nLength 3656 Mts\nColor Color (Cinemascope)\n\nAudio & Video:\n\nAudio On Akshaya Audio\nVideo On Sri Ganesh Video\nRuntime 127 min\n\nSongs & Lyrics:\n\nSong Singer Lyrics\nEe Paapi Janara Haalu\nBadri Prasad V Nagendra Prasad\nSaala Maadiyaadru Thuppa\nMysore Jenny, Gururaj Hosakote V Manohar\nNodayya Kwate Lingave M D Pallavi V Nagendra Prasad\nPreethi Maaye Hushaaru\nHemanth, Aakansha Baadami Ranganath\nEe Paapi Duniya Preethi\nBadri Prasad V Nagendra Prasad\nKariya I Love You Rajesh Krishnan, Nanditha V Nagendra Prasad\nInnomme Neenu Bandu\nBadri Prasad Yogaraj Bhat\n\nRelease info:\n\nRelease date 23-02-2007\nMain Theater Majestic\nWeeks 26\n\nPlot Summary:\n\nDuniya is the story of the oppressed and the suppressed section of society who have been denied access to quality life, education and decent living space. Shivalingu, the protagonist of Duniya is one such person in Bangalore and his only ambition is to build a tomb for his dead mother. Shivalingu comes to the city from his village after burying his dead mother. He saves Poornima, a poor girl studying in college from a group of rapists. When the girl is driven out of the place where she has been staying, it becomes inevitable for both Shivalingu and Poornima to stay together. Help comes from a drunkard who has connections with the underworld. And thus starts Shivalingu’s difficult journey in such an environment. Hounded by both the police and the underworld, he becomes a victim of deceit.\n\nShivu an orphan and uneducated villager comes to Bangalore in search for a living. He meet Poornima a young girl living in a hostel and falls in love with her. Shivu wants to support her education and so joins hands with the underworld to earn quick money. The love for Poornima makes Shivu to fight with mob leaders. In the process the kingpin gets killed. Police mistake that Shivu is responsible for the murders. Would Shivu be able to escape from the police and get Poornima out of the underworld? Watch this movie to know more. #kannada',
    duration: 128,
  },
  {
    id: '257rA1SK04w',
    title:
      'Thappu Thanda Tamil Full Movie HD - Mime Gopi, Ajay Ghosh, Aathma Patrick | Srikantan',
    description:
      'Here is 2017 Latest Tamil Full HD Movie Thappu Thanda\n\nThappu Thanda is a 2017 Tamil comedy thriller film written and directed by debutant Srikantan and produced by Clapboard Productions.\n\nStarring: – Mime Gopi, Ajay Ghosh, Aathma Patrick\nDirector: Srikantan\nProducer: Clapboard Productions\n\n#ThappuThandaFullMovie  #MSKMovies\n\nSuper Hit Tamil HD Movies Click Below:\n\nPoiyattam Action Tamil Full HD Movie: https://youtu.be/HwZyGoYsSWQ\nSandimuni Tamil Horror Full HD Movie: https://bit.ly/2Bno2RP\nGod Father Tamil Full HD Movie: https://bit.ly/2Xtj8vu\nMiga Miga Avasaram Tamil Full HD Movie: https://bit.ly/3cqq8x5\nAdutha Saattai Tamil Full HD Movie: https://bit.ly/2XpDLZf\n100 Tamil Full HD Movie: https://bit.ly/3cnXkFv\nThorati Tamil Full HD Movie: https://bit.ly/2U4cARL\nI Tamil Full HD Movie: https://bit.ly/3gUBfSL\nChennai Palani Mars Movie: https://bit.ly/2EOtiN6\nSimba(சிம்பா) Movie : https://bit.ly/2ZjlH2l\nAgni Devi Movie With English Subtitles: https://bit.ly/2EPzhBa\nVaandu Movie: https://bit.ly/2MmM41W\nSuttu Pidikka Utharavu Movie: https://bit.ly/2PPsIov\nKaatrin Mozhi Movie: https://bit.ly/2Qj1aGY\nBharath Ennum Naan Movie: https://bit.ly/2EQh5r7\nKalavani Mappillai Movie: https://bit.ly/37556lv\nVishwaroopam 2 Tamil Movie: https://bit.ly/2EMRQWL\nVishwaroopam 2 Telugu Movie: https://bit.ly/2t2rIUT\nImaikkaa Nodigal Movie: https://bit.ly/2Ssqcq5\nKalari Tamil Movie: https://bit.ly/2PR9Rt5\nMr. Chandramouli Movie: https://bit.ly/2sTSEGD\nPanjumittai Movie: https://bit.ly/2tMKMHk\nKeni Tamil Full HD Movie:https://bit.ly/2MGW20r\nSollividava Tamil Full HD Movie https://bit.ly/2orNnR5\nNagesh Thiraiarangam Full HD Movie :https://bit.ly/2N0MYD9\nMeyatha Maan  Tamil Full HD Movie: https://bit.ly/2MHXQpR\nSavarakathi Latest Tamil Full HD Movie : https://bit.ly/2optbPM\nKalam Tamil Thriller Full Movie : https://bit.ly/2wBsA16\nNedunchalai Tamil Thriller Full Movie: https://bit.ly/2N8yu3X\n8 Thottakkal Tamil Full Movie  : https://bit.ly/2ov2VUc\nJil Jung Juk Full Movie HD: https://bit.ly/2NciJJc\nThappu Thanda Tamil Full Movie HD: https://bit.ly/2wyAngN\nChennaiyil Oru Naal 2 Full Movie HD : https://bit.ly/2PqomB5\nDhuruvangal Pathinaaru D16 Full HD Movie: https://bit.ly/2PWeXlN\nKuttram 23 Full HD Movie : https://bit.ly/2G3GL5L\n Yeidhavan Latest Full HD Movie: https://bit.ly/2wBxJGr\nIlami  Tamil Full HD Movie: https://bit.ly/2Q0mmRk\nEnga Amma Rani Full Movie: https://bit.ly/2oswXaZ\nAdhe Kangal Full HD Movie : https://bit.ly/2N9aIF8\nAmma Kanakku Tamil Full Movie: https://bit.ly/2NclEBE\nZero Tamil Full HD Movie : https://bit.ly/2wx0Mvz\nSowkarpettai Tamil Full HD Movie: https://bit.ly/2wzThTD\n9 Thirudargal Latest Tamil Full HD Movie: https://bit.ly/2LMStjQ\nSathuran Latest  Tamil Full HD Movie: https://bit.ly/2N72NrW\n\n\n\nSubscribe for more Latest Tamil HD Full Movies,Songs http://www.youtube.com/channel/UCBQhLER2rVxN2TkSuPfJ6rA?sub_confirmation=1',
    duration: 108.03333333333333,
  },
  {
    id: 's5mg7i0EhKs',
    title:
      'Chattam Telugu Full Movie || Jagapathi Babu, Vimala Raman || P A Arun Prasad || M M Sreelekha',
    description:
      'Chattam Movie, Starring Jagapathi Babu, Vimala Raman among others Directed by P.A. Arun Prasad and Produced by Natti Kumar & Rama Satyanarayana. Music Composed by M. M. Sreelekha.\n\nClick Here To watch More Videos,\n\nChattam Full Movie: https://goo.gl/W9vMCX\n\nChattam Movie Songs: https://goo.gl/nz1sPh\n\n►  For Your Movie Promotions And Promotional Interviews \n     Please Call @ +91 7093 162 162\n    (Or) Email Us @ Promotions@iDreamMedia.com\n\nClick here for more Latest Movie updates,\n\n►Subscribe to our Youtube Channel: https://www.youtube.com/channel/UC60U1OtwT9Y6Buecc6P0L5g?sub_confirmation=1\n\n►Like us on  https://www.facebook.com/iDreamMedia',
    duration: 108.25,
  },
  {
    id: 'sz9u1sUGRHQ',
    title:
      'HATE THY NEIGHBOUR | George Eastman | Full Length Western Movie | English | HD | 720p',
    description:
      'Ken wants justice for his brother Bill, who was killed by a notorious gunman named Stevens for a goldmine map. The gunman is arguing with gangster Malone about the map. A deadly cat and mouse game between the three men ensues.\n----------------\nCast:\nSpiros Focás - Ken Dakota\nGeorge Eastman - Gary Stevens\nNicoletta Machiavelli - Peggy Savalas\nIvy Holzer - Mrs. Malone\nRoberto Risso - Duke',
    duration: 85.73333333333333,
  },
  {
    id: 'b5X5id9JFOw',
    title: 'Hányan vásároltak eddig Toyota Hybrid autót?',
    description: '',
    duration: 0.5,
  },
  {
    id: 'loSs-w6dtx0',
    title:
      'Mazha Navra Tujhi Baiko (माझा नवरा तुझी बायको ) - Bharat Jadhav - Ankush Chaudhary - Kishori Ambiye',
    description:
      'Watch Shemaroo MarathiBana On: \n- TATA SKY - CH No. - 1230\n- AIRTEL DIGITAL TV - CH No. - 531\n- DISH TV - CH No. - 4016\n- FREE DISH - CH No. - 88\n- IN DIGITAL MUMBAI - CH No. - 536\n- UCN - 270\n- HATHWAY - 518 \n- GTPL - 474\n- DEN - 834\n- SCOD 18 - 468 \n\nबस स्टॉप ,रझाकार,कट्टी बट्टी , लॅन्ड १८५७, कॅपेचिनो आणि दर महिन्याला बऱ्याच पॉप्युलर मूवी, नाटक आणि टॉक शो (जे कुठेच उपलब्ध नाही ) पाहण्यासाठी JOIN वर क्लिक करा..\nसदस्यता घेण्याच्या पायर्‍या : -\n१) सदस्यता घेण्यासाठी इथे क्लिक करा - http://bit.ly/ShemarooMarathi_Join\n२) शेमारू मराठी चॅनेल वरील जॉईन बटण दाबा.\n३) ₹ ११९ चे  देय द्या आणि प्रीमियम मराठी चित्रपटांचा आनंद घ्या.\nMazha Navra Tujhi Baiko (माझा नवरा तुझी बायको ) - Bharat Jadhav - Ankush Chaudhary - Kishori Ambiye\n\nमूवी स्टार्ट  - 01:04\nअंकुश & किशोरी फनी फाईट सिन - 04:01\nभरत जाधव एंट्री - 23:46\nभरत आणि किशोरी यांची भेट - 32:48\nअंकुश आणि क्रांती यांची भेट  - 35:56\nमराठी सॉंग  - 43:06\nजॉनी लिव्हर एंट्री - 56:49\nमराठी सॉंग - 01:23:33\nभरत भावुक सिन  - 02:02:33\nक्रांती अँग्री सिन - 02:17:46\n\nA romantic comedy about two couples and their complicated married lives. Bharat Jadhav and Ankush Choudhary comedy timings keep you glued till the end. You will learn all the pros and cons of getting married after watching this movie. So do you want to marry? "" .\n\n"To Enjoy Marathi Super Hits Videos, Download Marathi Super Hits App on your Android Phone.\nGoogle playstore: https://play.google.com/store/apps/details?id=com.shemaroo.marathisuperhits\n\nInstall and stay connected with us!!" .\n\nWatch full length Marathi movies, Marathi stage plays,  Marathi videos and  Marathi item songs only on http://www.YouTube.com/ShemarooMarathi. \n\nSUBSCRIBE to stay updated with the latest in Marathi Entertainment. Like, Comment and Share with your friends and family. Connect with us on :- \n\nFacebook -https://www.facebook.com/ShemarooEnt\nTwitter - http://Twitter.com/BollyFilmVideos "" .\n\nTo Enjoy Marathi Super Hits Videos, Download Marathi Super Hits App on your Android Phone.\nGoogle playstore: https://play.google.com/store/apps/details?id=com.shemaroo.marathisuperhits\n\nInstall and stay connected with us!!\n\nDownload ShemarooMe APP for more Marathi Videos, songs and share it with your friends and Family - https://shemaroome.app.link/pkRdNbLk3W\nGive a missed call on 18002665151 \nwww.shemaroome.com',
    duration: 149.13333333333333,
  },
  {
    id: 'VtRaZ2_Za80',
    title: 'Pyar Ke Naam Qurbaan',
    description:
      'A motor mechanic Billo Chaudhary creates waves in the local community when he dares to play Holi with the arrogant and wealthy Rajkumari Devika Singh. When she has him beaten and imprisoned by the police he decides to avenge this humiliation by abducting her and inviting the wrath of her brother Yeshwant - who sexually molests local women with impunity who wants him dead at any and all costs.',
    duration: 134.15,
  },
  {
    id: 'cVXIqHIsmfw',
    title:
      'Aamdar Mazya Khisat (2009) - Anant Jog - Kiran Pise - Usha Naik - Ashuman Vichare',
    description:
      'Watch Shemaroo MarathiBana On: \n- TATA SKY - CH No. - 1230\n- AIRTEL DIGITAL TV - CH No. - 531\n- DISH TV - CH No. - 4016\n- FREE DISH - CH No. - 88\n- IN DIGITAL MUMBAI - CH No. - 536\n- UCN - 270\n- HATHWAY - 518 \n- GTPL - 474\n- DEN - 834\n- SCOD 18 - 468 \n\nबस स्टॉप ,रझाकार,कट्टी बट्टी , लॅन्ड १८५७, कॅपेचिनो आणि दर महिन्याला बऱ्याच पॉप्युलर मूवी, नाटक आणि टॉक शो (जे कुठेच उपलब्ध नाही ) पाहण्यासाठी JOIN वर क्लिक करा..\nसदस्यता घेण्याच्या पायर्‍या : -\n१) सदस्यता घेण्यासाठी इथे क्लिक करा - http://bit.ly/ShemarooMarathi_Join\n२) शेमारू मराठी चॅनेल वरील जॉईन बटण दाबा.\n३) ₹ ११९ चे  देय द्या आणि प्रीमियम मराठी चित्रपटांचा आनंद घ्या.\nAn influential politician Mahipatrao Patil has an ultimate aim to become Chief Minister of Maharashtra, but his dreams come to a standstill when his constituency is declared as reserved for Ladies. To tackle this problem the politician plans, one of his employee Vikas Bhosale�s wife Nisha Bhosale to stand in election. Watch what happens next. "" .\n\n"To Enjoy Marathi Super Hits Videos, Download Marathi Super Hits App on your Android Phone.\nGoogle playstore: https://play.google.com/store/apps/details?id=com.shemaroo.marathisuperhits\n\nInstall and stay connected with us!!" .\n\nWatch full length Marathi movies, Marathi stage plays,  Marathi videos and  Marathi item songs only on http://www.YouTube.com/ShemarooMarathi. \n\nSUBSCRIBE to stay updated with the latest in Marathi Entertainment. Like, Comment and Share with your friends and family. Connect with us on :- \n\nFacebook -https://www.facebook.com/ShemarooEnt\nTwitter - http://Twitter.com/BollyFilmVideos "" .\n\nTo Enjoy Marathi Super Hits Videos, Download Marathi Super Hits App on your Android Phone.\nGoogle playstore: https://play.google.com/store/apps/details?id=com.shemaroo.marathisuperhits\n\nInstall and stay connected with us!!\n\nDownload ShemarooMe APP for more Marathi Videos, songs and share it with your friends and Family - https://shemaroome.app.link/pkRdNbLk3W\nGive a missed call on 18002665151 \nwww.shemaroome.com',
    duration: 113.36666666666666,
  },
  {
    id: 'FUC3G_EljAw',
    title:
      'Ninne Premista | Full Length Telugu Movie | Nagarjuna, Soundarya,Srikanth',
    description:
      "Ninne Premistha Full Length Movie Description : Kalyan(Srikanth) is a Bank officer who is transferred to an interior place of 'Konaseema' along with his friend cum assistant (Rajendra Prasad). There he finds a beautiful belle 'Meghamala' (Soundarya) who looks like the silver screen incarnation of 'Yenki Pilla' .\nMeghamala impresses Kalyan by offering him all the help a neighborhood girl can do to a bachelor. She serves him coffee every morning, dinner every night. She makes him feel that she is in love with him. She always is looking into his eyes. Kalyan, who is bitten by the love bug, informs his parents about his love and ask them to talk to the girl's parents and fix the marriage up. When the parents of Kalyan go to Meghamala's house to ask for her hand, she refutes saying that she does not love him. Dazzled by the turn of events, Kalyan asks Meghamala why did she behave like that. Then she explains that she never loved him. She just helped him as she admires him. There is no love in it. It was pure admiration as he is her neighbor.",
    duration: 159.61666666666667,
  },
  {
    id: 'REbY-hRAFwg',
    title:
      'New Life for Wildlife | Social Enterprise Short Film | by AirAsia Foundation',
    description:
      '#DestinationGOOD #DestinationGOODShortFilms\nThe rising numbers of displaced and rescued wildlife pose a threat to underfunded sanctuaries. AirAsia, in partnership with a social enterprise, brings a unique advantage to animal rehabilitation efforts in Asean.',
    duration: 5.15,
  },
  {
    id: 'RByh6bukrF0',
    title:
      'Jaali Note - Hindi Full Movie - Dev Anand, Madhubala, Om Prakash - Bollywood Movie',
    description:
      'Download the app now and share it with all the asli fans\nhttps://shemaroome.app.link/0XZ0pmF9cX\n\nGive a missed call on 18002665151 \nwww.shemaroome.com\nDinesh lives a middle-class lifestyle along with his mother in Bombay. On his 5th birthday, his father leaves them never to return. Now Dinesh has grown up, is working for the Criminal Investigations Department and has been assigned to stop the circulation of fake currency notes. In the course of his investigation, he falls in love with a reporter named Renu. Also as Dinesh digs deeper in the case, he makes a discovery of shocking personal significance. Watch what happens next.\n\nSign up for Free and get daily updates on New Videos, exclusive Web Shows, contests & much more\nhttp://youtube.shemaroo.com/default.aspx\n\nSend us your feedback and suggestions at : connect@shemaroo.com',
    duration: 125.31666666666666,
  },
  {
    id: 'ec01qY3XfHk',
    title: 'Rajkumar',
    description:
      'SUBSCRIBE for the best Bollywood videos, movies, scenes and songs, all in ONE channel: https://bit.ly/2TEp6EL\nThe Maharaja is eager to see his foreign-returned son, Bhanu Pratap who will eventually take over the reins of the region. When he finally gets to see his son, he is shocked to see that the crown prince is in fact a "clown" prince. He openly shows his disgust and disappointment, and decides to continue to rule. Bhanu Pratap and his friend, Kapil, decide to dress incognito and mingle with the general public and find out if there is anyone conspiring to dethrone the king. What they find out will change their lives, and endanger the lives of their loved ones as well.\n\n\nIf You Like The Video Don\'t Forget To Share With Others & Also Share Your Views.\n\nSUBSCRIBE for the best Bollywood videos, movies and scenes, all in ONE channel https://www.youtube.com/user/seplfilmidhamaka. Like, Comment and Share with your friends and family. \n\nWatch more Bollywood videos and movies starring your favourite celebrities like Amitabh Bachchan, Raj Kapoor, Dharmendra, Zeenat Aman, Vidya Balan, Govinda, Salman Khan and many more, only on https://www.youtube.com/user/seplfilmidhamaka Your One Stop Destination For All The Latest Videos Subscribe Now!\nhttp://www.youtube.com/subscription_center?add_user=seplfilmidhamaka',
    duration: 162,
  },
  {
    id: 'ho4v3OwyB_w',
    title: '微风吹过原野＋举起你的右手摆一摆＋小螳螂',
    description: 'four golden princess 四千金',
    duration: 3.95,
  },
  {
    id: 'NkFpvQ4HemE',
    title: 'СВОДКА С ФРОНТА',
    description:
      'В свежем выпуске проекта "Гражданин поэт" F5 представляет Константина Симонова.\r\nЧто написал бы он в связи с открытием Общероссийского народного фронта? Версию Дмитрия Быкова излагает Михаил Ефремов.',
    duration: 1.9166666666666665,
  },
  {
    id: 'dWKN1qN2njc',
    title: "We don't do dodgy.",
    description:
      "Ever feel like your bank isn't hearing you? At Affinity, we know great advice starts with actually listening! Maybe it's time you unbank yourself!",
    duration: 0.5166666666666667,
  },
  {
    id: 'IOfb2k5lxh4',
    title: 'Make Every Moment the Main Event | $7.99 Play All Day',
    description: '',
    duration: 0.26666666666666666,
  },
];

module.exports = mockSearchResults;
