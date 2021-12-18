

const hrefPathArray = 
["BillionairesIndexes/KayneWest.html",
"Jay-zpage.html",
"BillionairesIndexes/Alexandar Karp.html", 
"BillionairesIndexes/Aliko Dangote.html", 
"BillionairesIndexes/David Steward.html", 
"BillionairesIndexes/Folorunsho alakija.html", 
"BillionairesIndexes/Isabel Dos santos.html", 
"BillionairesIndexes/Michael Jordan.html", 
"BillionairesIndexes/Mike Adenuga.html", 
"BillionairesIndexes/Mo ibrahim.html", 
"BillionairesIndexes/OprahWinfrey.html", 
"BillionairesIndexes/Robert f smith.html", 
"BillionairesIndexes/Strive masiyiwa.html"]


const search = document.getElementById("searchBar");
const matchList = document.querySelector(".match_List");
const path = document.getElementById("searchPath");
const innerPath = document.getElementById("match_p");
const matchesName = document.getElementById("matches_name");

let results_array = new Array; 



//Search the billionaires.json and filter it 

const searchPeople = async searchText => { 
    const res = await fetch('./JSON/billionaires.json'); 
    const billionaires = await res.json();
    

 
    //Get Matches to current text input 
    let matches = billionaires.filter(a => { 
        const regex = new RegExp(`^${searchText}`, 'gi')
        return a.name.match(regex)

    });
    if(searchText.length === 0 ) { 
        matches = []
        matchList.innerHTML = ''
    }

    outputHtml(matches);

};

//Show results in HTML
const outputHtml = matches => { 
const lisearchPath = document.getElementById("li_search_path")

    if (matches.length > 0) {

        const html = matches.map(match =>  {
        return `<li id ="match_p"><a id ="li_search_path">${match.name}</a></li>`    
        }).join('')


        matchList.innerHTML = `<ul>${html}</ul>`

        triggerPageChange(lisearchPath)
    }


}





search.addEventListener('input', () => searchPeople(search.value));





const triggerPageChange = (destination) =>  { 
    if (destination.innerText === "Kayne West") { 
        path.href = hrefPathArray[0]

        if (destination.innerText = "Kayne West") { 
            destination.href = hrefPathArray[0]
        }
     }else if (destination.innerText === "Jay Z") {
         path.href = hrefPathArray[1]
         destination.href = hrefPathArray[1]
       
     }else if (destination.innerText === "Isabel Dos Santos") { 
         path.href = hrefPathArray[6]
         destination.href = hrefPathArray[6]
     }else if (destination.innerText ==="Oprah Winfrey") { 
         path.href = hrefPathArray[9]
         destination.href = hrefPathArray[9]
     }else if(destination.innerText === "Strive Masiyiwa") {
         path.href = hrefPathArray[12]
         destination.href = hrefPathArray[12]
     }else if (destination.innerText === "Robert F Smith") { 
         path.href = hrefPathArray[11]
         destination.href = hrefPathArray[11]
     }else if (destination.innerText === "Michael Jordan") { 
         path.href = hrefPathArray[7]
         destination.href = hrefPathArray[7]
     }else if (destination.innerText === "Mike Adenuga") { 
         console.log(destination)
         path.href = hrefPathArray[8]
         destination.hrefPathArray[8]
         console.log(destination)
     }else if (destination.innerText === "Mo Ibrahim") {
        console.log(destination)

         path.href = hrefPathArray[9]
         destination.href = hrefPathArray[9]
     }else if (destination.innerText === "Folorunsho Alakija") { 

         path.href = hrefPathArray[5]
         destination.href = hrefPathArray[5]
     }else if (destination.innerText === "David Steward") {

         path.href = hrefPathArray[4]
         destination.href = hrefPathArray[4]
         
     }else if (destination.innerText === "Alexandar Karp") {
        console.log(destination)
         path.href = hrefPathArray[2]
         destination.hrefPathArray[2]
       
     }else if (destination.innerText === "Aliko Dangote") { 
         path.href = hrefPathArray[3]
         destination.href = hrefPathArray[3]
     }
    
}