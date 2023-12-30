let  button = document.querySelector('#new-qoute');
let person = document.querySelector('.person');
let qoute = document.querySelector('.qoute');

let qoutes = [
   {qoute: `"সব দুঃখের মূল এই দুনিয়ার প্রতি অত্যাধিক আকর্ষণ।"`,
   person: `হযরত আলী (রাঃ)`
},
{
   qoute:`"যদি তুমি কখনো অপমানিত বোধ কর তবে অপরকে সেটা বুঝতে দেবে না।"`,
   person: `জন বেকার`
},
{
   qoute : `"বিপদে মোরে রক্ষা করো এ নহে মোর প্রার্থনা"`,
   person: ` রবীন্দ্রনাথ ঠাকুর`,
},
{
   qoute:`“শেষ নিঃশ্বাস পর্যন্ত চেষ্টা করা উচিত। হয় লক্ষ্য অর্জিত হবে বা অভিজ্ঞতা।”`,
   person: `নেপোলিওন হিল`,
},
{
   qoute:`" যার মা আছে, সে কখনও গরীব নয়"`,
   person:`আব্রাহাম লিংকন`,
},
{
 qoute:`" আপনি যদি গরীব হয়ে জন্ম নেন তাহলে এটা আপনার দোষ নয়, কিন্তু যদি গরীব থেকেই মারা যান তবে সেটা আপনার দোষ"`,
 person:`বিল গেটস`,
}];
button.addEventListener('click', function(){
   let random = Math.floor(Math.random()* qoutes.length);
   qoute.innerText = qoutes[random].qoute;
   person.innerText = qoutes[random].person;

})

