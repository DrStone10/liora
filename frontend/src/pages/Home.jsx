import { useState, useEffect, useRef } from "react";
import api from "../api";
import Note from "../components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => setNotes(res.data))
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        setTitle("");
        setContent("");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col gap-10">

      {/* Notes Section */}
      <div className="relative">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Notes</h2>

  <div className="flex items-center gap-2">
    
    {/* Left Button */}
    <button
      onClick={scrollLeft}
      className=" hidden md:flex bg-white/80 backdrop-blur rounded-full p-3 shadow hover:bg-white transition z-10 scrollbar-hidden"
    >
      ◀
    </button>

    {/* Scrollable Notes */}
    <div
      ref={scrollRef}
      className="flex gap-4 snap-x snap-mandatory pb-4 overflow-x-auto flex-1 scrollbar-hidden"
    >
      {notes.map((note) => (
        <div key={note.id} className="flex-shrink-0 w-72 md:w-80 snap-start">
          <Note note={note} onDelete={deleteNote} />
        </div>
      ))}
    </div>

    {/* Right Button */}
    <button
      onClick={scrollRight}
      className="hidden md:flex bg-white/80 backdrop-blur rounded-full p-3 shadow hover:bg-white transition z-10 scrollbar-hidden"
    >
      ▶
    </button>

  </div>
</div>


      {/* Create Note Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a Note</h2>
        <form onSubmit={createNote} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-gray-700 font-medium mb-1">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="content" className="text-gray-700 font-medium mb-1">Content:</label>
            <textarea
              id="content"
              name="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-start px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;