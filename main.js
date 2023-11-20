const items = document.querySelectorAll(".item")

const today = new Date()
const currentMonth = today.getMonth()
const currentDay = today.getDate()


items.forEach(item => {
  if(currentDay == item.textContent.trim())
  {
    item.classList.add("current")
  }
  
  item.onclick = () => {
    item.style.zIndex = "1000"
    item.classList.add("opened")
    if(currentDay == item.textContent.trim())
    {
    }
    else
    {
      return
    }
  }
})