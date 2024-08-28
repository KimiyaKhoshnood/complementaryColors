document.querySelector("#color").addEventListener("keyup", (e)=>{
    if (document.querySelector("#color").value.length==7) {
        complementary(document.querySelector("#color").value)
        document.querySelector("#result").classList.remove("notactive")
        document.querySelector("#result").classList.add("active")
    }
})



const complementary = (color) => {
    let tempColor = color.split("")


    tempColor.map((elem, index) => {
        tempColor[index] = convertorToNum(elem)
    })

    let complementaryColor = ["#"]
    tempColor.map((elem, index) => {
        if (index%2==0 && elem!="#"){
            let tempNum = 255 - (tempColor[index-1]*16 + elem)
            complementaryColor.push(convertorToLetter(~~(tempNum/16)))
            complementaryColor.push(convertorToLetter(tempNum%16))
        }
    })
    console.log(complementaryColor.join(""));
    showResult(document.querySelector("#color").value, complementaryColor.join(""))
}
const convertorToNum = (elem)=>{
    switch (elem) {
        case "#":
            return "#"
        case "a":
        case "A":
            return 10
        case "b":
        case "B":
            return 11
        case "c":
        case "C":
            return 12
        case "d":
        case "D":
            return 13
        case "e":
        case "E":
            return 14
        case "f":
        case "F":
            return 15
        default:
            return parseInt(elem)
    }
}
const convertorToLetter = (elem)=>{
    switch (elem) {
        case "#":
            return "#"
        case 10:
            return "A"
        case 11:
            return "B"
        case 12:
            return "C"
        case 13:
            return "D"
        case 14:
            return "E"
        case 15:
            return "F"
        default:
            return elem.toString()
    }
}
const showResult = (color1, color2)=>{
    document.querySelector("#result > span > span:nth-child(1)").innerHTML = color1
    document.querySelector("#result > span > span:nth-child(2)").innerHTML = color2
    document.querySelector("#result > div").style.background = `linear-gradient(to right, ${color1}, ${color2})`
    document.querySelector("#result > div:nth-of-type(2)>div:nth-of-type(1)").style.background = color1
    document.querySelector("#result > div:nth-of-type(2)>div:nth-of-type(2)").style.background = color2
}