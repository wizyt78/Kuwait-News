const WHATSAPP_NUMBER="447873346012";

const countries=[
["KW","+965","Kuwait"],["SA","+966","Saudi Arabia"],["AE","+971","United Arab Emirates"],["QA","+974","Qatar"],["BH","+973","Bahrain"],["OM","+968","Oman"],["JO","+962","Jordan"],["LB","+961","Lebanon"],["IQ","+964","Iraq"],["EG","+20","Egypt"],["DZ","+213","Algeria"],["MA","+212","Morocco"],["TN","+216","Tunisia"],["LY","+218","Libya"],["SD","+249","Sudan"],["YE","+967","Yemen"],["PS","+970","Palestine"],["SY","+963","Syria"],["MR","+222","Mauritania"],["SO","+252","Somalia"],["DJ","+253","Djibouti"],["KM","+269","Comoros"],["US","+1","United States"],["GB","+44","United Kingdom"]];

const copy={
en:{navNews:"KUWAIT NEWS",navEconomy:"ECONOMY",live:"LIVE",special:"SPECIAL REPORT",breaking:"BREAKING NEWS",kicker:"SPECIAL REPORT • DIGITAL ECONOMY",headline:"A New Digital Initiative Is Reshaping the Future of Modern Services",byline:"By Financial Desk",updated:"Updated 12 mins ago",city:"Kuwait City",caption:"Feature image — replace this file with your own licensed image.",urgent:"Important update for readers:",p1:"A new digital-services initiative is being presented as part of a broader effort to make modern technology more accessible, efficient and transparent.",p2:"The initiative focuses on digital infrastructure, artificial intelligence and customer support, with an emphasis on responsible participation and clear information.",p3:"Visitors interested in learning more can submit their contact details below. A support manager can then provide information about the service, requirements, fees and applicable risks before any decision is made.",eyebrow:"GET IN TOUCH",formTitle:"Request More Information",formSub:"Complete the form and continue directly to WhatsApp.",manager:"Support Manager Online",managerSub:"Available to answer questions",online:"ONLINE",first:"First Name",last:"Last Name",phone:"Phone Number",email:"Email Address",consent:"I agree to be contacted about the information I requested.",button:"CONTINUE ON WHATSAPP",buttonSub:"Open a direct WhatsApp conversation",comments:"LATEST COMMENTS",mins14:"14 mins ago",mins22:"22 mins ago",comment1Name:"Ahmad K.",comment2Name:"Mariam H.",c1:"“The information was clear and the support team answered my questions.”",c2:"“I contacted the manager to understand the requirements before making any decision.”",risk:"Information only. Investment products can involve substantial risk, including loss of capital. Review all terms and risks independently before making financial decisions.",footer:"All rights reserved."},
ar:{navNews:"أخبار الكويت",navEconomy:"اقتصاد",live:"مباشر",special:"تقرير خاص",breaking:"خبر عاجل",kicker:"تقرير خاص • الاقتصاد الرقمي",headline:"مبادرة رقمية جديدة تعيد تشكيل مستقبل الخدمات الحديثة",byline:"إعداد فريق الشؤون المالية",updated:"تم التحديث منذ 12 دقيقة",city:"مدينة الكويت",caption:"صورة رئيسية — استبدل هذا الملف بصورتك المرخصة.",urgent:"تحديث مهم للقراء:",p1:"يتم تقديم مبادرة جديدة للخدمات الرقمية ضمن جهود أوسع لجعل التكنولوجيا الحديثة أكثر سهولة وكفاءة وشفافية.",p2:"تركز المبادرة على البنية التحتية الرقمية والذكاء الاصطناعي ودعم العملاء، مع التأكيد على المشاركة المسؤولة وتوفير المعلومات الواضحة.",p3:"يمكن للزوار الراغبين في معرفة المزيد إرسال بيانات التواصل أدناه، وبعد ذلك يمكن لمدير الدعم تقديم معلومات حول الخدمة والمتطلبات والرسوم والمخاطر ذات الصلة قبل اتخاذ أي قرار.",eyebrow:"تواصل معنا",formTitle:"طلب مزيد من المعلومات",formSub:"أكمل النموذج وانتقل مباشرة إلى واتساب.",manager:"مدير الدعم متاح الآن",managerSub:"متاح للإجابة عن الأسئلة",online:"متاح",first:"الاسم الأول",last:"اسم العائلة",phone:"رقم الهاتف",email:"البريد الإلكتروني",consent:"أوافق على التواصل معي بشأن المعلومات التي طلبتها.",button:"المتابعة عبر واتساب",buttonSub:"فتح محادثة مباشرة عبر واتساب",comments:"أحدث التعليقات",mins14:"منذ 14 دقيقة",mins22:"منذ 22 دقيقة",comment1Name:"أحمد ك.",comment2Name:"مريم هـ.",c1:"«كانت المعلومات واضحة وفريق الدعم أجاب عن أسئلتي.»",c2:"«تواصلت مع المدير لفهم المتطلبات قبل اتخاذ أي قرار.»",risk:"للمعلومات فقط. قد تنطوي المنتجات الاستثمارية على مخاطر كبيرة، بما في ذلك خسارة رأس المال. راجع جميع الشروط والمخاطر بشكل مستقل قبل اتخاذ أي قرار مالي.",footer:"جميع الحقوق محفوظة."}
};

const lang=document.getElementById("language"), country=document.getElementById("country");
countries.forEach(([iso,code,name])=>{const o=document.createElement("option");o.value=code;o.textContent=`${code} — ${name}`;if(iso==="KW")o.selected=true;country.appendChild(o)});

function applyLanguage(v){
 document.documentElement.lang=v;document.documentElement.dir=v==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(copy[v][k])el.textContent=copy[v][k]});
 document.querySelectorAll("input[placeholder]").forEach(el=>{
   const id=el.id;el.placeholder=v==="ar"?({first:"أدخل الاسم الأول",last:"أدخل اسم العائلة",phone:"رقم الهاتف",email:"أدخل البريد الإلكتروني"}[id]||el.placeholder):({first:"Enter first name",last:"Enter last name",phone:"Mobile number",email:"Enter email address"}[id]||el.placeholder);
 });
}
lang.addEventListener("change",()=>applyLanguage(lang.value));applyLanguage("en");

document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 const first=document.getElementById("first").value.trim(),last=document.getElementById("last").value.trim(),phone=document.getElementById("phone").value.trim(),email=document.getElementById("email").value.trim(),consent=document.getElementById("consent").checked,status=document.getElementById("status"),v=lang.value;
 if(!first||!last||!phone||!consent){status.textContent=v==="ar"?"يرجى إكمال الحقول المطلوبة والموافقة على التواصل.":"Please complete the required fields and consent to contact.";return}
 const digits=phone.replace(/[^\d]/g,"");
 if(digits.length<6||digits.length>15){status.textContent=v==="ar"?"يرجى إدخال رقم هاتف صحيح.":"Please enter a valid phone number.";return}
 if(email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){status.textContent=v==="ar"?"يرجى إدخال بريد إلكتروني صحيح.":"Please enter a valid email address.";return}
 const fullPhone=`${country.value}${digits}`.replace("+","");
 const msg=v==="ar"
 ?`مرحبًا، أرغب في الحصول على مزيد من المعلومات.\n\nالاسم: ${first} ${last}\nرقم الهاتف: +${fullPhone}${email?`\nالبريد الإلكتروني: ${email}`:""}\n\nيرجى تزويدي بالتفاصيل والمتطلبات والرسوم والمخاطر ذات الصلة.`
 :`Hello, I would like to receive more information.\n\nName: ${first} ${last}\nPhone: +${fullPhone}${email?`\nEmail: ${email}`:""}\n\nPlease provide the relevant details, requirements, fees and risks.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
 status.textContent=v==="ar"?"تم فتح واتساب.":"WhatsApp has been opened.";
});
