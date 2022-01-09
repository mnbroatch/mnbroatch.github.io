import React from "react";
import DialogueTree from "react-dialogue-tree";

export default {
  title: "Dialogueree",
  component: DialogueTree,
};

const defaultDialogue = `
  title:Start
  ---
  I am a line
  I am a second line
  I am a third line
  I am a fourth line
  I am a fifth line
  I am a sixth line
  I am the last line!
  ===
`
const dialogue = defaultDialogue

export const Basic = () => {
  return (
    <div className="story">
      <div className="dialogue-tree-container">
        <DialogueTree dialogue={dialogue} />
      </div>
    </div>
  );
}
