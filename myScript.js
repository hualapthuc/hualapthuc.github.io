//Xuat ra man hinh
alert("Hi Javascript!!");
//xac nhan
var result = confirm("Ban muon thoat?");
if(result){
    alert("ban chon thoat!! Cam on ban");
} else {
    alert("Ban bo qua ruiiiii");
}
//Nhap ten
var name=prompt("Hay nhap ten :");
alert("Ten ban vua nhap: ",name);
function sayHello(name){
    alert("Hi "+name);
}
sayHello("Le Quang Teo");
function sayHello(name){
    document.getElementById("title").innerHTML="Hi"+name;
}

sayHello("Le Van Teo")