import React from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function MarkdownEditor() {
  const [value, setValue] = React.useState<string | undefined>('**Hello world!!!**');

  return (
    <div className='container'>
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}
