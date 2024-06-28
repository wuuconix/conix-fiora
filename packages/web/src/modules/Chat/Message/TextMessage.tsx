import React from 'react';

import expressions from '@fiora/utils/expressions';
import markdown from '@fiora/utils/markdown'
import { TRANSPARENT_IMAGE } from '@fiora/utils/const';
import Style from './Message.less';

interface TextMessageProps {
    content: string;
}

function TextMessage(props: TextMessageProps) {
    // eslint-disable-next-line react/destructuring-assignment
    let content = props.content
        .replace(/#\(([\u4e00-\u9fa5a-z]+)\)/g, (r, e) => {
            const index = expressions.default.indexOf(e);
            if (index !== -1) {
                return `<img class="${Style.baidu} ${
                    Style.selecteAble
                }" src="${TRANSPARENT_IMAGE}" style="background-position: left ${-30 *
                    index}px;" onerror="this.style.display='none'" alt="${r}">`;
            }
            return r;
        });
    
    content = markdown(content) as string;

    return (
        <div
            className={Style.textMessage}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

export default TextMessage;
