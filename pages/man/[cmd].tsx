import fs from "fs";
import path from "path";
import { useEffect } from "react";
import BackButton from "../../components/shared/BackButton";
const TemplateComponent = (props) => {
  const { html } = props;
  if (!html)
    return (
      <>
        <BackButton prevLink="" />
      </>
    );
  const cleanup = `
  
    
      
    var linkElem =document.getElementsByTagName('a');
    for(var i=0;i<linkElem.length;i++){
      linkElem[i].href=      linkElem[i].href.replace(/htmlman[1-9]/gi,"man")
      linkElem[i].href=      linkElem[i].href.replace(/.html$/gi,"")
    }
    
    
    ;
    `;
  useEffect(() => {
    window.eval(cleanup);
    debugger;
  }, []);
  return (
    <>
      <BackButton />
      <div dangerouslySetInnerHTML={{ __html: html + cleanup }} />
    </>
  );
};
export async function getServerSideProps(context) {
  let {
    params: { cmd },
  } = context;
  let section = 1;
  let html = "";
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
