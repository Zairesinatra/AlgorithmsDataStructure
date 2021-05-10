// 二维数组
let zairesinatra = [];

zairesinatra[0] = [1, 2, 3, 4, 5 ];
zairesinatra[1] = [1, 2, 3, 4, 5 ];
zairesinatra[0] = [];
zairesinatra[1] = [];
zairesinatra[0][0] = 1;
zairesinatra[0][1] = 2;
zairesinatra[0][2] = 3;
zairesinatra[0][3] = 4;
zairesinatra[0][4] = 5;
zairesinatra[1][0] = 1;
zairesinatra[1][1] = 2;
zairesinatra[1][2] = 3;
zairesinatra[1][3] = 4;
zairesinatra[1][4] = 5;  

function printMatrix(zs){
    for(i=0;i<zs.length;i++){
        for(j=0;j<zs[i].length;j++){
            console.log(zs[i][j])
        }
    }
}
console.table(zairesinatra)