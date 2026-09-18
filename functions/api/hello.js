export async function onRequest(context) {
  const data = {
    message: "سلام! این پاسخ مستقیم از بک‌اند کلودفلر است.",
    server_time: new Date().toISOString()
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
