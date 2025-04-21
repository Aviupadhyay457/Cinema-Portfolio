import {films} from "/data.js"
const allMoviesContainer=document.getElementById("all-movies-container")
let iconImage=document.getElementById("icon-image")


// for genre dropdown
let dropDownBoxGenre=document.getElementById("dropdown-box-genre")
let genreArray=[]
for (let film of films){
    for(let genre of film.genre){
        if (!(genreArray.includes(genre))){
            genreArray.push(genre)
        }
    }
}
genreArray=genreArray.sort()
console.log(films.length)


dropDownBoxGenre.innerHTML+=`<button class="dropdown-box-option-btn-genre" id="Any-Genre">Any Genre</button>`
for(let genre of genreArray ){
    dropDownBoxGenre.innerHTML+=`<button class="dropdown-box-option-btn-genre" id="${genre}">${genre}</button>`
}

let genreDropdownContainer = document.getElementById("genre-dropdown-container")
    genreDropdownContainer.addEventListener("mouseenter",function(){
        document.getElementById("dropdown-box-genre").style.display="flex"
    genreDropdownContainer.addEventListener("mouseleave",function(){
        document.getElementById("dropdown-box-genre").style.display="none"
    })
    })


const dropdownBoxGenre=document.getElementById("dropdown-box-genre")
    dropdownBoxGenre.addEventListener("click",function(e){
            const dropdownBoxOptionBtnGenre=document.getElementsByClassName("dropdown-box-option-btn-genre")
            if (e.target.id!="dropdown-box-genre"){
            for(let selectedGenre of dropdownBoxOptionBtnGenre){
                selectedGenre.classList.remove("dropdown-box-option-btn-genre-selected")
            }
            console.log(e)
        }

            if (e.target.id!="dropdown-box-genre"){
                document.getElementById(e.target.id).classList.add("dropdown-box-option-btn-genre-selected")
                
            if(e.target.textContent!="Any Genre"){
                document.getElementById("genre-btn-head").textContent=e.target.textContent
            }
            else if(e.target.textContent==="Any Genre"){
                document.getElementById("genre-btn-head").textContent="Genre"
            }
                
                document.getElementById("dropdown-box-genre").style.display="none"
            }
    })



// for year dropdown
let dropdownBoxYear=document.getElementById("dropdown-box-year")

dropdownBoxYear.innerHTML+=`<button class=" dropdown-box-option-btn-year" id="Any-Year">Any Year</button>`
for(let i=2020;i>=1910;i=i-10){
    dropdownBoxYear.innerHTML+=`<button class="dropdown-box-option-btn-year" id="btn${i}s">${i}s</button>`
    // <div class="decade-years-container">`
    
    // for(let j=1;j<=9;j++){
    //     dropdownBoxYear.innerHTML+=`<button class="dropdown-box-option-btn-year" id="btn${i+j}">${i+j} </button>` 
    // }
    // dropdownBoxYear.innerHTML+=`</div></div>`
}
dropdownBoxYear.innerHTML+="</div>"

let yearDropdownContainer = document.getElementById("year-dropdown-container")
    yearDropdownContainer.addEventListener("mouseenter",function(){
        document.getElementById("dropdown-box-year").style.display="flex"
    yearDropdownContainer.addEventListener("mouseleave",function(){ 
        document.getElementById("dropdown-box-year").style.display="none"
        document.getElementById("decade-years-container").style.display="none" //added to hide year container
    })
    })

dropdownBoxYear.addEventListener("click",function(e){
        const dropdownBoxOptionBtnYear=document.getElementsByClassName("dropdown-box-option-btn-year")
        if (e.target.id!="dropdown-box-year"){
        for(let selectedYear of dropdownBoxOptionBtnYear){
            selectedYear.classList.remove("dropdown-box-option-btn-year-selected")
            if(!(document.getElementById("year-btn-head").textContent.includes("s"))){
                selectedYear.textContent=selectedYear.textContent.replace(" ►", "")
            }


        }
        }

        if (e.target.id!="dropdown-box-year"){
            document.getElementById(e.target.id).classList.add("dropdown-box-option-btn-year-selected")
            
        if(e.target.textContent!="Any Year"){
            if(e.target.textContent.includes("►"))
            {
                document.getElementById("year-btn-head").textContent=e.target.textContent.substring(0,4)+"s"
            }
            else{
                document.getElementById("year-btn-head").textContent=e.target.textContent
            }
            
        }
        else if(e.target.textContent==="Any Year"){
            document.getElementById("year-btn-head").textContent="Year"
        }
            
            document.getElementById("dropdown-box-year").style.display="none"
        }
})


// for the year dropdown when hovered over decade

dropdownBoxYear.addEventListener("mouseover",function(e){
    if (e.target.id.startsWith('btn')){
        yearsOfDecade(e.target.textContent)

        const decadeYearsContainer = document.getElementById("decade-years-container")
        let findingDecade=""
        decadeYearsContainer.addEventListener("click",function(e){
            if (e.target.id!="dropdown-box-year"){
                document.getElementById(e.target.id).classList.add("dropdown-box-option-btn-year-selected")
                
            document.getElementById("year-btn-head").textContent=e.target.textContent
                
            document.getElementById("dropdown-box-year").style.display="none"
            document.getElementById("decade-years-container").style.display="none"
            
            findingDecade=e.target.textContent
            findingDecade=findingDecade.substring(0,3)
            findingDecade=findingDecade+"0"
            findingDecade=Number(findingDecade)
            
            

                
            }
        const dropdownBoxOptionBtnYear=document.getElementsByClassName("dropdown-box-option-btn-year")
        for(let selectedYear of dropdownBoxOptionBtnYear){
            selectedYear.classList.remove("dropdown-box-option-btn-year-selected")
            selectedYear.textContent=selectedYear.textContent.replace(" ►","")
        }
        console.log(findingDecade)
        let decadeId="btn"+findingDecade+"s"
        document.getElementById(decadeId).classList.add("dropdown-box-option-btn-year-selected")
        document.getElementById(decadeId).textContent=findingDecade+"s"+" ►"

        

        })

    }



})


function yearsOfDecade(decade){
    if (decade.includes("►")){
        decade=Number(decade.substring(0,decade.length-3))
    }
    else{
    decade=Number(decade.substring(0,decade.length-1))
    }
    let headofDropdown=document.getElementById("head-of-dropdown")

    //cant use this cause whenever the decade container is hovered, year will be text content of year btn head, so the below code is better which just removes the previous year of decade box
    // headofDropdown.innerHTML=`<button class="year-btn-head" id="year-btn-head">Year</button>
    //                     <img src="siteImages/dropdown.png" class="dropdown-img">`

    const existingContainer = document.getElementById("decade-years-container")
    if (existingContainer) {
        headofDropdown.removeChild(existingContainer)
    }

    let yearhtml=""
    yearhtml+=`<div class="decade-years-container" id="decade-years-container">`
    for (let i=0;i<=9;i++){
    yearhtml+=`<button class="dropdown-box-option-btn-year-of-year" id="btn${decade+i}">${decade+i}</button>`
    }
    yearhtml+=`</div>`
    headofDropdown.innerHTML+=yearhtml

    //all of this below has to be done cause new decade years container is getting
    //created evrytime user hover(better if i had used z indexing??), so if i want to give background color to any year
    //selected (which might be done when the previous decade years container was created), 
    // i first have to check what value does the text content of year header
    //has, now for that value give background color to new decade years container's year

    let yearBtnHead=document.getElementById("year-btn-head")
    let x=yearBtnHead.textContent
    if (!(x.includes("s") || x.includes("Year"))){
        const decadeYearsContainer=document.getElementById("decade-years-container")
        if(decadeYearsContainer.textContent.includes(x))
        {
            let btnid="btn"+x
            let btnElement = document.getElementById(btnid)
            btnElement.classList.add("dropdown-box-option-btn-year-of-year-selected")
        }
        // console.log(decadeYearsContainer.textContent) this returns for 2010s 2010201120122013.. text content of all elements combined
    }



}


const anyYear=document.getElementById("Any-Year")
anyYear.addEventListener("mouseenter",function(){
    const decadeYearsContainer = document.getElementById("decade-years-container")
    if (decadeYearsContainer!=null){  //had to add this cause if deacde years container is not opened then it will return null as there is no id created (cause we are creating id when we hover over a decade), and getting id of something which is not there will give null
        decadeYearsContainer.style.display="none";
    }
    
})


// this code is written toegther when deacde years container is created, cause deacde years container dosent exist permanently, everytime user hovers on a deacde a deacdeyearscontainer is created, so writing its any functionallity outside its creation will give error
// const decadeYearsContainer = document.getElementById("decade-years-container")
// decadeYearsContainer.addEventListener("click",function(e){
//     console.log(e.target.id)
// })






// for rating dropdown
let dropdownBoxRating=document.getElementById("dropdown-box-rating")
dropdownBoxRating.innerHTML+=`<button class=" dropdown-box-option-btn-rating" id="Any-Rating">Any Rating</button>`
for(let i=5;i>=1;i=i-1){
    let x="★".repeat(i)+"☆".repeat(5-i)
    dropdownBoxRating.innerHTML+=`<button class="dropdown-box-option-btn-rating" id="star-${i}"> ${x} </button>`
}

let ratingDropdownContainer = document.getElementById("rating-dropdown-container")
    ratingDropdownContainer.addEventListener("mouseenter",function(){
        document.getElementById("dropdown-box-rating").style.display="flex"
    ratingDropdownContainer.addEventListener("mouseleave",function(){
        document.getElementById("dropdown-box-rating").style.display="none"
    })
    })

dropdownBoxRating.addEventListener("click",function(e){
    const dropdownBoxOptionBtnRating=document.getElementsByClassName("dropdown-box-option-btn-rating")
    if (e.target.id!="dropdown-box-rating"){
    for(let selectedRating of dropdownBoxOptionBtnRating){
        selectedRating.classList.remove("dropdown-box-option-btn-rating-selected")
    }
    }

    if (e.target.id!="dropdown-box-rating"){
        document.getElementById(e.target.id).classList.add("dropdown-box-option-btn-rating-selected")
        
    if(e.target.textContent!="Any Rating"){
        document.getElementById("rating-btn-head").textContent=e.target.textContent
    }
    else if(e.target.textContent==="Any Rating"){
        document.getElementById("rating-btn-head").textContent="Rating"
    }
        
        document.getElementById("dropdown-box-rating").style.display="none"
    }
})


//starting the all movies container here

//this is for rendering the movies in a pair of 12

let rate=""
function renderMovies(count,film){ //film is not films , this render movies function can be used with any array
    // console.log(film)
    let movieContainerVarHtml=""
    for(let i=count;i<count+12 && i<film.length;i++){
        rate="★".repeat(film[i].rating)
        movieContainerVarHtml+=`
            <div class="movie-container" id="${film[i].id}">
            <img src="${film[i].image}" class="movie-image">
            <p class="movie-title">${film[i].name}</p>
            <div class="movie-info">
                <p class="movie-year">${film[i].year}</p>
                <p class="dot"> • </p>
                <p class="movie-rating">${rate}</p>
            </div> 
        </div>
        `
        
    }
    // console.log(count)
    allMoviesContainer.innerHTML+=movieContainerVarHtml
    if(count+12>film.length){
        if (document.getElementById("load-more-btn")){
            allMoviesContainer.removeChild(document.getElementById("load-more-btn"))
        }
    }
    else{
        loadMore(count,film)
    }
    
}
renderMovies(0,films)

function loadMore(count,film){
    if (document.getElementById("load-more-btn")){
        allMoviesContainer.removeChild(document.getElementById("load-more-btn"))
    }
    allMoviesContainer.innerHTML+=`<button class="load-more-btn" id="load-more-btn">Load More</button>`

    const loadMoreBtn=document.getElementById("load-more-btn") //writing them outside this function will make this work only once cause everytime the load more btn is getting deleted
    loadMoreBtn.addEventListener("click",function(){
        renderMovies(count+12,film)
    })
}


// for the apply button

const applyBtn=document.getElementById("apply-btn")
applyBtn.addEventListener("click",function(){
    const genreBtnHead=document.getElementById("genre-btn-head")
    const yearBtnHead=document.getElementById("year-btn-head")
    let yearVal=""
    let yearValArray=[]
    if (Number(yearBtnHead.textContent)){
        yearVal=Number(yearBtnHead.textContent)
    }
    else if(yearBtnHead.textContent.includes("s")){ 
        let decade=yearBtnHead.textContent.substring(0,4)
        decade=Number(decade)
        for(let i=0;i<=9;i++){
            yearValArray.push(decade+i)
        }
        console.log(yearValArray)
    }

    const ratingBtnHead=document.getElementById("rating-btn-head")
    let ratingVal=ratingBtnHead.textContent
    let ratingValArray=ratingVal.split("★")
    let ratingValArrayLength=ratingValArray.length-1
    // console.log(genreBtnHead.textContent)
    // console.log(yearVal)
    // console.log(ratingValArrayLength)
    // let applyArray=[genreBtnHead.textContent,yearVal,ratingBtnHead.textContent]
    // console.log(applyArray)

    let filteredFilms=[]
    for(let film of films){
        if(genreBtnHead.textContent!="Genre" && yearBtnHead.textContent!="Year" && ratingVal!="Rating")//1
        {
            if (yearValArray.length>0){
                if (film.genre.includes(genreBtnHead.textContent)&&yearValArray.includes(film.year)&&film.rating==ratingValArrayLength){
                    filteredFilms.push(film)
                }            
            }
            else{
                if (film.genre.includes(genreBtnHead.textContent)&&film.year==yearVal&&film.rating==ratingValArrayLength){
                    filteredFilms.push(film)
                }

            }
            allMoviesContainer.innerHTML=""
            renderMovies(0,filteredFilms)
        }
        else if(genreBtnHead.textContent==="Genre" && yearBtnHead.textContent==="Year" && ratingVal==="Rating"){//2
            allMoviesContainer.innerHTML=""
            renderMovies(0,films)
        }

        else if(genreBtnHead.textContent==="Genre" && yearBtnHead.textContent==="Year" && ratingVal!="Rating"){//3
            if(film.rating===ratingValArrayLength){
                filteredFilms.push(film)
            }

            allMoviesContainer.innerHTML=""
            renderMovies(0,filteredFilms)
        }

        else if(genreBtnHead.textContent==="Genre" && yearBtnHead.textContent!="Year" && ratingVal==="Rating"){//4

            if (yearValArray.length>0){
                if (yearValArray.includes(film.year)){
                    filteredFilms.push(film)
                }            
            }
            else{
                if (film.year==yearVal){
                    filteredFilms.push(film)
                }

            }
            allMoviesContainer.innerHTML=""
            renderMovies(0,filteredFilms)

        }

        else if(genreBtnHead.textContent!="Genre" && yearBtnHead.textContent==="Year" && ratingVal==="Rating"){ //5
            if (film.genre.includes(genreBtnHead.textContent)){
                filteredFilms.push(film)
            }
            allMoviesContainer.innerHTML=""
            renderMovies(0,filteredFilms)
        }

        else if(genreBtnHead.textContent!="Genre" && yearBtnHead.textContent!="Year" && ratingVal==="Rating"){//6
            if (yearValArray.length>0){
                if (film.genre.includes(genreBtnHead.textContent)&&yearValArray.includes(film.year)){
                    filteredFilms.push(film)
                }            
            }
            else{
                console.log("hello")
                if (film.genre.includes(genreBtnHead.textContent)&&film.year==yearVal){
                    filteredFilms.push(film)
                    console.log("bye")
                }
            }
            // console.log(allMoviesContainer)
            allMoviesContainer.innerHTML=""
            // console.log(allMoviesContainer)
            renderMovies(0,filteredFilms)
        }

        else if(genreBtnHead.textContent!="Genre" && yearBtnHead.textContent==="Year" && ratingVal!="Rating"){//7
            if (film.genre.includes(genreBtnHead.textContent)&&film.rating==ratingValArrayLength){
                filteredFilms.push(film)
            }
            allMoviesContainer.innerHTML=""
            renderMovies(0,filteredFilms)
        }

        else if(genreBtnHead.textContent==="Genre" && yearBtnHead.textContent!="Year" && ratingVal!="Rating"){//8
            
            if (yearValArray.length>0){
                if (yearValArray.includes(film.year)&&film.rating==ratingValArrayLength){
                    filteredFilms.push(film)
                }            
            }
            else{
                if (film.year==yearVal&&film.rating==ratingValArrayLength){
                    filteredFilms.push(film)
                }
            }
            allMoviesContainer.innerHTML=""
            renderMovies(0,filteredFilms)



        }

        if (genreBtnHead.textContent==="Horror"){
            iconImage.src="siteImages/chainsaw.png"
        }
        if(genreBtnHead.textContent==="Science-Fiction"){
            iconImage.src="siteImages/hal2001.png"
        }
        
        if(genreBtnHead.textContent!="Horror" && genreBtnHead.textContent!="Science-Fiction"){
            iconImage.src="images/totoro-navigation.png"
        }




    }

    if(allMoviesContainer.innerHTML===""){
        allMoviesContainer.textContent=`Houston, we have a problem.`
        allMoviesContainer.style.fontSize="24px"

    }

})


//for movie container popup


const popupMovieContainer=document.getElementById("popup-movie-container")



allMoviesContainer.addEventListener("click",function(e){
  if(e.target.closest(".movie-container")){
    popupMovieContainer.style.display="block"

    let clickedElementId=e.target.closest(".movie-container").id
    clickedElementId=clickedElementId.substring(4,clickedElementId.length)
    clickedElementId=Number(clickedElementId)
    console.log(clickedElementId)
    let listitem="<ul>"
    for(let genre of films[clickedElementId-1].genre){
        listitem+=` <li class="genre-tag"> ${genre} </li> `
    }
    listitem+=" </ul> "

    let rating= "★".repeat(films[clickedElementId].rating)

    popupMovieContainer.innerHTML=`
                <button class="popup-movie-close-btn" id="popup-movie-close-btn">&#x2715</button>           
                 <div class="popup-movie-data-container">
                <img src="${films[clickedElementId-1].image}" class="popup-movie-img">
                <div class="popup-movie-info-container">
                    <h2 class="popup-movie-heading">${films[clickedElementId-1].name}</h2>
                    <p class="popup-movie-info">${films[clickedElementId-1].year} • ${films[clickedElementId-1].director} • ${films[clickedElementId-1].length} min</p>
                    ${listitem}
                    <h3>My ratings: ${rating}</h3>

                </div>
            </div>`
    
    document.getElementById("main-container").classList.add("restrict-container")
    document.getElementById("page-header").classList.add("restrict-container")
    const popupMovieClosebtn=document.getElementById("popup-movie-close-btn")
    popupMovieClosebtn.addEventListener("click",function(){
        popupMovieContainer.style.display="none"
        document.getElementById("main-container").classList.remove("restrict-container")
        document.getElementById("page-header").classList.remove("restrict-container")
    })         
  }
})





// reset to default when my films or the page name is clicked
//for click at logo and my films button



const siteName=document.getElementById("site-name")
siteName.addEventListener("click",resetPage)
siteName.addEventListener("click",function(){
    iconImage.src="images/totoro-navigation.png"
})

const homeBtn=document.getElementById("home-btn")
homeBtn.classList.add("active-btn")
homeBtn.addEventListener("click",resetPage)
homeBtn.addEventListener("click",function(){
    homeBtn.classList.add("active-btn")
    iconImage.src="images/totoro-navigation.png"
})

function resetPage(){
    const ratingBtnHead=document.getElementById("rating-btn-head")
    ratingBtnHead.textContent="Rating"

    const yearBtnHead=document.getElementById("year-btn-head")
    yearBtnHead.textContent="Year"

    const genreBtnHead=document.getElementById("genre-btn-head")
    genreBtnHead.textContent="Genre"

    allMoviesContainer.innerHTML=""
    renderMovies(0,films)

    const dropdownBoxOptionBtnYear=document.getElementsByClassName("dropdown-box-option-btn-year")
    for(let selectedYear of dropdownBoxOptionBtnYear){
        selectedYear.classList.remove("dropdown-box-option-btn-year-selected")
        selectedYear.textContent=selectedYear.textContent.replace(" ►","")
    }

    const dropdownBoxOptionBtnRating=document.getElementsByClassName("dropdown-box-option-btn-rating")
    for(let selectedRating of dropdownBoxOptionBtnRating){
        selectedRating.classList.remove("dropdown-box-option-btn-rating-selected")
    }

    const dropdownBoxOptionBtnGenre=document.getElementsByClassName("dropdown-box-option-btn-genre")
    for(let selectedGenre of dropdownBoxOptionBtnGenre){
        selectedGenre.classList.remove("dropdown-box-option-btn-genre-selected")
    }


}


//for roulette button

const popupRouletteContainer=document.getElementById("popup-roulette-container")
const rouletteBtn=document.getElementById("roulette-btn")
rouletteBtn.addEventListener("click",function(){
    rouletteBtn.classList.add("active-btn")
    homeBtn.classList.remove("active-btn")

    popupRouletteContainer.style.display="block"
    document.getElementById("main-container").classList.add("restrict-container")
    document.getElementById("page-header").classList.add("restrict-container")


    popupRouletteContainer.innerHTML=`
     
    <p class="roulette-loading-text">Loading your perfect rewatch...</p>
    <img src="siteImages/movie-countdown.gif" class="loading-animation">
    <p class="cinema-quote">"Watching a movie for the first time is a flirt... Rewatching it, is a date."</p>
    <p class="quote-author">Guillermo del Toro</p>
    `
    
    let x = Math.floor(Math.random()*films.length)
    // console.log(x+"bye")
    let rewatchQuote=""
    if (films[x].rating===1){
        let rewatchQuoteArr=["Not Everyone Deserves a Second Chance.","YOO UNRELEASE THIS🔥🔥"]
        rewatchQuote=rewatchQuoteArr[Math.floor(Math.random()*rewatchQuoteArr.length)]
    }
    else if(films[x].rating===2){
        rewatchQuote="Definitely one of the movies ever made."
    }
    else if(films[x].rating===3){
        rewatchQuote="Time for a rewatch!"
    }
    else if(films[x].rating===4){
        rewatchQuote="Nothing has ever felt more right."
    }
    else if(films[x].rating===5){
        rewatchQuote="Absolute Cinema."
    }
    console.log(rewatchQuote)

    setTimeout(function(){
        let listitem="<ul>"
        for(let genre of films[x].genre){
            listitem+=` <li class="genre-tag"> ${genre} </li> `
        }
        listitem+=" </ul> "
    
        let rating= "★".repeat(films[x].rating)
        popupRouletteContainer.innerHTML=`
                        <button class="popup-movie-close-btn" id="popup-movie-close-btn">&#x2715</button>           
                 <div class="popup-movie-data-container">
                <img src="${films[x].image}" class="popup-movie-img">
                <div class="popup-movie-info-container">
                    <h2 class="popup-movie-heading">${films[x].name}</h2>
                    <p class="popup-movie-info">${films[x].year} • ${films[x].director} • ${films[x].length} min</p>
                    ${listitem}
                    <h3>My ratings: ${rating}</h3>
                    <p class="rewatch-quote">${rewatchQuote}</p>
                </div>
            </div>
        `   
        const popupMovieClosebtn=document.getElementById("popup-movie-close-btn")
        popupMovieClosebtn.addEventListener("click",function(){
            popupRouletteContainer.style.display="none"
            document.getElementById("main-container").classList.remove("restrict-container")
            document.getElementById("page-header").classList.remove("restrict-container")
            rouletteBtn.classList.remove("active-btn")
            homeBtn.classList.add("active-btn")
        })   
    },4500)

    document.getElementById("main-container").classList.add("restrict-container")
    document.getElementById("page-header").classList.add("restrict-container")
    const popupMovieClosebtn=document.getElementById("popup-movie-close-btn")

})


//for profile button

const profileBtn=document.getElementById("profile-btn")
const profileContainer=document.getElementById("profile-container")
profileBtn.addEventListener("click",function(){
    profileBtn.classList.add("active-btn")
    homeBtn.classList.remove("active-btn")
    let filmData=filmsData()
    profileContainer.style.display="flex"
    profileContainer.innerHTML=`
            <button class="popup-movie-close-btn" id="popup-profile-close-btn">&#x2715</button>
            <img src="siteImages/profile.png" class="profile-img">
            <h2 class="profile-name">Avinash Upadhyay</h2>
            <div class="profile-sub-data">
                <h3 class="sub-data-key">Movies Watched</h3>
                <h3 class="sub-data-value" id="movies-watched">${filmData.watched}</h3>
            </div>
            <div class="profile-sub-data">
                <h3 class="sub-data-key">Minutes Watched</h3>
                <h3 class="sub-data-value" id="minutes-watched">${filmData.minutes}</h3>
            </div>
            <div class="profile-sub-data">
                <h3 class="sub-data-key">Most Watched Genre</h3>
                <h3 class="sub-data-value" id=" most-watched-genre">${filmData.watchedGenre.join(" , ")}</h3>
            </div>
            <div class="profile-sub-data">
                <h3 class="sub-data-key">Favourite Genre</h3>
                <h3 class="sub-data-value" id="Favourite-genre">${filmData.favGenre.join(" , ")}</h3>
            </div>
    `
    document.getElementById("main-container").classList.add("restrict-container")
    document.getElementById("page-header").classList.add("restrict-container")
    const popupProfileClosebtn=document.getElementById("popup-profile-close-btn")
    popupProfileClosebtn.addEventListener("click",function(){
        profileContainer.style.display="none"
        document.getElementById("main-container").classList.remove("restrict-container")
        document.getElementById("page-header").classList.remove("restrict-container")
        profileBtn.classList.remove("active-btn")
        homeBtn.classList.add("active-btn")
    })   
})


function filmsData(){
    let movies={watched:1,minutes:0,watchedGenre:[],favGenre:[]}
    
    movies.watched=films.length

    let genreObject={}
    let favouriteObject={}
    let finalObject={}
    for (let genre of genreArray){
        genreObject[genre]=0
        favouriteObject[genre]=0
        finalObject[genre]=[0,0]
    }

    for (let film of films){
        movies.minutes+=film.length //for finding minutes
        for(let genre of film.genre){
            genreObject[genre]=genreObject[genre]+1 //finding most watched genre
            favouriteObject[genre]=favouriteObject[genre]+film.rating
            finalObject[genre]=[genreObject[genre],favouriteObject[genre]]
        }
    }
    console.log(genreObject)
    console.log(favouriteObject)
    console.log(finalObject)
    
    let x=Math.max(...Object.values(genreObject)) //finding max value
    let mostWatched=[]
    for(let[ky,value] of Object.entries(genreObject)){
        if (value===x){
            mostWatched.push(ky)
        }
    }

    movies.watchedGenre=mostWatched
    console.log(movies)


    //finding favourtie genre
    //1. we need for every genre , its name, its count , and rating of every movie which has this particular genre
    //2.add all the ratings for genre, like horror:238
    //3. divide this by count of genre, say horror appeared 60 times , the avg rating of
    //it becomes 238/60=4 approx
    //4. get this value for every genre , and the one with max value is your favourite genre
    //favouritegenre  object is created above for this
    //genreObject above can be used as count here
    //using these two objects to create an object of array value, named finalObject 
    //this finalObject has both rating sum and count
    //manipulating this now , to get most watched genre

    let values=Object.values(finalObject)
    let mostRatedArray=[]
    for(let value of values){
        mostRatedArray.push(value[1]/value[0])
    }
    console.log(mostRatedArray)

    let mostRated=Math.max(...mostRatedArray)
    console.log(mostRated)

    let finalMostRated=[]
    for(let [genre,[count,ratingSum]] of Object.entries(finalObject)){
        if((ratingSum/count)===mostRated){
            finalMostRated.push(genre)
        }
    }
    console.log(finalMostRated)
    movies.favGenre=finalMostRated

    return movies
}


