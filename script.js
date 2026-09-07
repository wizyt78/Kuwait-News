const WHATSAPP_NUMBER="447873346012";

const countries=[
  ["KW","+965","Kuwait"],
  ["SA","+966","Saudi Arabia"],
  ["AE","+971","United Arab Emirates"],
  ["QA","+974","Qatar"],
  ["BH","+973","Bahrain"],
  ["OM","+968","Oman"],
  ["JO","+962","Jordan"],
  ["LB","+961","Lebanon"],
  ["IQ","+964","Iraq"],
  ["EG","+20","Egypt"],
  ["DZ","+213","Algeria"],
  ["MA","+212","Morocco"],
  ["TN","+216","Tunisia"],
  ["LY","+218","Libya"],
  ["SD","+249","Sudan"],
  ["YE","+967","Yemen"],
  ["PS","+970","Palestine"],
  ["SY","+963","Syria"],
  ["MR","+222","Mauritania"],
  ["SO","+252","Somalia"],
  ["DJ","+253","Djibouti"],
  ["KM","+269","Comoros"],
  ["GB","+44","United Kingdom"],
  ["US","+1","United States"]
];

const T={
  en:{
    navNews:"KUWAIT NEWS",
    navEconomy:"ECONOMY",
    live:"LIVE",
    special:"SPECIAL REPORT",
    breaking:"BREAKING NEWS",
    kicker:"SPECIAL REPORT • DIGITAL ECONOMY",
    headline:"Leaked Minutes Reveal High-Level Strategic Initiative with Elon Musk",
    byline:"By Financial Staff",
    updated:"Updated 12 mins ago",
    city:"Kuwait City",
    caption:"Official delegation gathering in Kuwait City.",
    urgent:"Urgent and important news for all Kuwaiti citizens:",
    p1:"The Supreme Committee for Digital Transformation has unveiled a groundbreaking initiative in collaboration with Elon Musk! Leaked photos from Bayan Palace have recently surfaced, showing Kuwaiti leadership meeting with Elon Musk to sign a historic agreement that has sent shockwaves through major local banks.",
    p2:"This joint venture leverages the advanced AI algorithms of Musk’s “SpaceX AI” platform, aiming to provide a sustainable monthly income for all citizens to combat inflation and rising prices.",
    p3:"The Central Bank of Kuwait attempted to impose a total media blackout—including blocking the television interview where Musk explained the details—fearing mass withdrawals from traditional bank accounts. However, following high-level directives, public access to the system has been opened, albeit on a very limited scale.",
    p4:"No prior experience in trading or financial markets is required; any citizen can start with a nominal amount (just 20, 30, 50, or 100 Kuwaiti Dinars) and watch profits flow into their account—reaching thousands of Dinars weekly—all fully automated.",
    eyebrow:"⚠️ INSTANT REGISTRATION & ACCOUNT ACTIVATION",
    formTitle:"Important Notice",
    formSub:"Due to overwhelming demand and heavy server load, only 687 spots remain available today for registrants in Kuwait. Click the 'Send Message' button or the link below to reserve your spot and activate your account before registration closes permanently tonight.",
    manager:"Support Manager Online",
    managerSub:"Start your information request today",
    online:"ONLINE",
    first:"First Name",
    last:"Last Name",
    phone:"Phone Number",
    email:"Email Address",
    consent:"I agree to be contacted about the information I requested.",
    button:"CLICK 'SEND MESSAGE' TO RESERVE VIA WHATSAPP",
    buttonSub:"Open a direct WhatsApp conversation",
    comments:"LATEST COMMENTS",
    comment1Name:"Ahmad K.",
    comment2Name:"Mariam H.",
    mins14:"14 mins ago",
    mins22:"22 mins ago",
    c1:"\"I started with just 50 KWD and I'm literally earning thousands weekly now! My manager on WhatsApp guided me through the setup in minutes.\"",
    c2:"\"I was skeptical about earning thousands weekly automatically, but my payout came through directly to my account.\"",
    footer:"All rights reserved."
  },

  ar:{
    navNews:"أخبار الكويت",
    navEconomy:"اقتصاد",
    live:"مباشر",
    special:"تقرير خاص",
    breaking:"خبر عاجل",
    kicker:"تقرير خاص • الاقتصاد الرقمي",
    headline:"محاضر مسربة تكشف عن مبادرة استراتيجية رفيعة المستوى مع إيلون ماسك",
    byline:"بقلم القسم المالي",
    updated:"تم التحديث منذ 12 دقيقة",
    city:"مدينة الكويت",
    caption:"تجمع وفد رسمي في مدينة الكويت.",
    urgent:"أخبار عاجلة ومهمة لجميع المواطنين الكويتيين:",
    p1:"كشفت اللجنة العليا للتحول الرقمي عن مبادرة رائدة بالتعاون مع إيلون ماسك! فقد ظهرت مؤخراً صور مُسرَّبة من قصر بيان تُظهر لقاءً جمع القيادة الكويتية بإيلون ماسك لتوقيع اتفاقية تاريخية أحدثت صدمةً واسعةً في أوساط كبرى البنوك المحلية.",
    p2:"يستفيد هذا المشروع المشترك من خوارزميات الذكاء الاصطناعي المتقدمة لمنصة \"SpaceX AI\" التابعة لإيلون ماسك، بهدف توفير دخل شهري مستدام لجميع المواطنين لمواجهة التضخم وارتفاع الأسعار.",
    p3:"حاول البنك المركزي الكويتي فرض تعتيم إعلامي شامل - بما في ذلك حجب المقابلة التلفزيونية التي شرح فيها ماسك التفاصيل - خشيةً من عمليات سحب جماعي للأموال من الحسابات المصرفية التقليدية. ومع ذلك، وعقب صدور توجيهات عليا، أُتيح للجمهور الوصول إلى النظام، وإن كان ذلك في نطاق محدود للغاية.",
    p4:"لا تُشترط أي خبرة مسبقة في التداول أو الأسواق المالية؛ إذ يمكن لأي مواطن البدء بمبلغ رمزي (يقتصر على 20 أو 30 أو 50 أو 100 دينار كويتي) ومشاهدة الأرباح وهي تتدفق إلى حسابه — لتصل إلى آلاف الدنانير أسبوعياً — وذلك كله عبر نظام مؤتمت بالكامل.",
    eyebrow:"⚠️ تسجيل فوري وتفعيل للحساب",
    formTitle:"ملاحظة هامة",
    formSub:"نظراً للإقبال الهائل والضغط الكبير على الخوادم، لم يتبقَّ اليوم سوى 687 مكاناً متاحاً للمسجلين في الكويت. اضغط على زر \"إرسال رسالة\" أو على الرابط أدناه لحجز مكانك وتفعيل حسابك قبل إغلاق باب التسجيل نهائياً الليلة.",
    manager:"مدير الدعم متاح الآن",
    managerSub:"ابدأ طلب المعلومات اليوم",
    online:"متاح",
    first:"الاسم الأول",
    last:"اسم العائلة",
    phone:"رقم الهاتف",
    email:"البريد الإلكتروني",
    consent:"أوافق على التواصل معي بشأن المعلومات التي طلبتها.",
    button:"اضغط على \"إرسال رسالة\" للحجز عبر واتساب",
    buttonSub:"فتح محادثة مباشرة عبر واتساب",
    comments:"أحدث التعليقات",
    comment1Name:"أحمد ك.",
    comment2Name:"مريم هـ.",
    mins14:"منذ 14 دقيقة",
    mins22:"منذ 22 دقيقة",
    c1:"\"بدأت بمبلغ 50 ديناراً كويتياً فقط، والآن أجني حرفياً آلافاً كل أسبوع! لقد ساعدني مدير حسابي عبر واتساب في إتمام عملية الإعداد خلال دقائق.\"",
    c2:"\"كنت متشككاً بشأن كسب آلاف الدولارات أسبوعياً وبشكل آلي، لكن المبلغ وصل مباشرةً إلى حسابي.\"",
    footer:"جميع الحقوق محفوظة."
  }
};

const language=document.getElementById("language");
const country=document.getElementById("country");

const countryNames={
  en:{
    KW:"Kuwait",
    SA:"Saudi Arabia",
    AE:"United Arab Emirates",
    QA:"Qatar",
    BH:"Bahrain",
    OM:"Oman",
    JO:"Jordan",
    LB:"Lebanon",
    IQ:"Iraq",
    EG:"Egypt",
    DZ:"Algeria",
    MA:"Morocco",
    TN:"Tunisia",
    LY:"Libya",
    SD:"Sudan",
    YE:"Yemen",
    PS:"Palestine",
    SY:"Syria",
    MR:"Mauritania",
    SO:"Somalia",
    DJ:"Djibouti",
    KM:"Comoros",
    GB:"United Kingdom",
    US:"United States"
  },

  ar:{
    KW:"الكويت",
    SA:"السعودية",
    AE:"الإمارات العربية المتحدة",
    QA:"قطر",
    BH:"البحرين",
    OM:"عُمان",
    JO:"الأردن",
    LB:"لبنان",
    IQ:"العراق",
    EG:"مصر",
    DZ:"الجزائر",
    MA:"المغرب",
    TN:"تونس",
    LY:"ليبيا",
    SD:"السودان",
    YE:"اليمن",
    PS:"فلسطين",
    SY:"سوريا",
    MR:"موريتانيا",
    SO:"الصومال",
    DJ:"جيبوتي",
    KM:"جزر القمر",
    GB:"المملكة المتحدة",
    US:"الولايات المتحدة"
  }
};

function populateCountries(v){
  const current=country.value || "+965";

  country.innerHTML="";

  countries.forEach(([iso,code])=>{
    const o=document.createElement("option");

    o.value=code;
    o.textContent=`${code} — ${countryNames[v][iso]||iso}`;

    country.appendChild(o);
  });

  country.value=[
    ...country.options
  ].some(o=>o.value===current)?current:"+965";
}

// Save the English text currently written in index.html.
// English edits made directly in index.html will therefore remain in English.
const englishFromHTML={};
document.querySelectorAll("[data-t]").forEach(el=>{
  const k=el.dataset.t;
  if(!Object.prototype.hasOwnProperty.call(englishFromHTML,k)){
    englishFromHTML[k]=el.textContent;
  }
});

function setLanguage(v){
  document.documentElement.lang=v;
  document.documentElement.dir=v==="ar"?"rtl":"ltr";

  if(language){
    language.value=v;
  }

  document.querySelectorAll("[data-t]").forEach(el=>{
    const k=el.dataset.t;

    if(v==="en"){
      if(Object.prototype.hasOwnProperty.call(englishFromHTML,k)){
        el.textContent=englishFromHTML[k];
      }
    }else if(
      T.ar &&
      Object.prototype.hasOwnProperty.call(T.ar,k)
    ){
      el.textContent=T.ar[k];
    }
  });

  populateCountries(v);
}

language.addEventListener("change",()=>{
  localStorage.setItem(
    "siteLanguage",
    language.value
  );

  setLanguage(language.value);
});

const savedLanguage=localStorage.getItem("siteLanguage");

const initialLanguage=
  (savedLanguage==="en"||savedLanguage==="ar")
    ?savedLanguage
    :"ar";

setLanguage(initialLanguage);

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();

  const v=language.value;

  const first=
    document.getElementById("first").value.trim();

  const last=
    document.getElementById("last").value.trim();

  const phone=
    document.getElementById("phone").value.trim();

  const email=
    document.getElementById("email").value.trim();

  const consent=
    document.getElementById("consent").checked;

  const status=
    document.getElementById("status");

  if(!first||!last||!phone||!consent){
    status.textContent=
      v==="ar"
        ?"يرجى إكمال الحقول المطلوبة والموافقة على التواصل."
        :"Please complete the required fields and consent.";

    return;
  }

  const digits=
    phone.replace(/\D/g,"");

  if(digits.length<6||digits.length>15){
    status.textContent=
      v==="ar"
        ?"يرجى إدخال رقم هاتف صحيح."
        :"Please enter a valid phone number.";

    return;
  }

  if(
    email &&
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  ){
    status.textContent=
      v==="ar"
        ?"يرجى إدخال بريد إلكتروني صحيح."
        :"Please enter a valid email address.";

    return;
  }

  const full=
    `${country.value}${digits}`.replace("+","");

  const msg=
    v==="ar"
      ?
`مرحبًا، أرغب في الحصول على مزيد من المعلومات.

الاسم: ${first} ${last}
رقم الهاتف: +${full}${email?`\nالبريد الإلكتروني: ${email}`:""}

يرجى تزويدي بمزيد من المعلومات والتفاصيل.`
      :
`Hello, I would like to receive more information.

Name: ${first} ${last}
Phone: +${full}${email?`\nEmail: ${email}`:""}

Please provide more information and details.`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
    "noopener,noreferrer"
  );

  status.textContent=
    v==="ar"
      ?"تم فتح واتساب."
      :"WhatsApp has been opened.";
});
