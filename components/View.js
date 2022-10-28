import React, { useState } from "react";
import { Button } from "evergreen-ui";
import Preview from "./Preview";
import Raw from "./Raw";
import { useData } from "../context/data_context";

const View = () => {
  const [view, setview] = useState("preview");
  const { field, features, tools, align, platforms } = useData();

  const schema = `
<img src="${field.image}" alt="${field.title}" />
<h1 align="${align}">${field.title}</h1>
<p align="${align}">${field.project}</p>
  

<br />

  
<h2 align="${align}">🏗️ Use To Build</h2>
<div align="${align}">
${tools.map((val) => {
  return `
<a href="https://github.com/" target="_blank">
<img
  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${val}-colored.svg"
  width="50px"
/>
</a>&nbsp
  `;
})}

</div>
  

<br />
  

<h2 align="${align}">🚀 Features</h2>
<ul align="${align}">
${features.map((value) => `<li>${value}</li>`)}
</ul>


<br />
  

<h2 align="${align}">👦 About Me</h2>
<p align="${align}">${field.project}</p>


<br />


<h2 align="${align}">🔗 Social Medias</h2>
<div align="${align}">
${platforms.map((val) => {
  return `
<a href="${val.link}" target="_blank">
<img
  src="https://img.icons8.com/color/144/${val.name.toLowerCase()}"
  width="50px"
/>
</a>&nbsp
  `;
})}
`;

  //download file
  const downloadMarkdownFile = () => {
    try {
      const a = document.createElement("a");
      const blob = new Blob([schema.replace(/,/g, "")]);
      a.href = URL.createObjectURL(blob);
      a.download = "Readme.md";
      a.click();
      toaster.success("Download Successfully");
    } catch (error) {
      toaster.danger("Somethi nd was wrong!");
    }
  };
  return (
    <article className=" w-[40%] ">
      <nav className=" w-full h-[70px] pl-8 border-b flex items-center justify-between">
        <div>
          <Button
            marginRight={16}
            appearance={view == "preview" && "default"}
            className=" !text-[16px] !h-[40px] capitalize"
            onClick={() => setview("preview")}
          >
            preview
          </Button>
          <Button
            marginRight={16}
            appearance={view == "raw" && "default"}
            className=" !text-[16px] !h-[40px] capitalize"
            onClick={() => setview("raw")}
          >
            raw
          </Button>
        </div>
        <Button
          marginRight={16}
          appearance="primary"
          className=" !text-[16px] !h-[40px] capitalize !bg-[#FF0063] !border-none"
          onClick={downloadMarkdownFile}
        >
          Download
        </Button>
      </nav>
      {view == "preview" ? (
        <Preview />
      ) : (
        <Raw schema={schema.replace(/,/g, "")} />
      )}
    </article>
  );
};

export default View;
