const form = document.addItem 
const list =  document.getElementById("list")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const title = form.title.value
    const newItem = document.createElement('li')
    form.title.value = " "
    newItem.textContent = title
    document.getElementsByTagName("ul")[0].append(newItem)

    const clearBtn = document.createElement("button")
    clearBtn.textContent = "X"
    newItem.append(clearBtn)
    clearBtn.addEventListener("click", () =>{
        newItem.remove('li')
    } )


    const editBtn = document.createElement("button")
    editBtn.textContent = "edit"
    newItem.append(editBtn)

    editBtn.addEventListener("click", () =>{
        var changeItem = document.createElement("input")
        newItem.append(changeItem)
        var save = document.createElement("button")
        save.textContent = "save"
        newItem.append(save)

        let editItem = changeItem.textContent

    })


    

}
)