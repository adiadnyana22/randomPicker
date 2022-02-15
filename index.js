document.querySelector('#settingBtn').addEventListener('click', () => {
    document.querySelector('#setting').style.width = '100%';
})

document.querySelector('#kembali').addEventListener('click', () => {
    document.querySelector('#setting').style.width = '0';
})

const inputEntitas = document.querySelector('#entitas');
let isiData = [];
const inputHadiah = document.querySelector('#hadiah');
const inputJumlah = document.querySelector('#jumlah');
let jumlahUndian = 1;
const pemenang = document.querySelector('#pemenang');

inputEntitas.addEventListener('change', () => {
    isiData = inputEntitas.value.split('\n');
    updateDisplay();
})

inputHadiah.addEventListener('change', () => {
    document.querySelector('.detail h1').innerHTML = `Pemenang ${inputHadiah.value}`;
})

inputJumlah.addEventListener('change', () => {
    jumlahUndian = inputJumlah.value;
    updateDisplay();
})

const updateDisplay = () => {
    if(isiData.length){
        let data = "";
        for(let i = 0; i < jumlahUndian; i++) data += "<span>?????</span>"
        pemenang.innerHTML = data;
    }
}

let interval;

document.querySelector('#start').addEventListener('click', () => {
    if(!interval && isiData.length){
        interval = setInterval(() => {
            let data = "";
            const randomNum = Math.floor(Math.random() * isiData.length);
            for(let i = 0; i < jumlahUndian; i++) data += `<span>${isiData[randomNum]}</span>`;
            pemenang.innerHTML = data;
        }, 100);
    }
})

document.querySelector('#stop').addEventListener('click', () => {
    if(interval){
        let data = "";
        for(let i = 0; i < jumlahUndian; i++){
            if(isiData.length){
                const randomNum = Math.floor(Math.random() * isiData.length);
                data += `<span>${isiData[randomNum]}</span>`;
                isiData = isiData.filter((val, index) => {
                    return index != randomNum;
                });
            } else {
                break;
            }
        }
        clearInterval(interval);
        interval = null;
        pemenang.innerHTML = data;

        let entitasBaru = "";
        for(let i = 0; i < isiData.length; i++) {
            if(i == isiData.length - 1){
                entitasBaru += `${isiData[i]}`;
            } else {
                entitasBaru += `${isiData[i]}\n`;
            }
        }
        inputEntitas.value = entitasBaru;
    }
})