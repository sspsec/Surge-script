let body = $response.body;
if (body) {
  // 使用正则表达式匹配学制字段并替换
  const regex = />学制：</th><td>(.*?)<\/td><th>/g;
  body = body.replace(regex, match => {
    // 替换特定的 Unicode 序列
    return match.replace(/\udbd3\udf38\u0020\udbcc\udddb/g, "4年");
  });
  $done({ body });
} else {
  $done();
}
