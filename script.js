/* ==========================
   TOPPER STUDY HUB
   JavaScript
========================== */

const studyHub = {


   "🧮 Mathematics":[

{
title:"Algebra",
file:"math/algebra.html"
},

{
title:"Geometry",
file:"math/geometry.html"
}

],


   "👨‍🔬 Physics":[

{
title:"Heat",
file:"physics/algebra.html"
},

{
title:"Wave",
file:"physics/geometry.html"
}

],

   
   

    "🧪 Chemistry":[

        {
            title:"Inorganic Chemistry (Session 6)",
            file:"chemistry/inorganic/RRB NTPC General Science - Inorganic Chemistry (Session 6).html"
        },

        {
            title:"Organic Chemistry",
            file:"chemistry/organic.html"
        },

        {
            title:"Physical Chemistry",
            file:"chemistry/physical.html"
        }

    ],



   
"🔬 Biology":[

{
title:"Sell",
file:"biology/algebra.html"
},

{
title:"Hormone",
file:"biology/geometry.html"
}

],


   


    "🌍 Geography":[

        {
            title:"India Geography",
            file:"geography/india.html"
        },

        {
            title:"West Bengal Geography",
            file:"geography/wb.html"
        },

        {
            title:"Paschim Bardhaman",
            file:"geography/paschim-bardhaman.html"
        }

    ],

    "📜 History":[

        {
            title:"Ancient History",
            file:"history/ancient.html"
        },

        {
            title:"Medieval History",
            file:"history/medieval.html"
        },

        {
            title:"Modern History",
            file:"history/modern.html"
        }

    ],

    "🏛 Polity":[

        {
            title:"Indian Constitution",
            file:"polity/constitution.html"
        }

    ]

};


// Build Subject Buttons

const subjectContainer=document.getElementById("subjects");

Object.keys(studyHub).forEach(subject=>{

    let btn=document.createElement("button");

    btn.innerHTML=subject;

    btn.onclick=()=>showSubject(subject);

    subjectContainer.appendChild(btn);

});


// Show Chapters

function showSubject(subject){

    document.getElementById("popup").style.display="block";

    document.body.style.overflow="hidden";

    document.getElementById("popupTitle").innerHTML=subject;

    let list=document.getElementById("chapterList");

    list.innerHTML="";

    studyHub[subject].forEach(chapter=>{

        let a=document.createElement("a");

        a.href=chapter.file;

        a.target="_blank";

        a.innerHTML=chapter.title;

        list.appendChild(a);

    });

}


// Close Popup

function closePopup(){

    document.getElementById("popup").style.display="none";

    document.body.style.overflow="auto";

}


// Click Outside

window.onclick=function(e){

if(e.target==document.getElementById("popup")){

closePopup();

}

};


// ESC Key

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closePopup();

}

});
