setTimeout(() => { }, 3000)//setTimeout函数只会执行一次就停止，但是setInterval()会一直执行，表示每隔多久执行一次,但是
// 老手还是用setTimeout(()=>{},20)的递归解决
let string = `你好我是`
string[0].charCodeAt()//charCodeAt()可以得出该字符的unicode编码
string = string.replace(/\n/g, '<br>');//将回车变成换行
demo.innerHTML = string.substring(0, n);//demo里面的内容
// 程序员3大难题：1.要不要加1；2.怎么命名。3.缓存失效

if (string[n] === '\n') {
    string2 += '<br>';
} else {//如果不是回车就照搬
    string2 += string[n];
}  //可以优化成下面：

string2 += (string[n] === '\n' ? '<br>' : string[n])
// 在html中，写多个空格也会变成一个空格
// 在js中回车用\n，但是在html中，空格用&nbsp表示,html中回车用<br>，空格用&nbsp
//string.substring(0,n)相比与string[n] 的区别就是可以不用展示出来，同时也可以获取数组的每个值
// ::before里面不能再放::before，即伪元素中不能再放伪元素




