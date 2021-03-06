import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

export const accessCodesExample = [
  {
    code: 12345,
    authority: "mentor"
  }
]

export const adminDefault = [
  {
    name: "ADMIN",
    username: "ADMIN",
    password: "ADMIN",
    email: "ADMIN",
    authority: "ADMIN",
    mentors: [],
    mentees: [],
    messages: [],
    events: []
  }
]

export const loginsExample = [
    {
      name: "ADMIN",
      username: "ADMIN",
      password: "ADMIN",
      email: "ADMIN",
      authority: "ADMIN",
      mentors: [],
      mentees: [],
      messages: [],
      events: []
    },

    {
      name: "Andy Jenkins",
      username: "supervisor",
      password: "supervisor",
      email: "supervisor@gmail.com",
      authority: "supervisor",
      mentors: [ "mentor" ],
      mentees: [],
      messages: [
        [
          /**
           * Mock message data
           */
          // example of system message
          {
            _id: 1,
            text: 'New room created.',
            createdAt: new Date().getTime(),
            system: true
          }
        ],
        [
          /**
           * Mock message data
           */
          // example of system message
          {
            _id: 2,
            text: 'New room created.',
            createdAt: new Date().getTime(),
            system: true
          }
        ],
        [
          /**
           * Mock message data
           */
          // example of system message
          {
            _id: 3,
            text: 'New room created.',
            createdAt: new Date().getTime(),
            system: true
          }
        ],
        [
          /**
           * Mock message data
           */
          // example of system message
          {
            _id: 4,
            text: 'New room created.',
            createdAt: new Date().getTime(),
            system: true
          }
        ]

    ],
      events: [],
    },
    {
      name: "Sarah Hopkins",
      username: "mentor",
      password: "mentor",
      email: "mentor@gmail.com",
      authority: "mentor",
      mentors: [],
      mentees: [1, 2, 3, 4],
      messages: [
          [
            /**
             * Mock message data
             */
            // example of system message
            {
              _id: 0,
              text: 'New room created.',
              createdAt: new Date().getTime(),
              system: true
            },
            {
              _id: 1,
              text: 'Henlo!',
              text: 'Thanks for all your help.',
              createdAt: new Date().getTime(),
              user: {
                _id: 2,
                name: 'Test User'
              }
            },
          ],
          [
            /**
             * Mock message data
             */
            // example of system message
            {
              _id: 0,
              text: 'New room created.',
              createdAt: new Date().getTime(),
              system: true
            }
          ],
          [
            /**
             * Mock message data
             */
            // example of system message
            {
              _id: 0,
              text: 'New room created.',
              createdAt: new Date().getTime(),
              system: true
            }
          ],
          [
            /**
             * Mock message data
             */
            // example of system message
            {
              _id: 0,
              text: 'New room created.',
              createdAt: new Date().getTime(),
              system: true
            }
          ]

      ],
      events: [],
  }
]

export const menteesExample = [{
    id: 1,
    name: 'John Smith',
    moodreports: [
                  {date: '08/24/2001', mood: 'Happy', stresslevel: 'Low' },
                  {date: '08/25/2001', mood: 'Neutral', stresslevel: 'Medium' },
                  {date: '08/26/2001', mood: 'Neutral', stresslevel: 'Low' },
                 ],
   risk: FindAVGHelper('Happy', 'Low', 'Neutral', 'Medium', 'Neutral', 'Low'),
   riskIcon: require('../../assets/greenbutterflyicon.png'),
   flag: 0,
   flagIcon: require('../../assets/flag0.png'),
  },
  {
    id: 2,
    name: 'Jane Doe',
    moodreports: [
                  {date: '08/24/2001',mood: 'Sad', stresslevel: 'Low'},
                  {date: '08/25/2001',mood: 'Neutral', stresslevel: 'High'},
                  {date: '08/26/2001',mood: 'Sad', stresslevel: 'Medium'},
                 ],
   risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
   riskIcon: require('../../assets/yellowbutterflyicon.png'),
   flag: 0,
   flagIcon: require('../../assets/flag0.png'),
  },
  {
    id: 3,
    name: 'Adam Sandler',
    moodreports: [
                  {date: '08/24/2001',mood: 'Sad',stresslevel: 'Low'},
                  {date: '08/25/2001',mood: 'Neutral',stresslevel: 'High'},
                  {date: '08/26/2001',mood: 'Sad',stresslevel: 'Medium'},
                 ],
   risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
   riskIcon: require('../../assets/yellowbutterflyicon.png'),
   flag: 0,
   flagIcon: require('../../assets/flag0.png'),
  },
  {
    id: 4,
    name: 'Paige Peach',
    moodreports: [
                  {date: '08/24/2001',mood: 'Sad',stresslevel: 'Low'},
                  {date: '08/25/2001',mood: 'Neutral',stresslevel: 'High'},
                  {date: '08/26/2001',mood: 'Sad',stresslevel: 'Medium'},
                 ],
   risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
   riskIcon: require('../../assets/yellowbutterflyicon.png'),
   flag: 0,
   flagIcon: require('../../assets/flag0.png'),
  }
]

export const questionsExample = [
  {
    id: 1,
    askerid: 27984, 
    date: "1/23/2022",
    questiontext: "How do I eliminate stress in my life?",
    responses: [],
    flagged: false
  },
  {
    id: 2,
    askerid: 27985, 
    date: "1/24/2022",
    questiontext: "How do I improve my moods?",
    responses: [],
    flagged: false
  },
  {
    id: 3,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I keep my depression from taking over my life?",
    responses: [],
    flagged: false
  },
  {
    id: 4,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I manage my anxiety?",
    responses: [],
    flagged: false
  },
  {
    id: 5,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "What should I do if I am experiencing bullying?",
    responses: [],
    flagged: false
  },
  {
    id: 6,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "What should I do if I am experiencing sucidial thoughts?",
    responses: [],
    flagged: false
  },
  {
    id: 7,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How do I effectively meditate?",
    responses: [],
    flagged: false
  }
]


// responses : [
//   username: ? 
//   text: ?
// ]
