function Laptop(name, model, sernom, godd, razmer_ozy, razmer_pzy, nal_diskovod, massa ){
        this.name = name;
        this.model = model;
        this.sernom = sernom;
        this.godd = godd;
        this.razmer_ozy = razmer_ozy;
        this.razmer_pzy = razmer_pzy;
        this.nal_diskovod = nal_diskovod;
        this.massa = massa;
    }
    // Laptop.prototype.setName = function(razmer_ozy){
    //      this.razmer_ozy;
    // }
    function Ultrabook ( model, sernom, razmer_pzy, massa){
        // this.name = name;
        this.model = model;
        this.sernom = sernom;
        // this.godd = godd;
        // this.razmer_ozy = razmer_ozy;
        this.razmer_pzy = razmer_pzy;
        this.massa = massa;
    }
    
    Ultrabook.prototype.ozy_vivod = function(){
        return this.razmer_ozy;
    }
    
    Ultrabook.prototype.pzy_vivod = function(){
        return this.razmer_pzy;
    }
    
    Ultrabook.prototype.godd_vivod = function(){
        return this.godd;
    }

    Laptop.prototype.getName = function(){
        return this.razmer_ozy;
    }

    Laptop.prototype.getName1 = function(){
        return this.razmer_pzy;
    }
    Laptop.prototype.getName12 = function(){
        return this.sernom;
    }


    Ultrabook.prototype = Laptop;

var noutbook = new Laptop("asus","vivobook","123456789","2019","16gb","1.4gc","да","1250кг");
// var ultrabook = new Ultrabook("vivobook","123456789","2019","16gb","1.4gc","да");
   function vivod(){
       console.log(" Размер ОЗУ: " + noutbook.razmer_ozy);
       console.log(" Название: " + noutbook.name);
       console.log(" год изготовления: " + noutbook.godd);
       
   }

vivod();

// var noutbook = new Ultrabook("asus","vivobook","123456789","2019","16gb","1.4gc","1.3");

//     if(noutbook.massa <= 1.5)
//     {
//         function vivod(){
//             console.log(" Размер ОЗУ: " + noutbook.ozy_vivod());
//             console.log(" Размер ПЗУ: " + noutbook.pzy_vivod());
//             console.log(" Год создания: " + noutbook.godd_vivod());
//         }
//         vivod();
//     }
//     else
//     {
//         alert("Введите массу не привышающую 1.5кг (0.0-1.5)")
//     }
   


