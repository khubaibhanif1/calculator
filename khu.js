function calculator (value1,value2,type)
{
    if (type =='+'){
        console.log('Addition = '+ (value1 +value2));
    } else if (type=='-'){
        console.log('subtract = '+ (value1 -value2));

    }else if  (type=='*'){
        console.log('multiplication = '+ (value1 * value2));

    }else if  (type=='/'){
        console.log('Divison = '+ (value1 / value2));

    }else if  (type=='%'){
        console.log('percentage = '+ (value1 % value2));
    }else{
        console.log('Wrong Typr');

}
}

calculator(5,8,'+');
calculator(5,8,'-');
calculator(5,8,'*');
calculator(5,8,'/');
calculator(5,8,'%');