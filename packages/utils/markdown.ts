import { marked } from 'marked';

/**
 * markdown解析
 * @param text 要解析的文本
 */
export default function markdown(text: string) {
    return marked.parse(text, { async: false });
}
