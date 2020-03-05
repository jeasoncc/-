var warpe = document.querySelector("#wrap")
var conentElement = document.querySelector("#content")
var tempt = "<p>1211211212</p>"
warpe.addEventListener("scroll", (e) => {
    var ele = e.target

    var contentHeight = window.getComputedStyle(ele).height
      if(Number(ele.clientHeight) + Number(ele.scrollTop) > Number(ele.scrollHeight)) {
        $(ele).append($(tempt))
        console.log("getBottom")
    }
})
