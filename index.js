function result() {

    var students= {

        RAHUL :{
            english: "97",
            science: "78",
            maths: "94",
        },
        RAMESH :{
            english: "94",
            science: "75",
            maths: "84",
        },
        SURESH :{
            english: "77",
            science: "68",
            maths: "91",
        }

    }

    
    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML='<hr> There is no information. </hr>' ;
    } else {
        output.innerHTML='<hr> English score is 57. <hr>Science score is 68. <hr> Maths score is 91 </hr>';

    };
};