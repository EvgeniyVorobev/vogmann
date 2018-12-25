$(function(){
  var hidde_hidden_blocks_id = ['#rec80489341'];
  var arr = {
    "#Большая игра" : function(){
      $('#rec80489341').find("a[href^='#shiptor_widget']")[0].click();
    },
    "#Искусство любить" : function(){
      $('##rec80524520').find("a[href^='#shiptor_widget']")[0].click();
    }
  }


  $("a").each(function(index, el) {
   $.each(arr,function(i,v){
    console.log("$(el).attr('href')", $(el).attr('href'));
    console.log('i', i)
    $(el).attr('href') == i ? $(el).on('click',arr[i]) : ''
  })
 });

var hidingBlocks = function (id){ // прячем блок.
  for (var i = 0; i < id.length; i++) {
    $(id[i]).hide();
    console.log('Был спрятан блок с id: ', id[i]);
  } 
}

hidingBlocks(hidde_hidden_blocks_id);  
})
