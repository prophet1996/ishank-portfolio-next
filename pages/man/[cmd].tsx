import fs from "fs";
import path from "path";
import { useRef, useEffect } from "react";

const TemplateComponent = (props) => {
  const ref = useRef();
  const { html } = props;
  const cleanup = `
  console.log("")
    setTimeout(()=>{
      
    var linkElem =document.getElementsByTagName('a');
    for(var i=0;i<linkElem.length;i++){
      debugger;
      linkElem[i].href=      linkElem[i].href.replace(/htmlman[1-9]/gi,"man")
      linkElem[i].href=      linkElem[i].href.replace(/.html$/gi,"")
    }
    

  },1000);
  `;
  useEffect(() => {
    window.eval(cleanup);
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html + cleanup }} ref={ref} />
    </>
  );
};
export async function getServerSideProps(context) {
  let {
    params: { cmd },
  } = context;
  let section = 1;
  let html;
  cmd = cmd.split(".")[0];
  while (section < 8) {
    const filePath = path.join(process.cwd(), `static/${cmd}.${section}.html`);
    try {
      html = fs.readFileSync(filePath, "utf8");
      break;
    } catch (e) {
      section++;
    }
  }
  return { props: { html } };
}

export default TemplateComponent;
// use like
//   <TemplateComponent template='./template.html'/>
