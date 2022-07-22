(async () => {
    (async() => {
        // Handle "Prefrences Settings Tab" here
        const prefElement = document.getElementsByClassName("css-1oetng7")[2]
        const explorerElement = document.getElementsByClassName("css-mijxyx")[0]
        const newExplorerElement = document.createElement("div")
    
        // document.getElementsByClassName("jsx-2ab57d60a61cd675")[0].innerHTML += "<div>EXAMPLE Extension</div>"
    
        explorerElement.children[0].children[0].classList.add("jsx-148916447")
        explorerElement.children[0].children[0].classList.add("text")
    
    explorerElement.children[0].style.width = "100%"
    
        document.getElementById("roles").style.display = "none"
    
        document.getElementsByClassName("css-1p6db26")[0].style.marginTop = "10px"
    
        newExplorerElement.style.marginTop = "10px"
    
        newExplorerElement.classList.add("v-stack")
        newExplorerElement.classList.add("jsx-1475602726")
        explorerElement.classList.add("h-stack")
        explorerElement.classList.add("jsx-1494323031")
        explorerElement.classList.remove("css-mijxyx")
        newExplorerElement.appendChild(explorerElement)
        prefElement.appendChild(newExplorerElement) 
    })();

    (async() => {
        // Handle "Editor / Workspace" Stuff Here
    })(); 
    
    (async() => {
        let username = document.getElementsByClassName("username")[0].innerHTML
        var emojis = ['😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁']
        var welcomingStatements = ["Welcome Back", "How are you", "We missed you"]

        document.getElementsByClassName("jsx-477637987")[0].innerHTML = `Welcome back, ${username.replace("@", "")}! ${emojis[Math.floor(Math.random() * emojis.length)]}`



        const main = document.getElementsByClassName("jsx-1734542601")[0]
        let motivation = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – <b>Martin Fowler</b>"

        const mlist = [

        "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
        "“First, solve the problem. Then, write the code.” – John Johnson",
        "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
        "“ In order to be irreplaceable, one must always be different” – Coco Chanel",
        "“Java is to JavaScript what car is to Carpet.” – Chris Heilmann",
        "“Knowledge is power.” – Francis Bacon",
        "“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon",
        "“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery",
        "“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov",
        "“ Code is like humor. When you have to explain it, it’s bad.” – Cory House",
        "“Fix the cause, not the symptom.” – Steve Maguire",
        "“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck",
        "“When to use iterative development? You should use iterative development only on projects that you want to succeed.” – Martin Fowler",
        "“Simplicity is the soul of efficiency.” – Austin Freeman",
        "“Before software can be reusable it first has to be usable.” – Ralph Johnson",
        "“Make it work, make it right, make it fast.” – Kent Beck",

        ]

        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const span = document.createElement('span')

        div.id = "motivation"
        div.style = "box-shadow:#000 1px solid;z-index:300;padding:8px;position:fixed;background:var(--background-root);bottom:25px;right:25px;border-radius:var(--border-radius-8);border-color:var(--background-higher);border-width:1px;border-style:solid;-webkit-box-shadow:var(--shadow-1);max-width:166px;-moz-box-shadow:var(--shadow-1);box-shadow:var(--shadow-1);background-color:var(--background-default);cursor:pointer;transition:.3s"
        h3.classList.add("motivation-title")
        h3.style = "font-size:var(--font-size-subhead-big);font-family:var(--font-family-default);font-weight:var(--font-weight-medium);color:var(--foreground-default);text-align:left"
        h3.innerHTML = "Motivation"
        span.classList.add("motivation-subtitle")
        span.innerHTML = `${mlist[Math.floor(Math.random() * mlist.length)]}`
        span.style = "font-size:var(--font-size-subhead-medium);font-family:var(--font-family-default);font-weight:var(--font-weight-default);color:var(--foreground-default);text-align:left"

        div.addEventListener("click", (e) => {
          e.preventDefault();
          div.style.bottom = "-30vh"
        })


         div.appendChild(h3)
         div.appendChild(span)
         main.appendChild(div) 

    })
})();
