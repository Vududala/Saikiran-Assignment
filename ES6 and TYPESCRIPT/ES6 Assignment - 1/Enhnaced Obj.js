function Order 	(id, title, price){   
    this.id = id;  
    this.title = title;   
    this.price = price;   
 }  
   
 order1 = new Order( 1 , "Sai Kiran" 	, 100 ) ;  
 order2 = new Order() ;  
 var order2   = Object .assign(order1) ;  
   
 getPrice  = function(){  
    console. log ( order1  .price) ;  
 }();  
   
 printOrder  = function  (){  
    console. log ( order1 .id  +"  "+ order1 .title + " " + order1.price ) ;  
    console. log ( order2 .id  +"  "+ order2 .title + "  " + order2.price ) ;  
}();
 