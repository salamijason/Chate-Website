/**
 * @file faq.js
 * @description Renders the FAQ section of the website, providing answers to common questions about the "ချိတ်" project and its services.
 * @module components/faq
 */

import { wrapMyanmarScript } from "../utils/text-utils.js";

const FAQS = [
  {
    question: "တက္ကသိုလ်ဝင်ခွင့်အတွက်၊ ပညာသင်ဆုအတွက် ဘာတွေများ လိုအပ်ပါသလဲ။",
    highlight: "ဘာတွေများ ကြိုပြင်ဆင်ထားနိုင်မလဲ။",
    paragraphs: [
      `ကျောင်းလျှောက်ဖို့နဲ့ ပညာသင်ဆု လျှောက်ဖို့ အရေးကြီးဆုံးကတော့ အထက်တန်း အောင်လက်မှတ်ပါ။ မြန်မာကျောင်းသားတွေကြားမှာ လူသိအများဆုံး အထက်တန်း သင်ရိုးတွေကတော့ GED, IGCSE + IAL, OSSD, IBDP, American G12 နဲ့ Burmese National Curriculum တို့ ဖြစ်ကြပါတယ်။ လျှောက်ထားမယ့်နိုင်ငံတွေ အပေါ်မူတည်ပြီး သင်ရိုးလက်ခံမှု ကွာခြားနိုင်ပါတယ်။ အကြမ်းအားဖြင့်တော့ IGCSE + IAL, IBDP နဲ့ American G12 (Supplemented with AP Curriculum) ကတော့ ဘယ်နိုင်ငံ လျှောက်လျှောက်​ ရနိုင်တဲ့ သင်ရိုးကြီး သုံးခု ဖြစ်ပါတယ်။`,
      `ဒီအထက်တန်းအောင်လက်မှတ်အပြင် တက္ကသိုလ်နဲ့ နိုင်ငံပေါ်မူတည်ပြီး SAT, ACT စတဲ့ Standardized Test တွေအပြင် University က ကြီးမှူးတဲ့ Entrance Test တွေ၊ UCAT, LNAT စတဲ့ Professional School တွေအတွက် Test တွေ ဖြေရကောင်း ဖြေရနိုင်ပါတယ်။ ဒါ့အပြင် IELTS, TOEFL, Duolingo စတဲ့ English Proficiency Test တွေလည်း လိုအပ်နိုင်ပါတယ်။`,
      `ဒါ့အပြင် Extracurricular Activities လို့ ခေါ်တဲ့ သင်ရိုးပြင်ပလှုပ်ရှားမှုတွေ၊ မိမိစိတ်ဝင်စားရာ အားကစားနဲ့ ဘာသာရပ်တွေမှာ ရရှိထားတဲ့ ဆုတံဆိပ်တွေ၊ စိတ်အားထက်သန်ရာကို ပြသနိုင်မယ့် Volunteer လုပ်ဆောင်မှုတွေလည်း ရှိထားဖို့ အရေးကြီးပါတယ်။ Persuasive Essay Writing Skills, Interviewing Experience နဲ့ Research Skills တွေလည်း ရှိထားရင် အကောင်းဆုံး ဖြစ်ပါတယ်။`,
    ],
  },
  {
    question: `“ချိတ် - The Hook”ကနေပြီး ကျောင်းလျှောက်ဖို့အတွက်`,
    highlight: "ဘယ်လိုအကူအညီတွေ ရနိုင်မလဲ။",
    paragraphs: [
      `အခုလက်ရှိအချိန်အတွက် အထိရောက်ဆုံး ဖြစ်မယ့် Program ကတော့ "တက္ကသိုလ်များဆီသို့ (Global)" College Admissions Advising Program ဖြစ်ပါတယ်။
      <a
        class="faq__link"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf4pknYO2KCBWIgbzz2FowlWdgTNbnplDcVZgvetM3VgDMKvQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >ဒီကနေပြီး</a>
      လျှောက်ထားနိုင်ပါတယ်။ UK, Australia, Hong Kong အပါအဝင် နိုင်ငံ ဆယ်နိုင်ငံထက်မနည်းကို ကျောင်းလျှောက်ထားရာမှာ ဒီ Program က ကူညီပေးနိုင်မှာ ဖြစ်ပါတယ်။ ကူညီပေးမယ့် Advisors တွေ ကိုယ်တိုင်ကလည်း ထိပ်တန်း တက္ကသိုလ်မှာ တက်ရောက်နေတဲ့ မြန်မာကျောင်းသားတွေပဲမို့ အထိရောက်ဆုံး အကူအညီတွေ ပေးနိုင်မှာ ဖြစ်ပါတယ်။`,
      `ဒါ့အပြင် "ချိတ်"ကနေပြီး Host ထားတဲ့ Webinar တွေကနေလည်း အချက်အလက်ပေါင်းများစွာ ရနိုင်ပါတယ်။ နိုင်ငံပေါင်း ၂၀ ကျော်ရဲ့ ပညာသင်ဆုနဲ့ တက္ကသိုလ် ဝင်ခွင့်အကြောင်းတွေကို ရှင်းပြတဲ့ "Above & Beyond" Series, အထက်တန်းပညာသင်ဆုတွေ အကြောင်း ရှင်းပြတဲ့ "A Stepping Stone" Series, အမေရိကန်နိုင်ငံရဲ့ Undergraduate အကြောင်း ခရေစေ့တွင်းကျ ပြောပြထားတဲ့ "ကျောင်းလျှောက်ကြမယ်" Series စတာတွေကို
      <a class="faq__link" href="/events.html">ဒီမှာ</a>
      သွားရောက် ကြည့်ရှုနိုင်ပါတယ်။`,
      `အမြန်ဆုံးနဲ့ အပြည့်စုံဆုံးဖြစ်တဲ့ Information တွေကိုတော့ "ချိတ်"ရဲ့
      <a class="faq__link" href="/articles.html">Content</a>
      တွေကနေ သိနိုင်ပါတယ်။ ထိပ်တန်းကျောင်းတွေ ဝင်ခွင့်ရ မြန်မာကျောင်းသားတွေရဲ့ Essay တွေကိုတော့
      <a class="faq__link" href="/events.html#su-tu-pyu">"စုတုပြု" Series</a>
      ကနေ လေ့လာနိုင်ပါတယ်။`,
    ],
    note: `“ချိတ် - The Hook” အနေနဲ့ အခုချိန်ထိတော့ Undergraduate အတွက်သာ အကူအညီပေးနိုင်သေးတာ ဖြစ်ပြီး Master/Postgraduate Degree, PhD/Doctorate Degree တွေအတွက်တော့ အကူအညီပေးနိုင်ခြင်း မရှိသေးပါဘူး။`,
  },
  {
    question: `“ချိတ် - The Hook”မှာ Volunteer အနေနဲ့​ လုပ်အားပေးချင်ပါတယ်။`,
    highlight: "ဘယ်လိုများ ဆက်သွယ်လို့ရနိုင်မလဲ။",
    paragraphs: [
      `"ချိတ်" ကနေပြီး Volunteer ခေါ်မယ်ဆိုရင် Facebook Page ကနေပြီး ကြေညာပါလိမ့်မယ်။ တနှစ် အနည်းဆုံး တကြိမ်တော့ "ချိတ်" ကနေပြီး Volunteer အသစ် ခေါ်ယူလေ့ရှိပါတယ်။`,
    ],
  },
  {
    question: `“ချိတ် - The Hook” ကို တခြား မေးချင်တာတွေ ရှိပါသေးတယ်။`,
    highlight: "ဘယ်ကနေပြီး ဆက်သွယ်နိုင်ပါမလဲ။",
    paragraphs: [
      `“ချိတ် - The Hook” Facebook Page ရဲ့ ChatBox ကနေပြီး အမြန်ဆုံး ဆက်သွယ်နိုင်ပါတယ်။ ဒါ့အပြင် “ချိတ် - The Hook Q&A” Facebook Group,
      <a class="faq__link" href="mailto:chatethehook@gmail.com">chatethehook@gmail.com</a>
      စတာတွေမှာလည်း မေးခွန်းတွေ မေးမြန်းနိုင်ပါတယ်။`,
    ],
  },
];

function renderFAQItem(faq) {
  const paragraphsHTML = faq.paragraphs
    .map((p) => `<p class="faq__paragraph">${wrapMyanmarScript(p)}</p>`)
    .join("");

  const noteHTML = faq.note
    ? `<p class="faq__note">${wrapMyanmarScript(faq.note)}</p>`
    : "";

  return `
    <div class="faq__col">
      <details class="faq__item">
        <summary class="faq__summary">
          <span class="faq__question">
            ${wrapMyanmarScript(faq.question)}
            <span class="faq__highlight">${wrapMyanmarScript(faq.highlight)}</span>
          </span>
          <span class="faq__icon" aria-hidden="true"></span>
        </summary>
        <div class="faq__answer">
          ${paragraphsHTML}
          ${noteHTML}
        </div>
      </details>
    </div>
  `;
}

export function mountFAQ() {
  const section = document.getElementById("faq");
  if (!section) return;

  section.innerHTML = `
    <div class="faq__container">
      <h2 class="faq__heading">
        Frequently <span class="faq__highlight">Asked Questions</span>
      </h2>
      <div class="faq__grid">
        ${FAQS.map(renderFAQItem).join("")}
      </div>
    </div>
  `;
}
