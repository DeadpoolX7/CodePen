

import ace from 'ace-builds';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai'; // Default theme

import React, { useRef,useState, useEffect } from 'react';
function Editor(){
    const [ html, setHtml ]= useState('');
    const [ css, setCss ]= useState('');
    const [ js, setJs ]= useState('');

    const outputRef = useRef(null);
    
   useEffect(() => {
        ace.config.set('basePath', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-noconflict');
    }, []); 

//code execution
    const executeCode= ()=>{
        const iframe = document.getElementById('output');
        const src =`
        <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
        `;
        iframe.srcdoc= src;

    }
  
  

    return(
        <>
<div className="flex flex-col h-screen">
<div className="flex flex-grow flex-wrap">
    <div className="w-full md:w-1/3">
        <div className='flex justify-center'>
        <img className='w-4 mr-2' src="https://imgs.search.brave.com/X4EnnG4234wDkxKf2AXyglsquIkOhyvZI6meFD_t4AU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw.svg" alt="" srcSet="" />
      <h2 className="">HTML</h2>
      </div>
      <AceEditor
        mode="html"
        theme="monokai"
        value={html}
        onChange={setHtml}
        name="html-editor"
        editorProps={{ $blockScrolling: true }}
        className="w-full"
      />
    </div>
    <div className="w-full md:w-1/3">
        <div  className='flex justify-center'>
        <img className='w-4 mr-2' src="" alt="" srcSet="https://imgs.search.brave.com/N1hgWKHudLbcpp0RBaetQ76JGZu8Djm_02jt8OagdHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg" />
      <h2 className="text-center">CSS</h2>
      </div>
      <AceEditor
        mode="css"
        theme="monokai"
        value={css}
        onChange={setCss}
        name="css-editor"
        editorProps={{ $blockScrolling: true }}
        className="w-full"
      />
    </div>
    <div className="w-full md:w-1/3">
        <div className='flex justify-center'>
        <img className='w-5 mr-2' src="" alt="" srcSet="https://imgs.search.brave.com/XVx3WyaXSz_IcTpX6PT7bANhw9PITQVPdyGkbUFS1b8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0ovamF2YXNj/cmlwdC1qcy1sb2dv/LTI5NDk3MDE3MDIt/c2Vla2xvZ28uY29t/LnBuZw" />
      <h2 className="text-center">JavaScript</h2>
      </div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={js}
        onChange={setJs}
        name="js-editor"
        editorProps={{ $blockScrolling: true }}
        className="w-full"
      />
    </div>
  </div>
  <div className="flex justify-center">
    <button onClick={executeCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Run
    </button>
  </div>
  <div className="flex-grow overflow-y-visible">
    <iframe id="output" title="Output" className="w-full h-full border-none" />
  </div>
</div>

      </>
    );
}
export default Editor;