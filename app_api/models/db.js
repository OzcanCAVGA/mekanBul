var mongoose=require("mongoose");
require("./mekansema")
var dbURI = "mongodb://localhost/mekanbul";
//var dbURI = "mongodb+srv://ozcan:1234@mekanbul.s0o1zpi.mongodb.net/mekanbul?retryWrites=true&w=majority"
mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    }
    );
}
process.on("SIGINT",function(){
    kapat("Uygulama Kapatıldı",function(){
        process.exit(0);
    }
    );
} 
);//sigint sinyali geldiğinde kapat fonksiyonu ile eşleştirir çağrılır
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı")
}
);