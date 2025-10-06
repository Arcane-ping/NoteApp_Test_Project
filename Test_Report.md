# 🧪 Test Report — Functional Testing Lab (Note-Taking App)

## 1. Unit Test
- **Function Tested:** saveNote()
- **What It Checked:** Saving only works if both fields are filled.
- **Bugs Found:** ( - The Jest test couldn’t access the `notes` array because it’s defined inside the HTML script, not exported for testing.  
  - The use of `alert()` interrupts automated testing in Jest.  
  - In a browser, the function works correctly, but in Jest it fails because of variable scope.)

## 2. Integration & System Tests
- **Steps Tested:** Write → Save → Show → Edit → Delete
- **What Worked Well:** - Creating and saving a note displays it correctly on the page.  
  - UI updates instantly after saving or deleting a note.()
- **What Didn’t Work:** The **Edit** button deletes the note before you can modify it, causing data loss.  
  - There’s no confirmation message when saving or deleting a note, so users get no feedback. ()
- **Bugs Found:** ( 1. Editing removes a note immediately instead of letting the user update it.  
  2. No success or delete message after performing actions.  
  3. The `saveNote()` test fails in Jest due to variable scope.
)

## 3. Reflection
- **What was confusing:** (Setting up Jest and configuring `jsdom` to simulate browser behavior was tricky at first. Handling the `alert()` function inside automated tests also caused some confusion.)
- **How you figured out what to test:** (I started by manually using the app to see how each button behaves, then wrote Jest tests to confirm what I saw automatically.
- **What you learned:** I learned the difference between unit, integration, and system tests. I also learned how automated tests can reveal hidden issues in code that looks fine in the browser.)
- **What you learned:** (I started by manually using the app to see how each button behaves, then wrote Jest tests to confirm what I saw automatically.
- **What you learned:** I learned the difference between unit, integration, and system tests. I also learned how automated tests can reveal hidden issues in code that looks fine in the browser.)

MY SUMMARY
This lab helped me understand functional testing from both manual and automated perspectives. I learned to identify real issues such as poor function scoping and logical bugs in the edit feature, and to document them clearly using GitHub Issues.

**Date:** October 6, 2025  
**Student:** Bgr Karis  
**Cohort:** May 2025



💬 Message to Mr. Gerald

Dear Mr. Gerald,

I wanted to let you know that while working on this Functional Testing Lab, I used ChatGPT as a learning assistant to help me understand how to install Jest, set it up correctly, and use the related commands.

The process was challenging at first, but I have been practicing and learning step by step. I made sure to run all the tests myself, interpret the results, and complete the report in my own words.

Using ChatGPT helped me grasp concepts like unit, integration, and system testing more clearly, and I now feel more confident using Jest for functional testing.

Thank you for your guidance and for allowing us to explore tools that make learning more effective.

Sincerely,
Dennis

