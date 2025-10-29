// localhostにDenoのHTTPサーバーを展開
Deno.serve(async (_req) => {
    const htmlText = await Deno.readTextFile("./public/index.html");

    return new Response(
        // Responseの第一引数にレスポンスのbodyを設置
        htmlText,
        // Responseの第二引数にヘッダ情報等の付加情報を設置
        {
            // レスポンスにヘッダ情報を付加
            headers: {
                // text/html形式のデータで、文字コードはUTF-8であること
                "Content-Type": "text/html; charset=utf-8",
            },
        },
    );
});
