// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const { query: { cmd = "" } = {} } = req;
  let data;
  let counter = 0;
  if (!cmd) return res.send(404);
  while (counter < 10) {
    counter++;
    data = await (await fetch(`http://man.he.net/man${counter}/${cmd}`)).text();

    if (!data.includes("No Match")) break;
  }
  data = data.replace(/href/gi, "__");

  res.statusCode = 200;
  res.headers = { ["Content-Type"]: "text/html" };
  res.send(data);
};
