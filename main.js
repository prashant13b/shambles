$(document).ready(function(){
        $('.dropdown-item').click(function(){
            $('#slct').val($(this).text());
            $('#slct').html($(this).text());
        });
     });
     $("#what").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
});
  $(document).ready(function(){
  $('#what').val("");
  $('#what').focus();
  $('#search').click(function(){
    var cat=$('#slct').val();
    var query=$('#what').val();
    var basic=" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|wallywashis) intitle:\"index.of./\" ";
      if(cat == "Video"){
          var ext=" (mkv|mp4|mpg|avi|mov|wmv)";
          basic += "+inurl:(dl.|dl2.|dl3.|dl4.|dl5.|dl6.|dl7.|dl8.)"
      }
      else if(cat == "Compressed"){
         var ext=" (7z|rar|zip|bz2|gz|iso)";
         basic += "+inurl:(dl.|dl2.|dl3.|dl4.|dl5.|dl6.|dl7.|dl8.)"
      }
      else if(cat == "Ebook"){
          var ext=" (EPUB|MOBI|ODT|PDF|CBZ|CBR|CHM|DOC|DOCX|RTF|txt)";
          basic += "+inurl:(index-of.co.uk|index-of.es|dl.|dl2.|dl3.|dl4.|dl5.|dl6.|dl7.|dl8.)"
      }
      else if(cat == "Audio"){
          var ext=" (m4a|mp3|ac3|flac|ogg|wav|wma)"
          basic += "+inurl:(replicaradio.ro/audio|shadowsgovernment.com/public/music|tixorebel.ca/.mp3)"
      }
      else if(cat == "Pictures"){
          var ext=" (jpg|png|bmp|gif|psd|tif|tiff)";
          basic += "+inurl:(dl.|dl2.|dl3.|dl4.|dl5.|dl6.|dl7.|dl8.)"
      }
      else if(cat == "Software/Game"){
           var ext=" (apk|exe|iso|rar|tar|zip)";
           basic += "+inurl:(dl.|dl2.|dl3.|dl4.|dl5.|dl6.|dl7.|dl8.)"
      }
      else{
          var ext=" (mkv|mp4|mpg|avi|mov|wmv)";
          basic += "+inurl:(dl.|dl2.|dl3.|dl4.|dl5.|dl6.|dl7.|dl8.)"
      }
         if(query!=""){
        var src=query+ext+basic;
        var url="https://www.google.com/search?q="+encodeURIComponent(src);
        window.open(url,'_blank');
         }
    
});
}); 