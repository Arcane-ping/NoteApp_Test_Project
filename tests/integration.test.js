/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
document.documentElement.innerHTML = html;
eval(document.querySelector("script").textContent);

describe("Integration Test", () => {
  beforeEach(() => {
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
    document.getElementById("notes").innerHTML = "";
    notes = [];
  });

  test("typing and saving displays note correctly", () => {
    document.getElementById("note-title").value = "Shopping";
    document.getElementById("note-content").value = "Buy milk";
    saveNote();
    const noteTitle = document.querySelector(".note h3").textContent;
    const noteContent = document.querySelector(".note p").textContent;
    expect(noteTitle).toBe("Shopping");
    expect(noteContent).toBe("Buy milk");
  });
});
