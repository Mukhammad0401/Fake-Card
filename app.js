let cardtypecode = document.getElementById('cardtypecode')
let banktitlecode = document.getElementById("banktitlecode")
let bankcardimg = document.getElementById('bankcardimg')


cardtypecode.addEventListener('keyup', function () {
    switch (cardtypecode.value) {
        case "8600":
            bankcardimg.src = './Uzcard.jpg'
            break;
        case "4278":
            bankcardimg.src = './Viza.jpg'
            break;
        case "5300":
            bankcardimg.src = './MasterCard.jpg'
            break;
        case "9860":
            bankcardimg.src = './Humo.jpg'
            break;
        default:
            if (cardtypecode.value.length >= 4) {
                alert("Bunday karta mavjud emas")
            }
    }
})

banktitlecode.addEventListener('keyup', function () {
    switch (banktitlecode.value) {
        case "1650":
            banktitle.innerHTML = "Kapital bank"
            break;
        case "2742":
            banktitle.innerHTML = "NBU"
            break;
        case "3572":
            banktitle.innerHTML = "TBC"
            break;
        case "1660":
            banktitle.innerHTML = "OFB"
            break;
        case "7532":
            banktitle.innerHTML = "SQB"
            break;
        default:
            if (banktitlecode.value.length >= 4) {
                alert("Bunday karta mavjud emas")
            }
    }
})