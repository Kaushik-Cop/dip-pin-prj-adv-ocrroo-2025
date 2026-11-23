## Persona

Write a brief persona of your user using design thinking. You can use the following template:

- **Name**: Danny Bald
- **Age**: 20
- **Occupation**: Diploma of IT student
- **Goals**: Danny wants an easy-to-use tool that can take text from a selected video frame.
 He wants to choose a video, enter a time in seconds, view the frame, and get the extracted OCR text.
- **Frustrations**: Videos not audibly explaining how to write code exactly
- **Motivations**: Want to be a programmer
- **Technology**: Video player
- **Experience**: Danny is learning programming and regularly watches recorded coding lessons, demonstrations and tutorial videos.
- Danny lost most of his sight as a teenager and uses NVDA to read websites and his code.
- He is comfortable with basic Python.


Notice: This project focuses on assistive technology for people with disabilities. It is important to treat the topic with respect and sensitivity.

Consider:

- People are not defined by their disabilities.
- People with disabilities are not a homogeneous group.

Your persona should reflect the diversity of people with disabilities and their experiences.

## User Journey

What is the user journey? What are the steps the user takes to achieve their goals?

-Step 1: Danny launches the OCR Video Reader and uses the keyboard to choose the lesson video. His screen reader announces both the name and duration of the video.
-Step 2: He inputs the time in seconds into a designated field. If he enters anything invalid (such as letters, a negative number or a time exceeding the video's length), an error message is announced and the focus returns to the input field.
-Step 3: He presses Enter to capture the frame. The preview of the frame appears enlarged (to accommodate his remaining vision), and the screen reader announces, "Frame captured at 4:00. Text extracted, 9 lines."
-Step 4: The focus shifts to the extracted text, displayed as real, selectable text in a large, high-contrast monospace font. He reads it line by line with the assistance of his screen reader.

## UI Interaction Patterns
What are the UI interaction patterns you will use in your project?
- Text, not images: OCR output is shown as plain, selectable text, so it can be read, searched and copied.
- Personalisation settings panel: text size, dark/high-contrast theme. Settings are saved so they persist between sessions.

