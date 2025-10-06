/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
document.documentElement.innerHTML = html;
require("@testing-library/jest-dom");
eval(document.querySelector("script").textContent);

describe("Unit Test - saveNote()", () => {
  beforeEach(() => {
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
    document.getElementById("notes").innerHTML = "";
    notes = [];
  });

  test("should alert if title or content is empty", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    saveNote();
    expect(alertMock).toHaveBeenCalledWith("Please fill in both fields.");
    alertMock.mockRestore();
  });

  test("should save note when title and content are filled", () => {
    document.getElementById("note-title").value = "Test Title";
    document.getElementById("note-content").value = "Test Content";
    saveNote();
    expect(notes.length).toBe(1);
    expect(notes[0].title).toBe("Test Title");
  });
});
