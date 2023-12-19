let  MyUniqueArr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",

    },
    {
        brand: "Motorola",
        model: "MotorolaE5 Play",
        price: "9000",
        camera: "7px",
        ram: "8gb",
        rom : "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Infnix",
        model: "Infnix10",
        price: "190000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Infnix",
        model: "Infnixnot30",
        price: "40,0000",
        camera: "80px",
        ram: "16gb",
        rom : "200gb",

    },
]

const {brand,model,price,camera,ram,rom}=MyUniqueArr

function find(event){

  event.preventDefault();

  let searchbar = document.getElementById("field").value.toLowerCase();


  let find = document.getElementById("inputbFeild");

  let MyList = document.getElementById("mylist");

  let select = document.getElementById("My01").value  



  const Myfilt = MyUniqueArr.filter(main =>{

    const find = main[select].toString().toLowerCase();

    return find.includes(searchbar);

  });


  if (Myfilt.length > 0) {

    MyList.innerHTML = '';









    Myfilt.map(main=> {

      MyList.innerHTML += `

      <li>Brand: ${main.brand}</li>
        <li>Model: ${main.model}</li>
        <li>Price: Rs.${main.price}</li>
        <li>Camera: ${main.camera}</li>
        <li>ram: ${main.ram}</li>
        <li>rom: ${main.rom}</li>
        <hr>
      `;


    });
  }
   else {

    MyList.innerHTML = 'Error:Only Motrola,Iphone,Samsung,Infnix and Vivo."Details"';
 
}






}