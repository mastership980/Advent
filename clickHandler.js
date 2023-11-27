const items = document.querySelectorAll(".item")

const y = Date.now()

const today = new Date(y)
const currentMonth = today.getMonth()
const currentDay = today.getDate()

const month = 10
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

    item.onclick = () => {
      //Ha a mai nap és a div ben lévő szám eggyezik, 
      //és a hónap az December (JS hónapok azok 0 tól kezdődnek ezért 11 a December)
      //akkor fusson le
      if(currentDay == item.firstElementChild.textContent.trim() && currentMonth == month)
      {
        //zIndex azért hogy amikor kinyílik ne legyen overlap
        item.style.zIndex = "1000"
        item.classList.add("opened")
        localStorage.setItem("isDone", true.toString())
        localStorage.setItem("savedDay", currentDay.toString())
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