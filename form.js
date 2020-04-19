function doSubmit(){

       var frm = $('#actionform');
       var dat = JSON.stringify(frm.serializeArray());

       alert('test');
       $.post(
         frm.attr("action"),
         dat,
         function(data) {
           alert("Response: " + data);
         }
       );

}
      
