const WHATSAPP_NUMBER="447873346012";
const DEFAULT_LANGUAGE="ar";
const countries=[
["KW","+965","الكويت","Kuwait"],["SA","+966","السعودية","Saudi Arabia"],["AE","+971","الإمارات","United Arab Emirates"],["QA","+974","قطر","Qatar"],["BH","+973","البحرين","Bahrain"],["OM","+968","عُمان","Oman"],["JO","+962","الأردن","Jordan"],["LB","+961","لبنان","Lebanon"],["IQ","+964","العراق","Iraq"],["EG","+20","مصر","Egypt"],["DZ","+213","الجزائر","Algeria"],["MA","+212","المغرب","Morocco"],["TN","+216","تونس","Tunisia"],["LY","+218","ليبيا","Libya"],["SD","+249","السودان","Sudan"],["YE","+967","اليمن","Yemen"],["PS","+970","فلسطين","Palestine"],["SY","+963","سوريا","Syria"],["MR","+222","موريتانيا","Mauritania"],["SO","+252","الصومال","Somalia"],["DJ","+253","جيبوتي","Djibouti"],["KM","+269","جزر القمر","Comoros"],["GB","+44","المملكة المتحدة","United Kingdom"],["US","+1","الولايات المتحدة","United States"]];
const T={
ar:{
navNews:"أخبار الكويت",navEconomy:"اقتصاد",live:"مباشر",special:"تقرير خاص",breaking:"خبر عاجل",
kicker:"تقرير خاص • الاقتصاد الرقمي",headline:"مبادرة رقمية جديدة تعيد تشكيل مستقبل الخدمات الحديثة",
byline:"إعداد فريق التحرير",updated:"تم التحديث منذ 12 دقيقة",city:"مدينة الكويت",caption:"الصورة الرئيسية",
heroAlt:"الصورة الرئيسية للتقرير",replaceHero:"اختيار صورة التقرير",replacePhoto:"استبدال الصورة",
urgent:"تحديث مهم للقراء:",
p1:"يتم تقديم مبادرة جديدة للخدمات الرقمية ضمن جهود أوسع لجعل التكنولوجيا الحديثة أكثر سهولة وكفاءة وشفافية.",
p2:"تركز المبادرة على البنية التحتية الرقمية والذكاء الاصطناعي ودعم العملاء، مع التأكيد على توفير معلومات واضحة.",
p3:"يمكن للزوار الراغبين في معرفة المزيد التواصل مع فريق الدعم باستخدام النموذج أدناه.",
eyebrow:"تواصل معنا",formTitle:"طلب مزيد من المعلومات",formSub:"أكمل النموذج وانتقل مباشرة إلى واتساب.",
manager:"مدير الدعم متاح الآن",managerSub:"راسلنا لمعرفة المزيد عن البرنامج والتفاصيل المتاحة",online:"متاح الآن",
first:"الاسم الأول",last:"اسم العائلة",phone:"رقم الهاتف",email:"البريد الإلكتروني",
consent:"أوافق على التواصل معي بشأن المعلومات التي طلبتها.",button:"المتابعة عبر واتساب",buttonSub:"فتح محادثة مباشرة عبر واتساب",
comments:"أحدث التعليقات",comment1Name:"قارئ",comment2Name:"قارئة",mins14:"منذ 14 دقيقة",mins22:"منذ 22 دقيقة",
c1:"تواصلت مع فريق الدعم للحصول على مزيد من المعلومات والتفاصيل.",c2:"كانت المعلومات واضحة، وتواصلت مع الدعم لمعرفة المزيد.",footer:"جميع الحقوق محفوظة."
},
en:{
navNews:"KUWAIT NEWS",navEconomy:"ECONOMY",live:"LIVE",special:"SPECIAL REPORT",breaking:"BREAKING NEWS",
kicker:"SPECIAL REPORT • DIGITAL ECONOMY",headline:"A New Digital Initiative Is Reshaping the Future of Modern Services",
byline:"By Editorial Desk",updated:"Updated 12 mins ago",city:"Kuwait City",caption:"Feature image",
heroAlt:"Report feature image",replaceHero:"Choose report image",replacePhoto:"Replace photo",
urgent:"Important update for readers:",
p1:"A new digital-services initiative is being presented as part of a broader effort to make modern technology more accessible, efficient and transparent.",
p2:"The initiative focuses on digital infrastructure, artificial intelligence and customer support, with an emphasis on clear information.",
p3:"Visitors who want more information can contact the support team using the form below.",
eyebrow:"GET IN TOUCH",formTitle:"Request More Information",formSub:"Complete the form and continue directly to WhatsApp.",
manager:"Support Manager Online",managerSub:"Message us to learn more about the program and available details",online:"ONLINE",
first:"First Name",last:"Last Name",phone:"Phone Number",email:"Email Address",
consent:"I agree to be contacted about the information I requested.",button:"CONTINUE ON WHATSAPP",buttonSub:"Open a direct WhatsApp conversation",
comments:"LATEST COMMENTS",comment1Name:"Reader",comment2Name:"Reader",mins14:"14 mins ago",mins22:"22 mins ago",
c1:"I contacted the support team to request more information and details.",c2:"The information was clear, so I contacted support to learn more.",footer:"All rights reserved."
}};
const language=document.getElementById("language");
const country=document.getElementById("country");
const saved=localStorage.getItem("alqabas-language");
function fillCountries(lang){
  const current=country.value||"+965"; country.innerHTML="";
  countries.forEach(([iso,code,ar,en])=>{const o=document.createElement("option");o.value=code;o.textContent=`${code} — ${lang==="ar"?ar:en}`;country.appendChild(o)});
  country.value=current||"+965";
}
function setLanguage(v){
  const t=T[v]||T.ar;
  document.documentElement.lang=v;document.documentElement.dir=v==="ar"?"rtl":"ltr";
  document.title=v==="ar"?"القـبس الرقمية | تقرير خاص":"AL QABAS DIGITAL | Special Report";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(k in t)el.textContent=t[k]});
  document.querySelectorAll("[data-i18n-alt]").forEach(el=>{const k=el.dataset.i18nAlt;if(k in t)el.alt=t[k]});
  fillCountries(v);
  language.value=v;
  localStorage.setItem("alqabas-language",v);
}
function bindImageUpload(inputId,imgId){
  const input=document.getElementById(inputId), image=document.getElementById(imgId);
  input.addEventListener("change",()=>{
    const file=input.files&&input.files[0]; if(!file)return;
    if(!file.type.startsWith("image/"))return;
    image.src=URL.createObjectURL(file);
  });
}
bindImageUpload("heroUpload","heroImage");
bindImageUpload("commentUpload1","commentImage1");
bindImageUpload("commentUpload2","commentImage2");
setLanguage(saved==="en"||saved==="ar"?saved:DEFAULT_LANGUAGE);
language.addEventListener("change",()=>setLanguage(language.value));

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const v=language.value,t=T[v],first=document.getElementById("first").value.trim(),last=document.getElementById("last").value.trim(),phone=document.getElementById("phone").value.trim(),email=document.getElementById("email").value.trim(),consent=document.getElementById("consent").checked,status=document.getElementById("status");
  if(!first||!last||!phone||!consent){status.textContent=v==="ar"?"يرجى إكمال الحقول المطلوبة والموافقة على التواصل.":"Please complete the required fields and consent.";return}
  const digits=phone.replace(/\D/g,"");
  if(digits.length<6||digits.length>15){status.textContent=v==="ar"?"يرجى إدخال رقم هاتف صحيح.":"Please enter a valid phone number.";return}
  if(email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){status.textContent=v==="ar"?"يرجى إدخال بريد إلكتروني صحيح.":"Please enter a valid email address.";return}
  const full=`${country.value}${digits}`.replace("+",""),msg=v==="ar"
  ?`مرحبًا، أرغب في الحصول على مزيد من المعلومات.\n\nالاسم: ${first} ${last}\nرقم الهاتف: +${full}${email?`\nالبريد الإلكتروني: ${email}`:""}\n\nيرجى تزويدي بالمعلومات والتفاصيل المتاحة.`
  :`Hello, I would like to receive more information.\n\nName: ${first} ${last}\nPhone: +${full}${email?`\nEmail: ${email}`:""}\n\nPlease provide the available information and details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");
  status.textContent=v==="ar"?"تم فتح واتساب.":"WhatsApp has been opened.";
});