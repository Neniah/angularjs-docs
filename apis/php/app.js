$('#add').on('submit', function(){
  var that = $(this),
    contents = that.serilize();

    $.ajax({
      url: 'add.php',
      dataType: 'json',
      type: 'post',
      data: contents,
      success: function(data){
        if(data.success){
          alert('The result is' + data.success);
        }
      }
    });

  return false;
});
