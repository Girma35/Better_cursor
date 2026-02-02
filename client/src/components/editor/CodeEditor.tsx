import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { useState } from 'react'

const initialCode = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`

export function CodeEditor() {
    const [value, setValue] = useState(initialCode)

    return (
        <div className="flex-1 overflow-hidden h-full">
            <CodeMirror
                value={value}
                height="100%"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(val) => setValue(val)}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                }}
                style={{ fontSize: '14px' }}
            />
        </div>
    )
}
