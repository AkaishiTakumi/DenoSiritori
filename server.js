// localhostにDenoのHTTPサーバーを展開
Deno.serve((_req) => new Response("Hello Deno!"));
