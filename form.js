function doSubmit(){

       var frm = $('#actionform');
       var dat = JSON.stringify(frm.serializeArray());

       
       $.post(
         frm.attr("action"),
         dat,
         function(data) {
           alert("Response: " + data);
         }
       );

}
      