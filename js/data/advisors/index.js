/**
 * @file index.js
 * @description Advisor data for the Advising page — profile info, card summary content, and full bio content for each advisor's detail modal.
 * @module data/advisors
 */

export const ADVISORS = [
  {
    id: "kyaw-myo-naing",
    name: "Kyaw Myo Naing (Reynolds)",
    photo: "../../../assets/members/kyaw-myo-naing.webp",
    role: "Advisor & COO",
    cardIntro:
      "Introducing Ko Kyaw Myo Naing, our committed advisor who is prepared to guide you via your academic path. In addition to his positions as COO and former Head of Research at Chate - The Hook, he has a strong background in strategic application planning and profile building, with an academic focus on Education Studies from Washington College, Maryland's Premier Liberal Arts College.",
    cardHighlight:
      "He is uniquely qualified to provide you with the tailored support you require to realise your greatest potential.",
    universities: [
      {
        name: "Washington College",
        logo: "../../../assets/advising-uni-logos/logo-washington.webp",
      },
      {
        name: "University of Warsaw",
        logo: "../../../assets/advising-uni-logos/logo-warsaw.webp",
      },
    ],
    calendlyUrl: "https://calendly.com/pierce-reynolds/consultation",
    modalBlocks: [
      {
        type: "paragraph",
        text: "Introducing Ko Kyaw Myo Naing. He received the Francis Waters Award, the Colin Ferguson Tuition Scholarship, and grants after being admitted to Washington College, Maryland's Premier Liberal Arts College, to pursue a BA in Education Studies (Human Development). He was also admitted to major in International Relations at the University of Warsaw, Poland's #1 ranked university.",
      },
      {
        type: "paragraph",
        text: "Ko Kyaw Myo Naing has 5 years of experience as an educational consultant and a solid track record of offering advice through Chate's Facebook Messenger and Research Department. His area of expertise is helping students choose the best high school programs for their individual goals, including CAIE IGCSE, Edexcel iGCSE, Cambridge International GCE A Level, Edexcel International Advanced Level, International Baccalaureate, WASC + APs, AUSMAT, CIMP, and GED.",
      },
      {
        type: "paragraph",
        text: "He also helps students find and apply to the best universities in the United States, United Kingdom, Canada, Europe, Asia, and Southeast Asia, and offers parents and students comprehensive guidance on high school scholarships and university application strategy.",
      },
      {
        type: "paragraph",
        text: `As a past mentee of Chate's well-known "တက္ကသိုလ်များဆီသို့" Program, he obtained scholarships totalling around $1.5 million. After leadership roles as Head of Research, PR Coordinator, and Content Writer, he currently serves as Chate - The Hook's COO.`,
      },
    ],
  },
  {
    id: "yee-mon-thet",
    name: "Yee Mon Thet (Yveria)",
    photo: "../../../assets/additional-advisors/yee-mon-thet.webp",
    role: "Advisor",
    cardIntro:
      "Meet Yee Mon Thet (Yveria), a superb advisor committed to assisting you in realising your ideal academic objectives. She has an excellent academic background and is currently a Vice Chancellor's ASEAN Awards Scholar studying Biomedical Science at Monash University Australia.",
    cardHighlight:
      "She has an AP Capstone Diploma, 11 AP classes with 4s and 5s. She is here to help you succeed academically.",
    universities: [
      {
        name: "Monash University",
        logo: "../../../assets/advising-uni-logos/logo-monash.webp",
      },
    ],
    calendlyUrl: "https://calendly.com/thetyeemon77/advising-session",
    modalBlocks: [
      {
        type: "paragraph",
        text: "Yee Mon Thet (Yveria), a laureate of the prestigious Vice-Chancellor's ASEAN Awards, is presently enrolled at Monash University Australia to pursue a degree in Biomedical Science.",
      },
      { type: "heading", text: "Academic Excellence" },
      {
        type: "paragraph",
        text: "She received two AP Scholar awards, an AP Capstone Diploma, and a 3.88 unweighted GPA at graduation. She completed 11 AP classes, earning 4s and 5s in Biology, Chemistry, Calculus BC, Psychology, Physics 1, Seminar, Research, English Language, English Literature, World History, and Statistics. She also achieved a UCAT score of 2310 (Band 2) and an SAT score of 1500 (Math: 770, English: 730), and was a member of the National Honours Society.",
      },
      { type: "heading", text: "Extracurricular Achievements & Leadership" },
      {
        type: "paragraph",
        text: "Yveria has logged more than 200 clinical hours and more than 300 hours of volunteer work. She helped resuscitate the nation's first post-COVID TEDx event, TEDxISM, as a Founding Member, Curator, and Emcee, inspiring over ten foreign schools and organisations to open chapters across the country. She has also held leadership roles including president, vice president, and treasurer across several community service clubs, and enjoys writing poetry and prose and quilting in her spare time.",
      },
    ],
  },
  {
    id: "shwe-eain-linn",
    name: "Shwe Eain Linn",
    photo: "../../../assets/members/shwe-eain-linn.webp",
    role: "Advisor & Head of Research",
    cardIntro:
      "Meet our advisor, Ma Shwe Eain Linn, who is prepared to guide you through your international academic journey. She has a stellar record of being accepted to prestigious universities in Canada, Hong Kong, and Germany as a UWC Davis Scholar starting a joint study program in American College of Norway with Concordia College (Moorhead) where she will major in Business Administration and Management.",
    cardHighlight:
      "She provides insightful perspectives from around the world to her advising sessions because of her leadership experience at Chate - The Hook.",
    universities: [
      {
        name: "University of British Columbia",
        logo: "../../../assets/advising-uni-logos/logo-british-columbia.webp",
      },
      {
        name: "Hong Kong University",
        logo: "../../../assets/advising-uni-logos/logo-hong-kong.webp",
      },
    ],
    calendlyUrl: "https://calendly.com/shweeainlinn6/general-advising-session",
    modalBlocks: [
      {
        type: "paragraph",
        text: "Ma Shwe Eain Linn is currently preparing to start a joint study program in American College of Norway with Concordia College (Moorhead) as a distinguished UWC Davis Scholar, where she will major in Business Administration and Management. She is a UWC Scholarship recipient from UWC Changshu China (UWCCSC), Class of 2026.",
      },
      { type: "heading", text: "Academic & Admission Success" },
      {
        type: "paragraph",
        text: "Having received scholarships and admission offers from prestigious universities across the globe, she holds a highly competitive international admissions profile — with acceptances including the University of British Columbia (Canada), Hong Kong University, Hong Kong PolyU, and Bard College Berlin (Germany), among several others.",
      },
      { type: "heading", text: "Extracurricular Activities & Leadership" },
      {
        type: "paragraph",
        text: "Shwe Eain Linn is a committed student leader passionate about helping others pursue their own educational goals. Having previously served as Head of the Public Relations Department at Chate - The Hook, she brings a wealth of organisational and communication experience to her advising sessions, and currently continues her leadership career as Head of the Research Department.",
      },
    ],
  },
  {
    id: "yoon-ei-ko-ko",
    name: "Yoon Ei Ko Ko",
    photo: "../../../assets/members/yoon-ei-ko-ko.webp",
    role: "Advisor",
    cardIntro:
      "Meet Ma Yoon Ei Ko Ko, our committed advisor, who is prepared to assist you in realising your goals of pursuing higher education. She has successfully obtained an All-Inclusive Full Ride offer in the USA and university acceptances in Japan, Germany, and Macau as a UWC Full Ride Scholar getting ready to study International Relations at Masaryk University.",
    cardHighlight:
      "She is here to help you succeed because of her vast experience.",
    universities: [
      {
        name: "Masaryk University",
        logo: "../../../assets/advising-uni-logos/logo-masaryk.webp",
      },
      {
        name: "University of St. Thomas",
        logo: "../../../assets/advising-uni-logos/logo-thomas.webp",
      },
    ],
    calendlyUrl: "https://calendly.com/yooneikoko-burma05/30min",
    modalBlocks: [
      {
        type: "paragraph",
        text: "Ma Yoon Ei Ko Ko is a recipient of the UWC Full Ride Scholarship from the Mahindra United World College of India (MUWCI), Class of 2025, and is getting ready to major in International Relations at Masaryk University (Class of '29).",
      },
      { type: "heading", text: "Academic and Admissions Achievement" },
      {
        type: "paragraph",
        text: "She was awarded an All-Inclusive Full Ride Scholarship at the University of St. Thomas in the United States for her outstanding academic and application achievements. She has also been accepted to universities around the world, including the University of Macau, Constructor University Bremen in Germany, and Ritsumeikan University in Japan.",
      },
      { type: "heading", text: "Extracurricular Activities & Leadership" },
      {
        type: "paragraph",
        text: "Having previously held the position of Head of the Content Writing Department at Chate - The Hook, she brings strong communication and strategic skills to her advising sessions.",
      },
    ],
  },
  {
    id: "win-htut-aung",
    name: "Win Htut Aung (Nolan)",
    photo: "../../../assets/members/win-htut-aung.webp",
    role: "Advisor",
    cardIntro:
      "Introducing Ko Win Htut Aung (Nolan), our advisor committed to assisting you in reaching your academic objectives. He is currently receiving a Full Tuition Scholarship to study Chemical and Process Engineering at the top-ranked Chulalongkorn University in Thailand.",
    cardHighlight:
      "As the former Chief of Asia at the Globalised Department, he brings outstanding regional expertise, academic excellence, and valuable leadership experience to help you realise your full potential.",
    universities: [
      {
        name: "Chulalongkorn University",
        logo: "../../../assets/advising-uni-logos/logo-chulalongkorn.webp",
      },
    ],
    calendlyUrl: "https://calendly.com/nolansivan/30min",
    modalBlocks: [
      {
        type: "paragraph",
        text: "At Chulalongkorn University, the top-ranked university in Thailand and one of the best in Asia, Ko Win Htut Aung (Nolan) is presently pursuing a degree in Chemical and Process Engineering on a Full Tuition Scholarship.",
      },
      { type: "heading", text: "Academic and Admissions Achievement" },
      {
        type: "paragraph",
        text: "Nolan offers outstanding regional insights and useful strategies for students wishing to pursue further education in Thailand. He has a solid background in STEM and first-hand experience obtaining highly competitive international grants.",
      },
      { type: "heading", text: "Extracurricular Activities & Leadership" },
      {
        type: "paragraph",
        text: "Beyond his academic pursuits, he has a strong commitment to community development and student leadership. Having previously held the position of Chief of Asia at the Globalised Department for Chate - The Hook, he brings a wealth of organisational and consultancy experience to his sessions.",
      },
    ],
  },
];
