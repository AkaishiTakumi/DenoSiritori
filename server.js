// アクセス数を保持する変数をグローバル領域に定義
let count = 0;

// localhostにDenoのHTTPサーバーを展開
Deno.serve((_req) => {
    count++;
    return new Response(`Hello World! ${count}`);
});
