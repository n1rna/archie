"use client";

import "@blocknote/core/fonts/inter.css";
import {
  BlockNoteView,
  useCreateBlockNote,
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
} from "@blocknote/react";
import "@blocknote/react/style.css";

export default function MDEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return (
    <div className="w-full bg-zinc-900">
      <div className="m-5 pb-32">
        <BlockNoteView
          editor={editor}
          theme={{
            light: lightDefaultTheme,
            dark: {
              ...darkDefaultTheme,
              colors: {
                editor: {
                  background: "#18181B",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
