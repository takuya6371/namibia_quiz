export function generate_randomx(count: number) {
    //生成した乱数を格納する配列を初期化
    var generated = new Array();
    //生成した乱数を格納している配列の長さ（生成した乱数の数）
    var generatedCount = generated.length;
    //パラメータ count の数だけ Math.random()で乱数を発生
    for(var i = 0 ; i < count; i++){   
      var candidate = Math.floor(Math.random() * count);
      //今まで生成された乱数と同じ場合は再度乱数を発生
      for(var j = 0; j < generatedCount; j++) {  // このコメントは無視>
        if(candidate == generated[j]){
          candidate = Math.floor(Math.random() * count);
          j= -1;
        }
      }
      generated[i] = candidate;  
      generatedCount++;
    }
    return generated
};