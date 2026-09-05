const copy={
en:{
navNews:"KUWAIT NEWS",navEconomy:"ECONOMY",live:"LIVE",special:"SPECIAL REPORT",breaking:"BREAKING NEWS",
headline:"Leaked Minutes Reveal a Major Digital Transformation Initiative",byline:"By Financial Desk",updated:"Updated 12 mins ago",city:"Kuwait City",
caption:"Illustrative image created for this fictional demo.",urgent:"Urgent and important update for Kuwait readers:",
p1:"A fictional digital transformation committee has announced a new technology initiative designed to improve access to modern digital services. This demonstration page intentionally uses fictional reporting and does not represent an actual government announcement.",
p2:"The concept explores how artificial intelligence and secure digital infrastructure could support everyday services while keeping user safety and transparency at the center.",
p3:"No investment, trading, banking, account-activation or guaranteed-income offer is being made on this page. Any names, quotes, figures and events shown in this demo are fictional.",
demo:"DEMO INTERACTION",regTitle:"Interactive Registration Preview",noticeTitle:"Important:",notice:"This is only a front-end demonstration. Do not enter passwords, card details, banking information, ID numbers, or other sensitive data.",
first:"First Name",last:"Last Name",email:"Email (optional)",submit:"SEND DEMO MESSAGE ON WHATSAPP",online:"Demo support channel online",demoOnly:"Fictional demonstration",
comments:"LIVE COMMENTS",mins14:"14 mins ago",mins22:"22 mins ago",c1:"“The new digital-services concept looks interesting.”",c2:"“A polished example of how a news landing page can present a technology story.”",footer:"Fictional presentation only"
},
ar:{
navNews:"أخبار الكويت",navEconomy:"اقتصاد",live:"مباشر",special:"تقرير خاص",breaking:"خبر عاجل",
headline:"تسريب محضر يكشف عن مبادرة كبرى للتحول الرقمي",byline:"إعداد فريق الشؤون المالية",updated:"منذ 12 دقيقة",city:"مدينة الكويت",
caption:"صورة توضيحية أُنشئت لهذا العرض التجريبي الخيالي.",urgent:"خبر عاجل ومهم لقرائنا في الكويت:",
p1:"أعلنت لجنة خيالية للتحول الرقمي عن مبادرة تقنية جديدة تهدف إلى تحسين الوصول إلى الخدمات الرقمية الحديثة. هذه الصفحة عرض تجريبي يستخدم محتوى إخباريًا خياليًا ولا يمثل إعلانًا حكوميًا حقيقيًا.",
p2:"يستعرض هذا المفهوم كيف يمكن للذكاء الاصطناعي والبنية الرقمية الآمنة دعم الخدمات اليومية مع وضع سلامة المستخدم والشفافية في المقام الأول.",
p3:"لا يوجد في هذه الصفحة أي عرض للاستثمار أو التداول أو الخدمات المصرفية أو تفعيل الحسابات أو تحقيق دخل مضمون. جميع الأسماء والأرقام والأحداث الواردة هنا خيالية.",
demo:"تفاعل تجريبي",regTitle:"معاينة التسجيل التفاعلي",noticeTitle:"تنبيه مهم:",notice:"هذا مجرد عرض أمامي تجريبي. لا تدخل كلمات المرور أو بيانات البطاقات أو المعلومات المصرفية أو أرقام الهوية أو أي بيانات حساسة.",
first:"الاسم الأول",last:"اسم العائلة",email:"البريد الإلكتروني (اختياري)",submit:"إرسال رسالة تجريبية عبر واتساب",online:"قناة الدعم التجريبية متاحة",demoOnly:"عرض خيالي",
comments:"التعليقات المباشرة",mins14:"منذ 14 دقيقة",mins22:"منذ 22 دقيقة",c1:"«يبدو مفهوم الخدمات الرقمية الجديد مثيرًا للاهتمام.»",c2:"«تصميم احترافي يوضح كيف يمكن لصفحة إخبارية عرض قصة تقنية.»",footer:"عرض خيالي تجريبي فقط"
}};
const lang=document.getElementById("language");
function applyLanguage(v){document.documentElement.lang=v;document.documentElement.dir=v==="ar"?"rtl":"ltr";document.body.classList.toggle("rtl",v==="ar");document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(copy[v][k])el.textContent=copy[v][k]});}
lang.addEventListener("change",e=>applyLanguage(e.target.value));
applyLanguage("en");

document.getElementById("demoForm").addEventListener("submit",e=>{
 e.preventDefault();
 const first=document.getElementById("first").value.trim();
 const last=document.getElementById("last").value.trim();
 const email=document.getElementById("email").value.trim();
 const status=document.getElementById("status");
 if(!first||!last){status.textContent=lang.value==="ar"?"يرجى إدخال الاسم الأول واسم العائلة.":"Please enter a first and last name.";return}
 if(email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){status.textContent=lang.value==="ar"?"يرجى إدخال بريد إلكتروني صحيح.":"Please enter a valid email.";return}
 // Replace this demo number with your own WhatsApp business number if you have permission to use it.
 const waNumber="15551234567";
 const msg=encodeURIComponent(lang.value==="ar"?
   `مرحبًا، هذه رسالة تجريبية من ${first} ${last}.`:
   `Hello, this is a demo message from ${first} ${last}.`);
 window.open(`https://wa.me/${waNumber}?text=${msg}`,"_blank","noopener");
 status.textContent=lang.value==="ar"?"تم فتح واتساب للرسالة التجريبية.":"WhatsApp opened for the demo message.";
});
