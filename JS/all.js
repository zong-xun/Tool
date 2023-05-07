$('.btn_ipv6').on('click',function(){
    let ipv6_num = $('.ipv6').val().toString();
    let hex_ary = [
        {
            name : '1',
            num : '0001'
        },
        {
            name : '2',
            num : '0010'
        },
        {
            name : '3',
            num : '0011'
        },
        {
            name : '4',
            num : '0100'
        },
        {
            name : '5',
            num : '0101'
        },
        {
            name : '6',
            num : '0110'
        },
        {
            name : '7',
            num : '0111'
        },
        {
            name : '8',
            num : '1000'
        },
        {
            name : '9',
            num : '1001'
        },
        {
            name : 'A',
            num : '1010'
        },
        {
            name : 'B',
            num : '1011'
        },
        {
            name : 'C',
            num : '1100'
        },
        {
            name : 'D',
            num : '1101'
        },
        {
            name : 'E',
            num : '1110'
        },
        {
            name : 'F',
            num : '1111'
        },
    ];
    let first_hex_obj = {};
    let second_hex_obj = {};
    let str = ipv6_num;
    let first_num = str.substring(0,1);
    let second_num = str.substring(1,2);
    let first_convert_num = '';
    let second_convert_num = '';
    let ipv6_end ='';
    //二進位倒數第二碼傳換
    const replaceStr2 = (str, index, char) => {
        return str.substring(0, index) + char + str.substring(index + 1);
    }
    const replaceStr3 = (str, fisd_1,second_2) => {
        return "fe80::" + fisd_1 + second_2 + str.substring(2,4) +":"+ str.substring(4,6)+"ff:fe"+str.substring(6,8)+":"+str.substring(8,12);
    }
     //index = 1 取出16進位 index= 2 轉換後的二進位後找出16進位
    const take_out_fn = (index) => {
        hex_ary.map((item) => {
            if(index == 1){
                if(item.name == first_num){
                    first_hex_obj = item ;
                }
                if(item.name == second_num){
                    second_hex_obj = item ;
                }
            } else if(index = 2){
                if(item.num == first_convert_num){
                    first_hex_obj = item ;
                }
                if(item.num == second_convert_num){
                    second_hex_obj = item ;
                }
            }
        });
    }
    //取出前兩碼
    take_out_fn(1);
    //二進位倒數第二碼傳換
    //第一碼的二進位轉換
    if(first_hex_obj.num.substring(2,3) == '1'){
        first_convert_num = replaceStr2(first_hex_obj.num,2,'0');
    } else {
        first_convert_num = replaceStr2(first_hex_obj.num,2,'1');
    }
    //第二碼的二進位轉換
    if(second_hex_obj.num.substring(2,3) == '1'){
        second_convert_num = replaceStr2(second_hex_obj.num,2,'0');
    } else {
        second_convert_num = replaceStr2(second_hex_obj.num,2,'1');
    }
    //轉換後的二進位後找出16進位
    take_out_fn(2);
    //最後組合
    ipv6_end = replaceStr3(str,first_hex_obj.name,second_hex_obj.name);
    console.log(ipv6_end);
    $('.IPV6_TEXT').html('<h3>IPV6: <span class="badge bg-secondary">'+ipv6_end+'</span></h3>');
});