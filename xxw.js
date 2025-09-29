let body = $response.body;
if (body) {
  const regex = />学制：</th><td>(.*?)<\/td><th>/;
  body = body.replace(regex, match => {
    const content = match.replace(/\udbd3\udf38\u0020\udbcc\udddb/g, "4年");
    return content;
  });
  $done({ body });
} else {
  $done();
}
