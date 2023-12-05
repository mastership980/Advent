const items = document.querySelectorAll(".item")

const today = new Date()
const currentMonth = today.getMonth()
const currentDay = today.getDate()

const month = 11
let index = 0

if(localStorage.getItem("isDone") === null || 
   localStorage.getItem("savedDay") === null)
{
  localStorage.setItem("isDone", false.toString())
  localStorage.setItem("savedDay", "0")
}

const interval = setInterval(() => {
  if(index < items.length)
  {
    const item = items[index]

    if(item.firstElementChild.textContent.trim() == currentDay && 
       currentMonth == month &&
       localStorage.getItem("isDone") === "true" &&
       localStorage.getItem("savedDay") == currentDay)
    {
      item.classList.add("done")
    }
    else if(item.firstElementChild.textContent.trim() < currentDay && currentMonth == month)
    {
      item.classList.add("done")
    }
    if(currentDay == item.firstElementChild.textContent.trim() && currentMonth == month)
    {
      item.classList.add("current")
    }
    
    document.addEventListener("click", (e) => {
      if(e.target.classList.value.includes("content"))
      {
        item.children[1].close()
        return
      }
    })
    item.onclick = () => {
      if(item.firstElementChild.textContent.trim() <= currentDay && currentMonth == month)
      {
        //zIndex azért hogy amikor kinyílik ne legyen overlap
        item.style.zIndex = "1000"
        item.classList.add("opened")
        localStorage.setItem("isDone", true.toString())
        localStorage.setItem("savedDay", currentDay.toString())
        if (!item.children[1].open) 
        {
          item.children[1].showModal()
          item.children[1].scrollTop = 0
        }
      }
      else
      {
        return
      }
    }

    index++
  }
  else{
    clearInterval(interval)
  }
}, 50)