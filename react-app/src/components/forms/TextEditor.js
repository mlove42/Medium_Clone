import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./texteditor.css";
const TextEditor = () => {
    const [value, setValue] = useState("");

    return (
        <div className="text-container">
            <div className="text-row">
                <div className="text-editor">
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        className="editor-input"
                    />
                </div>
                <div
                    className="text-preview"
                    dangerouslySetInnerHTML={{ __html: value }}
                />
            </div>
        </div>
    );
};

export default TextEditor;
