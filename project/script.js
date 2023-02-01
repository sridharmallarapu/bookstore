const menuItems=[
    {
        id:1,
        book:"Motivational",
        title:"Rich Dad Poor Dad",
        img:"images/1.jpg",
        author:"Robert Kiyosaki",
        desc:"spicy chicken birayani with chicken fired deeply"

    },
    {
        id:2,
        book:"Motivational",
        title:"The Subtle Art Of Not Giving F***k",
        img:"images/2.jpg",
        author:"Mark Manson",
        desc:"two:chicken pizza with extra taste and cheeze"

    },
    {
        id:3,
        book:"Biography",
        title:"Dr.APJ Abdul Kalam",
        img:"images/3.jpg",
        author:"chitti nodels point",
        desc:"Three:double egg noodels with spicy taste"

    },
    {
        id:4,
        book:"Motivational",
        title:"Parrota",
        img:"images/4.jpg",
        author:"chilli Porata point",
        desc:"four:spicy chicked rolled with extra taste"

    },
    {
        id:5,
        book:"Religious",
        title:"Bhagawadh Geeta",
        img:"images/5.jpg",
        author:"Ved Vyasa",
        desc:"All your Questions will be answered here"

    },
    {
        id:6,
        book:"Religious",
        title:"Holy Bible",
        img:"images/6.jpg",
        author:"raja rani",
        desc:"five:all mixed fruits with test of honey "

    },
    {
        id:7,
        book:"Motivational",
        title:"fruitsalad",
        img:"images/6.jpg",
        author:"raja rani",
        desc:"five:all mixed fruits with test of honey "

    },
    {
        id:8,
        book:"Motivational",
        title:"fruitsalad",
        img:"images/7.jpg",
        author:"raja rani",
        desc:"five:all mixed fruits with test of honey "

    },
    {
        id:9,
        book:"Motivational",
        title:"fruitsalad",
        img:"images/8.jpg",
        author:"raja rani",
        desc:"five:all mixed fruits with test of honey "

    },
    {
        id:10,
        book:"Motivational",
        title:"fruitsalad",
        img:"images/9.jpg",
        author:"raja rani",
        desc:"five:all mixed fruits with test of honey "

    },
]
const book=document.getElementById('book');
const title=document.getElementById('title');
const img=document.getElementById('img');
const author=document.getElementById('author');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu=0;
window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentMenu);
});
const allMenu=()=>{
    let menu=menuItems[currentMenu]
    book.textContent=menu.book;
    title.textContent=menu.title;
    img.src=menu.img;
    author.textContent=menu.author;
    desc.textContent=menu.desc; 
}
//random
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length)
    // console.log(currentMenu)
    allMenu(currentMenu);

})
//previous btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1; 
    }
    allMenu(currentMenu)
} )
//next btn
next.addEventListener('click' ,()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
})

