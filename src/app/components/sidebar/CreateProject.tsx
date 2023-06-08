"use client";

import { useState } from "react";
import { addProjectItem } from "../../actions/CreateNewProject";

export default function CreateProject() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowCreateForm(!showCreateForm)}
        className="px-2 items-center w-[32px] h-[32px] rounded-md border border-gray-200"
      >
        +
      </button>
      {showCreateForm && (
        <form action={addProjectItem}>
          <input
            placeholder="Project title"
            type="text"
            className="border-gray-400 flex-1 border rounded-md w-full px-2"
            name="title"
          />
        </form>
      )}
    </>
  );
}
