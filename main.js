const items = document.querySelectorAll(".item")

const today = new Date()
const currentMonth = today.getMonth()
const currentDay = today.getDate()


items.forEach(item => {
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
    item.style.zIndex = "1000"
    item.classList.add("opened")
    if(currentDay == item.firstElementChild.textContent.trim() && currentMonth == "11")
    {
      //zIndex azért hogy amikor kinyílik ne legyen overlap
    }
    else
    {
      return
    }
  }
})