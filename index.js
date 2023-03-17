function getJsonObject(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) success(JSON.parse(xhr.responseText));
            } else {
                if (error) error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function createstar(score){
    const starContent = "&#9733;"; 
    var di = document.createElement("div");
    var spa1 = document.createElement("span");
    spa1.className= "thest";
    spa1.innerHTML = starContent;
    var spa2 = document.createElement("span");
    spa2.className= "thest";
    var spa3 = document.createElement("span");
    spa3.className= "thest";
    var spa4 = document.createElement("span");
    spa4.className= "thest";    
    var spa5 = document.createElement("span");
    spa5.className = "thest";
    var p1 = document.createElement("p");
    p1.textContent = "FK";

    

    const stars = document.querySelectorAll(".thest");
    stars.innerHTML = starContent;

    // stars.forEach(function(star, index) {
    //     if (index < Math.floor(score)) {
    //       star.classList.add("rated");
    //     } else if (index === Math.floor(score) && score % 1 !== 0) {
    //       star.classList.add("half-rated");
    //     }
    //   });
    di.appendChild(p1);
    di.appendChild(spa1);
    di.appendChild(spa2);
    di.appendChild(spa3);
    di.appendChild(spa4);
    di.appendChild(spa5);

    return di;
}

function productlist(bookli,colorli){

    const myTable = document.getElementById("myTable");


            let numoflist = bookli.length;
            let numoflist2 = colorli.length;
            for (let i = 0; i < numoflist;i++){
                const row = document.createElement("tr");
                const checkb = document.createElement("td");
                const author = document.createElement("td");
                const category = document.createElement("td");
                const img = document.createElement("td");
                const price = document.createElement("td");
                const publisher = document.createElement("td");
                const rating = document.createElement("td");
                const title = document.createElement("td");
                const year = document.createElement("td");
                const m = document.createElement("span");

                // row.style.backgroundColor = "blue";
                
                if(numoflist2 != 0){
                    for (var n4 = 0; n4 < colorli.length;n4++){
                        if(bookli[i]["title"] == colorli[n4]){
                            row.style.backgroundColor = "red";
                        }

                    }
                    
                }

                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'myCheckbox';
                checkbox.value = 'myCheckboxValue';
                checkb.appendChild(checkbox);

                let numStars = parseInt(bookli[i]["rating"]);
                
                let markers = [];
                for (let n1 = 0; n1< numStars; n1++){
                    markers.push("&#9733;");
                }
                if(numStars != 5){
                    for (let b1 = numStars; b1 < 5; b1++){
                        markers.push("&#9734;");

                    }
                }
                
                var spa1 = document.createElement("span");
                var spa2 = document.createElement("span");
                var spa3 = document.createElement("span");
                var spa4 = document.createElement("span");
                var spa5 = document.createElement("span");
                spa1.innerHTML = markers[0];
                spa1.style.color = "#F9D834";
                spa2.innerHTML = markers[1];
                spa2.style.color = "#F9D834";
                spa3.innerHTML = markers[2];
                spa3.style.color = "#F9D834";
                spa4.innerHTML = markers[3];
                spa4.style.color = "#F9D834";
                spa5.innerHTML = markers[4];
                spa5.style.color = "#F9D834";


                rating.appendChild(spa1);
                rating.appendChild(spa2);
                rating.appendChild(spa3);
                rating.appendChild(spa4);
                rating.appendChild(spa5);


                const myImage = document.createElement("img");
                myImage.src = bookli[i]["img"];
                myImage.alt = "My Image";
                myImage.style.width = "100px";
                myImage.style.height = "auto";
                myImage.style.border = "1px solid black";
                myImage.style.margin = "10px";

                


                author.textContent = bookli[i]["authors"];
                category.textContent = bookli[i]["category"];
                img.appendChild(myImage);
                price.textContent = bookli[i]["price"];
                publisher.textContent = bookli[i]["publisher"];



                

                title.textContent = bookli[i]["title"];
                year.textContent = bookli[i]["year"];

                row.appendChild(checkb);
                row.appendChild(img);
                row.appendChild(title);
                row.appendChild(rating);
                row.appendChild(author);
                row.appendChild(year);
                row.appendChild(price);
                row.appendChild(publisher);
                row.appendChild(category);
                myTable.querySelector("tbody").appendChild(row);
            }

}


function Searchfun(bookli,inputs){
    var inputs = document.getElementById("searchb");
    const but = document.getElementById("btn");
    
    let booklist = [];

    var handleSearch = function() {
        var input1 = inputs.value.toUpperCase();
        var colllist = [];
        for (var i = 0; i < bookli.length;i++){
            var good = bookli[i]["title"];
    
            if (good.toUpperCase().indexOf(input1) > -1) {

                colllist.push(i);
                console.log("That's Good")
            }
        }
        booklist = colllist;
        console.log(booklist);
        let bo = [];
        for (let j = 0; j<booklist.length; j++){
            
            bo.push(bookli[j]);
            
        }
        console.log(bo);
        window.location.reload();
    }
    but.addEventListener('click',handleSearch);
    
    
}


function DarkMode(){
    var myCheckbox = document.getElementById("vehicle1");
            myCheckbox.addEventListener("change", function() {
            if (this.checked) {
                document.body.style.backgroundColor = "#60676b";
                console.log("Checkbox is checked.");
            } else {
                document.body.style.backgroundColor = "white";
                console.log("Checkbox is unchecked.");
            }
            });
}
function addcart(){
   var showcart = document.getElementById("displaycart");
   
   showcart.style.display = "inline";






}

function nonec(){
    var cartnum = document.getElementById("addcartbox");
    var showcart = document.getElementById("displaycart");
    var cartshow = document.getElementById("cartnum");
    let inputnum = parseInt(cartnum.value);

    if (localStorage.getItem('cartnum') == null) {
        localStorage.setItem("cartnum", inputnum);
        var nn = localStorage.getItem("cartnum");
        cartshow.textContent = nn;
        console.log("The local storage is null");
      } else {
        if(inputnum.length !== 0)
        {
            var carn1 = parseInt(localStorage.getItem("cartnum"));
            var newv = carn1 + inputnum;
            console.log("The new num is" + newv);
            localStorage.setItem("cartnum", newv);
        }
        var nn = localStorage.getItem("cartnum");
        cartshow.textContent = nn;
        console.log('The key "myKey" exists in local storage, and input value' + inputnum);
      }
    
   
    showcart.style.display = "none";
}

function reset(){
    var cartshow = document.getElementById("cartnum");
    localStorage.clear();
    cartshow.textContent = "0";
}



let searnum = [];
window.onload = function(){
    bookList =  [];
    // book list container
    getJsonObject('data.json',
        function(data) {
            
           
            DarkMode();
            var cartshow = document.getElementById("cartnum");
            var nn = localStorage.getItem("cartnum");
            cartshow.textContent = nn;

            var exa = [];
            bookList = data; // store the book list into bookList
            console.log(bookList); // print it into console (developer tools)
            
            productlist(bookList,exa);

            var but1 = document.getElementById("btn");
            var but2 = document.getElementById("btn2")
            var selector = document.getElementById("selectbox");
            var cart1 = document.getElementById("Addcart");
            var cart2 = document.getElementById("resetcart");
            var cart3 = document.getElementById("addcartboxbtn");
            var selectedValue = "default";
            selector.addEventListener("change", function() {
                selectedValue = selector.value;
                console.log("Selected option value:", selectedValue);
                
              });

            function ok1(){

                var inputcom = document.getElementById("searchb").value.toUpperCase();

                var a = [];
                var k = 0;
                var b4 = [];

                if(selectedValue != "default")
                {
                    
                    var k1 = 0;
                    for(var j2 = 0;j2 < bookList.length;j2 ++){

                        if(bookList[j2]["category"] == selectedValue){
                            b4[k1++] = bookList[j2];
                        }
                    }

                    // var commonElements = a.filter(value => b4.includes(value));
                    // document.getElementById("myBody").innerHTML = "";
                    // productlist(b4);
                }else{
                    console.log(a);
                    b4 = bookList;
                    // document.getElementById("myBody").innerHTML = "";
                    // productlist(b4);
                }
                
                for(var j = 0;j < b4.length;j ++){

                    if(b4[j]["title"].toUpperCase().indexOf(inputcom) != -1){
                        a[k++] = bookList[j]["title"];
                        
                    }
                }
                document.getElementById("myBody").innerHTML = "";
                productlist(b4,a);
                console.log(a);
                
            }
            
            but1.addEventListener('click',ok1);
            but2.addEventListener('click',ok1);
            cart1.addEventListener('click',addcart);
            cart2.addEventListener('click',reset);
            cart3.addEventListener('click',nonec);

        },
        function(xhr) { console.error(xhr); }
    );
    
    console.log("Finished page");
    getGood()


};



function getGood(){
    if (document.readyState === "complete") {
        console.log("the page is loaded");
      } else {
        console.log("the page is not loaded yet");
      }
}

