var first = 0;
$(function(){
    first++;
    $.ajax({
        url: "/purchasing/all",
        data:{"page":1},
        dataTye: "json",
        type: "get",
        success: function (data) {
            if (first++ > 1)
                location.reload();
        }
    });


    var flag = $("#checkAll").checked;
    flag = true;
    $("#checkAll").click(function(){
        var checks = $("input[name=ck]");
        if (flag){
            for(var i=0;i < checks.length;i++){
                checks[i].checked = true;
            }
            flag = false;
        } else {
            for(var i=0;i < checks.length;i++){
                checks[i].checked = false;
            }
            flag = true;
        }
    });

    $("#deleteAll").click(function(){
        var deleteFlag =0;
        var str ="";
        var cks = $("input[name=ck]");
        for (var i = 0; i < cks.length; i++) {
            if(cks[i].checked){
                deleteFlag++;
                str += cks[i].value + ",";
            }
        }
        if (deleteFlag > 0){
            $("#myModal").modal('show');
            $("#myModalLabel").html("确定要删除"+deleteFlag+"条信息么").css("font-family","Microsoft YaHei");
        } else {
            $("#myModal").modal('show');
            $("#myModalLabel").html("至少选择一个信息").css("font-family","Microsoft YaHei");
        }

    });


    $("#add").click(function () {
        window.location.href = "/purchasing/goAdd";
    })






});


function deleteOne(id) {
    $.ajax({
        url :"/purchasing/delete/"+id,
        type: "post",
        data: {_method:"DELETE"},
        dataType: "json",
        success: function (data) {
            if (data){
                //alert(2);
                $("#myModal").modal('show');
                $("#myModalLabel").html("删除成功").css("font-family","Microsoft YaHei");
                /*                  setTimeout(function(){
                                      $("#myModal").modal('hide');
                                  },1200);*/
                //window.location.href = "/customer/all";
            }
        }
    });

};
function showUpdate(obj) {
    var id = $(obj).attr("id");
    alert(id);
    $.ajax({
        url:"/purchasing/getPurchasingById/"+id,
        type:"get",
        dateType: "json",
        success:function (data) {
            console.debug(data);
            var purchasingMenuId = data.data[0].purchasingMenuId;
            var storeMedicineId = data.data[0].storeMedicineId;
            var purchasingPrice = data.data[0].purchasingPrice;
            var amount = data.data[0].amount;
            var totalPrice = data.data[0].totalPrice;
            $("#purchasing_id").val(id);
            $("#purchasing_purchasingMenuId").val(purchasingMenuId);
            $("#purchasing_storeMedicineId").val(storeMedicineId);
            $("#purchasing_purchasingPrice").val(purchasingPrice);
            $("#purchasing_amount").val(amount);
            $("#purchasing_totalPrice").val(totalPrice);
        }
    });
}
function update() {
    var id =  $("#purchasing_id").val();
    var purchasingMenuId =  $("#purchasing_purchasingMenuId").val();
    var storeMedicineId = $("#purchasing_storeMedicineId").val();
    var purchasingPrice =   $("#purchasing_purchasingPrice").val();
    var amount = $("#purchasing_amount").val();
    var totalPrice = $("#purchasing_totalPrice").val();

    $.ajax({
        url: "/purchasing/update?",
        dataType: "json",
        type: "post",
        data: {_method:"PUT",id:id,purchasingMenuId:purchasingMenuId,storeMedicineId:storeMedicineId,purchasingPrice:purchasingPrice,amount:amount,totalPrice:totalPrice},
        success: function (data) {
            $("#myModal").modal('show');
            $("#myModalLabel").html("修改成功").css("font-family","Microsoft YaHei");
        }

    });
}

function myFlush() { location.reload();};