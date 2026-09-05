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

const countryNames={
  en:{
    KW:"Kuwait",SA:"Saudi Arabia",AE:"United Arab Emirates",QA:"Qatar",
    BH:"Bahrain",OM:"Oman",JO:"Jordan",LB:"Lebanon",IQ:"Iraq",EG:"Egypt",
    DZ:"Algeria",MA:"Morocco",TN:"Tunisia",LY:"Libya",SD:"Sudan",
    YE:"Yemen",PS:"Palestine",SY:"Syria",MR:"Mauritania",SO:"Somalia",
    DJ:"Djibouti",KM:"Comoros",GB:"United Kingdom",US:"United States"
  },
  ar:{
    KW:"الكويت",SA:"السعودية",AE:"الإمارات العربية المتحدة",QA:"قطر",
    BH:"البحرين",OM:"عُمان",JO:"الأردن",LB:"لبنان",IQ:"العراق",EG:"مصر",
    DZ:"الجزائر",MA:"المغرب",TN:"تونس",LY:"ليبيا",SD:"السودان",
    YE:"اليمن",PS:"فلسطين",SY:"سوريا",MR:"موريتانيا",SO:"الصومال",
    DJ:"جيبوتي",KM:"جزر القمر",GB:"المملكة المتحدة",US:"الولايات المتحدة"
  }
};

/*
  IMPORTANT:
  The visible English text in index.html is now the manual source.
  JavaScript does NOT overwrite it when the page loads.

  This means:
    1. Edit text directly in index.html.
    2. Commit to GitHub.
    3. Refresh the live site.
    4. Your edited text remains exactly as you wrote it.

  The existing language-switching hooks are left in place for the next
  bilingual step, but they no longer overwrite your manual English edits.
*/

const language=document.getElementById("language");
const country=document.getElementById("country");

function populateCountries(v){
  const current=country.value || "+965";
  country.innerHTML="";

  countries.forEach(([iso,code,englishName])=>{
    const option=document.createElement("option");
    option.value=code;
    option.textContent=`${code} — ${countryNames[v]?.[iso] || englishName}`;
    country.appendChild(option);
  });

  country.value=[...country.options].some(o=>o.value===current)
    ?current
    :"+965";
}

function setLanguage(v){
  v=(v==="en"||v==="ar")?v:"ar";

  document.documentElement.lang=v;
  document.documentElement.dir=v==="ar"?"rtl":"ltr";

  if(language) language.value=v;

  populateCountries(v);

  // Only accessibility attributes are language-switched for now.
  // Normal visible HTML text is intentionally NOT overwritten.
  document.querySelectorAll("[data-aria-t]").forEach(el=>{
    const key=el.dataset.ariaT;
    const labels={
      menuLabel:{en:"Menu",ar:"القائمة"},
      languageLabel:{en:"Language",ar:"اللغة"}
    };

    if(labels[key]) el.setAttribute("aria-label",labels[key][v]);
  });

  document.querySelectorAll("[data-alt-t]").forEach(el=>{
    const key=el.dataset.altT;
    const alts={
      heroAlt:{en:"Report feature image",ar:"الصورة الرئيسية للتقرير"},
      readerAlt:{en:"Reader profile",ar:"صورة القارئ"}
    };

    if(alts[key]) el.alt=alts[key][v];
  });
}

language.addEventListener("change",()=>{
  const v=language.value==="en"?"en":"ar";
  localStorage.setItem("siteLanguage",v);
  setLanguage(v);
});

const savedLanguage=localStorage.getItem("siteLanguage");
const initialLanguage=(savedLanguage==="en"||savedLanguage==="ar")
  ?savedLanguage
  :"ar";

setLanguage(initialLanguage);

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();

  const v=language.value;
  const first=document.getElementById("first").value.trim();
  const last=document.getElementById("last").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const email=document.getElementById("email").value.trim();
  const consent=document.getElementById("consent").checked;
  const status=document.getElementById("status");

  const messages={
    ar:{
      required:"يرجى إكمال الحقول المطلوبة والموافقة على التواصل.",
      phone:"يرجى إدخال رقم هاتف صحيح.",
      email:"يرجى إدخال بريد إلكتروني صحيح.",
      opened:"تم فتح واتساب."
    },
    en:{
      required:"Please complete the required fields and consent.",
      phone:"Please enter a valid phone number.",
      email:"Please enter a valid email address.",
      opened:"WhatsApp has been opened."
    }
  };

  if(!first||!last||!phone||!consent){
    status.textContent=messages[v].required;
    return;
  }

  const digits=phone.replace(/\D/g,"");

  if(digits.length<6||digits.length>15){
    status.textContent=messages[v].phone;
    return;
  }

  if(email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
    status.textContent=messages[v].email;
    return;
  }

  const full=`${country.value}${digits}`.replace("+","");
  const emailLine=email
    ?(v==="ar"?`\nالبريد الإلكتروني: ${email}`:`\nEmail: ${email}`)
    :"";

  const msg=v==="ar"
    ?`مرحبًا، أرغب في الحصول على مزيد من المعلومات.

الاسم: ${first} ${last}
رقم الهاتف: +${full}${emailLine}

يرجى تزويدي بمزيد من المعلومات والتفاصيل.`
    :`Hello, I would like to receive more information.

Name: ${first} ${last}
Phone: +${full}${emailLine}

Please provide more information and details.`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
    "noopener,noreferrer"
  );

  status.textContent=messages[v].opened;
});
