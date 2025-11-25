import React from "react";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col gap-3 w-full max-w-md mx-auto hover:shadow-lg transition">
        
        {/* Note Title */}
        <p className="text-lg font-semibold text-gray-800">{note.title}</p>

        {/* Note Content */}
        <p className="text-gray-600 text-sm whitespace-pre-line">{note.content}</p>

        {/* Note Date */}
        <p className="text-gray-400 text-xs">{formattedDate}</p>

        {/* Delete Button */}
        <button
        className="self-end px-3 py-1.5 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition shadow-sm"
        onClick={() => onDelete(note.id)}
        >
        Delete
        </button>
    </div>
    );
}

export default Note