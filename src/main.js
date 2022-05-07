// 写代码时会用到DOM
let html = document.querySelector('#html');
let style = document.querySelector('#style')

let string = `
/* 你好，我是蒋国坪
 *接下来我演示一下我的前端功底
 *首先我要准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
      
}
body{
    color:red;
}
/*接下来我把div变成一个八卦图
 *注意看好了
 *首先把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
 *一黑一白
 *,用到css gradient background generator*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    /*border:1px solid red;*/
    background: #000;
    border-radius: 50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(253,253,253,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    /*border:1px solid red;*/
    background: #fff;
    border-radius: 50%;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(244,244,244,1) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 51%, rgba(253,253,253,1) 52%, rgba(255,255,255,1) 100%);
}

`;

let string2 = ''
console.log(string.length)
let n = 0;


let step = () => {
    setTimeout(() => {
        // console.log(n)
        // console.log(string[n]);
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        // html.innerHTML = string.substring(0, n);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n); //这句是让style标签中css样式生效的关键，写在变量string中的
        window.scrollTo(0, 999999);//这是js设置页面自动滚动
        html.scrollTo(0, 99999)//页面会有滚动条的效果
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);//50ms相当于1s钟2个字
}
step() //注释掉的话上面函数就不会被调用，就不会启动


setTimeout(() => {
    style.innerHTML = `
    body{
        color:red;
    }
    `
}, 10)




