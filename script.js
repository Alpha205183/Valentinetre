
// Thay đổi nội dung búc thư ở đây
var letterContent = "Dear Cún iu. Anh biết giờ này là quá trễ cho một ngày valentine, nhưng mà có thì chắc chắn là hơn không có đúng hong nè công chúa nhỏ của anh.Hôm nay anh đã làm em thất vọng rất nhiều anh rất xin lỗi và chắc chắn với em rằng đây sẽ là lần cuối có sự ngu dốt này của anh.Valentine đã sắp hết nhưng anh vẫn muốn chúc cún iu của anh từ hôm nay trở đi sẽ hong phải tủi thân nữa luôn vui vẻ và thật nhiều sức khỏe em nhá. Anh hy vọng rằng anh sẽ có thể tiếp tục đông hành cùng em trên chặng đường phía trước và hỗ trợ em thật nhiều thật nhiều để cô gái của anh hong bị chê trách gì nữa. Xin lỗi em nhiều, yêu em."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50

// Hiệu ứng gõ chữ

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val
        }, durationWrite * index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if (cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
