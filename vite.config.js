import {defineConfig} from 'vite';
export default defineConfig(({command,isPreview})=>({base:command==='serve'&&!isPreview?'/':'/dontmove/',server:{watch:{ignored:['**/work/**','**/outputs/**']}}}));
