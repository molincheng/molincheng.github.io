window.onload = function () {
    let search = this.document.querySelector('#search');
    search.onclick = function (e) {
        this.value = ''
    }
    axios.get('https://a1067610892.github.io/-Novel_JSON/Fantasy.json').then((res) => {
        // console.log(res.data)
        var data = res.data;
        // console.log(data)
        var arrkey = []
        var uls = this.document.querySelector('#recommend ul')
        for (let i = 0; i < (data.length); i++) {
            if (i % 2 && i & 2) {
                // console.log(i)
                let lis = ''
                lis += `
                <li>
                <img src="${data[i].img}" alt="">
                <div class="info">
                    <h3>${data[i].name}</h3>
                    
                    <span>作者：${data[i].author}</span>
                    <span> 时间：${data[i].time}</span>
                    
                    <p class="intr">${data[i].introduce}</p>
                </div>
                </li>
            `
                arrkey.push(i)
                uls.innerHTML += lis
            }
        }

        let onlis = document.querySelectorAll('#recommend ul li')
        // console.log(arrkey)

        for (let i = 0; i <= onlis.length - 1; i++) {
            for (let i = 0; i < arrkey.length; i++) {

            onlis[i].onclick = function () {
                    let url = location.href.split('/')
                    location.href = url[8] = 'nove.html?id=' + arrkey[i]
                }
            }

        }
    }, (err) => {
        console.log(err)
    })
    let alis = document.querySelectorAll('a')
    for(let i=0;i<=alis.length;i++){
      alis[i].href = 'Fantasy.html?id='+i
    }
}