import { marked } from 'marked';
import hljs from 'highlight.js';

/**
 * markdown解析
 * @param text 要解析的文本
 */
export default function markdown(text: string) {
    return hljs.highlightAuto(marked.parse(text, { async: false }) as string).value ;
}
