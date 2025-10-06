/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
document.documentElement.innerHTML = html;
eval(document.querySelector("script").textContent);

describe("System Test - Full Note Flow", () => {
  beforeEach(() => {
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
    document.getElementById("notes").innerHTML = "";
    notes = [];
  });

  test("add, edit, and delete note flow", () => {
    // Add
    document.getElementById("note-title").value = "Trip";
    document.getElementById("note-content").value = "Go to Nairobi";
    saveNote();
    let note = document.querySelector(".note");
    expect(note).not.toBeNull();

    // Edit
    const editBtn = note.querySelectorAll("button")[0];
    editBtn.click();
    document.getElementById("note-title").value = "Trip Updated";
    document.getElementById("note-content").value = "Go to Nairobi and Mombasa";
    saveNote();

    let updatedNote = document.querySelector(".note");
    expect(updatedNote.querySelector("h3").textContent).toBe("Trip Updated");

    // Delete
    const deleteBtn = updatedNote.querySelectorAll("button")[1];
    deleteBtn.click();
    const remainingNotes = document.querySelectorAll(".note");
    expect(remainingNotes.length).toBe(0);
  });
});
