import { v4 as uuid } from 'uuid';

/**
 * Quiz Database can be added here.
 * You can add quiz of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    quizName: 'One Piece',
    categoryName: 'Anime',
    quizImage: 'https://theprofanedotaku.com/wp-content/uploads/2021/08/One-Piece-1.jpg',
    questions: [
      {
        _id: uuid(),
        question: 'Who is the main character of One Piece?',
        options: ['Monkey D. Luffy', 'Roronoa Zoro', 'Gol D Roger', 'Edward Newgate'],
        answer: 'Monkey D. Luffy',
      },
      {
        _id: uuid(),
        question: 'Which sword style does Zoro use?',
        options: ['Itoryu', 'Nitoryu', 'Santoryu', 'Yonoryu'],
        answer: 'Santoryu',
      },
      {
        _id: uuid(),
        question: 'Who is not a member of the Straw Hat Pirates?',
        options: ['Nami', 'Usopp', 'Sabo', 'Chopper'],
        answer: 'Sabo',
      },
      {
        _id: uuid(),
        question: 'Which devil fruit did Luffy eat to gain his power?',
        options: ['Gomu gomu no mi', 'Gura gura no mi', 'Bari bari no mi', 'Kuro kuro no mi'],
        answer: 'Gomu gomu no mi',
      },
      {
        _id: uuid(),
        question:
          'Following the time skip, which Straw Hat was the first to reach the Thousand Sunny?',
        options: ['Chopper', 'Franky', 'Nami', 'Zoro'],
        answer: 'Zoro',
      },
    ],
  },
  {
    _id: uuid(),
    quizName: 'Naruto',
    categoryName: 'Anime',
    quizImage:
      'https://timelinecovers.pro/facebook-cover/download/anime-naruto-happiness-facebook-cover.jpg',
    questions: [
      {
        _id: uuid(),
        question: 'Who among these is not a member of the Uchiha clan?',
        options: ['Sasuke', 'Kakashi', 'Shisui', 'Itachi'],
        answer: 'Kakashi',
      },
      {
        _id: uuid(),
        question: 'Who was the fourth Hokage?',
        options: ['Hashirama Senju', 'Naruto Uzumaki', 'Hiruzen Sarutobi', 'Namikaze Minato'],
        answer: 'Namikaze Minato',
      },
      {
        _id: uuid(),
        question: 'Who is a member of the Akatsuki?',
        options: ['Kiba Inuzuka', 'Shino Aburame', 'Nagato', 'Sakura Haruno'],
        answer: 'Nagato',
      },
      {
        _id: uuid(),
        question: 'What is the name of the nine tailed fox?',
        options: ['Shukaku', 'Son Goku', 'Kurama', 'Gyuki'],
        answer: 'Kurama',
      },
      {
        _id: uuid(),
        question: 'Which Legendary Sanin taught Naruto rasengan?',
        options: ['Jiraiya', 'Tsunade', 'Orochimaru', 'Danzo'],
        answer: 'Jiraiya',
      },
    ],
  },
  {
    _id: uuid(),
    quizName: 'Suits',
    categoryName: 'TV Shows',
    quizImage: 'https://images7.alphacoders.com/691/thumb-1920-691265.jpg',
    questions: [
      {
        _id: uuid(),
        question: "What is Louis's catchphrase?",
        options: [
          "I'm the Litt-man!",
          'You just got Litt up',
          'We Litt a fire under them!',
          'LITigation for all!',
        ],
        answer: 'You just got Litt up',
      },
      {
        _id: uuid(),
        question:
          'Who is the senior SEC official that Harvey butts head with on more than one occasion?',
        options: ['Sean Cahill', 'Harold Gunderson', 'Robert Zane', 'Travis Tanner'],
        answer: 'Sean Cahill',
      },
      {
        _id: uuid(),
        question:
          "From which law school must all associates have graduated in order to work at Jessica Pearson's law firm?",
        options: ['Stanford', 'Columbia', 'Harvard', 'Yale'],
        answer: 'Harvard',
      },
      {
        _id: uuid(),
        question:
          'Jessica Pearson and Daniel Hardman ousted the named partners in order to create Pearson Hardman. What was the firm called before the ousting?',
        options: [
          'Skadden Arps Slate',
          'Rand Kaldor Zane',
          'Gordon Schmidt Van Dyke',
          'Litt Wheeler Williams Bennett',
        ],
        answer: 'Gordon Schmidt Van Dyke',
      },
      {
        _id: uuid(),
        question: "How does Louis figure out that Mike didn't attend Harvard?",
        options: ['Order of the Coif key', 'Knight of Columbus', 'Key Largo', 'Pudding'],
        answer: 'Order of the Coif key',
      },
    ],
  },
  {
    _id: uuid(),
    quizName: 'How I Met Your Mother',
    categoryName: 'TV Shows',
    quizImage: 'https://media.baamboozle.com/uploads/images/21569/1582873603_43144',
    questions: [
      {
        _id: uuid(),
        question: 'What is the name of the character that is the main protagonist of the show?',
        options: ['Ted Mosby', 'Robin Scherbatsky', 'Marshall Eriksen', 'Lily Aldrin'],
        answer: 'Ted Mosby',
      },
      {
        _id: uuid(),
        question: 'What phrase does Robin constantly say on her pre-morning news show?',
        options: ['Like, so', 'Yeah Yeah', 'But...Umm', 'Uh..so'],
        answer: 'But...Umm',
      },
      {
        _id: uuid(),
        question: 'What Is The Name Of The Bar That Barney And Ted Open?',
        options: ['Puzzles', 'Enigma', 'Paradox', 'Labyrinth'],
        answer: 'Puzzles',
      },
      {
        _id: uuid(),
        question: 'Which company have Barney, Ted and Marshall all worked for?',
        options: [
          'Honeywell & Cootes',
          'Pied Piper',
          'AltruCell Corporation',
          'Goliath National Bank',
        ],
        answer: 'Goliath National Bank',
      },
      {
        _id: uuid(),
        question: "What Is Barney's Job Title?",
        options: [
          'Provide Legal Exoneration And Sign Everything',
          'Provide Legal Evidence And Sign Everything',
          'Provide Legal Exculpation And Sign Everything',
          "It's Only Ever Referred To As 'PLEASE'",
        ],
        answer: 'Provide Legal Exculpation And Sign Everything',
      },
    ],
  },
  {
    _id: uuid(),
    quizName: 'Olympics',
    categoryName: 'Sports',
    quizImage:
      'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80',
    questions: [
      {
        _id: uuid(),
        question:
          'Who holds the record for the most number of gold medals in a single Olympics event?',
        options: ['Usain Bolt', 'Michael Phelps', 'Mark Spitz', 'Serena Williams'],
        answer: 'Michael Phelps',
      },
      {
        _id: uuid(),
        question: 'Where was the 1996 Summer Olympics held?',
        options: ['London', 'Beijing', 'Rio De Janeiro', 'Atlanta'],
        answer: 'Atlanta',
      },
      {
        _id: uuid(),
        question: 'To which Greek God were the ancient Olympic Games dedicated?',
        options: ['Athena', 'Hera', 'Apollo', 'Zeus'],
        answer: 'Zeus',
      },
      {
        _id: uuid(),
        question: 'Which of these countries has not hosted the summer Olympics?',
        options: ['Finland', 'Mexico', 'India', 'Belgium'],
        answer: 'India',
      },
      {
        _id: uuid(),
        question: 'Which city has held the modern Games three times?',
        options: ['Athens', 'London', 'Tokyo', 'Los Angeles'],
        answer: 'London',
      },
    ],
  },
  {
    _id: uuid(),
    quizName: 'Formula 1',
    categoryName: 'Sports',
    quizImage:
      'https://images.unsplash.com/photo-1582854050148-651d87fa3319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    questions: [
      {
        _id: uuid(),
        question: 'What is the name of the Formula 1 team that won the most Grand Prix?',
        options: ['Mercedes', 'Ferrari', 'Red Bull', 'McLaren'],
        answer: 'Ferrari',
      },
      {
        _id: uuid(),
        question: 'Who was the first driver to win 7 World Championships?',
        options: ['Michael Schumacher', 'Niki Lauda', 'Ayrton Senna', 'Jenson Button'],
        answer: 'Michael Schumacher',
      },
      {
        _id: uuid(),
        question: 'What was the previous name of the Red Bull team?',
        options: ['Aston Martin Racing', 'Toro Rosso', 'Jaguar Racing', 'Caterham F1'],
        answer: 'Jaguar Racing',
      },
      {
        _id: uuid(),
        question: 'Which team did Max Verstappen win the World Championship for?',
        options: ['Red Bull', 'McLaren', 'Ferrari', 'Mercedes'],
        answer: 'Red Bull',
      },
      {
        _id: uuid(),
        question: 'Which driver holds the longest streak of consecutive wins?',
        options: ['Lewis Hamilton', 'Sebastian Vettel', 'Michael Schumacher', 'Kimi Räikkönen'],
        answer: 'Sebastian Vettel',
      },
    ],
  },
];
