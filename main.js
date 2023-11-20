const items = document.querySelectorAll(".item")

const a = Date.now()

const today = new Date(a)
const currentMonth = today.getMonth()
const currentDay = today.getDate()

let index = 0

const interval = setInterval(() => {
  if(index < items.length)
  {
    const item = items[index]

    if(item.firstElementChild.textContent.trim() < currentDay)
    {
      item.classList.add("done")
    }

    if(currentDay == item.firstElementChild.textContent.trim())
    {
      item.classList.add("current")
    }

    item.onclick = () => {
      //Ha a mai nap és a div ben lévő szám eggyezik, 
      //és a hónap az December (JS hónapok azok 0 tól kezdődnek ezért 11 a December)
      //akkor fusson le
      if(currentDay == item.firstElementChild.textContent.trim() && currentMonth == "10")
      {
        //zIndex azért hogy amikor kinyílik ne legyen overlap
        item.style.zIndex = "1000"
        item.classList.add("opened")
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