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
})();
